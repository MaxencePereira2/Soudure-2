import { Thermometer } from "lucide-react";

export default function DeformationPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="deformation-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Thermometer size={14} /> Phenomene thermique</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Deformation des pieces</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">La deformation est l'ennemi numero un du soudeur. Le metal se dilate quand il chauffe et se contracte en refroidissant. Ce cycle cree des contraintes internes et des deformations qui peuvent rendre une piece inutilisable. Comprendre et anticiper ces phenomenes est essentiel.</p>
      </div>

      {/* Image */}
      <div className="mb-16 aspect-video overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMGRlZm9ybWF0aW9uJTIwd2FycGluZyUyMHN0ZWVsJTIwd2VsZGluZyUyMGhlYXR8ZW58MHx8fHwxNzczMTczMjAzfDA&ixlib=rb-4.1.0&q=85" alt="Deformation thermique en soudage" className="w-full h-full object-cover" />
      </div>

      {/* Types de deformations */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Types de deformations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { type: "Retrait longitudinal", desc: "Le cordon se contracte dans sa longueur. La piece se raccourcit dans le sens du soudage. Typique : 0.5-2mm par metre de cordon." },
            { type: "Retrait transversal", desc: "Le cordon se contracte perpendiculairement a lui-meme. Les bords du joint se rapprochent. Plus marque sur les joints bout a bout avec chanfrein en V." },
            { type: "Flexion (angular distortion)", desc: "Deformation angulaire quand le cordon n'est pas centre sur l'axe neutre. Le cote soude se contracte plus que le cote oppose. Forme de banane." },
            { type: "Gauchissement (buckling)", desc: "Deformation des toles fines soumises a des contraintes de compression. La tole ondule. Typique en soudage de toles < 3mm." },
            { type: "Vrillage (twisting)", desc: "Torsion de la piece quand les retraits ne sont pas symetriques. Frequent sur les profiles longs et asymetriques." },
            { type: "Flambage local", desc: "Deformation localisee autour d'un cordon sur tole fine. Bosses ou creux visibles. Difficile a reprendre sans redressage thermique." },
          ].map((d, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider mb-2">{d.type}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facteurs */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Facteurs aggravants</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <ul className="space-y-3">
            {[
              "Apport thermique eleve : plus on chauffe, plus on deforme. SMAW deforme plus que TIG a section egale.",
              "Epaisseur faible : les toles fines (< 3mm) deforment beaucoup plus facilement que les toles epaisses.",
              "Volume de soudure important : un chanfrein en V large = beaucoup de metal depose = beaucoup de retrait.",
              "Nombre de passes : chaque passe ajoute du retrait. Les soudures multi-passes deforment plus que les mono-passes.",
              "Asymetrie : un cordon d'un seul cote = flexion garantie. Toujours chercher la symetrie.",
              "Materiau : l'acier inoxydable se deforme beaucoup plus que l'acier carbone (conductivite thermique 3x plus faible).",
              "Absence de bridage : sans contrainte mecanique, la piece est libre de se deformer.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Techniques de prevention */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Techniques de prevention</h2>
        <div className="space-y-4">
          {[
            { technique: "Bridage rigide", desc: "Maintenir les pieces dans la position souhaitee avec des brides, equerres et gabarits sur le marbre. Le bridage force le retrait a se convertir en contraintes residuelles plutot qu'en deformations." },
            { technique: "Pre-deformation (pre-set)", desc: "Deformer volontairement la piece dans le sens oppose AVANT de souder. Apres refroidissement, le retrait ramene la piece a la cote souhaitee. Demande de l'experience." },
            { technique: "Sequence de soudage equilibree", desc: "Alterner les cordons de chaque cote de l'axe neutre. Souder en pas de pelerin (backstep). Du centre vers les extremites. Jamais d'un bout a l'autre en continu." },
            { technique: "Minimiser le volume de soudure", desc: "Gorge minimale suffisante (pas de sur-dimensionnement). Chanfrein en X plutot qu'en V (symetrique). Soudures intermittentes si possible." },
            { technique: "Prechauffage uniforme", desc: "Reduire le gradient thermique en prechauffant la zone. Moins de difference de temperature = moins de contraintes differentielles." },
            { technique: "Choix du procede", desc: "TIG < MIG < SMAW en termes d'apport thermique a section de cordon egale. Le laser deforme le moins. Adapter le procede au risque de deformation." },
            { technique: "Refroidissement controle", desc: "Ne pas refroidir trop vite (trempe = durete + fissures). Ne pas refroidir a l'eau sauf aluminium. Laisser la piece se refroidir lentement et uniformement." },
          ].map((t, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-5">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[#e8823a] text-sm font-bold mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-white font-medium mb-1">{t.technique}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redressage */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Redressage apres soudage</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Quand la prevention n'a pas suffi, on peut redresser :</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { methode: "Redressage mecanique", desc: "Presse, verins hydrauliques, marteau. Force brute pour remettre en forme. Risque de plastification et de marquage." },
              { methode: "Redressage thermique (chaude de retrait)", desc: "Chauffer localement (chalumeau, 600-700°C pour acier) une zone precise. Le refroidissement contracte cette zone et redresse la piece. Art qui demande de l'experience." },
              { methode: "Detensionnement thermique (PWHT)", desc: "Traitement thermique global : monter a 580-620°C, maintenir 1h par 25mm d'epaisseur, refroidir lentement. Relaxe les contraintes residuelles sans modifier la geometrie." },
              { methode: "Vibration (stress relief)", desc: "Alternative au PWHT : faire vibrer la piece a sa frequence propre pour relaxer les contraintes. Moins efficace que le PWHT mais beaucoup moins cher." },
            ].map((m, i) => (
              <div key={i} className="border-l-2 border-[#e8823a] pl-4">
                <h4 className="text-white text-sm font-semibold mb-2">{m.methode}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <h2 className="text-3xl text-white mb-6">Video : Deformation et retrait en soudage</h2>
        <div className="video-container"><iframe src="https://www.youtube.com/embed/MKl4No20zd0" title="Deformation en soudage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </div>
    </div>
  );
}
