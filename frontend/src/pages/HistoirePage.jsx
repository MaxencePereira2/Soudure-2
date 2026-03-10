import { Clock } from "lucide-react";

const TIMELINE = [
  { year: "Antiquite", title: "Soudage a la forge", desc: "Les forgerons assemblent le metal par chauffage et martelage. Epees, armures, outils agricoles : la forge est le premier procede d'assemblage metallique de l'humanite." },
  { year: "1802", title: "Decouverte de l'arc electrique", desc: "Vasily Petrov demontre l'arc electrique. Ce phenomene deviendra la base de la majorite des procedes de soudage modernes." },
  { year: "1881", title: "Premier soudage a l'arc", desc: "Auguste de Meritens realise le premier soudage a l'arc electrique industriel sur des plaques de plomb pour la fabrication de batteries." },
  { year: "1885-1890", title: "Electrodes metalliques", desc: "Nikolay Slavianov et C.L. Coffin developpent independamment le soudage a l'electrode metallique, ancetre direct du SMAW." },
  { year: "1907", title: "Electrode enrobee", desc: "Oscar Kjellberg brevete l'electrode enrobee, revolution majeure qui protege le bain de fusion et stabilise l'arc. Naissance du SMAW moderne." },
  { year: "1914-1918", title: "Premiere Guerre mondiale", desc: "La soudure remplace le rivetage dans la construction navale et la reparation militaire. Premier usage industriel massif." },
  { year: "1920-1930", title: "Normalisation et recherche", desc: "Creation des premieres normes de soudage. Developpement du soudage sous flux (SAW) et des premiers postes a courant alternatif." },
  { year: "1939-1945", title: "Seconde Guerre mondiale", desc: "La soudure devient strategique : construction de Liberty Ships (2 710 navires soudes), chars, avions. L'industrie americaine forme des milliers de soudeurs, dont beaucoup de femmes (Rosie the Riveter)." },
  { year: "1948", title: "Invention du MIG", desc: "Le procede MIG (Metal Inert Gas) est developpe au Battelle Memorial Institute. Fil continu + gaz inerte = productivite decuplee." },
  { year: "1953", title: "Procede MAG", desc: "Adaptation du MIG avec gaz actifs (CO2) : le MAG nait pour l'acier, moins couteux que le MIG pur argon." },
  { year: "1941-1960", title: "Developpement du TIG", desc: "Brevete par Russell Meredith (1941), le TIG se generalise dans l'aerospatiale et le nucleaire. Precision et qualite sans egales." },
  { year: "1960-1970", title: "Soudage plasma et laser", desc: "Le soudage plasma (PAW) offre une concentration d'energie superieure. Les premiers essais de soudage laser ouvrent une nouvelle ere." },
  { year: "1980-2000", title: "Robotisation et normes ISO", desc: "Les robots de soudage envahissent l'automobile. Les normes ISO 9606, ISO 3834, ISO 5817 structurent la qualite a l'echelle mondiale." },
  { year: "2000-2020", title: "Numerique et simulation", desc: "Postes synergiques intelligents, soudage orbital automatise, simulation par elements finis, controle CND avance." },
  { year: "Aujourd'hui", title: "Industrie 4.0 et au-dela", desc: "IA, cobotique, realite virtuelle, soudage additif (WAAM), tracabilite IoT. La soudure reste le procede d'assemblage le plus utilise au monde." },
];

export default function HistoirePage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="histoire-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2">
          <Clock size={14} /> Chapitre 1
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Histoire de la soudure</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">
          La soudure n'est pas qu'un procede technique : c'est une technologie qui a litteralement construit le monde moderne.
          Des pipelines transoceaniques aux centrales nucleaires, des gratte-ciels aux fusees spatiales, rien de tout cela
          n'existerait sans la capacite d'assembler des metaux de maniere permanente. Voici son histoire.
        </p>
      </div>

      {/* Image */}
      <div className="mb-16 aspect-video overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1615219023549-5c9abdb7df9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGRlZm9ybWF0aW9uJTIwd2FycGluZyUyMHN0ZWVsJTIwd2VsZGluZyUyMGhlYXR8ZW58MHx8fHwxNzczMTczMjAzfDA&ixlib=rb-4.1.0&q=85" alt="Soudeur au travail - histoire de la soudure" className="w-full h-full object-cover" />
      </div>

      {/* Timeline */}
      <div className="relative pl-8 space-y-12" data-testid="timeline">
        <div className="timeline-line" />
        {TIMELINE.map((item, i) => (
          <div
            key={i}
            className="timeline-item relative animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-mono text-[#e8823a] text-sm font-bold tracking-wider">{item.year}</span>
              <h3 className="text-xl text-white font-['Bebas_Neue'] tracking-wider">{item.title}</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className="mt-24 bg-[#1a1d22] border border-white/5 p-8 lg:p-12">
        <h2 className="text-3xl text-white mb-6">La soudure a rendu possible :</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "La construction navale moderne (porte-conteneurs, sous-marins)",
            "Les pipelines de petrole et de gaz traversant les continents",
            "Les centrales nucleaires et leur confinement",
            "L'industrie automobile et aerospatiale",
            "Les gratte-ciels et ponts en acier du monde entier",
            "Les equipements medicaux en inox (IRM, protheses)",
            "La conquete spatiale (reservoirs de fusees soudes)",
            "L'industrie agroalimentaire (cuves, tuyauteries sanitaires)",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#e8823a] mt-2 flex-shrink-0" />
              <span className="text-gray-400 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="mt-16">
        <h2 className="text-3xl text-white mb-6">En video</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/6nmHUjMVW5Y"
            title="Histoire du soudage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="text-xs text-gray-600 mt-2">L'evolution des techniques de soudage a travers les siecles</p>
      </div>
    </div>
  );
}
