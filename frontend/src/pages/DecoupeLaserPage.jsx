import { Scissors } from "lucide-react";

export default function DecoupeLaserPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="decoupe-laser-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Scissors size={14} /> Decoupe</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Decoupe laser</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">La decoupe laser est le procede de reference pour la decoupe de toles en metallerie moderne. Precision, vitesse, qualite de coupe : elle a remplace l'oxycoupage et le plasma pour la majorite des applications sur toles fines a moyennes.</p>
      </div>

      {/* Image */}
      <div className="mb-16 grid grid-cols-2 gap-2">
        <div className="aspect-video overflow-hidden border border-white/5">
          <img src="https://images.unsplash.com/photo-1764114544671-dd5fce132e43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzR8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbCUyMGluZHVzdHJpYWx8ZW58MHx8fHwxNzczMTczMTgzfDA&ixlib=rb-4.1.0&q=85" alt="Decoupe laser de tole acier" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-video overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/1-optimisation-du-temps-de-fabrication-descalier-en-acier/1a.png" alt="Pieces decoupees laser - Alesium" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Principe */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Principe de fonctionnement</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Un faisceau laser de haute puissance (1 a 12 kW typiquement) est focalise sur la tole. L'energie concentree fond et vaporise le metal. Un gaz d'assistance (azote, oxygene ou air comprime) expulse le metal fondu de la saignee.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border-l-2 border-[#e8823a] pl-4">
              <h4 className="text-white text-sm font-semibold mb-2">Laser CO2</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Technologie ancienne, longueur d'onde 10.6 um. Bon pour acier et bois. Miroirs de renvoi necessaires. En voie de remplacement.</p>
            </div>
            <div className="border-l-2 border-[#e8823a] pl-4">
              <h4 className="text-white text-sm font-semibold mb-2">Laser fibre</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Technologie actuelle, longueur d'onde 1.06 um. Plus rapide, meilleur rendement energetique, maintenance reduite. Standard industriel 2024.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gaz d'assistance */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Gaz d'assistance</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full">
            <thead><tr><th>Gaz</th><th>Usage</th><th>Qualite de coupe</th><th>Epaisseur max</th><th>Note</th></tr></thead>
            <tbody>
              <tr><td className="text-white font-medium">Azote (N2)</td><td>Inox, aluminium</td><td>Chant propre, sans oxydation</td><td>20-25 mm inox</td><td>Pas de calamine, soudable directement</td></tr>
              <tr><td className="text-white font-medium">Oxygene (O2)</td><td>Acier carbone</td><td>Bonne, legere oxydation du chant</td><td>25-30 mm acier</td><td>Reaction exothermique = plus de puissance</td></tr>
              <tr><td className="text-white font-medium">Air comprime</td><td>Acier fin, alu fin</td><td>Correcte, chant legerement oxyde</td><td>6-8 mm</td><td>Economique, qualite inferieure</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Regles de conception */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Regles de conception pour decoupe laser</h2>
        <div className="space-y-4">
          {[
            { regle: "Epaisseur minimale des languettes", desc: "Largeur minimale d'une languette = epaisseur de la tole. En dessous, risque de deformation thermique. Pour l'acier de 3mm, pas de languette < 3mm." },
            { regle: "Diametre minimal des trous", desc: "Diametre de percage laser >= epaisseur de la tole. Pour 2mm d'epaisseur, trou minimum de 2mm. En dessous, percage a la perceuse apres decoupe." },
            { regle: "Distance entre decoupes", desc: "Espacement minimum entre deux traits de coupe = epaisseur de la tole (minimum 2mm). Trop proche = deformation thermique et mauvaise qualite de chant." },
            { regle: "Distance au bord", desc: "Distance minimum d'un trou au bord de la tole = epaisseur (min 2mm). Trop pres = deformation et risque de bavure." },
            { regle: "Angles vifs internes", desc: "Eviter les angles strictement a 90° dans les decoupes internes. Preferer un rayon de raccordement = 0.5 x epaisseur minimum. Reduit les concentrations de contrainte." },
            { regle: "Micro-attaches (micro-joints)", desc: "Pour les petites pieces qui risquent de tomber dans la grille : prevoir des micro-attaches de 0.3-0.5mm qui se cassent a la main ou a la pince." },
            { regle: "Sens de laminage", desc: "Indiquer le sens de laminage si la piece sera pliee. Le pliage perpendiculaire au laminage est meilleur (moins de risque de fissure)." },
            { regle: "Tolerances", desc: "Tolerance standard en decoupe laser : +/- 0.1mm sur les cotes, +/- 0.05mm sur la repetabilite. Bien meilleur que le plasma ou l'oxycoupage." },
          ].map((r, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-5">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[#e8823a] text-sm font-bold mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-white font-medium mb-1">{r.regle}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capacites */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Capacites typiques d'un laser fibre</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full">
            <thead><tr><th>Materiau</th><th>Epaisseur max (3 kW)</th><th>Epaisseur max (6 kW)</th><th>Epaisseur max (12 kW)</th><th>Vitesse typique (3mm)</th></tr></thead>
            <tbody>
              <tr><td className="text-white">Acier carbone</td><td className="font-mono">20 mm</td><td className="font-mono">25 mm</td><td className="font-mono">30+ mm</td><td className="font-mono">4-6 m/min</td></tr>
              <tr><td className="text-white">Inox</td><td className="font-mono">12 mm</td><td className="font-mono">20 mm</td><td className="font-mono">25 mm</td><td className="font-mono">3-5 m/min</td></tr>
              <tr><td className="text-white">Aluminium</td><td className="font-mono">8 mm</td><td className="font-mono">15 mm</td><td className="font-mono">20 mm</td><td className="font-mono">5-8 m/min</td></tr>
              <tr><td className="text-white">Laiton / Cuivre</td><td className="font-mono">4 mm</td><td className="font-mono">8 mm</td><td className="font-mono">12 mm</td><td className="font-mono">2-4 m/min</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Video */}
      <div>
        <h2 className="text-3xl text-white mb-6">Video : Decoupe laser metal</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/3lLfXX9Xu-0" title="Decoupe laser metal" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
