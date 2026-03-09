import { useState, useEffect } from 'react';
import './App.css';
import TrainerForm from './TrainerForm';
import PokemonForm from './PokemonForm';
import InventoryTracker from './InventoryTracker';
import PokemonStorage from './PokemonStorage';
import DiceRoller from './DiceRoller'; // NEW: Import the dice roller

// --- HELPER FUNCTION FOR D&D MATH ---
const calculateModifier = (stat: number) => {
  const mod = Math.floor((stat - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
};
// ----------------------------------------

function App() {
  const [trainerData, setTrainerData] = useState<any>(() => {
    const savedTrainer = localStorage.getItem('dndPokeTrainer');
    return savedTrainer ? JSON.parse(savedTrainer) : null;
  });

  const [isEditingTrainer, setIsEditingTrainer] = useState(false);

  const [roster, setRoster] = useState<any[]>(() => {
    const savedRoster = localStorage.getItem('dndPokeRoster');
    return savedRoster ? JSON.parse(savedRoster) : [];
  });

  const [activePokemonId, setActivePokemonId] = useState<string | null>(() => {
    const savedActiveId = localStorage.getItem('dndPokeActiveId');
    return savedActiveId ? JSON.parse(savedActiveId) : null;
  });

  const [isAddingPokemon, setIsAddingPokemon] = useState(false);
  const [editingPokemonId, setEditingPokemonId] = useState<string | null>(null);

  useEffect(() => {
    if (trainerData) {
      localStorage.setItem('dndPokeTrainer', JSON.stringify(trainerData));
    } else {
      localStorage.removeItem('dndPokeTrainer');
    }
  }, [trainerData]);

  useEffect(() => {
    localStorage.setItem('dndPokeRoster', JSON.stringify(roster));
  }, [roster]);

  useEffect(() => {
    if (activePokemonId) {
      localStorage.setItem('dndPokeActiveId', JSON.stringify(activePokemonId));
    } else {
      localStorage.removeItem('dndPokeActiveId');
    }
  }, [activePokemonId]);

  const handleSaveTrainer = (data: any) => {
    setTrainerData(data);
    setIsEditingTrainer(false);
  };

  const handleSavePokemon = (pokemonData: any) => {
    if (editingPokemonId) {
      // EDITING
      setRoster(roster.map(p => p.id === pokemonData.id ? { ...p, ...pokemonData } : p));
      setEditingPokemonId(null);
    } else {
      // NEW CATCH
      const activeRosterCount = roster.filter(p => p.location !== 'pc').length;

      const newlyCaughtPokemon = {
        ...pokemonData,
        location: activeRosterCount >= 6 ? 'pc' : 'roster'
      };

      if (activeRosterCount >= 6) {
        alert(`${pokemonData.name} was transferred to the PC Box because your roster is full!`);
      }

      setRoster([...roster, newlyCaughtPokemon]);
      
      if (roster.length === 0) {
        setActivePokemonId(pokemonData.id);
      }
    }
    setIsAddingPokemon(false);
  };

  const handleHpChange = (id: string, amount: number) => {
    setRoster(
      roster.map((pokemon) => {
        if (pokemon.id === id) {
          const newHp = Math.max(
            0,
            Math.min(pokemon.maxHp, pokemon.currentHp + amount)
          );
          return { ...pokemon, currentHp: newHp };
        }
        return pokemon;
      })
    );
  };

  const handleHealParty = () => {
    setRoster(
      roster.map((pokemon) => {
        if (pokemon.location !== 'pc') {
          return { ...pokemon, currentHp: pokemon.maxHp };
        }
        return pokemon;
      })
    );
    alert('✨ Da-da-da-da-daaa! Your active party has been fully healed! ✨');
  };

  const pokemonToEdit = editingPokemonId
    ? roster.find(p => p.id === editingPokemonId)
    : null;

  const activeRosterOnly = roster.filter(p => p.location !== 'pc');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center pt-10 pb-20 px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-2 tracking-wide">
        Pokémon D&D Tracker
      </h1>
      <p className="text-slate-400 mb-4">5e Custom Campaign Manager</p>

      {!trainerData || isEditingTrainer ? (
        <TrainerForm 
          initialData={trainerData} 
          onSave={handleSaveTrainer} 
          onCancel={trainerData ? () => setIsEditingTrainer(false) : undefined} 
        />
      ) : (
        <div className="w-full max-w-4xl mt-8 flex flex-col gap-6">
          
          {/* TRAINER CARD */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <div className="flex justify-between items-start mb-4 border-b border-slate-600 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {trainerData.name}
                </h2>
                <p className="text-blue-400 font-semibold text-lg">
                  {trainerData.specialty}
                </p>
              </div>
              <button
                onClick={() => setIsEditingTrainer(true)}
                className="text-sm bg-slate-700 hover:bg-slate-600 text-slate-300 py-1 px-3 rounded transition-colors"
              >
                Edit / Level Up Trainer
              </button>
            </div>
            
            <div className="p-3 bg-slate-900 border-l-4 border-blue-500 rounded-r-md text-sm mb-6">
              <strong className="text-blue-400">Bonus Action:</strong>{' '}
              {trainerData.specialtyPerk}
            </div>
            
            <div className="flex flex-col gap-6">
              {/* CORE STATS ROW */}
              <div>
                <h3 className="text-slate-400 font-semibold mb-2 uppercase tracking-wider text-sm">
                  Core Stats
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {Object.entries(trainerData.stats).map(([stat, value]) => {
                    const numValue = parseInt(value as string, 10) || 10;
                    const modifier = calculateModifier(numValue);
                    
                    return (
                      <div
                        key={stat}
                        className="bg-slate-800 p-2 rounded flex flex-col items-center border border-slate-600 shadow-inner"
                      >
                        <div className="text-[10px] text-slate-400 font-bold tracking-widest">{stat}</div>
                        <div className="font-bold text-white text-lg leading-tight">{value as string}</div>
                        <div className={`text-sm font-bold ${modifier.startsWith('+') || modifier === '0' ? 'text-green-400' : 'text-red-400'}`}>
                          {modifier}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* SAVING THROWS BOX */}
                <div>
                  <h3 className="text-slate-400 font-semibold mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                    🛡️ Saving Throws
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(trainerData.stats).map(([stat, value]) => {
                      const numValue = parseInt(value as string, 10) || 10;
                      const modifier = calculateModifier(numValue);
                      
                      return (
                        <div
                          key={`${stat}-save`}
                          className="bg-slate-900 px-3 py-2 rounded flex justify-between items-center border border-slate-700"
                        >
                          <span className="text-xs text-slate-400 font-bold tracking-widest">{stat}</span>
                          <span className={`text-sm font-bold ${modifier.startsWith('+') || modifier === '0' ? 'text-green-400' : 'text-red-400'}`}>
                            {modifier}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 italic">
                    *Base saving throws mirror stat modifiers.
                  </p>
                </div>

                {/* PROFICIENCIES */}
                <div>
                  <h3 className="text-slate-400 font-semibold mb-2 uppercase tracking-wider text-sm">
                    Skill Proficiencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {trainerData.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="bg-blue-900/50 text-blue-200 border border-blue-700/50 px-3 py-1.5 rounded text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW: QUICK DICE ROLLER */}
          <DiceRoller />
          {/* ---------------------- */}

          {/* INVENTORY TRACKER */}
          <InventoryTracker />

          {/* COMBAT ACTIONS QUICK REFERENCE */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-600 pb-2">
              ⚔️ Combat Actions
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <span className="font-bold text-blue-400 min-w-[110px]">Action:</span>
                <span>
                  <strong className="text-white">Command</strong> (Direct your Pokémon to use a Prepared Move) or{' '}
                  <strong className="text-white">Use Item</strong> (Potion, Pokéball, etc.).
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="font-bold text-blue-400 min-w-[110px]">Bonus Action:</span>
                <span>
                  <strong className="text-white">Trainer Perk</strong> (Utilize your unique Trainer Specialty bonus).
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="font-bold text-blue-400 min-w-[110px]">Movement:</span>
                <span>
                  <strong className="text-white">Reposition</strong> (Direct your Pokémon to move up to its speed).
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <span className="font-bold text-blue-400 min-w-[110px]">Reaction:</span>
                <span>
                  <strong className="text-white">Opportunity Attack</strong> (Instinctive strike if an enemy leaves melee reach).
                </span>
              </li>
            </ul>
          </div>

          {/* POKEMON ROSTER SECTION */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">
                Pokémon Roster ({activeRosterOnly.length}/6)
              </h2>
              
              {!isAddingPokemon && !editingPokemonId && (
                <div className="flex gap-3">
                  <button
                    onClick={handleHealParty}
                    disabled={activeRosterOnly.length === 0}
                    className="bg-pink-600 hover:bg-pink-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-2 px-4 rounded transition-colors flex items-center gap-2 shadow-[0_0_10px_rgba(219,39,119,0.3)]"
                  >
                    🏥 Heal Party
                  </button>
                  <button
                    onClick={() => setIsAddingPokemon(true)}
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    + Add Pokémon
                  </button>
                </div>
              )}
            </div>

            {(isAddingPokemon || editingPokemonId) && (
              <div className="mb-6 p-4 bg-slate-900 rounded-lg border border-slate-600">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {editingPokemonId ? 'Edit Pokémon' : 'Catch New Pokémon'}
                  </h3>
                  <button
                    onClick={() => {
                      setIsAddingPokemon(false);
                      setEditingPokemonId(null);
                    }}
                    className="text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <PokemonForm
  onSave={handleSavePokemon}
  initialData={pokemonToEdit}
  onCancel={() => {
    setIsAddingPokemon(false);
    setEditingPokemonId(null);
  }}
/>
              </div>
            )}

            {activeRosterOnly.length === 0 && !isAddingPokemon ? (
              <p className="text-slate-500 text-center py-6 border border-dashed border-slate-600 rounded">
                Your party is currently empty. Click "Add Pokémon" to catch your first partner!
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-6 mt-4">
                {activeRosterOnly.map((pokemon) => {
                  const isActive = activePokemonId === pokemon.id;
                  return (
                    <div
                      key={pokemon.id}
                      className={`bg-slate-900 p-4 rounded-lg border-2 flex flex-col gap-4 transition-all duration-300 ${
                        isActive
                          ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                          : 'border-slate-700'
                      }`}
                    >
                      {/* TOP ROW: Info & Stats */}
                      <div className="flex justify-between items-start">
                        {/* Pokemon Info */}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-xl font-bold text-white">
                              {pokemon.name}{' '}
                              <span className="text-slate-500 text-sm font-normal ml-2">
                                Lv. {pokemon.level}
                              </span>
                            </h4>

                            <div className="flex gap-2 ml-2">
                              <button
                                onClick={() =>
                                  setActivePokemonId(isActive ? null : pokemon.id)
                                }
                                className={`text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider transition-colors ${
                                  isActive
                                    ? 'bg-green-900/50 text-green-400 border border-green-500/50 hover:bg-red-900/50 hover:text-red-400 hover:border-red-500/50'
                                    : 'bg-slate-800 text-slate-400 border border-slate-600 hover:bg-slate-700 hover:text-white'
                                }`}
                              >
                                {isActive ? '★ Active' : 'Send Out'}
                              </button>
                              <button
                                onClick={() => {
                                  setEditingPokemonId(pokemon.id);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider bg-blue-900/50 text-blue-400 border border-blue-500/50 hover:bg-blue-800 hover:text-white transition-colors"
                              >
                                Edit
                              </button>
                            </div>
                          </div>

                          <p className="text-slate-400 text-sm mb-2">
                            {pokemon.species}
                          </p>
                          <div className="flex gap-2">
                            {pokemon.types.map((type: string) => (
                              <span
                                key={type}
                                className="text-xs font-bold uppercase tracking-wider bg-slate-700 text-slate-300 px-2 py-1 rounded"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Combat Stats */}
                        <div className="flex flex-col gap-2 min-w-[130px]">
                          <div className="bg-slate-800 p-2 rounded border border-slate-700 flex flex-col items-center">
                            <div className="text-slate-400 text-xs mb-1 font-semibold tracking-wider">
                              HP
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleHpChange(pokemon.id, -1)}
                                className="bg-red-900/40 hover:bg-red-800 text-red-400 w-7 h-7 rounded flex items-center justify-center font-bold text-lg transition-colors"
                              >
                                -
                              </button>
                              <div className="text-center font-bold text-lg w-10">
                                <span
                                  className={
                                    pokemon.currentHp <= pokemon.maxHp * 0.25
                                      ? 'text-red-500'
                                      : 'text-green-400'
                                  }
                                >
                                  {pokemon.currentHp}
                                </span>
                              </div>
                              <button
                                onClick={() => handleHpChange(pokemon.id, 1)}
                                className="bg-green-900/40 hover:bg-green-800 text-green-400 w-7 h-7 rounded flex items-center justify-center font-bold text-lg transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="bg-slate-800 px-3 py-1 rounded border border-slate-700 text-center flex justify-between items-center">
                            <span className="text-slate-400 text-xs font-semibold mr-2">
                              AC
                            </span>
                            <span className="font-bold text-blue-400 text-lg">
                              {pokemon.ac}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* BOTTOM ROW: Prepared Moves */}
                      {isActive && pokemon.preparedMoves && pokemon.preparedMoves.length > 0 && (
                        <div className="border-t border-slate-700 pt-3 mt-1">
                          <h5 className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                            Prepared Moves
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {pokemon.preparedMoves.map((move: any, index: number) => (
                              <div
                                key={index}
                                className="bg-slate-800 p-2.5 rounded border border-slate-700"
                              >
                                <div className="flex justify-between items-center mb-1">
                                  <span className="font-bold text-sm text-white">
                                    {move.name}
                                  </span>
                                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">
                                    {move.type}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                  {move.effect}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <PokemonStorage 
            roster={roster} 
            setRoster={setRoster}
            activePokemonId={activePokemonId}
            setActivePokemonId={setActivePokemonId}
          />
        </div>
      )}
    </div>
  );
}

export default App;