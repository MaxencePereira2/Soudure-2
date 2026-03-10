import { useState, useEffect, useCallback } from "react";
import { Home, History, ShieldAlert, Zap, Settings2, Flame, Layers, FlaskConical, Compass, Award, Wrench, Table2, GraduationCap, Rocket, ChevronLeft, ChevronRight, Menu, X, PenTool, Scissors, Waves, FoldVertical, Box, Grid3X3, Thermometer } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "histoire", label: "Histoire de la Soudure", icon: History },
  { id: "securite", label: "Securite & EPI", icon: ShieldAlert },
  { id: "cao", label: "CAO pour Soudure", icon: PenTool },
  { id: "decoupe_laser", label: "Decoupe Laser", icon: Scissors },
  { id: "decoupe_plasma", label: "Decoupe Plasma", icon: Waves },
  { id: "pliage", label: "Pliage CNC", icon: FoldVertical },
  { id: "preparation", label: "Preparation & Assemblage", icon: Compass },
  { id: "marbres", label: "Principe des Marbres", icon: Grid3X3 },
  { id: "mecano", label: "Mecano-Assemblage", icon: Box },
  { id: "smaw", label: "SMAW / Electrode", icon: Zap },
  { id: "migmag", label: "MIG / MAG", icon: Settings2 },
  { id: "tig", label: "TIG / GTAW", icon: Flame },
  { id: "autres", label: "Autres Procedes", icon: Layers },
  { id: "positions", label: "Positions de Soudage", icon: Compass },
  { id: "deformation", label: "Deformation des Pieces", icon: Thermometer },
  { id: "metallurgie", label: "Metallurgie Utile", icon: FlaskConical },
  { id: "normes", label: "Normes & Qualite", icon: Award },
  { id: "outils", label: "Outils & Outillage", icon: Wrench },
  { id: "tables", label: "Tables & Fiches", icon: Table2 },
  { id: "formation", label: "Module Formation 20H", icon: GraduationCap },
  { id: "evolutions", label: "Evolutions & Futur", icon: Rocket },
];

export const Sidebar = ({ currentPage, onNavigate }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = useCallback((id) => {
    onNavigate(id);
    setMobileOpen(false);
  }, [onNavigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        data-testid="mobile-menu-toggle"
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#1a1d22] border border-white/10 p-2 text-white hover:text-[#e8823a] transition-colors duration-200"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileOpen && <div className="sidebar-overlay lg:hidden" onClick={() => setMobileOpen(false)} />}

      <aside
        data-testid="main-sidebar"
        className={`fixed top-0 left-0 h-screen z-40 bg-[#0f1012] border-r border-white/5 transition-all duration-300 flex flex-col
          ${collapsed ? "w-[60px]" : "w-[280px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className={`flex items-center gap-3 px-4 py-5 border-b border-white/5 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 bg-[#e8823a] flex items-center justify-center flex-shrink-0">
            <Flame size={18} className="text-white" />
          </div>
          {!collapsed && (
            <div className="animate-slide-in-left">
              <div className="font-['Bebas_Neue'] text-xl tracking-wider text-white uppercase">Soudure</div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase">Formation professionnelle</div>
            </div>
          )}
        </div>

        <ScrollArea className="flex-1 py-3">
          <nav className="space-y-0.5 px-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  data-testid={`nav-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`sidebar-link w-full flex items-center gap-3 px-3 py-2 text-left border-l-2 transition-colors duration-200 font-medium text-xs
                    ${isActive
                      ? "active text-white border-[#e8823a] bg-[#e8823a]/8"
                      : "text-gray-500 border-transparent hover:text-white hover:bg-white/5 hover:border-[#e8823a]/50"
                    }
                    ${collapsed ? "justify-center px-0 border-l-0" : ""}
                  `}
                  title={item.label}
                >
                  <Icon size={16} className={`sidebar-icon flex-shrink-0 ${isActive ? "text-[#e8823a]" : ""}`} />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </ScrollArea>

        <button
          data-testid="sidebar-collapse-toggle"
          className="hidden lg:flex items-center justify-center py-3 border-t border-white/5 text-gray-600 hover:text-white transition-colors duration-200"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {!collapsed && (
          <div className="px-4 py-3 border-t border-white/5 space-y-1">
            <a href="https://www.alesium.fr" target="_blank" rel="noopener noreferrer" className="block text-[10px] text-gray-600 hover:text-[#e8823a] tracking-wider uppercase transition-colors duration-200">Alesium.fr</a>
            <a href="https://www.gracz.fr" target="_blank" rel="noopener noreferrer" className="block text-[10px] text-gray-600 hover:text-[#e8823a] tracking-wider uppercase transition-colors duration-200">Gracz.fr</a>
            <a href="https://claustra.gracz.fr" target="_blank" rel="noopener noreferrer" className="block text-[10px] text-gray-600 hover:text-[#e8823a] tracking-wider uppercase transition-colors duration-200">Claustra.gracz.fr</a>
          </div>
        )}
      </aside>
    </>
  );
};
