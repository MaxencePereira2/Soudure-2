import { Compass } from "lucide-react";

export default function PreparationPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="preparation-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Compass size={14} /> Chapitre 6</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Preparation & assemblage</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Une bonne soudure commence bien avant l'amorcage de l'arc. La preparation des pieces est determinante : proprete, geometrie du chanfrein, pointage, bridage. 80% de la qualite du joint se joue avant de souder.</p>
      </div>

      {/* Degraissage */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Degraissage et nettoyage</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ul className="space-y-3">
            {["Acetone : solvant universel, evaporation rapide. Le plus utilise en atelier.", "Alcool isopropylique : alternative moins agressive, pour inox et aluminium.", "Zone a nettoyer : 50 mm de chaque cote du joint minimum.", "Eliminer : graisse, huile, peinture, marqueur, rouille, calamines.", "Pour l'aluminium : degraissage + brossage inox (brosse dediee alu, jamais une brosse ayant touche de l'acier).", "Pour l'inox : meme principe, brosse inox dediee. Eviter toute contamination ferreuse."].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Chanfreins */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Types de chanfreins</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full" data-testid="chanfreins-table">
            <thead><tr><th>Type</th><th>Epaisseur indicative</th><th>Angle</th><th>Talon</th><th>Ouverture</th></tr></thead>
            <tbody>
              {[
                { type: "I (bords droits)", ep: "< 5 mm", angle: "0°", talon: "Pleine epaisseur", ouv: "0-2 mm" },
                { type: "V", ep: "5-20 mm", angle: "60-70°", talon: "1-2 mm", ouv: "2-3 mm" },
                { type: "X (double V)", ep: "15-40 mm", angle: "60°", talon: "1-2 mm", ouv: "2-3 mm" },
                { type: "U", ep: "20-60 mm", angle: "Rayon de fond", talon: "1-2 mm", ouv: "8-12 mm" },
                { type: "K (demi-V double)", ep: "15-30 mm", angle: "45-60°", talon: "1-2 mm", ouv: "2-3 mm" },
                { type: "J (demi-U)", ep: "20-40 mm", angle: "Rayon de fond", talon: "1-2 mm", ouv: "6-10 mm" },
              ].map((r, i) => <tr key={i}><td className="text-white font-medium">{r.type}</td><td className="font-mono">{r.ep}</td><td className="font-mono">{r.angle}</td><td className="font-mono">{r.talon}</td><td className="font-mono">{r.ouv}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">Les chanfreins en X et U consomment moins de metal d'apport que le V simple et reduisent les deformations (soudage des deux cotes).</p>
      </section>

      {/* Types de joints */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Types de joints</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { nom: "Bout a bout", desc: "Les deux pieces sont dans le meme plan. Joint le plus courant et le plus sollicite." },
            { nom: "En T", desc: "Une piece perpendiculaire a l'autre. Cordon d'angle (fillet weld). Tres courant en construction metallique." },
            { nom: "En angle (coin)", desc: "Deux pieces forment un angle. Soudure interieure et/ou exterieure." },
            { nom: "Par recouvrement (lap joint)", desc: "Les pieces se chevauchent. Facile a realiser mais moins resistant qu'un bout a bout." },
          ].map((j, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-2">{j.nom}</h3>
              <p className="text-gray-500 text-sm">{j.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Symboles ISO 2553 */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Symboles de soudage (ISO 2553)</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Les symboles de soudage sur les plans de fabrication indiquent le type de joint, la geometrie, les dimensions et les exigences de qualite. Elements cles :</p>
          <ul className="space-y-2">
            {["Ligne de repere : fleche pointant vers le joint", "Ligne de reference : trait continu = cote fleche, trait discontinu = cote oppose", "Symbole elementaire : forme du cordon (V, X, angle, etc.)", "Cotes : gorge (a), longueur (l), espacement pour soudures intermittentes", "Symboles supplementaires : meulage, soudage sur site, soudage perimetrique"].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bridage */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Bridage et gabarits</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ul className="space-y-2">
            {["Le bridage reduit les deformations en maintenant les pieces en position pendant le soudage et le refroidissement.", "Serre-joints, brides, chandelles, marbres de soudage avec trous de fixation.", "Gabarit de soudage : pour les pieces en serie, assure la repetabilite des dimensions.", "Tolerances : ISO 13920 definit les classes de tolerance A/B/C/D pour les assemblages mecano-soudes.", "Regle : pointer, verifier les cotes, brider, puis souder. Jamais l'inverse."].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
