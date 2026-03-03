import { useState, useEffect } from 'react';

// Define our types
interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
}

interface InventoryState {
  credits: number;
  presets: InventoryItem[];
  customItems: InventoryItem[];
}

// Our default starting items
const DEFAULT_PRESETS: InventoryItem[] = [
  { id: 'poke', name: 'Pokéballs', quantity: 5 },
  { id: 'great', name: 'Great Balls', quantity: 0 },
  { id: 'potion', name: 'Potions', quantity: 3 },
  { id: 'antidote', name: 'Antidotes', quantity: 1 },
  { id: 'revive', name: 'Revives', quantity: 0 },
];

export default function InventoryTracker() {
  // Load from local storage or use defaults
  const [inventory, setInventory] = useState<InventoryState>(() => {
    const saved = localStorage.getItem('dndPokeInventory');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      credits: 3000, // Starting money
      presets: DEFAULT_PRESETS,
      customItems: [],
    };
  });

  const [newCustomItem, setNewCustomItem] = useState('');

  // Save to local storage whenever inventory changes
  useEffect(() => {
    localStorage.setItem('dndPokeInventory', JSON.stringify(inventory));
  }, [inventory]);

  // --- Handlers ---
  const updateCredits = (amount: number) => {
    setInventory((prev) => ({
      ...prev,
      credits: Math.max(0, prev.credits + amount),
    }));
  };

  const updatePreset = (id: string, amount: number) => {
    setInventory((prev) => ({
      ...prev,
      presets: prev.presets.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + amount) };
        }
        return item;
      }),
    }));
  };

  const updateCustomItem = (id: string, amount: number) => {
    setInventory((prev) => ({
      ...prev,
      customItems: prev.customItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + amount) };
        }
        return item;
      }),
    }));
  };

  const addCustomItem = () => {
    if (!newCustomItem.trim()) return;
    
    const newItem: InventoryItem = {
      id: crypto.randomUUID(),
      name: newCustomItem.trim(),
      quantity: 1,
    };

    setInventory((prev) => ({
      ...prev,
      customItems: [...prev.customItems, newItem],
    }));
    setNewCustomItem(''); // Clear input
  };

  const removeCustomItem = (id: string) => {
    setInventory((prev) => ({
      ...prev,
      customItems: prev.customItems.filter((item) => item.id !== id),
    }));
  };

  // --- Reusable Item Row Component ---
  const ItemRow = ({ 
    item, 
    onUpdate, 
    onRemove 
  }: { 
    item: InventoryItem; 
    onUpdate: (id: string, amount: number) => void;
    onRemove?: (id: string) => void;
  }) => (
    <div className="flex justify-between items-center bg-slate-900 p-3 rounded border border-slate-700">
      <span className="font-semibold text-slate-200">{item.name}</span>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onUpdate(item.id, -1)}
          className="bg-red-900/50 hover:bg-red-800 text-red-400 w-8 h-8 rounded flex items-center justify-center font-bold text-lg transition-colors"
        >
          -
        </button>
        <span className="font-bold text-lg w-8 text-center text-white">
          {item.quantity}
        </span>
        <button 
          onClick={() => onUpdate(item.id, 1)}
          className="bg-green-900/50 hover:bg-green-800 text-green-400 w-8 h-8 rounded flex items-center justify-center font-bold text-lg transition-colors"
        >
          +
        </button>
        {onRemove && (
          <button 
            onClick={() => onRemove(item.id)}
            className="ml-2 text-slate-500 hover:text-red-500 transition-colors"
            title="Remove Item"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-600 pb-2">
        Inventory & Wallet
      </h2>

      {/* --- Pokécredits Section --- */}
      <div className="bg-slate-900 p-4 rounded-lg border border-yellow-600/30 flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">₽</span>
          <span className="text-xl font-bold text-yellow-400 tracking-wider">
            {inventory.credits.toLocaleString()}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => updateCredits(-100)} className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs text-slate-300 font-bold">-100</button>
          <button onClick={() => updateCredits(100)} className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs text-slate-300 font-bold">+100</button>
          <button onClick={() => updateCredits(1000)} className="px-2 py-1 bg-yellow-900/50 hover:bg-yellow-800 text-yellow-400 border border-yellow-700/50 rounded text-xs font-bold">+1k</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- Standard Items --- */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Standard Items
          </h3>
          <div className="flex flex-col gap-2">
            {inventory.presets.map((item) => (
              <ItemRow key={item.id} item={item} onUpdate={updatePreset} />
            ))}
          </div>
        </div>

        {/* --- Custom Items --- */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Custom Items (Key Items, Berries, etc.)
          </h3>
          
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newCustomItem}
              onChange={(e) => setNewCustomItem(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addCustomItem()}
              placeholder="Add new item..."
              className="flex-1 bg-slate-900 border border-slate-600 rounded p-2 text-sm focus:border-green-500 focus:outline-none text-slate-200"
            />
            <button
              onClick={addCustomItem}
              disabled={!newCustomItem.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold px-4 py-2 rounded text-sm transition-colors"
            >
              Add
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {inventory.customItems.length === 0 ? (
              <p className="text-slate-500 text-sm text-center py-4 border border-dashed border-slate-700 rounded">
                No custom items in bag.
              </p>
            ) : (
              inventory.customItems.map((item) => (
                <ItemRow 
                  key={item.id} 
                  item={item} 
                  onUpdate={updateCustomItem} 
                  onRemove={removeCustomItem}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}