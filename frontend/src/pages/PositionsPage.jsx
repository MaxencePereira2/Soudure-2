import { Compass } from "lucide-react";

const POSITIONS = [
  { iso: "PA", desc: "A plat (flat)", detail: "La plus facile. Le bain de fusion est stable, la gravite aide. Position de depart pour les debutants." },
  { iso: "PB", desc: "En gouttiere (horizontal fillet)", detail: "Cordon d'angle horizontal sur assemblage en T. Le bain tend a couler vers le bas — ajuster la vitesse." },
  { iso: "PC", desc: "En corniche (horizontal)", detail: "Soudage horizontal sur un plan vertical. Le bain coule vers le bas. Reduire l'intensite de 10-15% vs PA." },
  { iso: "PD", desc: "Au plafond en gouttiere", detail: "Cordon d'angle au plafond. Tres difficile. La gravite attire le bain vers le bas — cordons fins et rapides." },
  { iso: "PE", desc: "Au plafond (overhead)", detail: "Soudage overhead. La position la plus difficile. Bain instable, risque de couler. Reduire I de 15-20%." },
  { iso: "PF", desc: "Vertical montant", detail: "Soudage de bas en haut. Le bain tend a couler. Technique en triangle ou en zigzag. Intensite reduite." },
  { iso: "PG", desc: "Vertical descendant", detail: "Soudage de haut en bas. Plus rapide mais moins de penetration. Utilise pour les toles fines." },
];

export default function PositionsPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="positions-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Compass size={14} /> Chapitre 7</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Positions de soudage</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">La position de soudage influence directement le comportement du bain de fusion. La gravite, la tension de surface et la vitesse de solidification changent selon l'orientation. Maitriser les positions est essentiel pour la qualification ISO 9606.</p>
      </div>

      {/* Positions */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Nomenclature ISO 6947</h2>
        <div className="space-y-3">
          {POSITIONS.map((p, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6 flex flex-col sm:flex-row gap-4 hover:border-[#e8823a]/20 transition-colors duration-300">
              <div className="sm:w-20 flex-shrink-0">
                <span className="font-mono text-[#e8823a] text-2xl font-bold">{p.iso}</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{p.desc}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conseils par procede */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Conseils par procede et position</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">SMAW</h3>
            <p className="text-gray-500 text-sm">Le plus polyvalent en position. Toutes positions possibles avec les bonnes electrodes (rutile toutes positions, basique PA/PB principalement). Le laitier aide a maintenir le bain en position.</p>
          </div>
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">MIG/MAG</h3>
            <p className="text-gray-500 text-sm">En PF (vertical montant) : technique triangulaire, avancer par petites oscillations. Court-circuit obligatoire en position. Reduire la vitesse de fil et la tension par rapport a PA.</p>
          </div>
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">TIG</h3>
            <p className="text-gray-500 text-sm">Le pulse est un allie precieux en position : il alterne haute I (penetration) et basse I (solidification). En PE, reduire l'apport de baguette et travailler par petits bains successifs.</p>
          </div>
        </div>
      </section>

      {/* Progression pedagogique */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Progression pedagogique recommandee</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ol className="space-y-3">
            {[
              "PA (a plat) : maitriser le bain, la vitesse, les parametres",
              "PB (gouttiere) : gerer un leger ecoulement lateral",
              "PF (vertical montant) : technique triangulaire, maitriser la gravite",
              "PC (corniche) : soudage horizontal sur plan vertical",
              "PG (vertical descendant) : toles fines, vitesse elevee",
              "PE (plafond) : exercice avance, petits bains rapides",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-[#e8823a] text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 text-sm">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Positions de soudage</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/Djh-nQ3NUHU" title="Positions de soudage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
