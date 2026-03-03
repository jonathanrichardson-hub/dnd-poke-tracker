import { useState, useMemo } from 'react';
import { pokemonDatabase } from './pokemonDatabase';

export default function PokemonForm({
  initialData,
  onSave,
  onCancel,
}: {
  initialData?: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  // State for the currently typed/selected species
  const [selectedSpecies, setSelectedSpecies] = useState(
    initialData?.species || ''
  );

  // NEW: State to control whether the search dropdown is visible
  const [showDropdown, setShowDropdown] = useState(false);

  const [nickname, setNickname] = useState(() => {
    if (!initialData) return '';
    return initialData.name === initialData.species ? '' : initialData.name;
  });
  const [level, setLevel] = useState<number>(initialData?.level || 1);

  const [preparedMoves, setPreparedMoves] = useState<string[]>(
    initialData?.preparedMoves?.map((m: any) => m.name) ||
      initialData?.moves?.map((m: any) => m.name) ||
      []
  );

  const baseData = useMemo(() => {
    return pokemonDatabase.find((p) => p.species === selectedSpecies);
  }, [selectedSpecies]);

  const calculatedHp = baseData
    ? baseData.baseHp + (level - 1) * baseData.hpPerLevel
    : 0;
  const ac = baseData ? baseData.baseAc : 0;
  const availableMoves = baseData
    ? baseData.moves.filter((m) => level >= m.levelLearned)
    : [];

  const canEvolve = baseData?.evolution && level >= baseData.evolution.level;

  // NEW: Updated to handle selecting from our custom search list
  const handleSpeciesSelect = (species: string) => {
    setSelectedSpecies(species);
    setPreparedMoves([]);
    setShowDropdown(false); // Hide the menu once clicked
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLevel = Math.max(1, Math.min(20, Number(e.target.value)));
    setLevel(newLevel);
  };

  const handleMoveToggle = (moveName: string) => {
    if (preparedMoves.includes(moveName)) {
      setPreparedMoves(preparedMoves.filter((m) => m !== moveName));
    } else if (preparedMoves.length < 4) {
      setPreparedMoves([...preparedMoves, moveName]);
    }
  };

  const triggerEvolution = () => {
    if (baseData?.evolution) {
      setSelectedSpecies(baseData.evolution.targetSpecies);
      setPreparedMoves([]);
    }
  };

  const handleSubmit = () => {
    if (!baseData) return;
    const activeMoves = baseData.moves.filter((m) =>
      preparedMoves.includes(m.name)
    );

    const prevMax = initialData?.maxHp || calculatedHp;
    const hpDiff = calculatedHp - prevMax;
    const newCurrentHp = initialData
      ? Math.min(calculatedHp, Math.max(0, initialData.currentHp + hpDiff))
      : calculatedHp;

    onSave({
      id: initialData ? initialData.id : crypto.randomUUID(),
      name: nickname || baseData.species,
      species: baseData.species,
      level: level,
      types: baseData.types,
      maxHp: calculatedHp,
      currentHp: newCurrentHp,
      ac: ac,
      preparedMoves: activeMoves,
    });
  };

  // NEW: Calculate filtered Pokémon for the dropdown
  const filteredPokemon = pokemonDatabase.filter((p) =>
    p.species.toLowerCase().includes(selectedSpecies.toLowerCase())
  );

  return (
    <div className="bg-slate-700 p-5 rounded-lg border border-slate-600 mt-4 shadow-inner">
      <h3 className="text-xl font-bold text-green-400 mb-4 border-b border-slate-600 pb-2">
        {initialData ? 'Edit / Level Up Pokémon' : 'Catch / Update Pokémon'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* NEW: Custom Searchable Autocomplete Dropdown */}
        <div className="md:col-span-2 relative">
          <label className="block text-sm font-semibold mb-1 text-slate-300">
            Search Species *
          </label>
          <input
            type="text"
            value={selectedSpecies}
            onChange={(e) => {
              setSelectedSpecies(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => {
              // Slight delay allows the user's click on an option to register before the dropdown vanishes
              setTimeout(() => setShowDropdown(false), 200);
            }}
            placeholder="Type to search..."
            className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:border-green-500 focus:outline-none text-slate-200"
          />

          {/* Floating Dropdown Menu */}
          {showDropdown && (
            <ul className="absolute z-10 w-full mt-1 bg-slate-800 border border-slate-600 rounded shadow-xl max-h-48 overflow-y-auto">
              {filteredPokemon.length > 0 ? (
                filteredPokemon.map((p) => (
                  <li
                    key={p.dexNumber}
                    // Using onMouseDown prevents the input from losing focus before the click is registered!
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSpeciesSelect(p.species);
                    }}
                    className="p-2 cursor-pointer hover:bg-slate-600 text-slate-200 border-b border-slate-700 last:border-0 transition-colors"
                  >
                    #{p.dexNumber}{' '}
                    <span className="font-bold">{p.species}</span>
                  </li>
                ))
              ) : (
                <li className="p-2 text-slate-500 italic text-center">
                  No Pokémon found...
                </li>
              )}
            </ul>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-slate-300">
            Level (Max 20) *
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={level}
            onChange={handleLevelChange}
            className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:border-green-500 focus:outline-none text-slate-200"
          />
        </div>

        <div className="md:col-span-3">
          <label className="block text-sm font-semibold mb-1 text-slate-300">
            Nickname (Optional)
          </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full bg-slate-800 border border-slate-600 rounded p-2 focus:border-green-500 focus:outline-none text-slate-200"
            placeholder="e.g., Brutus"
          />
        </div>
      </div>

      {baseData && (
        <>
          {canEvolve && (
            <div className="bg-yellow-900/40 border border-yellow-600/50 p-3 rounded mb-4 flex justify-between items-center animate-pulse">
              <span className="text-yellow-400 text-sm font-bold">
                What? {baseData.species} is evolving!
              </span>
              <button
                onClick={triggerEvolution}
                className="bg-yellow-600 hover:bg-yellow-500 text-white text-sm font-bold py-1 px-3 rounded shadow-lg"
              >
                Evolve into {baseData.evolution?.targetSpecies}!
              </button>
            </div>
          )}

          <div className="bg-slate-800 p-3 rounded border border-slate-600 mb-6 flex justify-between items-center">
            <div>
              <span className="text-slate-400 text-sm">Max HP: </span>
              <span className="font-bold text-green-400 text-lg">
                {calculatedHp}
              </span>
            </div>
            <div>
              <span className="text-slate-400 text-sm">AC: </span>
              <span className="font-bold text-blue-400 text-lg">{ac}</span>
            </div>
            <div className="flex gap-2">
              {baseData.types.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold uppercase tracking-wider bg-slate-700 text-slate-300 px-2 py-1 rounded border border-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-end mb-3">
              <h4 className="text-slate-300 font-semibold">
                Prepare Moves (Max 4)
              </h4>
              <span className="text-sm text-slate-400">
                Prepared:{' '}
                <strong
                  className={
                    preparedMoves.length === 4
                      ? 'text-green-400'
                      : 'text-blue-400'
                  }
                >
                  {preparedMoves.length} / 4
                </strong>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {availableMoves.map((move) => {
                const isChecked = preparedMoves.includes(move.name);
                const isDisabled = !isChecked && preparedMoves.length >= 4;

                return (
                  <label
                    key={move.name}
                    className={`flex items-start gap-3 p-3 rounded border ${
                      isChecked
                        ? 'bg-slate-800 border-green-500/50 shadow-inner'
                        : 'bg-slate-900 border-slate-700'
                    } ${
                      isDisabled
                        ? 'opacity-50 cursor-not-allowed'
                        : 'cursor-pointer hover:bg-slate-800'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="accent-green-500 mt-1 w-4 h-4"
                      checked={isChecked}
                      disabled={isDisabled}
                      onChange={() => handleMoveToggle(move.name)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-200">
                          {move.name}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">
                          {move.type}
                        </span>
                        <span className="text-[10px] text-slate-500 ml-auto font-semibold">
                          Unlocks Lv. {move.levelLearned}
                        </span>
                      </div>
                      <p className="text-sm text-blue-300/80 leading-snug">
                        {move.effect}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </>
      )}

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleSubmit}
          disabled={!selectedSpecies || preparedMoves.length === 0}
          className="flex-1 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded transition-colors"
        >
          {initialData ? 'Save Changes' : 'Add to Roster'}
        </button>
        <button
          onClick={onCancel}
          className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 rounded transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
