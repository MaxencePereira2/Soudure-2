import { Settings2, CheckCircle2, AlertTriangle } from "lucide-react";

const PARAMS = [
  { ep: "1", fil: "0.6", tension: "15-17", vitFil: "3-5", debit: "8-10", intensite: "30-60" },
  { ep: "2", fil: "0.8", tension: "17-19", vitFil: "4-7", debit: "10-12", intensite: "60-100" },
  { ep: "3", fil: "0.8", tension: "18-21", vitFil: "6-9", debit: "12-14", intensite: "90-140" },
  { ep: "5", fil: "1.0", tension: "20-24", vitFil: "7-10", debit: "14-16", intensite: "140-200" },
  { ep: "8", fil: "1.0", tension: "23-27", vitFil: "8-12", debit: "14-16", intensite: "180-260" },
  { ep: "10", fil: "1.2", tension: "25-30", vitFil: "8-14", debit: "16-18", intensite: "220-320" },
];

const GAZ = [
  { gaz: "CO2 pur", type: "MAG", penetration: "Profonde", projections: "Elevees", usage: "Acier, chaudronnerie" },
  { gaz: "Ar + 18% CO2", type: "MAG", penetration: "Bonne", projections: "Moyennes", usage: "Acier, meilleur compromis" },
  { gaz: "Ar + 5% CO2", type: "MAG", penetration: "Moderee", projections: "Faibles", usage: "Toles fines, finitions" },
  { gaz: "Argon pur", type: "MIG", penetration: "Faible", projections: "Tres faibles", usage: "Aluminium, cuivre" },
];

export default function MigMagPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="migmag-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Settings2 size={14} /> Procedes 131/135/136</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">MIG / MAG (GMAW)</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Le MIG/MAG est le procede le plus utilise en industrie. Un fil-electrode continu fond dans un bain protege par un gaz — inerte (MIG) ou actif (MAG). Productivite elevee, facile a automatiser.</p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">MIG vs MAG</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">MIG — Gaz inerte</h3>
            <p className="text-gray-400 text-sm mb-3">Argon pur ou Ar/He. Le gaz ne reagit pas avec le bain. Procede 131. Pour alu, cuivre, inox.</p>
          </div>
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">MAG — Gaz actif</h3>
            <p className="text-gray-400 text-sm mb-3">CO2 pur ou Ar/CO2. Le gaz participe a la chimie du bain. Procede 135/136. Pour acier carbone.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Modes de transfert</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { mode: "Court-circuit", desc: "Basse tension, toles fines, toutes positions. Le fil touche le bain ~100x/s." },
            { mode: "Globulaire", desc: "Zone intermediaire instable. Grosses gouttes. A eviter." },
            { mode: "Spray arc", desc: "Haute tension, gouttelettes fines. A plat uniquement. Haute productivite." },
          ].map((m, i) => (
            <div key={i} className="bg-[#1a1d22] border-l-2 border-[#e8823a] p-4">
              <h4 className="text-white text-sm font-semibold mb-2">{m.mode}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Parametres par epaisseur (acier, MAG)</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full" data-testid="migmag-params-table">
            <thead><tr><th>Ep. (mm)</th><th>Fil</th><th>Tension (V)</th><th>Vit. fil</th><th>Debit gaz</th><th>I (A)</th></tr></thead>
            <tbody>{PARAMS.map((r, i) => <tr key={i}><td className="font-mono font-bold text-white">{r.ep}</td><td className="font-mono">{r.fil}</td><td className="font-mono">{r.tension}</td><td className="font-mono">{r.vitFil}</td><td className="font-mono">{r.debit}</td><td className="font-mono">{r.intensite}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Gaz de protection</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full" data-testid="migmag-gaz-table">
            <thead><tr><th>Gaz</th><th>Type</th><th>Penetration</th><th>Projections</th><th>Usage</th></tr></thead>
            <tbody>{GAZ.map((r, i) => <tr key={i}><td className="text-white">{r.gaz}</td><td>{r.type}</td><td>{r.penetration}</td><td>{r.projections}</td><td>{r.usage}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Gestes et technique</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ul className="space-y-3">
            {["Angle torche : 15-20 deg en tirant ou poussant", "Stickout : 10-15 mm entre buse et piece", "Synergique : le poste regle V et vitesse fil automatiquement", "Vitesse reguliere, bain en forme d'amande"].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-4"><CheckCircle2 size={18} className="text-green-500" /><h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider">Avantages</h3></div>
            <ul className="space-y-2">{["Productivite elevee", "Facile a automatiser", "Pas de laitier", "Bon taux de depot"].map((t, i) => <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-green-500 mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>)}</ul>
          </div>
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-4"><AlertTriangle size={18} className="text-[#f5a623]" /><h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider">Limites</h3></div>
            <ul className="space-y-2">{["Sensible au vent", "Equipement plus couteux", "Entretien torche regulier", "Projections CO2 pur"].map((t, i) => <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#f5a623] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Soudage MIG/MAG</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/aF1rJNqri7k" title="Soudage MIG MAG" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
