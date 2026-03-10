import { ShieldAlert, Eye, Hand, Shirt, Footprints, Ear, Wind, AlertTriangle, Flame } from "lucide-react";

const EPI_ITEMS = [
  {
    icon: Eye,
    title: "Casque / Cagoule de soudage",
    desc: "Protection oculaire et faciale contre le rayonnement UV/IR de l'arc.",
    details: [
      "Auto-obscurcissant : teinte passe de DIN 3-4 a DIN 9-13 en < 0.1 ms",
      "Passif : filtre fixe, moins cher mais moins pratique",
      "Teinte recommandee : DIN 10-11 pour SMAW/MIG, DIN 9-10 pour TIG basse intensite, DIN 12-13 pour plasma/arc gougeage",
      "Champ de vision : minimum 95 x 45 mm, idealement 100 x 60 mm",
      "Norme : EN 379 (filtres auto), EN 175 (casques de soudage)",
    ],
    errors: "Ne jamais regarder un arc meme une fraction de seconde sans protection. Les coups d'arc (photokératite) provoquent des douleurs intenses 4 a 8h apres exposition."
  },
  {
    icon: Hand,
    title: "Gants de soudage",
    desc: "Protection thermique et mecanique des mains.",
    details: [
      "Cuir bovin ou porcin epais, manchettes longues (15-35 cm)",
      "TIG : gants fins en chevre pour la dexterite",
      "MIG/SMAW : gants epais avec renfort pouce et index",
      "Resistance thermique : EN 407, niveau 4 minimum pour chaleur de contact",
      "Ne jamais utiliser de gants humides (risque vapeur/brulure)",
    ],
    errors: "Les debutants utilisent souvent des gants trop fins ou des gants de jardinage. Investir dans de vrais gants de soudage."
  },
  {
    icon: Shirt,
    title: "Vetements de protection",
    desc: "Coton ou tissu ignifuge (FR), pas de synthetique.",
    details: [
      "Bleu de travail en coton epais ou tissu FR (flame retardant)",
      "INTERDICTION ABSOLUE de synthetique (polyester, nylon) : fond sur la peau",
      "En dessous : jean + t-shirt coton. Jamais de vetement en matiere synthetique",
      "Pas de poches ouvertes orientees vers le haut (projection de scories brulantes)",
      "Col ferme, manches longues baissees, pas de revers de pantalon",
      "Tablier cuir pour soudage en position (PF, PE, overhead)",
    ],
    errors: "Le plus dangereux : porter un t-shirt synthetique sous le bleu. En cas de projection, le synthetique fond et colle a la peau."
  },
  {
    icon: Footprints,
    title: "Chaussures de securite",
    desc: "Anti-ecrasement, antistatique, resistant a la chaleur.",
    details: [
      "Norme : EN ISO 20345, categorie S3 minimum",
      "Embout acier ou composite (200J anti-ecrasement)",
      "Semelle anti-perforation, resistante a la chaleur (300°C contact)",
      "Montantes de preference (protection chevilles contre projections)",
      "Antistatiques pour eviter les decharges dans les environnements ATEX",
    ],
    errors: "Les chaussures de ville ou baskets n'offrent aucune protection. Les projections de metal en fusion traversent le cuir mince."
  },
  {
    icon: Eye,
    title: "Lunettes de protection",
    desc: "Pour le meulage, distinctes de la cagoule de soudage.",
    details: [
      "Norme EN 166 : resistance mecanique F (faible), B (moyenne) ou A (haute vitesse)",
      "A porter systematiquement pour : meulage, brossage, piquage du laitier, tronconnage",
      "Branches laterales ou coques laterales pour proteger des projections laterales",
      "Ne pas confondre avec la protection de soudage : les lunettes de meulage ne protegent PAS de l'arc",
    ],
    errors: "Beaucoup de debutants oublient les lunettes quand ils piquent le laitier apres une soudure SMAW. Les eclats de laitier sont projetés a grande vitesse."
  },
  {
    icon: Ear,
    title: "Protection auditive",
    desc: "Bouchons ou casque anti-bruit pour le meulage et les environnements bruyants.",
    details: [
      "Meulage d'angle : 95-110 dB(A) — au-dessus du seuil de douleur",
      "Seuil de danger : 85 dB(A) pour 8h (Code du travail)",
      "Bouchons mousse : attenuation SNR 25-35 dB, jetables",
      "Casque anti-bruit : SNR 25-32 dB, reutilisable, plus confortable",
      "Port obligatoire des l'utilisation de meuleuses, marteaux, poinconneuses",
    ],
    errors: "Les pertes auditives sont irreversibles et cumulatives. Les debutants sous-estiment systematiquement le bruit en atelier."
  },
  {
    icon: Wind,
    title: "Ventilation & aspiration des fumees",
    desc: "Les fumees de soudage sont toxiques — ventilation obligatoire.",
    details: [
      "Fumees de zinc (acier galvanise) : fievre des fondeurs, syndrome grippal grave",
      "Chrome VI (soudage inox) : cancerigene avere, classe 1 CIRC",
      "Fumees d'aluminium : risque pulmonaire chronique",
      "Manganese (acier standard) : neurotoxique a forte exposition",
      "Solutions : torche aspirante, hotte d'aspiration locale, ventilation generale",
      "VMC et table aspirante pour ateliers fermes",
      "Port d'un masque FFP2/FFP3 si aspiration insuffisante",
    ],
    errors: "Souder de l'inox ou du galvanise sans aspiration est extremement dangereux. Les effets ne sont pas immediats mais cumulatifs."
  },
  {
    icon: Flame,
    title: "Prevention incendie",
    desc: "Extincteur, couverture anti-feu, zone degagee.",
    details: [
      "Extincteur CO2 a portee de main (pas de poudre sur les postes electroniques)",
      "Couverture anti-feu pour etouffer un depart de feu localise",
      "Zone de soudage degagee : pas de materiaux inflammables dans un rayon de 10 m",
      "Permis de feu obligatoire en intervention hors atelier (chantier, maintenance)",
      "Verification 2h apres soudage (feu couvant possible dans les isolants)",
    ],
    errors: "Les projections de SMAW peuvent projeter des scories brulantes a 3-4 metres. Toujours verifier l'environnement avant d'amorcer."
  },
  {
    icon: AlertTriangle,
    title: "Regles d'atelier et risque electrique",
    desc: "Balisage, cables, risque electrique, zone de projection.",
    details: [
      "Balisage du poste : rideaux de soudage pour proteger les collegues",
      "Cables au sol : risque de chute, les ranger ou les suspendre",
      "Risque electrique : tension a vide 40-90V selon les postes — potentiellement mortel en milieu humide",
      "Masse correctement raccordee, cable en bon etat (pas de cuivre apparent)",
      "Ne jamais souder sur un recipient ferme (risque explosion)",
      "Signaletique ISO 7010 obligatoire : pictogrammes danger, EPI, interdictions",
    ],
    errors: "Le risque electrique est sous-estime. En milieu humide (sueur, pluie), la tension a vide d'un poste de soudage peut etre letale."
  },
];

