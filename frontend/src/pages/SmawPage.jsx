import { Zap, CheckCircle2, AlertTriangle } from "lucide-react";

const PARAMS_TABLE = [
  { diam: "1.6", intensite: "25-50", polarite: "DC+ ou AC", position: "Toutes", usage: "Toles fines, reparation" },
  { diam: "2.0", intensite: "40-80", polarite: "DC+ ou AC", position: "Toutes", usage: "Toles fines, passes de racine" },
  { diam: "2.5", intensite: "50-100", polarite: "DC+ ou AC", position: "Toutes", usage: "Polyvalent, serrurerie" },
  { diam: "3.2", intensite: "80-130", polarite: "DC+ ou AC", position: "PA, PB, PF", usage: "Usage courant, chaudronnerie" },
  { diam: "4.0", intensite: "120-180", polarite: "DC+ ou AC", position: "PA, PB", usage: "Passes de remplissage, epaisseurs > 6mm" },
  { diam: "5.0", intensite: "160-250", polarite: "DC+ ou AC", position: "PA", usage: "Gros volumes, soudage a plat uniquement" },
];

const DEFAUTS = [
  { defaut: "Porosites", cause: "Humidite electrode, arc trop long, vent, peinture/rouille", correction: "Secher electrodes (etuve 150°C/1h), raccourcir l'arc, proteger la zone, nettoyer" },
  { defaut: "Manque de fusion (collage)", cause: "Intensite trop faible, vitesse trop rapide, mauvais angle", correction: "Augmenter l'intensite, ralentir, verifier l'angle (~70°)" },
  { defaut: "Morsures (caniveau)", cause: "Intensite trop elevee, angle trop ouvert, vitesse trop lente aux bords", correction: "Reduire l'intensite, corriger l'angle, temps de maintien aux bords" },
  { defaut: "Collage d'electrode", cause: "Intensite trop faible, amorcage hesitant", correction: "Augmenter I, amorcer d'un geste franc (grattage ou percussion)" },
  { defaut: "Fissures", cause: "Metal de base non prechauffé, retrait trop rapide, Ceq eleve", correction: "Prechauffer si necessaire, refroidissement lent, electrode basique" },
  { defaut: "Inclusion de laitier", cause: "Nettoyage incomplet entre passes, laitier piege", correction: "Piquer et brosser soigneusement entre chaque passe" },
];

