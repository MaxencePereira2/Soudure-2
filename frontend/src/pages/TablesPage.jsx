import { useState } from "react";
import { Table2, Search } from "lucide-react";

const SMAW_DATA = [
  { type: "E6013 (rutile)", diam: "2.0", imin: 40, imax: 80, polarite: "AC/DC+", position: "Toutes", usage: "Toles fines, serrurerie" },
  { type: "E6013 (rutile)", diam: "2.5", imin: 50, imax: 100, polarite: "AC/DC+", position: "Toutes", usage: "Polyvalent" },
  { type: "E6013 (rutile)", diam: "3.2", imin: 80, imax: 130, polarite: "AC/DC+", position: "Toutes", usage: "Usage courant" },
  { type: "E6013 (rutile)", diam: "4.0", imin: 120, imax: 180, polarite: "AC/DC+", position: "PA, PB", usage: "Remplissage" },
  { type: "E7018 (basique)", diam: "2.5", imin: 60, imax: 100, polarite: "DC+", position: "Toutes", usage: "Haute resilience" },
  { type: "E7018 (basique)", diam: "3.2", imin: 90, imax: 140, polarite: "DC+", position: "Toutes", usage: "Construction, pression" },
  { type: "E7018 (basique)", diam: "4.0", imin: 130, imax: 190, polarite: "DC+", position: "PA, PB, PF", usage: "Epaisseurs > 8mm" },
  { type: "E6010 (cellulosique)", diam: "3.2", imin: 80, imax: 120, polarite: "DC+", position: "Toutes", usage: "Pipeline, racine" },
];

const MIGMAG_DATA = [
  { ep: "1", fil: "0.6", tension: "15-17", vitFil: "3-5", debit: "8-10", gaz: "Ar+18%CO2" },
  { ep: "2", fil: "0.8", tension: "17-19", vitFil: "4-7", debit: "10-12", gaz: "Ar+18%CO2" },
  { ep: "3", fil: "0.8", tension: "18-21", vitFil: "6-9", debit: "12-14", gaz: "Ar+18%CO2" },
  { ep: "5", fil: "1.0", tension: "20-24", vitFil: "7-10", debit: "14-16", gaz: "Ar+18%CO2" },
  { ep: "8", fil: "1.0", tension: "23-27", vitFil: "8-12", debit: "14-16", gaz: "Ar+18%CO2" },
  { ep: "10", fil: "1.2", tension: "25-30", vitFil: "8-14", debit: "16-18", gaz: "Ar+18%CO2" },
];

const TIG_DATA = [
  { ep: "0.8", tungst: "1.0", bag: "1.0", intensite: "15-30", debit: "5-6", mat: "Acier/Inox" },
  { ep: "1.5", tungst: "1.6", bag: "1.6", intensite: "30-60", debit: "6-7", mat: "Acier/Inox" },
  { ep: "2", tungst: "1.6", bag: "2.0", intensite: "50-80", debit: "7-8", mat: "Acier/Inox" },
  { ep: "3", tungst: "2.4", bag: "2.4", intensite: "80-120", debit: "8-10", mat: "Acier/Inox" },
  { ep: "5", tungst: "3.2", bag: "3.2", intensite: "130-180", debit: "10-12", mat: "Acier/Inox" },
  { ep: "2", tungst: "1.6", bag: "2.4 (4043)", intensite: "60-90", debit: "8-10", mat: "Aluminium (AC)" },
  { ep: "3", tungst: "2.4", bag: "2.4 (5356)", intensite: "90-130", debit: "10-12", mat: "Aluminium (AC)" },
];

