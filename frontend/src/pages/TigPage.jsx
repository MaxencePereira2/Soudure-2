import { Flame, CheckCircle2, AlertTriangle } from "lucide-react";

const PARAMS = [
  { ep: "0.8", tungstene: "1.0", baguette: "1.0", intensite: "15-30", debit: "5-6" },
  { ep: "1.5", tungstene: "1.6", baguette: "1.6", intensite: "30-60", debit: "6-7" },
  { ep: "2", tungstene: "1.6", baguette: "1.6-2.0", intensite: "50-80", debit: "7-8" },
  { ep: "3", tungstene: "2.4", baguette: "2.0-2.4", intensite: "80-120", debit: "8-10" },
  { ep: "4", tungstene: "2.4", baguette: "2.4", intensite: "100-150", debit: "8-10" },
  { ep: "5", tungstene: "3.2", baguette: "2.4-3.2", intensite: "130-180", debit: "10-12" },
];

const TUNGSTENES = [
  { type: "Pur (vert)", compo: "99.9% W", usage: "AC aluminium. Forme bille en bout.", courant: "AC" },
  { type: "Thorie (rouge)", compo: "W + 2% ThO2", usage: "DC acier/inox. Excellent amorcage. Legerement radioactif.", courant: "DC-" },
  { type: "Cerium (gris)", compo: "W + 2% CeO2", usage: "Polyvalent AC/DC. Alternative non radioactive au thorie.", courant: "AC/DC" },
  { type: "Lanthane (or/bleu)", compo: "W + 1.5-2% La2O3", usage: "Polyvalent, tres bon amorcage, longue duree de vie.", courant: "AC/DC" },
];

export default function TigPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="tig-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Flame size={14} /> Procede n°141</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">TIG / GTAW</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">
          Le TIG (Tungsten Inert Gas) est le procede premium du soudeur. Electrode tungstene non fusible, apport separe a la baguette, gaz inerte (argon). Resultat : des cordons d'une qualite esthetique et metallurgique inegalee. C'est le procede de reference pour l'aerospatiale, l'agroalimentaire et les applications haute pression.
        </p>
      </div>

      {/* Principe */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Principe</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 leading-relaxed mb-4">L'arc electrique est etabli entre une electrode en tungstene (point de fusion 3 422°C) et la piece. Le tungstene ne fond pas : il ne sert qu'a creer l'arc. Le metal d'apport est amene separement, a la main, sous forme de baguette. L'argon protege le bain, le tungstene et la zone refroidissante.</p>
          <ul className="space-y-2 mt-4">
            {["DC- (electrode negative) : pour acier, inox. 70% chaleur sur la piece, penetration maximale", "AC (courant alternatif) : pour aluminium. La phase positive 'nettoie' l'oxyde d'alumine (Al2O3) qui fond a 2 072°C alors que l'alu fond a 660°C", "Pulse : alternance haute/basse intensite. Controle thermique fin, ideal toles fines et positions."].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tungstenes */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Types de tungstene</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full" data-testid="tig-tungstene-table">
            <thead><tr><th>Type (couleur)</th><th>Composition</th><th>Usage / notes</th><th>Courant</th></tr></thead>
            <tbody>{TUNGSTENES.map((r, i) => <tr key={i}><td className="text-white font-medium">{r.type}</td><td className="font-mono text-xs">{r.compo}</td><td>{r.usage}</td><td className="font-mono">{r.courant}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      {/* Preparation electrode */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Preparation de l'electrode</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">Acier / Inox (DC)</h3>
            <p className="text-gray-400 text-sm">Affuter en pointe conique sur meule dediee. La longueur de la pointe = 2 a 3 x le diametre. Stries d'affutage longitudinales (pas transversales). Un leger meplatavec troncature en bout pour la stabilite.</p>
          </div>
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">Aluminium (AC)</h3>
            <p className="text-gray-400 text-sm">Pas besoin d'affuter en pointe fine. En AC, le courant forme naturellement une bille en bout du tungstene. Diametre bille = diametre tungstene environ. Bille trop grosse = intensite trop forte.</p>
          </div>
        </div>
      </section>

      {/* Params */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Parametres par epaisseur (acier/inox, DC-)</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full" data-testid="tig-params-table">
            <thead><tr><th>Ep. (mm)</th><th>Tungstene</th><th>Baguette</th><th>I (A)</th><th>Debit Ar (L/min)</th></tr></thead>
            <tbody>{PARAMS.map((r, i) => <tr key={i}><td className="font-mono font-bold text-white">{r.ep}</td><td className="font-mono">{r.tungstene}</td><td className="font-mono">{r.baguette}</td><td className="font-mono">{r.intensite}</td><td className="font-mono">{r.debit}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      {/* Technique */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Technique deux mains</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Le TIG est le seul procede courant ou les deux mains travaillent independamment : la main dominante tient la torche, l'autre amene la baguette d'apport.</p>
          <ul className="space-y-2">
            {["Torche : angle ~15 deg par rapport a la verticale, inclinee vers l'avant", "Baguette : angle ~15-20 deg par rapport a la piece, cote oppose a la torche", "Ne jamais tremper la baguette dans le bain de fusion d'un mouvement brusque", "Mouvement : petits cercles ou avance lineaire, amener la baguette en bord de bain", "Pregaz : 3-5 secondes avant l'amorcage pour purger la torche", "Postgaz : 5-10 secondes apres extinction pour proteger le tungstene et la fin de cordon"].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Defauts */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Defauts frequents</h2>
        <div className="space-y-3">
          {[
            { d: "Inclusion tungstene", c: "Contact tungstene/bain ou baguette. Cordon gris/noir.", f: "Reaffuter le tungstene, garder la distance." },
            { d: "Porosite", c: "Humidite, gaz insuffisant, courant d'air, metal sale.", f: "Augmenter pregaz/postgaz, nettoyer, proteger." },
            { d: "Oxydation (couleur bleue/violette)", c: "Gaz insuffisant ou postgaz trop court.", f: "Augmenter debit et duree postgaz." },
            { d: "Manque de penetration", c: "Intensite trop faible, vitesse trop rapide.", f: "Augmenter I, ralentir, chanfreiner si > 3mm." },
          ].map((r, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-4 flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/4"><span className="text-white font-medium text-sm">{r.d}</span></div>
              <div className="sm:w-2/4"><span className="text-gray-500 text-sm">{r.c}</span></div>
              <div className="sm:w-1/4"><span className="text-[#e8823a] text-sm">{r.f}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Avantages */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-4"><CheckCircle2 size={18} className="text-green-500" /><h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider">Avantages</h3></div>
            <ul className="space-y-2">{["Qualite esthetique maximale", "Controle total du bain", "Tous metaux (acier, inox, alu, titane, cuivre)", "Pas de projections, pas de laitier", "Faible deformation sur toles fines"].map((t, i) => <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-green-500 mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>)}</ul>
          </div>
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-4"><AlertTriangle size={18} className="text-[#f5a623]" /><h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider">Limites</h3></div>
            <ul className="space-y-2">{["Lent (faible taux de depot)", "Apprentissage long (deux mains)", "Couteux (argon, tungstene, baguettes)", "Sensible au vent", "Pas adapte aux grosses epaisseurs seules"].map((t, i) => <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#f5a623] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Soudage TIG</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/8UVjIoOFGLc" title="Soudage TIG technique" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