export default function SmawPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="smaw-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2">
          <Zap size={14} /> Procede n°111
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">SMAW / Electrode enrobee</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">
          Le SMAW (Shielded Metal Arc Welding), aussi appele soudage a l'electrode enrobee ou procede 111 (ISO 4063),
          est le procede le plus ancien et le plus repandu au monde. Simple, polyvalent, utilisable en exterieur :
          c'est le couteau suisse du soudeur.
        </p>
      </div>

      {/* Image */}
      <div className="mb-16 aspect-video overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Soudage a l'electrode enrobee - SMAW" className="w-full h-full object-cover" />
      </div>

      {/* Principe */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Principe physique</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 leading-relaxed mb-4">
            Un arc electrique est etabli entre une electrode consommable (enrobee) et le metal de base.
            La chaleur de l'arc (environ 3 500°C) fait fondre simultanement l'electrode et le metal de base,
            creant un bain de fusion commun. L'enrobage de l'electrode fond egalement et produit :
          </p>
          <ul className="space-y-3 ml-4">
            {[
              "Un gaz de protection qui isole le bain de l'atmosphere (O2, N2)",
              "Un laitier qui flotte a la surface du cordon et le protege pendant le refroidissement",
              "Des elements d'alliage qui ameliorent les proprietes mecaniques du joint",
              "Des desoxydants qui nettoient le bain de fusion",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#e8823a] mt-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Types d'electrodes */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Types d'enrobage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: "Rutile (R)", desc: "Amorcage facile, cordon esthetique, toutes positions. Ideal debutant. Ex: E6013. Laitier auto-detachant.", color: "#e8823a" },
            { type: "Basique (B)", desc: "Proprietes mecaniques superieures, resilience elevee. Ex: E7018. Necesssite etuvage (350°C/2h). Usage : construction, pression.", color: "#f5a623" },
            { type: "Cellulosique (C)", desc: "Penetration profonde, projections importantes. Ex: E6010. Usage : pipelines, passes de racine. Peu utilise en atelier.", color: "#fb923c" },
          ].map((item, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <div className="w-3 h-3 mb-4" style={{ background: item.color }} />
              <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">{item.type}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parametres */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Parametres par diametre</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full" data-testid="smaw-params-table">
            <thead>
              <tr>
                <th>Diametre (mm)</th>
                <th>Intensite (A)</th>
                <th>Polarite</th>
                <th>Positions</th>
                <th>Usage type</th>
              </tr>
            </thead>
            <tbody>
              {PARAMS_TABLE.map((row, i) => (
                <tr key={i}>
                  <td className="font-mono font-bold text-white">{row.diam}</td>
                  <td className="font-mono">{row.intensite}</td>
                  <td>{row.polarite}</td>
                  <td>{row.position}</td>
                  <td>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">Regle empirique : I (A) ≈ 40 x diametre (mm). Ajuster selon position et type d'enrobage.</p>
      </section>

      {/* Technique */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Technique et gestes</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">Amorcage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-[#e8823a] text-sm font-semibold">Grattage</span>
                <p className="text-gray-500 text-sm mt-1">Frotter l'electrode comme une allumette. Methode la plus naturelle pour debuter. Risque : amorcer en dehors de la zone de soudage.</p>
              </div>
              <div>
                <span className="text-[#e8823a] text-sm font-semibold">Percussion (tapping)</span>
                <p className="text-gray-500 text-sm mt-1">Descendre l'electrode verticalement puis remonter legerement. Plus precis mais demande de la pratique. Risque : collage si on ne remonte pas assez vite.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-3">Angles et mouvement</h3>
            <ul className="space-y-2">
              {[
                "Angle d'inclinaison : 70-80° par rapport a la piece (tire vers soi)",
                "Angle lateral : perpendiculaire au joint (90°) ou leger weaving",
                "Longueur d'arc : egal au diametre de l'electrode (~3mm pour du 3.2)",
                "Vitesse : reguliere et constante, observer la largeur du bain",
                "Oscillation : mouvement en zigzag ou en cercles pour les passes larges",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Defauts */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Defauts frequents</h2>
        <div className="overflow-x-auto">
          <table className="industrial-table w-full" data-testid="smaw-defauts-table">
            <thead>
              <tr>
                <th>Defaut</th>
                <th>Causes possibles</th>
                <th>Actions correctives</th>
              </tr>
            </thead>
            <tbody>
              {DEFAUTS.map((row, i) => (
                <tr key={i}>
                  <td className="text-white font-medium">{row.defaut}</td>
                  <td>{row.cause}</td>
                  <td>{row.correction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Avantages / Limites */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Avantages et limites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={18} className="text-green-500" />
              <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider">Avantages</h3>
            </div>
            <ul className="space-y-2">
              {["Polyvalent : toutes positions, tous metaux courants", "Utilisable en exterieur (pas de gaz)", "Equipement peu couteux et simple", "Soudage possible sur metal legerement rouille/sale", "Ideal maintenance et chantier"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1a1d22] border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-[#f5a623]" />
              <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider">Limites</h3>
            </div>
            <ul className="space-y-2">
              {["Productivite faible (changement electrode frequente)", "Nettoyage du laitier obligatoire entre chaque passe", "Esthetique limitee par rapport au TIG", "Ne convient pas aux toles tres fines (< 1.5mm)", "Taux de depot faible compare au MIG"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-[#f5a623] mt-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Check-list avant de souder</h2>
        <div className="bg-[#1a1d22] border border-[#e8823a]/20 p-6">
          <ol className="space-y-3">
            {[
              "EPI complet : cagoule, gants, bleu coton, chaussures, lunettes meulage a portee",
              "Poste allume, cable de masse bien raccorde, electrode adaptee chargee",
              "Intensite reglee selon le diametre de l'electrode (regle des 40x)",
              "Pieces propres, chanfrein prepare si necessaire, pointees",
              "Zone degagee, rideaux de soudage en place, extincteur accessible",
              "Aspiration/ventilation en marche",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-[#e8823a] text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 text-sm">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Video */}
      <div className="mt-8">
        <h2 className="text-3xl text-white mb-6">Video : soudage a l'electrode enrobee</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/PsiFq6vGMFE"
            title="Soudage SMAW electrode enrobee"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
