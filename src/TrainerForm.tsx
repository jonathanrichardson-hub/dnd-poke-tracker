import { useState } from 'react';

// NEW: Added initialData and onCancel props so we can edit existing trainers!
export default function TrainerForm({ 
  initialData,
  onSave,
  onCancel
}: { 
  initialData?: any;
  onSave: (data: any) => void;
  onCancel?: () => void;
}) {
  const [trainerName, setTrainerName] = useState(initialData?.name || '');
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialData?.specialty || '');
  
  // Initialize with existing stats if editing, otherwise empty strings
  const [stats, setStats] = useState(initialData?.stats || { STR: '', DEX: '', CON: '', INT: '', WIS: '', CHA: '' });
  const [selectedSkills, setSelectedSkills] = useState<string[]>(initialData?.skills || []);

  const specialties = {
    'Ace Trainer': 'Once per combat, your Pokémon can use a move as a Bonus Action.',
    'Field Scout': '+5 to Initiative, and you and your active Pokémon cannot be surprised.',
    'Medic': 'You can use a Potion on your active Pokémon as a Bonus Action.',
    'Researcher': 'Use your Action to scan a wild Pokémon to reveal its HP and Resistances.',
    'Commander': 'Use your Action to grant your active Pokémon Advantage on its next attack.'
  };

  const statNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
  
  const allSkills = [
    'Acrobatics', 'Athletics', 'Deception', 'First Aid', 'Habitat Tracking', 
    'Insight', 'Intimidation', 'Legendary Mythology', 'Perception', 'Performance', 
    'Persuasion', 'Pokémon Handling', 'Pokémon Lore', 'Region History', 
    'Sleight of Hand', 'Stealth', 'Survival', 'Tech & Gadgetry'
  ];

  const handleStatChange = (statName: string, value: string) => {
    // Only allow numbers to be typed
    if (value === '' || /^\d+$/.test(value)) {
      setStats({ ...stats, [statName]: value });
    }
  };

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else if (selectedSkills.length < 3) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = () => {
    onSave({
      name: trainerName,
      specialty: selectedSpecialty,
      specialtyPerk: specialties[selectedSpecialty as keyof typeof specialties],
      stats: stats,
      skills: selectedSkills
    });
  };

  // Check if any stat is empty to disable the save button
  const isFormIncomplete = !trainerName || !selectedSpecialty || Object.values(stats).some(val => val === '') || selectedSkills.length < 3;

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-2xl mt-8 border border-slate-700 text-slate-200">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 border-b border-slate-600 pb-2">
        {initialData ? 'Update Trainer Stats' : 'Create Your Trainer'}
      </h2>
      
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Trainer Name</label>
            <input 
              type="text" 
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 rounded-md p-3 focus:outline-none focus:border-blue-500" 
              placeholder="e.g., Red, Cynthia, etc." 
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Trainer Specialty</label>
            <select 
              className="w-full bg-slate-900 border border-slate-600 rounded-md p-3 focus:outline-none focus:border-blue-500"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="" disabled>Select a class...</option>
              {Object.keys(specialties).map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>

        {selectedSpecialty && (
          <div className="p-3 bg-slate-700 border-l-4 border-blue-400 rounded-r-md text-sm shadow-inner">
            <strong className="text-blue-300">{selectedSpecialty} Perk:</strong> {specialties[selectedSpecialty as keyof typeof specialties]}
          </div>
        )}

        <hr className="border-slate-600" />

        <div>
          <label className="block font-semibold mb-3">Core Stats (Manual Entry / Rolls)</label>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {statNames.map(stat => (
              <div key={stat} className="flex flex-col items-center bg-slate-900 p-2 rounded-md border border-slate-700">
                <span className="font-bold text-slate-400 text-sm mb-1">{stat}</span>
                {/* NEW: Changed from <select> to <input type="number"> */}
                <input 
                  type="number"
                  min="1"
                  max="30"
                  className="w-full bg-slate-800 border border-slate-600 rounded p-1 text-center font-bold focus:outline-none focus:border-blue-500"
                  value={stats[stat as keyof typeof stats]}
                  onChange={(e) => handleStatChange(stat, e.target.value)}
                  placeholder="10"
                />
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-600" />

        <div>
          <div className="flex justify-between items-end mb-3">
            <label className="block font-semibold">Skill Proficiencies</label>
            <span className="text-sm text-slate-400">
              Selected: <strong className={selectedSkills.length === 3 ? "text-green-400" : "text-blue-400"}>{selectedSkills.length} / 3</strong>
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {allSkills.map(skill => {
              const isChecked = selectedSkills.includes(skill);
              const isDisabled = !isChecked && selectedSkills.length >= 3;
              return (
                <label key={skill} className={`flex items-center space-x-2 text-sm p-1 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-slate-700'}`}>
                  <input 
                    type="checkbox" 
                    className="accent-blue-500 w-4 h-4"
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={() => handleSkillToggle(skill)}
                  />
                  <span>{skill}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button 
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isFormIncomplete}
          >
            {initialData ? 'Save Updates' : 'Save Trainer to Roster'}
          </button>
          
          {/* NEW: Cancel button if we are in edit mode */}
          {onCancel && (
            <button 
              onClick={onCancel}
              className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-4 rounded-md transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}