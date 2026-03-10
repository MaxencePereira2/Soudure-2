import { Layers } from "lucide-react";

const PROCEDES = [
  { nom: "Soudage laser", principe: "Faisceau laser concentre (CO2 ou fibre) fond le metal. HAZ tres reduite, vitesse elevee.", avantages: "Precision extreme, vitesse, faible deformation, automatisable", limites: "Cout tres eleve, preparation joints critique, epaisseur limitee", applications: "Automobile (carrosserie), medical (implants), electronique, aeronautique" },
  { nom: "Friction-malaxage (FSW)", principe: "Un pion rotatif penetre et malaxe les pieces a l'etat pateux (sans fusion). Soudage en phase solide.", avantages: "Pas de fusion = pas de porosite, pas de fumee, haute resistance", limites: "Formes simples, pieces bridees, equipement specifique", applications: "Aeronautique (alu), spatial (reservoirs), ferroviaire, naval" },
  { nom: "Soudage plasma (PAW)", principe: "Arc TIG confine dans une buse etroite. Jet plasma a > 15 000°C. Energie tres concentree.", avantages: "Penetration superieure au TIG, vitesse plus elevee, arc stable", limites: "Equipement complexe et couteux, reglage delicat", applications: "Tubes, toles fines, passes de racine automatisees, inox" },
  { nom: "Soudage sous flux (SAW)", principe: "L'arc est submerge sous une couche de flux granulaire. Pas de rayonnement visible, pas de projections.", avantages: "Taux de depot tres eleve, qualite constante, pas d'EPI oculaire", limites: "Position a plat uniquement, equipement lourd, non portable", applications: "Chaudronnerie lourde, viroles, poutrelles, construction navale" },
  { nom: "Soudage par resistance (points)", principe: "Deux electrodes compriment les toles et un courant intense les fond localement par effet Joule.", avantages: "Ultra rapide (< 1s/point), pas d'apport, automatisable", limites: "Toles fines uniquement (< 3mm), acces necessaire des deux cotes", applications: "Carrosserie automobile (5 000+ points par voiture), tolerie, electromenager" },
  { nom: "Soudage orbital", principe: "Tete de soudage TIG tourne automatiquement autour d'un tube fixe. Parametres pre-programmes.", avantages: "Repetabilite parfaite, documentation integree, qualite constante", limites: "Investissement eleve, preparation tubes critique", applications: "Pharmacie, nucleaire, semiconducteurs, offshore oil & gas" },
  { nom: "Faisceau d'electrons (EBW)", principe: "Faisceau d'electrons acceleres dans le vide. Densite d'energie extreme.", avantages: "Penetration tres profonde (> 100mm), HAZ minuscule, pas d'atmosphere", limites: "Vide necessaire, cout extreme, taille pieces limitee par chambre", applications: "Aerospatiale, nucleaire, defense, pieces de precision" },
  { nom: "Projection thermique", principe: "Metal fondu ou semi-fondu projete sur une surface. Revetement, pas d'assemblage au sens strict.", avantages: "Rechargement de pieces usees, protection anti-corrosion", limites: "Adherence mecanique (pas metallurgique), epaisseur limitee", applications: "Maintenance industrielle, usure, rechargement d'arbres, turbines" },
];

export default function AutresProcedesPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="autres-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Layers size={14} /> Culture industrielle</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Autres procedes</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Au-dela du SMAW, MIG/MAG et TIG, il existe de nombreux procedes specialises. On ne les pratiquera pas en formation, mais un soudeur cultive doit les connaitre pour comprendre l'industrie.</p>
      </div>

      <div className="space-y-6">
        {PROCEDES.map((p, i) => (
          <div key={i} className="bg-[#1a1d22] border border-white/5 p-6 hover:border-[#e8823a]/20 transition-colors duration-300" data-testid={`procede-${i}`}>
            <div className="flex items-start gap-4">
              <span className="font-mono text-[#e8823a] text-sm font-bold mt-1">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex-1">
                <h3 className="text-xl text-white font-['Bebas_Neue'] tracking-wider mb-3">{p.nom}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.principe}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div><span className="text-green-500 font-semibold block mb-1">Avantages</span><span className="text-gray-500">{p.avantages}</span></div>
                  <div><span className="text-[#f5a623] font-semibold block mb-1">Limites</span><span className="text-gray-500">{p.limites}</span></div>
                  <div><span className="text-[#e8823a] font-semibold block mb-1">Applications</span><span className="text-gray-500">{p.applications}</span></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
