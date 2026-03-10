import { FoldVertical } from "lucide-react";

export default function PliagePage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="pliage-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><FoldVertical size={14} /> Formage</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Pliage CNC</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Le pliage CNC (presse plieuse a commande numerique) est l'operation de formage la plus courante en tolerie-chaudronnerie. Transformer une tole plane en piece 3D par pliage reduit le nombre de soudures, ameliore la rigidite et accelere la production.</p>
      </div>

      {/* Image */}
      <div className="mb-16 aspect-video overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1758873820737-a5e3fb2a4c58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzR8MHwxfHNlYXJjaHwxfHxDTkMlMjBwcmVzcyUyMGJyYWtlJTIwbWV0YWwlMjBiZW5kaW5nfGVufDB8fHx8MTc3MzE3MzE5MHww&ixlib=rb-4.1.0&q=85" alt="Presse plieuse CNC en action" className="w-full h-full object-cover" />
      </div>

      {/* Principe */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Principe</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Un poincon (outil superieur, forme en V ou autre) descend dans une matrice (outil inferieur, gorge en V). La tole placee entre les deux est deformee plastiquement. La CNC controle la profondeur de descente avec une precision de +/- 0.01mm.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { type: "Pliage en l'air", desc: "Le poincon ne descend pas completement dans la matrice. L'angle depend de la profondeur de descente. Le plus courant et le plus flexible." },
              { type: "Pliage en frappe (fond de matrice)", desc: "Le poincon touche le fond de la matrice. Angle tres precis mais necessite un outillage par angle. Plus de force requise." },
              { type: "Pliage en tombee (ecrasement)", desc: "La tole est maintenue et un bord est plie a 90° par un outil lateral. Pour les bords courts et les ourlets." },
            ].map((t, i) => (
              <div key={i} className="border-l-2 border-[#e8823a] pl-4">
                <h4 className="text-white text-sm font-semibold mb-2">{t.type}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regles de conception */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Regles de conception pour le pliage</h2>
        <div className="space-y-4">
          {[
            { regle: "Rayon de pliage minimal", desc: "Rayon interieur minimum = epaisseur de la tole pour l'acier doux. Pour l'alu : 1.5 x epaisseur. Pour l'inox : 1.5 a 2 x epaisseur. En dessous, risque de fissuration exterieure." },
            { regle: "Ouverture de matrice (V)", desc: "Largeur du V = 6 a 8 x epaisseur pour l'acier. Ex : tole 3mm -> V de 20-24mm. Trop etroit = marquage, trop large = rayon trop grand et imprecision." },
            { regle: "Distance trou-pli", desc: "Distance minimum entre un trou et une ligne de pliage = 2 x epaisseur + rayon de pli. Sinon le trou se deforme pendant le pliage." },
            { regle: "Longueur minimale de bord", desc: "Le bord plie doit depasser la gorge du V. Minimum = 0.5 x ouverture V + 2mm. Pour V=24, bord mini = 14mm." },
            { regle: "Retour elastique (springback)", desc: "Apres pliage, le metal 'revient' legerement. L'acier doux : 1-3°, l'inox : 3-5°, l'alu 5xxx : 2-4°. La CNC compense automatiquement." },
            { regle: "Sens de laminage", desc: "Le pliage perpendiculaire au sens de laminage est meilleur. Le pliage parallele au laminage peut fissurer sur les petits rayons. Indiquer le sens sur le plan." },
            { regle: "Deplies et facteur K", desc: "Pour determiner les dimensions a plat avant pliage, on utilise le facteur K (0.3 a 0.5 selon matiere/rayon). Les logiciels CAO calculent automatiquement le developpe." },
            { regle: "Hauteur maximale de pli", desc: "Limitee par la course du tablier et l'encombrement de la piece dans la machine. Verifier avec l'atelier avant de concevoir des pieces hautes avec de nombreux plis." },
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

      {/* Table V / epaisseur */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Table outillage : V recommande par epaisseur</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full">
            <thead><tr><th>Epaisseur (mm)</th><th>Ouverture V (mm)</th><th>Rayon interne obtenu (mm)</th><th>Force approx. (t/m) acier</th></tr></thead>
            <tbody>
              {[
                { ep: "1", v: "6-8", r: "1-1.5", f: "5-8" },
                { ep: "1.5", v: "10-12", r: "1.5-2", f: "8-12" },
                { ep: "2", v: "12-16", r: "2-3", f: "12-18" },
                { ep: "3", v: "20-24", r: "3-4", f: "25-35" },
                { ep: "4", v: "25-32", r: "4-5", f: "40-55" },
                { ep: "5", v: "32-40", r: "5-7", f: "55-75" },
                { ep: "6", v: "35-50", r: "6-8", f: "70-100" },
                { ep: "8", v: "50-63", r: "8-10", f: "100-140" },
                { ep: "10", v: "63-80", r: "10-13", f: "140-180" },
              ].map((r, i) => <tr key={i}><td className="font-mono font-bold text-white">{r.ep}</td><td className="font-mono">{r.v}</td><td className="font-mono">{r.r}</td><td className="font-mono">{r.f}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">Forces indicatives pour acier S235. Inox : x 1.5. Aluminium : x 0.5.</p>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Pliage sur presse plieuse</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/PBqwdSdun9g" title="Pliage presse plieuse" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
