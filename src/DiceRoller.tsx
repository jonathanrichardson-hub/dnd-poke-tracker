import { useState } from 'react';

export default function DiceRoller() {
  const [result, setResult] = useState<number | null>(null);
  const [rollDetails, setRollDetails] = useState<string>('');
  
  const [diceCount, setDiceCount] = useState<number>(1);
  const [modifier, setModifier] = useState<number>(0);
  
  // NEW: State for Advantage/Disadvantage
  const [rollMode, setRollMode] = useState<'normal' | 'adv' | 'dis'>('normal');

  const diceTypes = [
    { label: 'd4', sides: 4, color: 'bg-purple-600 hover:bg-purple-500' },
    { label: 'd6', sides: 6, color: 'bg-indigo-600 hover:bg-indigo-500' },
    { label: 'd8', sides: 8, color: 'bg-blue-600 hover:bg-blue-500' },
    { label: 'd10', sides: 10, color: 'bg-teal-600 hover:bg-teal-500' },
    { label: 'd12', sides: 12, color: 'bg-green-600 hover:bg-green-500' },
    { label: 'd20', sides: 20, color: 'bg-red-600 hover:bg-red-500' },
    { label: 'd100', sides: 100, color: 'bg-slate-600 hover:bg-slate-500' },
  ];

  const rollDice = (sides: number, label: string) => {
    const modString = modifier !== 0 ? ` ${modifier > 0 ? '+' : ''}${modifier}` : '';

    // ADVANTAGE OR DISADVANTAGE LOGIC
    if (rollMode !== 'normal') {
      const roll1 = Math.floor(Math.random() * sides) + 1;
      const roll2 = Math.floor(Math.random() * sides) + 1;
      
      const keptRoll = rollMode === 'adv' ? Math.max(roll1, roll2) : Math.min(roll1, roll2);
      const droppedRoll = rollMode === 'adv' ? Math.min(roll1, roll2) : Math.max(roll1, roll2);

      const finalTotal = keptRoll + modifier;
      setResult(finalTotal);
      
      const modeName = rollMode === 'adv' ? 'Advantage' : 'Disadvantage';
      setRollDetails(`Rolled ${label}${modString} with ${modeName} (Kept: ${keptRoll}, Dropped: ${droppedRoll})`);
    } 
    // NORMAL MULTI-DICE LOGIC
    else {
      let totalRoll = 0;
      const individualRolls: number[] = [];

      for (let i = 0; i < diceCount; i++) {
        const roll = Math.floor(Math.random() * sides) + 1;
        totalRoll += roll;
        individualRolls.push(roll);
      }

      const finalTotal = totalRoll + modifier;
      setResult(finalTotal);
      
      const rollsArrayString = diceCount > 1 ? ` [${individualRolls.join(', ')}]` : '';
      setRollDetails(`Rolled ${diceCount}${label}${modString} (Base: ${totalRoll}${rollsArrayString})`);
    }
  };

  // Determine if it's a Nat 20 or Nat 1 (applies to normal 1d20 or Adv/Dis d20s)
  const isSingleD20Roll = rollDetails.includes('d20') && (rollMode !== 'normal' || diceCount === 1);
  const isNat20 = isSingleD20Roll && result === 20 + modifier;
  const isNat1 = isSingleD20Roll && result === 1 + modifier;

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
      <div className="flex justify-between items-center mb-4 border-b border-slate-600 pb-2">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          🎲 Quick Dice Roller
        </h2>
        
        {/* NEW: Advantage / Disadvantage Toggle */}
        <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
          <button
            onClick={() => setRollMode('normal')}
            className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-colors ${rollMode === 'normal' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Normal
          </button>
          <button
            onClick={() => setRollMode('adv')}
            className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-colors ${rollMode === 'adv' ? 'bg-green-600 text-white shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'text-slate-400 hover:text-white'}`}
          >
            Adv
          </button>
          <button
            onClick={() => setRollMode('dis')}
            className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-colors ${rollMode === 'dis' ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'text-slate-400 hover:text-white'}`}
          >
            Dis
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        {/* CONTROL PANEL: Dice Count & Modifier */}
        <div className="flex gap-4 w-full md:w-auto">
          {/* Number of Dice Input (Grays out slightly if Adv/Dis is active) */}
          <div className={`flex flex-col items-center bg-slate-900 p-3 rounded-lg border border-slate-700 flex-1 shadow-inner transition-opacity ${rollMode !== 'normal' ? 'opacity-50' : 'opacity-100'}`}>
            <label className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-wider"># of Dice</label>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setDiceCount(Math.max(1, diceCount - 1))}
                disabled={rollMode !== 'normal'}
                className="bg-slate-700 hover:bg-slate-600 disabled:hover:bg-slate-700 text-white w-7 h-7 rounded-full font-bold flex items-center justify-center transition-colors"
              >
                -
              </button>
              <input 
                type="number" 
                min="1"
                value={diceCount}
                onChange={(e) => setDiceCount(Math.max(1, parseInt(e.target.value) || 1))}
                disabled={rollMode !== 'normal'}
                className="w-12 bg-slate-800 border border-slate-600 rounded text-center font-bold text-lg p-1 text-white focus:outline-none focus:border-blue-500 disabled:text-slate-500"
              />
              <button 
                onClick={() => setDiceCount(prev => prev + 1)}
                disabled={rollMode !== 'normal'}
                className="bg-slate-700 hover:bg-slate-600 disabled:hover:bg-slate-700 text-white w-7 h-7 rounded-full font-bold flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Modifier Input Box */}
          <div className="flex flex-col items-center bg-slate-900 p-3 rounded-lg border border-slate-700 flex-1 shadow-inner">
            <label className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-wider">Modifier</label>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setModifier(prev => prev - 1)}
                className="bg-slate-700 hover:bg-slate-600 text-white w-7 h-7 rounded-full font-bold flex items-center justify-center transition-colors"
              >
                -
              </button>
              <input 
                type="number" 
                value={modifier}
                onChange={(e) => setModifier(parseInt(e.target.value) || 0)}
                className="w-12 bg-slate-800 border border-slate-600 rounded text-center font-bold text-lg p-1 text-white focus:outline-none focus:border-blue-500"
              />
              <button 
                onClick={() => setModifier(prev => prev + 1)}
                className="bg-slate-700 hover:bg-slate-600 text-white w-7 h-7 rounded-full font-bold flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Dice Buttons */}
        <div className="flex flex-wrap gap-2 justify-center flex-1">
          {diceTypes.map((dice) => (
            <button
              key={dice.label}
              onClick={() => rollDice(dice.sides, dice.label)}
              className={`${dice.color} text-white font-bold py-3 px-4 rounded shadow-md transition-all transform active:scale-95 flex-1 min-w-[60px] max-w-[80px]`}
            >
              {dice.label}
            </button>
          ))}
        </div>

        {/* Result Display Box */}
        <div className="flex flex-col items-center justify-center bg-slate-900 p-4 rounded-lg border-2 border-slate-600 w-full md:w-48 min-h-[100px] shadow-inner">
          {result !== null ? (
            <>
              <div className={`text-4xl font-black mb-1 ${isNat20 ? 'text-green-400' : isNat1 ? 'text-red-500' : 'text-white'}`}>
                {result}
              </div>
              <div className="text-[11px] text-slate-400 text-center font-semibold tracking-wide">
                {rollDetails}
              </div>
            </>
          ) : (
            <div className="text-slate-600 font-bold uppercase tracking-widest text-sm">
              Awaiting Roll
            </div>
          )}
        </div>
      </div>
    </div>
  );
}