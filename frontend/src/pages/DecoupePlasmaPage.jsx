import { Waves } from "lucide-react";

export default function DecoupePlasmaPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="decoupe-plasma-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Waves size={14} /> Decoupe</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Decoupe plasma</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">La decoupe plasma utilise un jet de gaz ionise (plasma) a tres haute temperature (15 000 - 30 000°C) pour fondre et expulser le metal. Plus accessible que le laser, c'est l'outil de decoupe thermique le plus polyvalent en atelier.</p>
      </div>

      {/* Image */}
      <div className="mb-16 aspect-video overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1585201344332-cf24f23b1cb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxwbGFzbWElMjBjdXR0aW5nJTIwc3BhcmtzJTIwc3RlZWx8ZW58MHx8fHwxNzczMTczMjAzfDA&ixlib=rb-4.1.0&q=85" alt="Decoupe plasma sur acier" className="w-full h-full object-cover" />
      </div>

      {/* Principe */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Principe</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Un arc electrique est etabli entre une electrode (cathode) et la piece (anode). Un gaz (air comprime, azote, argon, oxygene) est injecte a travers une buse etroite. L'arc ionise le gaz et cree un jet plasma concentre qui fond le metal. Le jet de gaz expulse le metal fondu de la saignee.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { type: "Plasma manuel (torche)", desc: "30-100A, portable, decoupe libre a la main. Epaisseur max ~25mm acier. L'outil le plus polyvalent en atelier." },
              { type: "Plasma CNC (table)", desc: "100-400A, decoupe automatisee. Precision +/- 0.5mm. Pour production de pieces en serie." },
              { type: "Plasma HD (haute definition)", desc: "Buse et gaz optimises. Qualite de coupe proche du laser. Pour inox et alu epais." },
            ].map((t, i) => (
              <div key={i} className="border-l-2 border-[#e8823a] pl-4">
                <h4 className="text-white text-sm font-semibold mb-2">{t.type}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Plasma vs Laser vs Oxycoupage</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full">
            <thead><tr><th>Critere</th><th>Plasma</th><th>Laser fibre</th><th>Oxycoupage</th></tr></thead>
            <tbody>
              <tr><td className="text-white">Epaisseur max acier</td><td>50 mm</td><td>30 mm</td><td>300+ mm</td></tr>
              <tr><td className="text-white">Precision</td><td>+/- 0.5 mm</td><td>+/- 0.1 mm</td><td>+/- 1-2 mm</td></tr>
              <tr><td className="text-white">Vitesse (10mm acier)</td><td>Rapide</td><td>Rapide</td><td>Lent</td></tr>
              <tr><td className="text-white">Inox / Alu</td><td>Oui</td><td>Oui</td><td>Non (acier uniquement)</td></tr>
              <tr><td className="text-white">Cout equipement</td><td>Moyen</td><td>Eleve</td><td>Faible</td></tr>
              <tr><td className="text-white">ZAT (zone affectee)</td><td>Moyenne</td><td>Faible</td><td>Large</td></tr>
              <tr><td className="text-white">Portabilite</td><td>Oui (manuel)</td><td>Non</td><td>Oui</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Regles de conception */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Regles pour la decoupe plasma</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ul className="space-y-3">
            {[
              "Tolerances plus larges que le laser : prevoir +/- 0.5 a 1 mm sur les cotes",
              "ZAT plus large (2-4 mm) : le metal a cote de la coupe est modifie. Prevoir une reprise si assemblage de precision",
              "Biseau de coupe : la saignee plasma est legerement conique (2-4°). Le chant n'est pas parfaitement perpendiculaire",
              "Dross (scories en bas de coupe) : normal sur epaisseurs > 10mm, s'elimine au meulage",
              "Percage en rampe : pour les contours interieurs, le plasma perce d'abord un trou de depart. Prevoir une zone de percage hors piece finie",
              "Distance au bord : minimum 10mm entre le bord de tole et le debut d'un contour",
              "Decoupe manuelle : tracer au trusquin ou au marqueur, utiliser un guide (regle, equerre) pour les coupes droites",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-[#e8823a] text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Securite */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Securite specifique plasma</h2>
        <div className="bg-[#e8823a]/10 border border-[#e8823a]/30 p-6">
          <ul className="space-y-2">
            {[
              "Lunettes teinte DIN 5-8 (pas de cagoule de soudage necessaire sauf si plasma > 100A)",
              "Protection auditive obligatoire : le jet plasma produit 90-110 dB",
              "Gants et vetements coton/FR : projections metalliques en fusion",
              "Ventilation/aspiration : fumees metalliques (zinc, chrome si inox)",
              "Risque electrique : tension d'amorcage 200-400V DC — mortelle",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Decoupe plasma</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/vGIHXOgtYQ4" title="Decoupe plasma" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
