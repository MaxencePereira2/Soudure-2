import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { ArrowUp } from "lucide-react";

export const Layout = ({ children, currentPage, onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setShowBackToTop(winScroll > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="noise-overlay min-h-screen relative">
      {/* Reading progress */}
      <div className="reading-progress" style={{ width: `${scrollProgress}%` }} data-testid="reading-progress" />

      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />

      {/* Main content */}
      <main className="lg:ml-[280px] min-h-screen relative z-10" data-testid="main-content">
        {children}
      </main>

      {/* Back to top */}
      {showBackToTop && (
        <button
          data-testid="back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#e8823a] text-white p-3 shadow-[0_0_20px_rgba(232,130,58,0.4)] hover:shadow-[0_0_30px_rgba(232,130,58,0.6)] transition-shadow duration-300"
          aria-label="Retour en haut"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};
