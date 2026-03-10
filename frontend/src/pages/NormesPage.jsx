import { Award } from "lucide-react";

export default function NormesPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="normes-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Award size={14} /> Chapitre 8</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Normes & qualite</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">En soudage, la qualite n'est pas une option : elle est normalisee, documentee, qualifiee et controlee. Voici les normes essentielles que tout soudeur doit connaitre.</p>
      </div>

      {/* WPS */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">WPS — Welding Procedure Specification</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm mb-4">Le WPS (DMOS en francais) est le document qui decrit COMMENT souder un joint donne. Il contient :</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[#e8823a] text-xs font-semibold uppercase">Parametres essentiels</span>
              <ul className="mt-2 space-y-1">{["Procede de soudage", "Metal de base (groupe)", "Epaisseur", "Position", "Type de joint et chanfrein", "Metal d'apport", "Gaz de protection", "Parametres electriques (I, V)"].map((t, i) => <li key={i} className="text-gray-500 text-xs flex gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-1.5 flex-shrink-0" />{t}</li>)}</ul>
            </div>
            <div>
              <span className="text-[#e8823a] text-xs font-semibold uppercase">Parametres non-essentiels</span>
              <ul className="mt-2 space-y-1">{["Sens de soudage", "Nettoyage inter-passes", "Meulage envers", "Sequence de passes", "Temperature interpasses"].map((t, i) => <li key={i} className="text-gray-500 text-xs flex gap-2"><div className="w-1 h-1 bg-gray-600 mt-1.5 flex-shrink-0" />{t}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* PQR */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">PQR — Procedure Qualification Record</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm mb-4">Le PQR (QMOS) prouve que le WPS fonctionne. On soude un coupon d'essai et on le soumet a des essais destructifs :</p>
          <ul className="space-y-2">
            {["Traction transversale : resistance >= metal de base", "Pliage endroit/envers/cote : pas de defaut > 3mm ouvert", "Resilience Charpy (si exige) : energie minimale a temperature donnee", "Macrographie : coupe, polissage, attaque acide pour reveler la structure", "Examen visuel + CND si requis par la norme d'application"].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* ISO 9606 */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">ISO 9606 — Qualification du soudeur</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm mb-4">La qualification du soudeur (QS) prouve que le soudeur est capable de realiser un joint conforme. Domaine de validite :</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Procede", val: "Specifique (ex: 135)" },
              { label: "Materiau", val: "Par groupe (FM1, FM5...)" },
              { label: "Epaisseur", val: "Plage qualifiee" },
              { label: "Position", val: "Specifique (PA, PF...)" },
            ].map((d, i) => (
              <div key={i} className="border-l-2 border-[#e8823a] pl-3">
                <span className="text-gray-600 text-xs uppercase">{d.label}</span>
                <p className="text-white text-sm mt-1">{d.val}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4">Validite : 3 ans avec renouvellement par l'employeur tous les 6 mois (attestation d'activite).</p>
        </div>
      </section>

      {/* ISO 5817 */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">ISO 5817 — Niveaux de qualite</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full">
            <thead><tr><th>Niveau</th><th>Exigence</th><th>Application typique</th></tr></thead>
            <tbody>
              <tr><td className="font-mono font-bold text-white">D</td><td>Basique — defauts tolerables importants</td><td>Structure secondaire, non critique</td></tr>
              <tr><td className="font-mono font-bold text-white">C</td><td>Standard — defauts moderes</td><td>Construction metallique courante</td></tr>
              <tr><td className="font-mono font-bold text-white">B</td><td>Exigeant — defauts minimes</td><td>Pression, nucleaire, offshore</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CND */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Controles non destructifs (CND)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { sigle: "VT", nom: "Visuel", desc: "Premier controle, obligatoire. Loupe, eclairage, jauge de soudage." },
            { sigle: "PT", nom: "Ressuage", desc: "Penetrant + revelateur. Detecte les defauts de surface ouverts." },
            { sigle: "MT", nom: "Magnetoscopie", desc: "Champ magnetique + particules. Defauts de surface et sous-surface (acier)." },
            { sigle: "UT", nom: "Ultrasons", desc: "Ondes sonores. Detecte les defauts internes. Epaisseurs > 8mm." },
            { sigle: "RT", nom: "Radiographie", desc: "Rayons X ou gamma. Image interne du joint. Cher, reglemente." },
          ].map((c, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <span className="font-mono text-[#e8823a] text-2xl font-bold">{c.sigle}</span>
              <h3 className="text-white font-medium mt-2 mb-1">{c.nom}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EN 1090 */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Marquage CE — EN 1090</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm leading-relaxed">La norme EN 1090 impose le marquage CE pour les structures metalliques. Elle exige ISO 3834 (gestion qualite soudage), des WPS/PQR qualifies, des soudeurs qualifies ISO 9606, et un controle de production en usine (FPC). Les classes d'execution EXC1 a EXC4 definissent le niveau d'exigence selon la criticite de la structure.</p>
        </div>
      </section>
    </div>
  );
}
