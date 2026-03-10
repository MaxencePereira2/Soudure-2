import { Box } from "lucide-react";

export default function MecanoPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="mecano-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Box size={14} /> Assemblage</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Mecano-assemblage</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Le mecano-assemblage (ou mecano-soudage) designe la fabrication d'un ensemble metallique par assemblage de pieces elementaires decoupees, pliees, puis soudees. C'est le processus complet qui transforme des toles brutes en structure finie.</p>
      </div>

      {/* Image galerie */}
      <div className="mb-16 grid grid-cols-3 gap-2">
        <div className="aspect-square overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/1-optimisation-du-temps-de-fabrication-descalier-en-acier/1a.png" alt="Escalier mecano-soude - Alesium" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="aspect-square overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/4-conception-et-fabrication-dune-cintreuse-galets-manuelle/1d.jpeg" alt="Cintreuse mecano-assemblee - Alesium" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="aspect-square overflow-hidden border border-white/5">
          <img src="https://www.alesium.fr/assets/projets/3-dveloppement-dun-cadre-de-vtt-de-descente/1c.png" alt="Cadre VTT soude - Alesium" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Flux de production */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Flux de production typique</h2>
        <div className="space-y-3">
          {[
            { etape: "Debit / Decoupe", desc: "Decoupe laser, plasma ou cisaille des pieces elementaires a partir des toles brutes. Chaque piece est identifiee par un repere (nomenclature)." },
            { etape: "Pliage / Formage", desc: "Les pieces qui necessitent un pliage passent a la presse plieuse CNC. Cintrage, roulage si necessaire." },
            { etape: "Preparation", desc: "Ebavurage des chants, chanfreinage si soudure bout a bout, degraissage, tracage des positions d'assemblage." },
            { etape: "Montage / Pointage", desc: "Positionnement des pieces sur le marbre ou gabarit. Pointage (petits cordons de fixation) pour figer la geometrie. Controle dimensionnel." },
            { etape: "Soudage", desc: "Realisation des cordons definitifs selon le plan et le WPS. Respect de la sequence pour minimiser les deformations." },
            { etape: "Controle", desc: "Controle visuel, dimensionnel (pied a coulisse, metre, gabarit). CND si exige (ressuage, UT). Comparaison plan vs realite." },
            { etape: "Finition", desc: "Meulage des surépaisseurs si necessaire, piquage laitier (SMAW), brossage. Decapage/passivation pour inox. Peinture, galvanisation ou autre traitement." },
          ].map((e, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-5 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e8823a]/10 flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-[#e8823a] text-lg font-bold">{i + 1}</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{e.etape}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonnes pratiques */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Bonnes pratiques de mecano-assemblage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { titre: "Ordre de montage", desc: "Toujours definir l'ordre d'assemblage AVANT de commencer. Du chassis principal vers les details. Les elements structurels d'abord, les renforts ensuite, les accessoires en dernier." },
            { titre: "Pointage intelligent", desc: "Les points de soudure doivent etre suffisamment solides pour maintenir la piece mais suffisamment petits pour ne pas creer de defauts. 10-15mm de long, meme intensite que la soudure finale." },
            { titre: "Controle inter-etapes", desc: "Ne pas attendre la fin pour controler. Verifier les cotes critiques apres chaque sous-ensemble. Plus facile de corriger une piece que l'ensemble fini." },
            { titre: "Gestion des tolerances", desc: "Les tolerances s'accumulent. 5 pieces a +0.5mm chacune = 2.5mm d'ecart potentiel a la fin. Definir les references de cotation et les surfaces d'appui." },
            { titre: "Sequence anti-deformation", desc: "Souder en alternant les cotes, du centre vers l'exterieur, en pas de pelerin. Ne jamais souder d'un bout a l'autre en continu sur une longue piece." },
            { titre: "Documentation", desc: "Fiche suiveuse par ensemble : reperes pieces, sequence montage, controles effectues, soudeur, date. Tracabilite obligatoire en EN 1090." },
          ].map((p, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <h3 className="text-white text-sm font-semibold mb-2">{p.titre}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exemples d'ensembles */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Exemples d'ensembles mecano-soudes</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Chassis de machine (frames)",
              "Escaliers et garde-corps metalliques",
              "Bennes et caissons de vehicules",
              "Supports de convoyeurs",
              "Portiques de levage",
              "Structures de batiments metalliques",
              "Chassis de remorques",
              "Cuves et reservoirs (chaudronnerie)",
            ].map((ex, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#e8823a] mt-1.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{ex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Mecano-assemblage</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/TJWKqUycZJE" title="Mecano-assemblage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
