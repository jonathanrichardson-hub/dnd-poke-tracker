import { useState } from 'react';

export default function PokemonStorage({
  roster,
  setRoster,
  activePokemonId,
  setActivePokemonId
}: {
  roster: any[];
  setRoster: (list: any[]) => void;
  activePokemonId: string | null;
  setActivePokemonId: (id: string | null) => void;
}) {
  const [atPokeCenter, setAtPokeCenter] = useState(false);

  // Split the total list into Active Party and PC Box
  const activeParty = roster.filter((p) => p.location !== 'pc');
  const pcBox = roster.filter((p) => p.location === 'pc');

  const moveToPC = (id: string) => {
    setRoster(roster.map((p) => p.id === id ? { ...p, location: 'pc' } : p));
    // If the active Pokémon goes to the PC, it shouldn't be active anymore!
    if (activePokemonId === id) {
      setActivePokemonId(null);
    }
  };

  const moveToRoster = (id: string) => {
    if (activeParty.length >= 6) {
      alert('Your roster is full! You can only carry 6 Pokémon at a time.');
      return;
    }
    setRoster(roster.map((p) => p.id === id ? { ...p, location: 'roster' } : p));
  };

  const PokemonMiniCard = ({ poke, isRoster }: { poke: any; isRoster: boolean }) => {
    const isActive = activePokemonId === poke.id;
    
    return (
      <div className={`p-3 rounded border ${isActive ? 'bg-blue-900/40 border-blue-500 shadow-inner' : 'bg-slate-800 border-slate-600'} flex justify-between items-center gap-2`}>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">{poke.name}</span>
            <span className="text-xs text-slate-400">Lv.{poke.level}</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">{poke.species}</div>
        </div>
        
        <div className="flex items-center gap-2">
          {isRoster && (
            <button
              onClick={() => setActivePokemonId(isActive ? null : poke.id)}
              className={`text-xs px-2 py-1 rounded font-bold border ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-slate-700 text-slate-400 border-slate-500 hover:bg-slate-600'
              }`}
            >
              {isActive ? 'ACTIVE' : 'Set Active'}
            </button>
          )}
          
          {atPokeCenter && (
            <button
              onClick={() => isRoster ? moveToPC(poke.id) : moveToRoster(poke.id)}
              className="bg-slate-700 hover:bg-slate-600 text-slate-300 w-8 h-8 rounded flex items-center justify-center border border-slate-500 transition-colors"
              title={isRoster ? "Send to PC" : "Withdraw to Roster"}
            >
              {isRoster ? '▶' : '◀'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-700 w-full mt-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-slate-700 pb-4 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            🖥️ PC Storage System
          </h2>
          <p className="text-sm text-slate-400">Manage your active team and stored Pokémon.</p>
        </div>
        
        <label className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg border border-slate-600 cursor-pointer hover:bg-slate-700 transition-colors">
          <div className="text-sm font-semibold text-slate-300">At a PokéCenter?</div>
          <div className={`w-12 h-6 rounded-full p-1 transition-colors ${atPokeCenter ? 'bg-green-500' : 'bg-slate-600'}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${atPokeCenter ? 'translate-x-6' : 'translate-x-0'}`} />
          </div>
          <input
            type="checkbox"
            className="hidden"
            checked={atPokeCenter}
            onChange={(e) => setAtPokeCenter(e.target.checked)}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
          <div className="flex justify-between items-end mb-4 border-b border-slate-600 pb-2">
            <h3 className="font-bold text-green-400">Active Roster</h3>
            <span className={`text-sm font-bold ${activeParty.length === 6 ? 'text-red-400' : 'text-slate-400'}`}>
              {activeParty.length} / 6
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {activeParty.length === 0 ? (
              <p className="text-slate-500 text-sm italic text-center py-4">Your roster is empty.</p>
            ) : (
              activeParty.map((poke) => (
                <PokemonMiniCard key={poke.id} poke={poke} isRoster={true} />
              ))
            )}
          </div>
        </div>

        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
          <div className="flex justify-between items-end mb-4 border-b border-slate-600 pb-2">
            <h3 className="font-bold text-cyan-400">PC Box</h3>
            <span className="text-sm font-bold text-slate-400">
              {pcBox.length} Stored
            </span>
          </div>
          <div className="flex flex-col gap-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {pcBox.length === 0 ? (
              <p className="text-slate-500 text-sm italic text-center py-4">No Pokémon in storage.</p>
            ) : (
              pcBox.map((poke) => (
                <PokemonMiniCard key={poke.id} poke={poke} isRoster={false} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}