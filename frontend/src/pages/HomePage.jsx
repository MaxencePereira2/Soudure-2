import { useEffect, useRef } from "react";
import { ShieldAlert, Zap, Settings2, Flame, History, Layers, FlaskConical, Wrench, GraduationCap, Rocket, ArrowRight } from "lucide-react";

const SPARKS_COUNT = 30;

const SparkEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: SPARKS_COUNT }).map((_, i) => (
        <div
          key={i}
          className="spark"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 30}%`,
            "--duration": `${1.5 + Math.random() * 2}s`,
            "--delay": `${Math.random() * 3}s`,
            "--drift": `${(Math.random() - 0.5) * 40}px`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}
        />
      ))}
    </div>
  );
};

const CHAPTERS = [
  { id: "histoire", icon: History, title: "Histoire de la Soudure", desc: "Des forgerons antiques au soudage laser" },
  { id: "securite", icon: ShieldAlert, title: "Securite & EPI", desc: "Equipements obligatoires et regles d'atelier" },
  { id: "smaw", icon: Zap, title: "SMAW / Electrode Enrobee", desc: "Arc electrique et electrode fusible" },
  { id: "migmag", icon: Settings2, title: "MIG / MAG (GMAW)", desc: "Fil continu et protection gazeuse" },
  { id: "tig", icon: Flame, title: "TIG / GTAW", desc: "Tungstene non fusible, precision maximale" },
  { id: "autres", icon: Layers, title: "Autres Procedes", desc: "Laser, friction, plasma, resistance" },
  { id: "metallurgie", icon: FlaskConical, title: "Metallurgie Utile", desc: "ZAT, aciers, aluminium, traitements" },
  { id: "outils", icon: Wrench, title: "Outils & Outillage", desc: "Meuleuses, scies, presses, controle" },
  { id: "sigma", icon: GraduationCap, title: "Module SIGMA 20H", desc: "Programme complet des 10 seances" },
  { id: "evolutions", icon: Rocket, title: "Evolutions & Futur", desc: "Robotique, IA, realite virtuelle" },
];

export default function HomePage({ onNavigate }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      requestAnimationFrame(() => {
        el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }
  }, []);

  return (
    <div data-testid="home-page">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1720036236697-018370867320?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx3ZWxkZXIlMjBpbmR1c3RyaWFsJTIwZGFyayUyMGZhY3RvcnklMjBzcGFya3N8ZW58MHx8fHwxNzczMTcxNDU0fDA&ixlib=rb-4.1.0&q=85"
            alt="Soudeur en action dans un atelier industriel"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-[#0f1012]/70 to-transparent" />
        </div>

        {/* Sparks */}
        <SparkEffect />

        {/* Glow */}
        <div className="hero-gradient absolute inset-0" />

        {/* Content */}
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-6 py-32 lg:px-12">
          <div className="mb-6">
            <span className="inline-block text-[#e8823a] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Formation professionnelle — CTT SIGMA Clermont-Ferrand
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-normal leading-[0.95] text-white mb-8">
            La soudure :<br />
            <span className="text-[#e8823a]">l'art d'assembler</span><br />
            le monde
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 font-light">
            Module de 20 heures concu pour les debutants. Des fondamentaux metallurgiques aux gestes techniques,
            en passant par la securite et les normes : tout ce qu'il faut savoir pour commencer a souder
            avec confiance et precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              data-testid="start-learning-btn"
              onClick={() => onNavigate("securite")}
              className="bg-[#e8823a] text-white uppercase tracking-[0.2em] font-bold px-8 py-4 text-sm shadow-[0_0_20px_rgba(232,130,58,0.3)] hover:shadow-[0_0_30px_rgba(232,130,58,0.5)] transition-shadow duration-300 flex items-center gap-3"
            >
              Commencer la formation
              <ArrowRight size={16} />
            </button>
            <button
              data-testid="see-program-btn"
              onClick={() => onNavigate("sigma")}
              className="border border-white/20 text-white uppercase tracking-[0.2em] px-8 py-4 text-sm hover:border-[#e8823a] hover:text-[#e8823a] transition-colors duration-300"
            >
              Voir le programme
            </button>
          </div>

          {/* Credits */}
          <div className="mt-16 flex items-center gap-6 opacity-50">
            <img
              src="https://www.alesium.fr/assets/logos/logo-alesium.png"
              alt="Logo Alesium"
              className="h-8 brightness-200 invert"
            />
            <span className="text-xs text-gray-500 tracking-wider">Par Alesium — Conseil en industrialisation</span>
          </div>
        </div>
      </section>

      {/* CHAPTERS GRID */}
      <section className="px-6 lg:px-12 py-24 max-w-7xl mx-auto" data-testid="chapters-section">
        <div className="mb-16">
          <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold">Sommaire</span>
          <h2 className="text-4xl sm:text-5xl text-white mt-3">Chapitres du module</h2>
          <div className="w-16 h-0.5 bg-[#e8823a] mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CHAPTERS.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <button
                key={ch.id}
                data-testid={`chapter-card-${ch.id}`}
                onClick={() => onNavigate(ch.id)}
                className="group bg-[#1a1d22] border border-white/5 p-6 text-left hover:border-[#e8823a]/40 transition-colors duration-300 relative overflow-hidden"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#e8823a]/5 rounded-bl-full group-hover:bg-[#e8823a]/10 transition-colors duration-300" />
                <Icon size={24} className="text-[#e8823a] mb-4" />
                <h3 className="text-lg text-white mb-2 font-['Bebas_Neue'] tracking-wider">{ch.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{ch.desc}</p>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-[#e8823a] mt-4 transition-colors duration-200" />
              </button>
            );
          })}
        </div>
      </section>

      {/* WORKSHOP IMAGES */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold">L'atelier</span>
          <h2 className="text-4xl text-white mt-3">Realisations & savoir-faire</h2>
          <div className="w-16 h-0.5 bg-[#e8823a] mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { src: "https://www.alesium.fr/assets/projets/1-optimisation-du-temps-de-fabrication-descalier-en-acier/1a.png", alt: "Escalier en acier optimise - Alesium" },
            { src: "https://www.alesium.fr/assets/projets/4-conception-et-fabrication-dune-cintreuse-galets-manuelle/1d.jpeg", alt: "Cintreuse a galets manuelle - Alesium" },
            { src: "https://www.alesium.fr/assets/projets/5-preuve-de-concept-impression-3d-metal-par-conduction/1e.JPG", alt: "Impression 3D metal - Alesium" },
            { src: "https://www.alesium.fr/assets/projets/3-dveloppement-dun-cadre-de-vtt-de-descente/1c.png", alt: "Cadre VTT acier CroMo - Alesium" },
          ].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden group border border-white/5">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 lg:px-12 py-12 mt-12" data-testid="footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-['Bebas_Neue'] text-xl text-white tracking-wider">Soudure — Formation</div>
            <p className="text-xs text-gray-600 mt-1">Module 20h — CTT SIGMA Clermont-Ferrand</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.alesium.fr" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-[#e8823a] transition-colors">Alesium.fr</a>
            <a href="https://www.gracz.fr" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-[#e8823a] transition-colors">Gracz.fr</a>
            <span className="text-xs text-gray-600">Par Maxence Pereira</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
