import { FlaskConical } from "lucide-react";

export default function MetallurgiePage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="metallurgie-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><FlaskConical size={14} /> Chapitre 5</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Metallurgie utile</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">On n'a pas besoin d'etre metallurgiste pour bien souder, mais comprendre ce qui se passe dans le metal pendant et apres la soudure permet d'eviter les erreurs et de comprendre les specifications.</p>
      </div>

      {/* ZAT */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">La Zone Affectee Thermiquement (ZAT)</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">La ZAT est la zone du metal de base qui n'a pas fondu mais dont la microstructure a ete modifiee par la chaleur. C'est souvent le maillon faible du joint soude.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { proc: "TIG", zat: "Etroite (2-4 mm)", note: "Apport thermique faible et controle" },
              { proc: "MIG/MAG", zat: "Moyenne (4-8 mm)", note: "Apport thermique modere" },
              { proc: "SMAW", zat: "Large (5-12 mm)", note: "Apport thermique plus eleve" },
            ].map((z, i) => (
              <div key={i} className="border-l-2 border-[#e8823a] pl-4">
                <h4 className="text-white text-sm font-semibold">{z.proc}</h4>
                <p className="text-[#e8823a] font-mono text-xs mt-1">{z.zat}</p>
                <p className="text-gray-500 text-xs mt-1">{z.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbone equivalent */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Carbone equivalent (Ceq)</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-8">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">Le Ceq predit la soudabilite d'un acier. Formule IIW :</p>
          <div className="bg-[#0f1012] p-4 font-mono text-[#e8823a] text-sm mb-4">
            Ceq = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15
          </div>
          <div className="overflow-x-auto">
            <table className="industrial-table w-full">
              <thead><tr><th>Ceq</th><th>Soudabilite</th><th>Prechauffage</th></tr></thead>
              <tbody>
                <tr><td className="font-mono text-white">&lt; 0.35</td><td>Excellente</td><td>Non requis</td></tr>
                <tr><td className="font-mono text-white">0.35 - 0.50</td><td>Conditionnelle</td><td>50-150°C selon epaisseur</td></tr>
                <tr><td className="font-mono text-white">&gt; 0.50</td><td>Mediocre</td><td>150-300°C obligatoire, electrode basique</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Aciers */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Aciers courants en soudage</h2>
        <div className="space-y-4">
          {[
            { nom: "S235 (EN 10025)", ceq: "~0.20", desc: "Acier de construction courant. Soudabilite excellente. Aucun prechauffage. Le plus utilise en serrurerie et construction metallique." },
            { nom: "S355", ceq: "~0.30", desc: "Acier haute limite elastique. Soudabilite bonne. Precautions pour epaisseurs > 25mm." },
            { nom: "25CD4S / 42CrMo4", ceq: "~0.65", desc: "Acier allie Cr-Mo. Soudabilite conditionnelle. Prechauffage 200-300°C obligatoire. Usage : mecanique, transmission." },
          ].map((a, i) => (
            <div key={i} className="bg-[#1a1d22] border border-white/5 p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="text-lg text-white font-['Bebas_Neue'] tracking-wider">{a.nom}</h3>
                <span className="font-mono text-[#e8823a] text-xs">Ceq {a.ceq}</span>
              </div>
              <p className="text-gray-500 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inox */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Acier inoxydable</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { type: "Austenitique (304/316)", desc: "Le plus courant. Non magnetique. Bonne soudabilite. Risque de sensibilisation (precipitation Cr aux joints de grains entre 450-850°C). Solution : qualite L (bas carbone)." },
              { type: "Ferritique (430)", desc: "Magnetique. Soudabilite limitee (fragilisation). Moins cher que l'austenitique." },
              { type: "Martensitique (410/420)", desc: "Dur, resistant a l'usure. Soudabilite difficile. Prechauffage + PWHT necessaire." },
            ].map((s, i) => (
              <div key={i} className="border-l-2 border-[#e8823a] pl-4">
                <h4 className="text-white text-sm font-semibold mb-2">{s.type}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aluminium */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Aluminium</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">L'aluminium est un metal leger (densite 2.7 vs 7.8 pour l'acier) avec des particularites qui compliquent le soudage :</p>
          <ul className="space-y-2">
            {["Oxyde d'alumine (Al2O3) fond a 2 072°C alors que l'alu fond a 660°C — il faut 'casser' l'oxyde", "Conductivite thermique elevee : la chaleur se dissipe vite, il faut plus d'energie", "TIG en AC obligatoire (la phase positive nettoie l'oxyde)", "MIG en mode pulse recommande pour les toles fines", "Alliages soudables : 1xxx (pur), 5xxx (Al-Mg), 6xxx (Al-Mg-Si) avec precautions", "Alliages NON soudables par fusion : 2xxx (Al-Cu) et 7xxx (Al-Zn) — fissuration a chaud"].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deformation */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Deformation et retrait</h2>
        <div className="bg-[#1a1d22] border border-white/5 p-6">
          <p className="text-gray-400 text-sm mb-4">Le metal se dilate quand il chauffe et se contracte en refroidissant. Cela provoque des deformations et des contraintes residuelles. Strategies :</p>
          <ul className="space-y-2">
            {["Bridage : maintenir les pieces en position pendant le soudage et le refroidissement", "Sequence de soudage : alterner les cordons pour equilibrer les retraits", "Prechauffage : reduit le gradient thermique, donc les contraintes", "PWHT (Post Weld Heat Treatment) : detensionnement (600-650°C pour acier) pour relacher les contraintes"].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 bg-[#e8823a] mt-2 flex-shrink-0" /><span className="text-gray-400 text-sm">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