const DEFAUTS_DATA = [
  { defaut: "Porosites", proc: "Tous", causes: "Humidite, metal sale, gaz insuffisant, vent", correction: "Nettoyer, secher electrodes, augmenter debit gaz, proteger" },
  { defaut: "Manque de fusion", proc: "Tous", causes: "I trop faible, vitesse trop rapide, angle incorrect", correction: "Augmenter I, ralentir, corriger angle" },
  { defaut: "Fissures a chaud", proc: "Tous", causes: "Bridage excessif, refroidissement rapide, composition", correction: "Prechauffer, bridage souple, metal d'apport adapte" },
  { defaut: "Fissures a froid", proc: "SMAW/MAG", causes: "Hydrogene, Ceq eleve, contraintes", correction: "Electrode basique, prechauffage, postgaz" },
  { defaut: "Inclusion laitier", proc: "SMAW", causes: "Nettoyage incomplet entre passes", correction: "Piquer et brosser soigneusement" },
  { defaut: "Inclusion tungstene", proc: "TIG", causes: "Contact tungstene/bain", correction: "Maintenir distance, reaffuter" },
  { defaut: "Morsures", proc: "Tous", causes: "I trop elevee, vitesse irreguliere", correction: "Reduire I, maintenir temps aux bords" },
  { defaut: "Exces de penetration", proc: "Tous", causes: "I trop elevee, ouverture trop large, talon trop fin", correction: "Reduire I, ajuster geometrie joint" },
];

const FilterableTable = ({ title, data, columns, filterKey }) => {
  const [filter, setFilter] = useState("");
  const filtered = data.filter(row =>
    Object.values(row).some(v => String(v).toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="mb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-3xl text-white">{title}</h2>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Filtrer..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#0f1012] border border-white/10 focus:border-[#e8823a] text-white text-sm pl-9 pr-4 py-2 w-64 outline-none placeholder:text-gray-600 transition-colors duration-200"
            data-testid={`filter-${filterKey}`}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="industrial-table w-full" data-testid={`table-${filterKey}`}>
          <thead>
            <tr>{columns.map((col, i) => <th key={i}>{col.label}</th>)}</tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i}>
                {columns.map((col, j) => (
                  <td key={j} className={j === 0 ? "text-white font-medium" : col.mono ? "font-mono" : ""}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={columns.length} className="text-center text-gray-600 py-8">Aucun resultat</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function TablesPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-5xl" data-testid="tables-page">
      <div className="mb-16">
        <span className="text-[#e8823a] text-sm tracking-[0.3em] uppercase font-semibold flex items-center gap-2"><Table2 size={14} /> Reference</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mt-4">Tables & fiches pratiques</h1>
        <div className="w-16 h-0.5 bg-[#e8823a] mt-6" />
      </div>

      <div className="section-intro mb-16">
        <p className="text-gray-400 leading-relaxed text-lg">Tables de parametres de reference, filtrables et consultables rapidement en atelier. Utilisez le champ de recherche pour trouver rapidement l'information.</p>
      </div>

      <FilterableTable
        title="Parametres SMAW par electrode"
        filterKey="smaw"
        data={SMAW_DATA}
        columns={[
          { key: "type", label: "Type electrode" },
          { key: "diam", label: "Diam. (mm)", mono: true },
          { key: "imin", label: "I min (A)", mono: true },
          { key: "imax", label: "I max (A)", mono: true },
          { key: "polarite", label: "Polarite" },
          { key: "position", label: "Positions" },
          { key: "usage", label: "Usage" },
        ]}
      />

      <FilterableTable
        title="Parametres MIG/MAG par epaisseur"
        filterKey="migmag"
        data={MIGMAG_DATA}
        columns={[
          { key: "ep", label: "Ep. (mm)", mono: true },
          { key: "fil", label: "Fil (mm)", mono: true },
          { key: "tension", label: "Tension (V)", mono: true },
          { key: "vitFil", label: "Vit. fil (m/min)", mono: true },
          { key: "debit", label: "Debit gaz (L/min)", mono: true },
          { key: "gaz", label: "Gaz" },
        ]}
      />

      <FilterableTable
        title="Parametres TIG"
        filterKey="tig"
        data={TIG_DATA}
        columns={[
          { key: "mat", label: "Materiau" },
          { key: "ep", label: "Ep. (mm)", mono: true },
          { key: "tungst", label: "Tungstene", mono: true },
          { key: "bag", label: "Baguette", mono: true },
          { key: "intensite", label: "I (A)", mono: true },
          { key: "debit", label: "Ar (L/min)", mono: true },
        ]}
      />

      <FilterableTable
        title="Defauts courants — causes et corrections"
        filterKey="defauts"
        data={DEFAUTS_DATA}
        columns={[
          { key: "defaut", label: "Defaut" },
          { key: "proc", label: "Procede" },
          { key: "causes", label: "Causes possibles" },
          { key: "correction", label: "Actions correctives" },
        ]}
      />
    </div>
  );
}
