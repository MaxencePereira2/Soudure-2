import { GraduationCap, Clock, Wrench, Target, CheckCircle2 } from "lucide-react";

const SESSIONS = [
  { num: 1, titre: "Introduction & Securite", duree: "2h", objectifs: ["Presentation du module et des objectifs", "Regles de securite et EPI obligatoires", "Visite de l'atelier et identification des postes", "Premiers gestes : allumer un poste, regler l'intensite"], equipement: "Cagoule, gants, bleu de travail, chaussures securite", eval: "QCM securite (10 questions)" },
  { num: 2, titre: "SMAW — Premiers cordons", duree: "2h", objectifs: ["Principe du SMAW et composition de l'electrode", "Amorcage par grattage et percussion", "Premiers cordons a plat (PA) sur tole epaisse", "Piquage du laitier, observation du cordon"], equipement: "Poste SMAW, electrodes rutile 2.5 et 3.2", eval: "Cordon droit PA sur 200mm — regularite" },
  { num: 3, titre: "SMAW — Perfectionnement", duree: "2h", objectifs: ["Reglage fin de l'intensite selon le diametre", "Angles et vitesse de translation", "Cordons en gouttiere (PB)", "Debut assemblage en T"], equipement: "Poste SMAW, electrodes 3.2, equerres", eval: "Assemblage en T — penetration et aspect" },
  { num: 4, titre: "MIG/MAG — Decouverte", duree: "2h", objectifs: ["Principe MIG/MAG, gaz, fil, modes de transfert", "Reglage d'un poste synergique", "Premiers cordons a plat", "Comparaison avec SMAW"], equipement: "Poste MIG/MAG synergique, fil 0.8, Ar/CO2", eval: "Cordon droit PA — regularite et absence de porosites" },
  { num: 5, titre: "MIG/MAG — Assemblages", duree: "2h", objectifs: ["Assemblage bout a bout sur toles 3mm", "Assemblage en T", "Reglage parametres manuels (V, vitesse fil)", "Entretien torche et devidoir"], equipement: "Poste MIG/MAG, toles 3mm decoupees", eval: "Assemblage bout a bout — etancheite et penetration" },
  { num: 6, titre: "TIG — Initiation", duree: "2h", objectifs: ["Principe TIG, types de tungstene, gaz", "Affutage du tungstene", "Premiers bains de fusion sans apport (autogene)", "Premieres lignes avec baguette d'apport"], equipement: "Poste TIG DC, tungstene 2.4, baguettes ER70S", eval: "Ligne de fusion autogene — regularite" },
  { num: 7, titre: "TIG — Technique deux mains", duree: "2h", objectifs: ["Coordination torche + baguette", "Cordons sur acier avec apport", "Pregaz et postgaz", "Debut inox si possible"], equipement: "Poste TIG, baguettes acier et inox 316L", eval: "Cordon avec apport PA — regularity et couleur" },
  { num: 8, titre: "Metallurgie & Preparation", duree: "2h", objectifs: ["ZAT, carbone equivalent, aciers courants", "Chanfreins : types et realisation a la meuleuse", "Degraissage, pointage, bridage", "Symboles de soudage ISO 2553 (lecture plan)"], equipement: "Meuleuse, equerres, brides, plans", eval: "QCM metallurgie + preparation d'un chanfrein V" },
  { num: 9, titre: "Positions & Qualite", duree: "2h", objectifs: ["Soudage en PF (vertical montant) — SMAW ou MIG", "Comportement du bain en position", "Notions de qualite : ISO 5817, defauts courants", "Autocontrole visuel du cordon"], equipement: "Postes de soudage, plaques verticales", eval: "Cordon PF — absence de defauts majeurs" },
  { num: 10, titre: "Evaluation finale & Bilan", duree: "2h", objectifs: ["Exercice pratique : assemblage complet multi-passes", "QCM final (securite + theorie + normes)", "Bilan individuel et axes d'amelioration", "Remise des attestations de formation"], equipement: "Tous postes disponibles, choix du procede", eval: "Assemblage note + QCM 30 questions" },
];

