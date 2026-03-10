import { useState, useEffect } from "react";
import "@/App.css";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import HistoirePage from "./pages/HistoirePage";
import SecuritePage from "./pages/SecuritePage";
import SmawPage from "./pages/SmawPage";
import MigMagPage from "./pages/MigMagPage";
import TigPage from "./pages/TigPage";
import AutresProcedesPage from "./pages/AutresProcedesPage";
import MetallurgiePage from "./pages/MetallurgiePage";
import PreparationPage from "./pages/PreparationPage";
import PositionsPage from "./pages/PositionsPage";
import NormesPage from "./pages/NormesPage";
import OutilsPage from "./pages/OutilsPage";
import TablesPage from "./pages/TablesPage";
import ModuleSigmaPage from "./pages/ModuleSigmaPage";
import EvolutionsPage from "./pages/EvolutionsPage";

const PAGES = {
  accueil: HomePage,
  histoire: HistoirePage,
  securite: SecuritePage,
  smaw: SmawPage,
  migmag: MigMagPage,
  tig: TigPage,
  autres: AutresProcedesPage,
  metallurgie: MetallurgiePage,
  preparation: PreparationPage,
  positions: PositionsPage,
  normes: NormesPage,
  outils: OutilsPage,
  tables: TablesPage,
  sigma: ModuleSigmaPage,
  evolutions: EvolutionsPage,
};

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return hash && PAGES[hash] ? hash : "accueil";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && PAGES[hash]) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    window.location.hash = pageId;
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = PAGES[currentPage] || HomePage;

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      <PageComponent onNavigate={handleNavigate} />
    </Layout>
  );
}

export default App;
