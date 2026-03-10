import { Grid3X3 } from "lucide-react";

export default function MarbresPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="marbres-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Grid3X3 size={14} /> Outillage</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Principe des marbres</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Le marbre de soudage (ou table de soudage modulaire) est l'outil central de l'atelier de metallerie. Surface plane de reference, percee d'un reseau de trous, il permet de positionner, brider et assembler des pieces avec precision et repetabilite.</p>
      </div>

      {/* Image */}
      <div className="mb-16 grid grid-cols-2 gap-2">
        <div className="aspect-video overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/2-fabrication-dune-ligne-de-production/1b.jpg" alt="Marbre de soudage en atelier - Alesium" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-video overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/6-supression-des-jeux-mcanique-dans-robot-parrallle-3-axe/2f.JPG" alt="Assemblage sur table de soudage - Alesium" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Types de marbres */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Types de marbres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: "Marbre en fonte", desc: "Surface plane rectifiee. Tres lourd, tres stable. Reference geometrique. Usage : tracage de precision, controle dimensionnel. Pas pour souder dessus (projections)." },
            { type: "Marbre de soudage acier", desc: "Tole epaisse (15-30mm) avec reseau de trous (D16 ou D28, pas de 50 ou 100mm). Surface nitrurée ou non. Supporte les projections et la chaleur. Le standard en atelier." },
            { type: "Table modulaire (Siegmund, Demmeler, GPPH)", desc: "Systeme premium : trous D28 au pas de 100mm, accessoires compatibles (equerres, butees, brides, pivots). Precision 0.1mm. Investissement eleve mais gain de temps enorme." },
          ].map((t, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">{t.type}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessoires */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Accessoires de marbre</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { nom: "Brides et serre-joints de table", desc: "Maintiennent les pieces plaquees sur le marbre. Brides a vis, brides excentriques (serrage rapide), brides horizontales." },
              { nom: "Equerres et angles", desc: "Equerres 90° fixees dans les trous du marbre. Permettent de maintenir une piece verticale. Existent en 45°, 60°, 90°, 120°." },
              { nom: "Butees et stops", desc: "Positionnent les pieces a une distance precise du bord. Butees a vis micrometrique pour la repetabilite." },
              { nom: "Pivots et centreurs", desc: "Goupilles inserees dans les trous pour referencer les pieces. Pivots coniques pour centrage rapide." },
              { nom: "V-blocks", desc: "Pour positionner des pieces rondes (tubes, arbres) sur le marbre. En V a 90° ou 120°." },
              { nom: "Chandelles et supports", desc: "Supportent les pieces longues ou lourdes a hauteur du marbre. Hauteur reglable." },
            ].map((a, i) => (
              <div key={i}>
                <h4 className="text-white text-sm font-semibold mb-1">{a.nom}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utilisation */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Methodologie d'utilisation</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ol className="space-y-3">
            {[
              "Nettoyer le marbre : eliminer scories, projections, poussieres. Surface propre = reference fiable.",
              "Positionner les pieces : utiliser les trous comme references geometriques. Aligner avec butees et equerres.",
              "Brider sans contraindre : les brides doivent maintenir la position sans deformer les pieces. Attention a la pression de serrage.",
              "Pointer : petits cordons de soudure pour figer la geometrie. Verifier les cotes APRES pointage.",
              "Souder : en respectant la sequence definie pour minimiser les deformations. Alterner les cotes si possible.",
              "Debrider et controler : mesurer les dimensions finales. Comparer au plan. Noter les ecarts.",
              "Entretien : brosser le marbre, graisser les accessoires de serrage, ranger les accessoires dans leur emplacement.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-[#e8823a] text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 text-sm">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Avantages */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Pourquoi investir dans un bon marbre ?</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ul className="space-y-2">
            {[
              "Repetabilite : meme gabarit = memes pieces. Essentiel pour les series.",
              "Precision : reference geometrique fiable = cotes respectees du premier coup.",
              "Gain de temps : moins de mesures, moins de reprises, moins de rebuts.",
              "Reduction des deformations : un bon bridage compense les retraits thermiques.",
              "Polyvalence : les accessoires modulaires s'adaptent a toutes les geometries.",
              "Securite : pieces correctement bridees = pas de mouvement pendant le soudage.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Tables de soudage et accessoires</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/5Hc--MrMITs" title="Tables de soudage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
