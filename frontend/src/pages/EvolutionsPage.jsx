import { Rocket } from "lucide-react";

const EVOLUTIONS = [
  { titre: "Robotique et automatisation", desc: "Les cellules robotisees (ABB, FANUC, Kuka, Yaskawa) soudent deja la majorite des pieces automobiles. Programmation hors-ligne, capteurs de suivi de joint, multi-passes automatiques. Le robot ne remplace pas le soudeur : il a besoin de parametres optimaux, de WPS, de maintenance.", detail: "Un soudeur qui comprend la robotique a un avantage competitif enorme sur le marche du travail." },
  { titre: "Cobotique soudage", desc: "Les cobots (Universal Robots, FANUC CRX) equipés de torches MIG/TIG permettent aux PME d'automatiser sans expertise robotique. Le soudeur guide le bras, le cobot reproduit. Enseignement collaboratif, pas de cage de protection.", detail: "Solution ideale pour les petites series : flexibilite d'un soudeur, repetabilite d'un robot." },
  { titre: "Intelligence artificielle", desc: "L'IA analyse en temps reel : camera thermique pour detecter les defauts pendant le soudage, ajustement automatique des parametres selon les conditions, controle qualite visuel automatise post-soudage.", detail: "Fronius, Lincoln Electric, ESAB investissent massivement dans l'IA appliquee au soudage." },
  { titre: "Realite virtuelle pour formation", desc: "Les simulateurs VR (Lincoln Electric VRTEX, Fronius Virtual Welding, Soldamatic) permettent de s'entrainer sans consommables, sans risque et avec un feedback immediat. Tracking des gestes, score de qualite.", detail: "Le cout de formation est divise par 3 a 5 par rapport a la formation sur metal reel." },
  { titre: "Soudage additif (WAAM)", desc: "Wire Arc Additive Manufacturing : on soude couche par couche pour creer des pieces 3D directement a partir d'un modele CAO. Pieces de grande dimension (> 1 metre), materiaux varies (acier, inox, titane, alu).", detail: "Applications : aerospatial (supports moteur), naval (helices), energie (pieces de rechange sur site)." },
  { titre: "Green welding", desc: "Reduction des emissions de fumees, gaz de protection alternatifs (reduction du CO2), electrodes sans chrome VI, optimisation energetique des postes. Le soudage durable est un enjeu industriel majeur.", detail: "La directive REACH impose la reduction progressive des substances dangereuses dont le chrome hexavalent." },
  { titre: "Industrie 4.0 et tracabilite", desc: "Postes connectes (IoT) qui enregistrent chaque parametre de chaque cordon. Passeport soudeur digital. Integration MES (Manufacturing Execution System). Tracabilite complete de la production.", detail: "Chaque soudure est documentee automatiquement : qui, quand, avec quels parametres, sur quelle piece." },
  { titre: "Soudage dans l'espace", desc: "Des experiences de soudage ont ete menees sur l'ISS. Contraintes : microgravite (le bain flotte), vide spatial, contamination. L'ESA et la NASA etudient le soudage pour la maintenance in-situ et la construction dans l'espace.", detail: "La fabrication additive metallique en microgravite est un des grands defis de l'exploration spatiale." },
];

export default function EvolutionsPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="evolutions-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Rocket size={14} /> Chapitre 12</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Evolutions & futur</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Le soudage evolue a grande vitesse. Robotique, intelligence artificielle, realite virtuelle, fabrication additive : le metier de soudeur se transforme profondement. Comprendre ces evolutions, c'est preparer sa carriere.</p>
      </div>

      <div className="space-y-6">
        {EVOLUTIONS.map((e, i) => (
          <div key={i} className="bg-[#1a1d22] border border-white/5 p-6 hover:border-[#e8823a]/20 transition-colors duration-300" data-testid={`evolution-${i}`}>
            <div className="flex items-start gap-4">
              <span className="font-mono text-[#e8823a] text-sm font-bold mt-1">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex-1">
                <h3 className="text-xl text-white font-['Bebas_Neue'] tracking-wider mb-3">{e.titre}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{e.desc}</p>
                <div className="bg-[#0f1012] border-l-2 border-[#e8823a] p-3">
                  <p className="text-gray-500 text-xs leading-relaxed italic">{e.detail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="mt-16">
        <h2 className="text-3xl text-white mb-6">Video : L'avenir du soudage</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/t6NHwhdF_1c" title="L'avenir du soudage industriel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>

      {/* Conclusion */}
      <div className="mt-16 bg-[#1a1d22] border border-[#e8823a]/20 p-8">
        <h2 className="text-3xl text-white mb-4">Le soudeur de demain</h2>
        <p className="text-gray-400 leading-relaxed">Le soudeur de demain n'est pas un operateur qui sera remplace par un robot. C'est un technicien qualifie qui comprend les procedes, maitrise les parametres, lit les normes, programme les cobots et interprete les donnees qualite. La demande mondiale de soudeurs qualifies ne cesse d'augmenter. C'est un metier d'avenir, a condition de se former en continu.</p>
        <div className="mt-6 flex items-center gap-4">
          <img src="https://www.alesium.fr/assets/logos/logo-alesium.png" alt="Alesium" className="h-6 brightness-200 invert opacity-50" />
          <span className="text-xs text-gray-600">Formation dispensee par Alesium — CTT SIGMA Clermont-Ferrand</span>
        </div>
      </div>
    </div>
  );
}
