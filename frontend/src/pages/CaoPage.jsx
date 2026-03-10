import { PenTool } from "lucide-react";

export default function CaoPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="cao-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><PenTool size={14} /> Conception</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">CAO specifique soudure</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">La conception d'un ensemble soude commence bien avant l'atelier. La CAO (Conception Assistee par Ordinateur) permet de definir les geometries, les chanfreins, les sequences d'assemblage et d'anticiper les deformations. Un bon dessin evite des heures de reprise.</p>
      </div>

      {/* Image */}
      <div className="mb-16 aspect-video overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxDQUQlMjBDQU0lMjAzRCUyMG1vZGVsJTIwZW5naW5lZXJpbmclMjBtZXRhbHdvcmt8ZW58MHx8fHwxNzczMTczMTk4fDA&ixlib=rb-4.1.0&q=85" alt="Conception CAO pour structures soudees" className="w-full h-full object-cover" />
      </div>

      {/* Logiciels */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Logiciels courants en chaudronnerie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { nom: "SolidWorks", desc: "Le standard en PME metallerie. Module tole, soudure (cordons 3D), mise en plan avec symboles ISO 2553. Excellent pour les ensembles mecano-soudes.", note: "Module Sheet Metal + Weldments" },
            { nom: "Autodesk Inventor", desc: "Concurrent direct de SolidWorks. Environnement cadre soude (Frame Generator), developpement tole integre, simulation de contraintes.", note: "Frame Generator + Sheet Metal" },
            { nom: "CATIA / 3DExperience", desc: "Utilise dans l'aeronautique et l'automobile. Puissant mais complexe. Module Generative Sheet Metal Design.", note: "Grands groupes industriels" },
            { nom: "Fusion 360", desc: "Solution cloud Autodesk, accessible pour les petites structures. Module tole, simulation, FAO integree.", note: "Gratuit pour startups et education" },
            { nom: "TopSolid", desc: "CAO/FAO francaise, tres utilisee en chaudronnerie industrielle. Gestion avancee des toles et tubes.", note: "Solution integree CAO+FAO+ERP" },
            { nom: "FreeCAD", desc: "Open source. Module Sheet Metal et A2plus pour assemblages. Adapte pour la decouverte et les petits projets.", note: "Gratuit et open source" },
          ].map((l, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6 hover:border-[#e8823a]/20 transition-colors duration-300">
              <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-2">{l.nom}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">{l.desc}</p>
              <span className="text-[#e8823a] text-xs font-mono">{l.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Regles de conception */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Regles de conception pour ensembles soudes</h2>
        <div className="space-y-4">
          {[
            { regle: "Accessibilite de la torche", desc: "Toujours verifier qu'un soudeur (ou un robot) peut physiquement acceder au joint. Angle minimum de 45° entre la torche et la piece. Eviter les zones confinees ou la cagoule ne passe pas." },
            { regle: "Choix du type de joint", desc: "Privilegier les joints bout a bout pour les efforts principaux. Les joints en T et en angle pour les raidisseurs et liaisons secondaires. Le recouvrement est le moins resistant." },
            { regle: "Symetrie des soudures", desc: "Repartir les cordons symetriquement autour de l'axe neutre pour minimiser les deformations. Un cordon d'un seul cote = flexion garantie." },
            { regle: "Epaisseurs compatibles", desc: "Eviter les rapports d'epaisseur superieurs a 3:1 sur un meme joint. Au-dela, prevoir un chanfrein ou une transition progressive." },
            { regle: "Soudures continues vs intermittentes", desc: "Continu = etanche et resistant. Intermittent = plus rapide, moins de deformations, suffisant pour les raidisseurs non etanches." },
            { regle: "Tolerer les retraits", desc: "Prevoir les surcotes de retrait (0.5 a 2 mm selon longueur de cordon). Coter les dimensions finales APRES soudage." },
            { regle: "Symbolique ISO 2553", desc: "Utiliser les symboles de soudage normalises sur les plans. Indiquer : type de joint, gorge, longueur, position, traitement de surface." },
          ].map((r, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[#e8823a] text-sm font-bold mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-white font-medium mb-1">{r.regle}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mise en plan */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Mise en plan d'un ensemble soude</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Un plan de fabrication d'ensemble soude doit contenir :</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[#e8823a] text-xs font-semibold uppercase tracking-wider">Elements obligatoires</span>
              <ul className="mt-2 space-y-2">
                {["Vues d'ensemble avec reperes pieces", "Nomenclature complete (materiaux, epaisseurs, quantites)", "Symboles de soudure ISO 2553 sur chaque joint", "Tolerances geometriques (ISO 13920 classe B ou C)", "Cotes fonctionnelles apres soudage", "Notes de fabrication (sequence de soudage si critique)"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[#e8823a] text-xs font-semibold uppercase tracking-wider">Elements recommandes</span>
              <ul className="mt-2 space-y-2">
                {["Vue eclatee ou sequence d'assemblage", "Detail des chanfreins avec angles et talons", "Reperage des cordons critiques", "Indication du procede de soudage par joint", "WPS de reference si qualification requise", "Traitement de surface post-soudage"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DFM */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">DFM — Concevoir pour fabriquer</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Le DFM (Design for Manufacturing) applique au soudage signifie concevoir les pieces pour qu'elles soient faciles et economiques a souder :</p>
          <ul className="space-y-3">
            {["Reduire le nombre de pieces : une piece pliee remplace souvent deux pieces soudees", "Standardiser les epaisseurs : eviter les melanges d'epaisseurs inutiles dans un meme ensemble", "Prevoir des locating features : encoches, languettes, emboitements qui facilitent le positionnement sans gabarit", "Minimiser les volumes de soudure : un cordon de gorge a=3mm est 4x moins volumineux qu'un a=6mm", "Penser a la sequence : concevoir pour pouvoir souder dans un ordre logique sans retournement excessif"].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Video */}
      <div>
        <h2 className="text-3xl text-white mb-6">Video : CAO et soudure</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/hRtc4pld0h0" title="CAO et soudure" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
