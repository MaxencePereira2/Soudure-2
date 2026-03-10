import { useState, useEffect, useCallback } from "react";
import { Home, History, ShieldAlert, Zap, Settings2, FlaskConical, Layers, Compass, Award, Wrench, Table2, GraduationCap, Rocket, ChevronLeft, ChevronRight, Menu, X, Flame } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil", icon: Home },
  { id: "histoire", label: "Histoire", icon: History },
  { id: "securite", label: "Securite & EPI", icon: ShieldAlert },
  { id: "smaw", label: "SMAW / Electrode", icon: Zap },
  { id: "migmag", label: "MIG / MAG", icon: Settings2 },
  { id: "tig", label: "TIG / GTAW", icon: Flame },
  { id: "autres", label: "Autres Procedes", icon: Layers },
  { id: "metallurgie", label: "Metallurgie", icon: FlaskConical },
  { id: "preparation", label: "Preparation", icon: Compass },
  { id: "positions", label: "Positions", icon: Compass },
  { id: "normes", label: "Normes & Qualite", icon: Award },
  { id: "outils", label: "Outils & Outillage", icon: Wrench },
  { id: "tables", label: "Tables & Fiches", icon: Table2 },
  { id: "sigma", label: "Module SIGMA", icon: GraduationCap },
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
      {/* Mobile toggle */}
      <button
        data-testid="mobile-menu-toggle"
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#1a1d22] border border-white/10 p-2 text-white hover:text-[#e8823a] transition-colors duration-200"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        data-testid="main-sidebar"
        className={`fixed top-0 left-0 h-screen z-40 bg-[#0f1012] border-r border-white/5 transition-all duration-300 flex flex-col
          ${collapsed ? "w-[60px]" : "w-[280px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo area */}
        <div className={`flex items-center gap-3 px-4 py-6 border-b border-white/5 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 bg-[#e8823a] flex items-center justify-center flex-shrink-0">
            <Flame size={18} className="text-white" />
          </div>
          {!collapsed && (
            <div className="animate-slide-in-left">
              <div className="font-['Bebas_Neue'] text-xl tracking-wider text-white uppercase">Soudure</div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase">Formation CTT SIGMA</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-0.5 px-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  data-testid={`nav-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`sidebar-link w-full flex items-center gap-3 px-3 py-2.5 text-left border-l-2 transition-colors duration-200 font-medium text-sm
                    ${isActive
                      ? "active text-white border-[#e8823a] bg-[#e8823a]/8"
                      : "text-gray-500 border-transparent hover:text-white hover:bg-white/5 hover:border-[#e8823a]/50"
                    }
                    ${collapsed ? "justify-center px-0 border-l-0" : ""}
                  `}
                  title={item.label}
                >
                  <Icon size={18} className={`sidebar-icon flex-shrink-0 ${isActive ? "text-[#e8823a]" : ""}`} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Collapse toggle (desktop only) */}
        <button
          data-testid="sidebar-collapse-toggle"
          className="hidden lg:flex items-center justify-center py-3 border-t border-white/5 text-gray-600 hover:text-white transition-colors duration-200"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* Footer */}
        {!collapsed && (
          <div className="px-4 py-3 border-t border-white/5">
            <a href="https://www.alesium.fr" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-600 hover:text-[#e8823a] tracking-wider uppercase transition-colors duration-200">
              Alesium.fr
            </a>
          </div>
        )}
      </aside>
    </>
  );
};