export default function ModuleSigmaPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="sigma-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><GraduationCap size={14} /> Programme</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Module SIGMA — 20H</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Programme complet de 10 seances de 2 heures, dispense au CTT SIGMA de Clermont-Ferrand par Alesium. Chaque seance alterne theorie et pratique en atelier.</p>
      </div>

      {/* Info banner */}
      <div className="bg-[#1a1d22] border border-[#e8823a]/20 p-6 mb-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { icon: Clock, label: "Duree totale", value: "20 heures" },
          { icon: Target, label: "Seances", value: "10 x 2h" },
          { icon: GraduationCap, label: "Lieu", value: "CTT SIGMA" },
          { icon: Wrench, label: "Procedes", value: "SMAW, MIG, TIG" },
        ].map((info, i) => {
          const Icon = info.icon;
          return (
            <div key={i} className="text-center">
              <Icon size={20} className="text-[#e8823a] mx-auto mb-2" />
              <p className="text-xs text-gray-600 uppercase tracking-wider">{info.label}</p>
              <p className="text-white font-medium mt-1">{info.value}</p>
            </div>
          );
        })}
      </div>

      {/* Sessions */}
      <div className="space-y-4" data-testid="sessions-list">
        {SESSIONS.map((s) => (
          <details key={s.num} className="bg-[#1a1d22] border border-white/5 group" data-testid={`session-${s.num}`}>
            <summary className="flex items-center gap-4 p-6 cursor-pointer hover:bg-white/2 transition-colors duration-200 list-none">
              <span className="font-mono text-[#e8823a] text-2xl font-bold w-10">{String(s.num).padStart(2, '0')}</span>
              <div className="flex-1">
                <h3 className="text-white font-['Bebas_Neue'] text-xl tracking-wider">{s.titre}</h3>
                <span className="text-gray-600 text-xs">{s.duree}</span>
              </div>
              <div className="text-gray-600 group-open:rotate-180 transition-transform duration-200">&#9660;</div>
            </summary>
            <div className="px-6 pb-6 border-t border-white/5 pt-4 ml-14">
              <div className="mb-4">
                <span className="text-[#e8823a] text-xs font-semibold uppercase tracking-wider">Objectifs</span>
                <ul className="mt-2 space-y-1">
                  {s.objectifs.map((o, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600 text-xs uppercase tracking-wider">Equipement</span>
                  <p className="text-gray-400 text-sm mt-1">{s.equipement}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-xs uppercase tracking-wider">Evaluation</span>
                  <p className="text-gray-400 text-sm mt-1">{s.eval}</p>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* EPI reminder */}
      <div className="mt-16 bg-[#e8823a]/10 border border-[#e8823a]/30 p-6">
        <h3 className="text-white font-['Bebas_Neue'] text-lg tracking-wider mb-2">Rappel EPI — Obligatoire a chaque seance</h3>
        <p className="text-gray-400 text-sm">Cagoule de soudage, gants cuir, bleu de travail coton, chaussures de securite S3, lunettes de meulage, bouchons d'oreilles. Sans EPI complet = pas d'acces a l'atelier.</p>
      </div>

      {/* Contact */}
      <div className="mt-8 bg-[#1a1d22] border border-white/5 p-6">
        <h3 className="text-white font-['Bebas_Neue'] text-lg tracking-wider mb-2">Contact & informations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 text-xs uppercase">Organisme</span>
            <p className="text-gray-400 mt-1">CTT SIGMA — Clermont-Ferrand</p>
          </div>
          <div>
            <span className="text-gray-600 text-xs uppercase">Intervenant</span>
            <p className="text-gray-400 mt-1">Alesium — Maxence Pereira</p>
            <a href="https://www.alesium.fr" target="_blank" rel="noopener noreferrer" className="text-[#e8823a] text-xs hover:underline">www.alesium.fr</a>
          </div>
        </div>
      </div>
    </div>
  );
}