export default function SecuritePage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="securite-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2">
          <ShieldAlert size={14} /> Chapitre obligatoire
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Securite & EPI</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      {/* Warning banner */}
      <div className="bg-[#e8823a]/10 border border-[#e8823a]/30 p-6 mb-16 flex items-start gap-4" data-testid="safety-warning">
        <AlertTriangle size={24} className="text-[#e8823a] flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-white text-lg font-['Bebas_Neue'] tracking-wider mb-2">Securite non negociable</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ce chapitre est le premier du module pour une raison simple : en soudage, un accident peut etre
            irreversible (perte de vision, brulure profonde, intoxication). Chaque regle existe parce que
            quelqu'un a ete blesse. Appliquez-les systematiquement, sans exception.
          </p>
        </div>
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed">
          On soude avec des temperatures de 3 000 a 20 000°C, des rayonnements UV intenses, des fumees
          toxiques et du courant electrique. La maitrise des EPI (Equipements de Protection Individuelle) est
          la condition prealable a toute activite de soudage. Voici la liste complete.
        </p>
      </div>

      {/* EPI Cards */}
      <div className="space-y-8" data-testid="epi-list">
        {EPI_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-[#1a1d22] border border-white/5 overflow-hidden group hover:border-[#e8823a]/20 transition-colors duration-300"
              data-testid={`epi-item-${i}`}
            >
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#e8823a]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#e8823a]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-['Bebas_Neue'] tracking-wider">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>

                <ul className="space-y-2 ml-14 mb-4">
                  {item.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="ml-14 bg-[#0f1012] border-l-2 border-[#f5a623] p-4">
                  <span className="text-[#f5a623] text-xs font-semibold tracking-wider uppercase">Erreur frequente</span>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.errors}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Video */}
      <div className="mt-16">
        <h2 className="text-3xl text-white mb-6">Video : EPI du soudeur</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/uM05J-rPKbI"
            title="EPI du soudeur - equipements de protection"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
