import { Wrench } from "lucide-react";

const OUTILS = [
  { cat: "Meuleuses d'angle", items: ["115 mm : finitions, chanfreins legers, espaces etroits (800-1000W)", "125 mm : usage courant, ebavurage, meulage (1000-1400W)", "180/230 mm : tronconnage lourd, gros chanfreins (2000-2600W)", "Disques : tronconnage (1mm acier, 1.6mm inox), ebauchage (6mm), lamelles (finition), brosse metallique"] },
  { cat: "Scies", items: ["Scie a ruban metal : coupes precises, lames bimetalliques, TPI adapte a l'epaisseur", "Scie circulaire metal (scie a froid) : lames TCT, coupes nettes sans bavure", "Importance du TPI : section pleine = 10-14 TPI, tubes = 18-24 TPI"] },
  { cat: "Percage", items: ["Perceuse a colonne : precis, taraudage possible avec accessoire", "Perceuse magnetique : pour profiles lourds et toles horizontales", "Fraises carbure pour inox et aciers allies", "Lubrification obligatoire pour les inox et aluminiums"] },
  { cat: "Formage et pliage", items: ["Presse plieuse : pliage toles, rayon minimal = epaisseur pour acier doux", "Rouleuse (cintreuse a rouleaux) : pour cintrer des toles en cylindre ou cone", "Cintreuse a galets : pour tubes et profiles creux", "Retour elastique : toujours cintrer/plier un peu plus que l'angle final souhaite"] },
  { cat: "Decoupe", items: ["Cisaille guillotine : decoupe droite, epaisseur max selon matiere et machine", "Poinconneuse / grignoteuse : decoupes complexes en tole", "Chalumeau oxycoupage : decoupe thermique acier carbone uniquement", "Decoupe plasma portable : acier, inox, alu, epaisseur selon amperage"] },
  { cat: "Tracage et mesure", items: ["Trusquin : tracage parallele sur marbre", "Equerre de soudeur : 90° avec talon magnetique", "Niveau laser : alignement sur longues distances", "Metre ruban acier : precision +/- 1mm sur 5m", "Marbre de tracage / de soudage : surface de reference plane"] },
  { cat: "Controle", items: ["Pied a coulisse : precision 0.02mm, mesure epaisseurs et diametres", "Jauge de soudage (jauge de Pied) : mesure gorge, surépaisseur, desalignement", "Bleu de methylene : controle etancheite joints (avec pression)", "Miroir d'inspection : controle visuel des zones inaccessibles"] },
];

export default function OutilsPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="outils-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Wrench size={14} /> Chapitre 9</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Outils & outillage</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">L'atelier du soudeur ne se limite pas au poste de soudage. Meuleuses, scies, perceuses, presses, outils de mesure : voici l'outillage complet d'un atelier de metallerie.</p>
      </div>

      {/* Images outils */}
      <div className="mb-16 grid grid-cols-3 gap-2">
        <div className="aspect-square overflow-hidden border border-white/5">
          <img src="https://images.pexels.com/photos/4315560/pexels-photo-4315560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Meuleuse d'angle en action sur metal" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square overflow-hidden border border-white/5">
          <img src="https://images.unsplash.com/photo-1513206837745-ad29c1493bc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3b3Jrc2hvcCUyMGdyaW5kZXIlMjBjYWxpcGVyfGVufDB8fHx8MTc3MzE3NDkwNHww&ixlib=rb-4.1.0&q=85" alt="Meuleuse d'angle et disques" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square overflow-hidden border border-white/5">
          <img src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx3ZWxkaW5nJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3b3Jrc2hvcCUyMGdyaW5kZXIlMjBjYWxpcGVyfGVufDB8fHx8MTc3MzE3NDkwNHww&ixlib=rb-4.1.0&q=85" alt="Serre-joints et brides de fixation industriels" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="space-y-8">
        {OUTILS.map((cat, i) => (
          <div key={i} className="bg-[#1a1d22] border border-white/5 p-6" data-testid={`outil-cat-${i}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[#e8823a] text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-xl text-white font-['Bebas_Neue'] tracking-wider">{cat.cat}</h3>
            </div>
            <ul className="space-y-2 ml-8">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Image atelier */}
      <div className="mt-16 grid grid-cols-2 gap-2">
        <div className="aspect-video overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/6-supression-des-jeux-mcanique-dans-robot-parrallle-3-axe/2f.JPG" alt="Atelier Alesium - robot parallele" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="aspect-video overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/2-fabrication-dune-ligne-de-production/1b.jpg" alt="Ligne de production - Alesium" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
}
