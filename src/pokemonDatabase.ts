export interface MoveDefinition {
  name: string;
  type: string;
  effect: string;
  levelLearned: number;
}

export interface PokemonDefinition {
  dexNumber: number;
  species: string;
  types: string[];
  baseHp: number;
  hpPerLevel: number;
  baseAc: number;
  evolution?: {
    targetSpecies: string;
    level?: number;   // The ? makes level optional (for stone evolutions)
    item?: string;    // The ? makes item optional (for level evolutions)
    method?: string;  // Just in case you add trade/friendship evolutions later!
  };
  moves: MoveDefinition[];
}

export const pokemonDatabase: PokemonDefinition[] = [
  // --- BULBASAUR LINE ---
  {
    dexNumber: 1,
    species: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Ivysaur', level: 5 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Vine Whip',
        type: 'Grass',
        effect: 'Melee (Reach 10ft). Hit: 1d8 + DEX slashing.',
        levelLearned: 3,
      },
      {
        name: 'Leech Seed',
        type: 'Grass',
        effect:
          'Target takes 1d4 necrotic at start of turn. You heal that amount.',
        levelLearned: 4,
      },
    ],
  },
  {
    dexNumber: 2,
    species: 'Ivysaur',
    types: ['Grass', 'Poison'],
    baseHp: 12,
    hpPerLevel: 7,
    baseAc: 14,
    evolution: { targetSpecies: 'Venusaur', level: 11 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Vine Whip',
        type: 'Grass',
        effect: 'Melee (Reach 10ft). Hit: 1d8 + DEX slashing.',
        levelLearned: 1,
      },
      {
        name: 'Leech Seed',
        type: 'Grass',
        effect:
          'Target takes 1d4 necrotic at start of turn. You heal that amount.',
        levelLearned: 1,
      },
      {
        name: 'Poison Powder',
        type: 'Poison',
        effect: 'DC 14 Con save or poisoned for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Sleep Powder',
        type: 'Grass',
        effect:
          'DC 14 Wis save or fall unconscious for 1 minute (wakes on damage).',
        levelLearned: 7,
      },
      {
        name: 'Razor Leaf',
        type: 'Grass',
        effect: '15ft cone. DC 14 Dex save or 3d6 slashing.',
        levelLearned: 9,
      },
    ],
  },
  {
    dexNumber: 3,
    species: 'Venusaur',
    types: ['Grass', 'Poison'],
    baseHp: 15,
    hpPerLevel: 9,
    baseAc: 16,
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Vine Whip',
        type: 'Grass',
        effect: 'Melee (Reach 10ft). Hit: 1d8 + DEX slashing.',
        levelLearned: 1,
      },
      {
        name: 'Leech Seed',
        type: 'Grass',
        effect:
          'Target takes 1d4 necrotic at start of turn. You heal that amount.',
        levelLearned: 1,
      },
      {
        name: 'Poison Powder',
        type: 'Poison',
        effect: 'DC 15 Con save or poisoned for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Sleep Powder',
        type: 'Grass',
        effect: 'DC 15 Wis save or fall unconscious for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Razor Leaf',
        type: 'Grass',
        effect: '15ft cone. DC 15 Dex save or 3d6 slashing.',
        levelLearned: 1,
      },
      {
        name: 'Synthesis',
        type: 'Grass',
        effect: 'Action: Heal HP equal to 2d8 + your level.',
        levelLearned: 1,
      },
      {
        name: 'Petal Blizzard',
        type: 'Grass',
        effect: '30ft radius. DC 16 Dex save or 4d8 slashing damage.',
        levelLearned: 11,
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        effect:
          'Ranged spell attack. Hit: 4d8 poison. DC 16 Con save or poisoned.',
        levelLearned: 14,
      },
      {
        name: 'Solar Beam',
        type: 'Grass',
        effect:
          'Takes 1 turn to charge. 100ft line. DC 17 Dex save or 8d10 radiant.',
        levelLearned: 17,
      },
    ],
  },

  // --- CHARMANDER LINE ---
  {
    dexNumber: 4,
    species: 'Charmander',
    types: ['Fire'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Charmeleon', level: 5 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Ember',
        type: 'Fire',
        effect: 'DC 13 Dex save. 2d4 fire damage.',
        levelLearned: 3,
      },
      {
        name: 'Smokescreen',
        type: 'Normal',
        effect: '10ft radius of heavily obscured smoke (1 minute).',
        levelLearned: 4,
      },
    ],
  },
  {
    dexNumber: 5,
    species: 'Charmeleon',
    types: ['Fire'],
    baseHp: 11,
    hpPerLevel: 6,
    baseAc: 14,
    evolution: { targetSpecies: 'Charizard', level: 11 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Ember',
        type: 'Fire',
        effect: 'DC 14 Dex save. 2d4 fire damage.',
        levelLearned: 1,
      },
      {
        name: 'Smokescreen',
        type: 'Normal',
        effect: '10ft radius of heavily obscured smoke (1 minute).',
        levelLearned: 1,
      },
      {
        name: 'Dragon Breath',
        type: 'Dragon',
        effect: '15ft cone. DC 14 Dex save or 3d6 dragon damage.',
        levelLearned: 5,
      },
      {
        name: 'Fire Fang',
        type: 'Fire',
        effect: 'Melee. Hit: 1d6 + STR piercing + 1d4 fire.',
        levelLearned: 7,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + STR slashing. Crits on a 19 or 20.',
        levelLearned: 9,
      },
    ],
  },
  {
    dexNumber: 6,
    species: 'Charizard',
    types: ['Fire', 'Flying'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Ember',
        type: 'Fire',
        effect: 'DC 15 Dex save. 2d4 fire damage.',
        levelLearned: 1,
      },
      {
        name: 'Smokescreen',
        type: 'Normal',
        effect: '10ft radius of heavily obscured smoke (1 minute).',
        levelLearned: 1,
      },
      {
        name: 'Dragon Breath',
        type: 'Dragon',
        effect: '15ft cone. DC 15 Dex save or 3d6 dragon damage.',
        levelLearned: 1,
      },
      {
        name: 'Fire Fang',
        type: 'Fire',
        effect: 'Melee. Hit: 1d6 + STR piercing + 1d4 fire.',
        levelLearned: 1,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + STR slashing. Crits on a 19 or 20.',
        levelLearned: 1,
      },
      {
        name: 'Wing Attack',
        type: 'Flying',
        effect: 'Melee. Hit: 2d6 + STR bludgeoning. Target pushed 10ft.',
        levelLearned: 11,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        effect: '30ft line. DC 16 Dex save or 4d6 fire damage.',
        levelLearned: 14,
      },
      {
        name: 'Fire Blast',
        type: 'Fire',
        effect: 'Ranged spell attack. Hit: 6d10 fire damage.',
        levelLearned: 17,
      },
    ],
  },

  // --- SQUIRTLE LINE ---
  {
    dexNumber: 7,
    species: 'Squirtle',
    types: ['Water'],
    baseHp: 11,
    hpPerLevel: 6,
    baseAc: 14,
    evolution: { targetSpecies: 'Wartortle', level: 5 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Tail Whip',
        type: 'Normal',
        effect: 'DC 13 Dex save or AC reduced by 1 until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged Spell Attack. Hit: 1d8 + INT water. Pushes 5ft.',
        levelLearned: 3,
      },
      {
        name: 'Withdraw',
        type: 'Water',
        effect: 'Bonus Action: +4 AC, speed becomes 0.',
        levelLearned: 4,
      },
    ],
  },
  {
    dexNumber: 8,
    species: 'Wartortle',
    types: ['Water'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 15,
    evolution: { targetSpecies: 'Blastoise', level: 11 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Tail Whip',
        type: 'Normal',
        effect: 'DC 14 Dex save or AC reduced by 1 until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged Spell Attack. Hit: 1d8 + INT water. Pushes 5ft.',
        levelLearned: 1,
      },
      {
        name: 'Withdraw',
        type: 'Water',
        effect: 'Bonus Action: +4 AC, speed becomes 0.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 2d4 + STR. DC 14 Con save or frightened.',
        levelLearned: 5,
      },
      {
        name: 'Rapid Spin',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d8 bludgeoning. Frees you from grapples/restraints.',
        levelLearned: 7,
      },
      {
        name: 'Bubble Beam',
        type: 'Water',
        effect:
          'Ranged Spell Attack. Hit: 3d6 water. DC 14 Str save or speed halved.',
        levelLearned: 9,
      },
    ],
  },
  {
    dexNumber: 9,
    species: 'Blastoise',
    types: ['Water'],
    baseHp: 16,
    hpPerLevel: 9,
    baseAc: 18,
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee Weapon Attack. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Tail Whip',
        type: 'Normal',
        effect: 'DC 15 Dex save or AC reduced by 1 until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged Spell Attack. Hit: 1d8 + INT water. Pushes 5ft.',
        levelLearned: 1,
      },
      {
        name: 'Withdraw',
        type: 'Water',
        effect: 'Bonus Action: +4 AC, speed becomes 0.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 2d4 + STR. DC 15 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Rapid Spin',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d8 bludgeoning. Frees you from grapples/restraints.',
        levelLearned: 1,
      },
      {
        name: 'Bubble Beam',
        type: 'Water',
        effect: 'Ranged Spell Attack. Hit: 3d6 water.',
        levelLearned: 1,
      },
      {
        name: 'Protect',
        type: 'Normal',
        effect: 'Reaction: Add +5 to AC against one attack.',
        levelLearned: 11,
      },
      {
        name: 'Aqua Tail',
        type: 'Water',
        effect: 'Melee. Hit: 3d8 + STR bludgeoning.',
        levelLearned: 14,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect: '60ft line. DC 17 Str save. 6d8 water damage and pushed 20ft.',
        levelLearned: 17,
      },
    ],
  },

  // --- CATERPIE LINE ---
  {
    dexNumber: 10,
    species: 'Caterpie',
    types: ['Bug'],
    baseHp: 8,
    hpPerLevel: 4,
    baseAc: 12,
    evolution: { targetSpecies: 'Metapod', level: 5 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'String Shot',
        type: 'Bug',
        effect: 'DC 13 Dex save or target speed is halved for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Bug Bite',
        type: 'Bug',
        effect:
          "Melee. Hit: 1d6 + STR piercing. Consumes target's held berry/potion.",
        levelLearned: 3,
      },
    ],
  },
  {
    dexNumber: 11,
    species: 'Metapod',
    types: ['Bug'],
    baseHp: 10,
    hpPerLevel: 5,
    baseAc: 16, // Huge AC bump for the cocoon!
    evolution: { targetSpecies: 'Butterfree', level: 11 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'String Shot',
        type: 'Bug',
        effect: 'DC 13 Dex save or target speed is halved.',
        levelLearned: 1,
      },
      {
        name: 'Bug Bite',
        type: 'Bug',
        effect: 'Melee. Hit: 1d6 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Harden',
        type: 'Normal',
        effect: 'Bonus Action: Add +2 to your AC for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Tackle (Cocoon Ram)',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning.',
        levelLearned: 7,
      },
    ],
  },
  {
    dexNumber: 12,
    species: 'Butterfree',
    types: ['Bug', 'Flying'],
    baseHp: 12,
    hpPerLevel: 7,
    baseAc: 14, // AC drops but mobility increases
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'String Shot',
        type: 'Bug',
        effect: 'DC 14 Dex save or target speed is halved.',
        levelLearned: 1,
      },
      {
        name: 'Bug Bite',
        type: 'Bug',
        effect: 'Melee. Hit: 1d6 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Harden',
        type: 'Normal',
        effect: 'Bonus Action: Add +2 to your AC for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Gust',
        type: 'Flying',
        effect: 'Ranged spell. Hit: 1d8 + INT flying damage.',
        levelLearned: 1,
      },
      {
        name: 'Sleep Powder',
        type: 'Grass',
        effect: 'DC 14 Wis save or fall unconscious for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Stun Spore',
        type: 'Grass',
        effect: 'DC 14 Con save or Paralyzed until end of next turn.',
        levelLearned: 8,
      },
      {
        name: 'Psybeam',
        type: 'Psychic',
        effect: 'Ranged spell. 2d6 psychic. DC 15 Wis save or confused.',
        levelLearned: 11,
      },
      {
        name: 'Bug Buzz',
        type: 'Bug',
        effect: '30ft radius. DC 16 Con save or 4d6 bug damage.',
        levelLearned: 14,
      },
      {
        name: 'Quiver Dance',
        type: 'Bug',
        effect:
          'Action: +2 to AC, spell attacks, and saving throws for 1 minute.',
        levelLearned: 17,
      },
    ],
  },

  // --- PIDGEY LINE ---
  {
    dexNumber: 16,
    species: 'Pidgey',
    types: ['Normal', 'Flying'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Pidgeotto', level: 5 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 13 Dex save or target has disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Gust',
        type: 'Flying',
        effect: 'Ranged spell. Hit: 1d6 + INT flying damage.',
        levelLearned: 3,
      },
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect: 'Bonus Action Melee. Hit: 1d4 + DEX slashing.',
        levelLearned: 4,
      },
    ],
  },
  {
    dexNumber: 17,
    species: 'Pidgeotto',
    types: ['Normal', 'Flying'],
    baseHp: 11,
    hpPerLevel: 7,
    baseAc: 14,
    evolution: { targetSpecies: 'Pidgeot', level: 11 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 14 Dex save or target has disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Gust',
        type: 'Flying',
        effect: 'Ranged spell. Hit: 1d6 + INT flying damage.',
        levelLearned: 1,
      },
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect: 'Bonus Action Melee. Hit: 1d4 + DEX slashing.',
        levelLearned: 1,
      },
      {
        name: 'Twister',
        type: 'Dragon',
        effect: 'DC 14 Str save or 2d6 dragon damage and pushed 5ft.',
        levelLearned: 5,
      },
      {
        name: 'Feather Dance',
        type: 'Flying',
        effect:
          'DC 14 Cha save. On fail, target subtracts 1d4 from attack rolls for 1 minute.',
        levelLearned: 7,
      },
      {
        name: 'Wing Attack',
        type: 'Flying',
        effect: 'Melee. Hit: 2d6 + STR bludgeoning.',
        levelLearned: 9,
      },
    ],
  },
  {
    dexNumber: 18,
    species: 'Pidgeot',
    types: ['Normal', 'Flying'],
    baseHp: 14,
    hpPerLevel: 8,
    baseAc: 16,
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 15 Dex save or target has disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Gust',
        type: 'Flying',
        effect: 'Ranged spell. Hit: 1d6 + INT flying damage.',
        levelLearned: 1,
      },
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect: 'Bonus Action Melee. Hit: 1d4 + DEX slashing.',
        levelLearned: 1,
      },
      {
        name: 'Twister',
        type: 'Dragon',
        effect: 'DC 15 Str save or 2d6 dragon damage and pushed 5ft.',
        levelLearned: 1,
      },
      {
        name: 'Feather Dance',
        type: 'Flying',
        effect: 'DC 15 Cha save or subtract 1d4 from attack rolls.',
        levelLearned: 1,
      },
      {
        name: 'Wing Attack',
        type: 'Flying',
        effect: 'Melee. Hit: 2d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Air Slash',
        type: 'Flying',
        effect: 'Ranged spell. 3d6 flying. DC 15 Con save or lose reaction.',
        levelLearned: 11,
      },
      {
        name: 'Roost',
        type: 'Flying',
        effect:
          'Action: Heal 3d8 HP. Lose Flying type resistance/immunity until next turn.',
        levelLearned: 14,
      },
      {
        name: 'Hurricane',
        type: 'Flying',
        effect:
          '20ft radius. DC 17 Str save or 6d10 flying damage and knocked prone.',
        levelLearned: 17,
      },
    ],
  },

  // --- PIKACHU LINE ---
  {
    dexNumber: 25,
    species: 'Pikachu',
    types: ['Electric'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 14,
    evolution: { targetSpecies: 'Raichu', level: 11 },
    moves: [
      {
        name: 'Thunder Shock',
        type: 'Electric',
        effect:
          'DC 13 Dex save. 1d6 electric damage. Target cannot take reactions.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Tail Whip',
        type: 'Normal',
        effect: 'DC 13 Dex save or AC reduced by 1 until next turn.',
        levelLearned: 3,
      },
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect: 'Bonus Action Melee. Hit: 1d4 + DEX slashing.',
        levelLearned: 4,
      },
      {
        name: 'Thunder Wave',
        type: 'Electric',
        effect: 'DC 14 Con save or Paralyzed until the end of their next turn.',
        levelLearned: 6,
      },
      {
        name: 'Spark',
        type: 'Electric',
        effect:
          'Melee. Hit: 2d6 + STR electric. Advantage if target is wearing metal.',
        levelLearned: 9,
      },
    ],
  },
  {
    dexNumber: 26,
    species: 'Raichu',
    types: ['Electric'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Thunder Shock',
        type: 'Electric',
        effect: 'DC 14 Dex save. 1d6 electric damage. No reactions.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 14 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Tail Whip',
        type: 'Normal',
        effect: 'DC 14 Dex save or AC reduced by 1.',
        levelLearned: 1,
      },
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect: 'Bonus Action Melee. Hit: 1d4 + DEX slashing.',
        levelLearned: 1,
      },
      {
        name: 'Thunder Wave',
        type: 'Electric',
        effect: 'DC 15 Con save or Paralyzed.',
        levelLearned: 1,
      },
      {
        name: 'Spark',
        type: 'Electric',
        effect: 'Melee. Hit: 2d6 + STR electric.',
        levelLearned: 1,
      },
      {
        name: 'Slam',
        type: 'Normal',
        effect: 'Melee. Hit: 2d8 + STR bludgeoning. Pushes target 5ft.',
        levelLearned: 1,
      },
      {
        name: 'Thunderbolt',
        type: 'Electric',
        effect: 'Ranged spell. 3d8 electric. DC 15 Dex save for half damage.',
        levelLearned: 11,
      },
      {
        name: 'Agility',
        type: 'Psychic',
        effect: 'Bonus Action: Dash or Disengage, and +2 AC until next turn.',
        levelLearned: 14,
      },
      {
        name: 'Thunder',
        type: 'Electric',
        effect:
          '10ft cylinder. 6d10 electric. DC 17 Con save for half. Advantage if raining.',
        levelLearned: 17,
      },
    ],
  },

  // --- FIGHTING STARTER LINE ---
  {
    dexNumber: 66,
    species: 'Machop',
    types: ['Fighting'],
    baseHp: 12, // Adjusted from 12 (kept)
    hpPerLevel: 7, // Scaled down from 8 to match block 1 balance
    baseAc: 13, // Scaled up from 11 to match block 1 balance
    evolution: { targetSpecies: 'Machoke', level: 7 },
    moves: [
      {
        name: 'Low Kick',
        type: 'Fighting',
        effect:
          'Melee Attack. Hit: 1d6 + STR. Target makes a STR save or is knocked prone.',
        levelLearned: 1,
      },
      {
        name: 'Karate Chop',
        type: 'Fighting',
        effect:
          'Melee Attack. Hit: 1d8 + STR. Critical hit on a natural 19 or 20.',
        levelLearned: 4,
      },
      {
        name: 'Revenge',
        type: 'Fighting',
        effect:
          'Melee Attack. Hit: 1d8 + STR. Deals double damage if Machop was hit since its last turn.',
        levelLearned: 6,
      },
    ],
  },
  {
    dexNumber: 67,
    species: 'Machoke',
    types: ['Fighting'],
    baseHp: 14, // Scaled down from 55 to match block 1 balance
    hpPerLevel: 9, // Scaled down from 10
    baseAc: 14, // Scaled up from 13
    evolution: { targetSpecies: 'Machamp', level: 13 },
    moves: [
      {
        name: 'Vital Throw',
        type: 'Fighting',
        effect:
          'Melee Attack. Auto-hits target for 2d8 bludgeoning, but Machoke goes last in initiative.',
        levelLearned: 1,
      },
      {
        name: 'Cross Chop',
        type: 'Fighting',
        effect: 'Melee Attack. Hit: 3d6 + STR slashing. Crits on a 19 or 20.',
        levelLearned: 9,
      },
      {
        name: 'Submission',
        type: 'Fighting',
        effect:
          'Melee Attack. Hit: 2d8 + STR bludgeoning. You and the target are grappled.',
        levelLearned: 11,
      },
    ],
  },
  {
    dexNumber: 68,
    species: 'Machamp',
    types: ['Fighting'],
    baseHp: 17, // Balanced for block 1 scale
    hpPerLevel: 11, // Balanced for block 1 scale
    baseAc: 16,
    moves: [
      {
        name: 'Vital Throw',
        type: 'Fighting',
        effect:
          'Melee Attack. Auto-hits target for 2d8 bludgeoning, but Machamp goes last in initiative.',
        levelLearned: 1,
      },
      {
        name: 'Cross Chop',
        type: 'Fighting',
        effect: 'Melee Attack. Hit: 3d6 + STR slashing. Crits on a 19 or 20.',
        levelLearned: 1,
      },
      {
        name: 'Submission',
        type: 'Fighting',
        effect:
          'Melee Attack. Hit: 2d8 + STR bludgeoning. You and the target are grappled.',
        levelLearned: 1,
      },
      {
        name: 'Dynamic Punch',
        type: 'Fighting',
        effect:
          'Melee Attack. Hit: 4d8 + STR bludgeoning. Target must make a CON save or be stunned until the end of your next turn.',
        levelLearned: 15,
      },
      {
        name: 'Close Combat',
        type: 'Fighting',
        effect:
          'Melee Attack. Hit: 6d8 + STR bludgeoning. Your AC drops by 2 until your next turn.',
        levelLearned: 18,
      },
    ],
  }, // --- GASTLY LINE ---
  {
    dexNumber: 92,
    species: 'Gastly',
    types: ['Ghost', 'Poison'],
    baseHp: 8,
    hpPerLevel: 4,
    baseAc: 12,
    evolution: { targetSpecies: 'Haunter', level: 5 },
    moves: [
      {
        name: 'Lick',
        type: 'Ghost',
        effect:
          'Melee Spell Attack. Hit: 1d4 necrotic. DC 13 Con save or paralyzed until end of next turn.',
        levelLearned: 1,
      },
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect:
          'DC 13 Wis save or fall unconscious for 1 minute (wakes on damage).',
        levelLearned: 1,
      },
      {
        name: 'Smog',
        type: 'Poison',
        effect:
          'DC 13 Con save or 1d6 poison damage and poisoned until end of next turn.',
        levelLearned: 3,
      },
    ],
  },
  {
    dexNumber: 93,
    species: 'Haunter',
    types: ['Ghost', 'Poison'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Gengar', level: 11 },
    moves: [
      {
        name: 'Lick',
        type: 'Ghost',
        effect:
          'Melee Spell Attack. Hit: 1d4 necrotic. DC 14 Con save or paralyzed until end of next turn.',
        levelLearned: 1,
      },
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect:
          'DC 14 Wis save or fall unconscious for 1 minute (wakes on damage).',
        levelLearned: 1,
      },
      {
        name: 'Smog',
        type: 'Poison',
        effect:
          'DC 14 Con save or 1d6 poison damage and poisoned until end of next turn.',
        levelLearned: 1,
      },
      {
        name: 'Night Shade',
        type: 'Ghost',
        effect:
          'Target takes necrotic damage exactly equal to your character level. No save.',
        levelLearned: 5,
      },
      {
        name: 'Confuse Ray',
        type: 'Ghost',
        effect:
          'DC 14 Wis save. On fail, target uses its action to make a melee attack against a random creature within reach.',
        levelLearned: 8,
      },
    ],
  },
  {
    dexNumber: 94,
    species: 'Gengar',
    types: ['Ghost', 'Poison'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Lick',
        type: 'Ghost',
        effect:
          'Melee Spell Attack. Hit: 1d4 necrotic. DC 15 Con save or paralyzed.',
        levelLearned: 1,
      },
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect: 'DC 15 Wis save or fall unconscious for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Smog',
        type: 'Poison',
        effect: 'DC 15 Con save or 1d6 poison damage and poisoned.',
        levelLearned: 1,
      },
      {
        name: 'Night Shade',
        type: 'Ghost',
        effect:
          'Target takes necrotic damage exactly equal to your character level. No save.',
        levelLearned: 1,
      },
      {
        name: 'Confuse Ray',
        type: 'Ghost',
        effect:
          'DC 15 Wis save or forced to attack a random creature within reach.',
        levelLearned: 1,
      },
      {
        name: 'Shadow Ball',
        type: 'Ghost',
        effect:
          'Ranged Spell Attack. Hit: 4d8 necrotic. DC 16 Wis save or target has disadvantage on next saving throw.',
        levelLearned: 11,
      },
      {
        name: 'Dream Eater',
        type: 'Psychic',
        effect:
          'Target must be unconscious. Hit: 6d6 psychic. You heal HP equal to half the damage dealt.',
        levelLearned: 15,
      },
    ],
  }, // --- WEEDLE LINE ---
  {
    dexNumber: 13,
    species: 'Weedle',
    types: ['Bug', 'Poison'],
    baseHp: 8,
    hpPerLevel: 4,
    baseAc: 12,
    evolution: { targetSpecies: 'Kakuna', level: 5 },
    moves: [
      {
        name: 'Poison Sting',
        type: 'Poison',
        effect:
          'Melee. Hit: 1d4 + STR piercing. DC 13 Con save or poisoned until end of next turn.',
        levelLearned: 1,
      },
      {
        name: 'String Shot',
        type: 'Bug',
        effect: 'DC 13 Dex save or target speed is halved for 1 minute.',
        levelLearned: 1,
      },
    ],
  },
  {
    dexNumber: 14,
    species: 'Kakuna',
    types: ['Bug', 'Poison'],
    baseHp: 10,
    hpPerLevel: 5,
    baseAc: 16, // High AC cocoon
    evolution: { targetSpecies: 'Beedrill', level: 11 },
    moves: [
      {
        name: 'Poison Sting',
        type: 'Poison',
        effect: 'Melee. Hit: 1d4 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Harden',
        type: 'Normal',
        effect: 'Bonus Action: Add +2 to your AC for 1 minute.',
        levelLearned: 1,
      },
    ],
  },
  {
    dexNumber: 15,
    species: 'Beedrill',
    types: ['Bug', 'Poison'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Fury Attack',
        type: 'Normal',
        effect: 'Melee. Make 1d4 attacks. Hit: 1d4 + STR piercing per strike.',
        levelLearned: 1,
      },
      {
        name: 'Focus Energy',
        type: 'Normal',
        effect: 'Bonus Action: Your next attack crits on a 18, 19, or 20.',
        levelLearned: 5,
      },
      {
        name: 'Twineedle',
        type: 'Bug',
        effect:
          'Melee. Make 2 attacks. Hit: 1d6 + STR piercing. DC 14 Con save or poisoned.',
        levelLearned: 11,
      },
      {
        name: 'Pin Missile',
        type: 'Bug',
        effect:
          'Ranged Weapon Attack (30ft). Make 1d4 attacks. Hit: 1d4 + DEX piercing.',
        levelLearned: 14,
      },
    ],
  },

  // --- RATTATA LINE ---
  {
    dexNumber: 19,
    species: 'Rattata',
    types: ['Normal'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Raticate', level: 9 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Tail Whip',
        type: 'Normal',
        effect: 'DC 13 Dex save or AC reduced by 1 until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect: 'Bonus Action Melee. Hit: 1d4 + DEX slashing.',
        levelLearned: 4,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 13 Con save or frightened.',
        levelLearned: 7,
      },
    ],
  },
  {
    dexNumber: 20,
    species: 'Raticate',
    types: ['Normal'],
    baseHp: 12,
    hpPerLevel: 7,
    baseAc: 14,
    moves: [
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect: 'Bonus Action Melee. Hit: 1d4 + DEX slashing.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 14 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Hyper Fang',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR piercing. DC 14 Con save or target speed halved.',
        levelLearned: 11,
      },
      {
        name: 'Super Fang',
        type: 'Normal',
        effect:
          'Melee. Hit: Reduces the target to exactly half of its current HP. Fails against Ghost types.',
        levelLearned: 16,
      },
    ],
  },

  // --- SPEAROW LINE ---
  {
    dexNumber: 21,
    species: 'Spearow',
    types: ['Normal', 'Flying'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Fearow', level: 10 },
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Leer',
        type: 'Normal',
        effect: 'DC 13 Wis save or AC reduced by 1 for 1 minute.',
        levelLearned: 4,
      },
      {
        name: 'Fury Attack',
        type: 'Normal',
        effect: 'Melee. Make 1d4 attacks. Hit: 1d4 + STR piercing.',
        levelLearned: 8,
      },
    ],
  },
  {
    dexNumber: 22,
    species: 'Fearow',
    types: ['Normal', 'Flying'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 15,
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Fury Attack',
        type: 'Normal',
        effect: 'Melee. Make 1d4 attacks. Hit: 1d4 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Mirror Move',
        type: 'Flying',
        effect:
          'Reaction: If hit by a spell/attack, you can copy the effect and target the attacker immediately.',
        levelLearned: 15,
      },
      {
        name: 'Drill Peck',
        type: 'Flying',
        effect:
          'Melee. Hit: 3d8 + DEX piercing. Ignores Shield/Protect effects.',
        levelLearned: 18,
      },
    ],
  },

  // --- EKANS LINE ---
  {
    dexNumber: 23,
    species: 'Ekans',
    types: ['Poison'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Arbok', level: 11 },
    moves: [
      {
        name: 'Wrap',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d4 + STR bludgeoning. Target is Grappled (escape DC 13).',
        levelLearned: 1,
      },
      {
        name: 'Leer',
        type: 'Normal',
        effect: 'DC 13 Wis save or AC reduced by 1 for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Poison Sting',
        type: 'Poison',
        effect: 'Melee. Hit: 1d4 + STR piercing. DC 13 Con save or poisoned.',
        levelLearned: 4,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 13 Con save or frightened.',
        levelLearned: 9,
      },
    ],
  },
  {
    dexNumber: 24,
    species: 'Arbok',
    types: ['Poison'],
    baseHp: 14,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Wrap',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR. Target is Grappled (escape DC 15).',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 15 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Glare',
        type: 'Normal',
        effect: 'DC 15 Cha save or Paralyzed until end of next turn.',
        levelLearned: 12,
      },
      {
        name: 'Acid',
        type: 'Poison',
        effect:
          '15ft cone. DC 15 Dex save. 3d6 acid damage and AC reduced by 2 for 1 minute.',
        levelLearned: 16,
      },
    ],
  },

  // --- SANDSHREW LINE ---
  {
    dexNumber: 27,
    species: 'Sandshrew',
    types: ['Ground'],
    baseHp: 11,
    hpPerLevel: 7,
    baseAc: 14,
    evolution: { targetSpecies: 'Sandslash', level: 11 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Defense Curl',
        type: 'Normal',
        effect:
          'Bonus Action: +2 AC and resistance to bludgeoning damage until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 13 Dex save or disadvantage on next attack.',
        levelLearned: 3,
      },
      {
        name: 'Rollout',
        type: 'Rock',
        effect:
          'Melee. Hit: 1d6 bludgeoning. Damage doubles each consecutive turn you use this move (up to 5 turns).',
        levelLearned: 8,
      },
    ],
  },
  {
    dexNumber: 28,
    species: 'Sandslash',
    types: ['Ground'],
    baseHp: 15,
    hpPerLevel: 9,
    baseAc: 16,
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Defense Curl',
        type: 'Normal',
        effect:
          'Bonus Action: +2 AC and resistance to bludgeoning until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Rollout',
        type: 'Rock',
        effect:
          'Melee. Hit: 1d6 bludgeoning. Damage doubles each consecutive turn.',
        levelLearned: 1,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + STR slashing. Crits on 19 or 20.',
        levelLearned: 12,
      },
      {
        name: 'Earthquake',
        type: 'Ground',
        effect:
          '30ft radius. DC 16 Dex save or 6d8 bludgeoning damage and knocked prone.',
        levelLearned: 17,
      },
    ],
  }, // --- NIDORAN♀ LINE ---
  {
    dexNumber: 29,
    species: 'Nidoran♀',
    types: ['Poison'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Nidorina', level: 8 },
    moves: [
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Poison Sting',
        type: 'Poison',
        effect: 'Melee. Hit: 1d4 + STR piercing. DC 13 Con save or poisoned.',
        levelLearned: 5,
      },
      {
        name: 'Double Kick',
        type: 'Fighting',
        effect: 'Melee. Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 10,
      },
    ],
  },
  {
    dexNumber: 30,
    species: 'Nidorina',
    types: ['Poison'],
    baseHp: 14,
    hpPerLevel: 8,
    baseAc: 14,
    evolution: { targetSpecies: 'Nidoqueen', item: 'Moon Stone' },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 14 Con save or frightened.',
        levelLearned: 11,
      },
      {
        name: 'Fury Swipes',
        type: 'Normal',
        effect: 'Melee. Make 1d4 attacks. Hit: 1d4 + STR slashing.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 31,
    species: 'Nidoqueen',
    types: ['Poison', 'Ground'],
    baseHp: 18,
    hpPerLevel: 10,
    baseAc: 16,
    moves: [
      {
        name: 'Body Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. DC 15 Con save or paralyzed.',
        levelLearned: 1,
      },
      {
        name: 'Superpower',
        type: 'Fighting',
        effect:
          'Melee. Hit: 4d8 + STR bludgeoning. User suffers -2 to Attack and AC until end of next turn.',
        levelLearned: 10,
      },
      {
        name: 'Earth Power',
        type: 'Ground',
        effect:
          'Ranged (30ft). Hit: 3d8 + CON bludgeoning. DC 16 Dex save or AC reduced by 1.',
        levelLearned: 14,
      },
    ],
  },

  // --- NIDORAN♂ LINE ---
  {
    dexNumber: 32,
    species: 'Nidoran♂',
    types: ['Poison'],
    baseHp: 9,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Nidorino', level: 8 },
    moves: [
      {
        name: 'Leer',
        type: 'Normal',
        effect: 'DC 13 Wis save or AC reduced by 1 for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d4 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Focus Energy',
        type: 'Normal',
        effect: 'Bonus Action: Your next attack crits on an 18, 19, or 20.',
        levelLearned: 5,
      },
      {
        name: 'Double Kick',
        type: 'Fighting',
        effect: 'Melee. Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 10,
      },
    ],
  },
  {
    dexNumber: 33,
    species: 'Nidorino',
    types: ['Poison'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 14,
    evolution: { targetSpecies: 'Nidoking', item: 'Moon Stone' },
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d4 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Horn Attack',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR piercing.',
        levelLearned: 11,
      },
      {
        name: 'Poison Jab',
        type: 'Poison',
        effect: 'Melee. Hit: 2d6 + STR piercing. DC 14 Con save or poisoned.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 34,
    species: 'Nidoking',
    types: ['Poison', 'Ground'],
    baseHp: 17,
    hpPerLevel: 10,
    baseAc: 16,
    moves: [
      {
        name: 'Thrash',
        type: 'Normal',
        effect:
          'Melee. Hit: 3d8 + STR bludgeoning. Must be used for 1d4 turns. User is confused afterward.',
        levelLearned: 1,
      },
      {
        name: 'Earth Power',
        type: 'Ground',
        effect:
          'Ranged (30ft). Hit: 3d8 + CON bludgeoning. DC 16 Dex save or AC reduced by 1.',
        levelLearned: 10,
      },
      {
        name: 'Megahorn',
        type: 'Bug',
        effect:
          'Melee. Hit: 4d10 + STR piercing. Attack roll has disadvantage.',
        levelLearned: 14,
      },
    ],
  },

  // --- CLEFAIRY LINE ---
  {
    dexNumber: 35,
    species: 'Clefairy',
    types: ['Fairy'], // Updated to modern typing
    baseHp: 12,
    hpPerLevel: 7,
    baseAc: 12,
    evolution: { targetSpecies: 'Clefable', item: 'Moon Stone' },
    moves: [
      {
        name: 'Pound',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Sing',
        type: 'Normal',
        effect:
          'DC 13 Cha save or fall unconscious (asleep) for 1 minute or until taking damage.',
        levelLearned: 4,
      },
      {
        name: 'Metronome',
        type: 'Normal',
        effect:
          'Action: Roll 1d100 and consult the Metronome Table to cast a random move.',
        levelLearned: 8,
      },
      {
        name: 'Meteor Mash',
        type: 'Steel',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. On a roll of 18-20, user gains +2 to Attack rolls for 1 minute.',
        levelLearned: 13,
      },
    ],
  },
  {
    dexNumber: 36,
    species: 'Clefable',
    types: ['Fairy'],
    baseHp: 16,
    hpPerLevel: 9,
    baseAc: 14,
    moves: [
      {
        name: 'Sing',
        type: 'Normal',
        effect: 'DC 15 Cha save or fall asleep for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Metronome',
        type: 'Normal',
        effect: 'Action: Roll 1d100 and consult the Metronome Table.',
        levelLearned: 1,
      },
      {
        name: 'Moonblast',
        type: 'Fairy',
        effect:
          'Ranged (60ft). Hit: 3d8 + CHA radiant damage. DC 15 Cha save or attacker has disadvantage on next attack.',
        levelLearned: 10,
      },
      {
        name: 'Healing Wish',
        type: 'Psychic',
        effect:
          'User drops to 0 HP. One ally within 30ft is fully healed of HP and all status conditions.',
        levelLearned: 15,
      },
    ],
  },

  // --- VULPIX LINE ---
  {
    dexNumber: 37,
    species: 'Vulpix',
    types: ['Fire'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Ninetales', item: 'Fire Stone' },
    moves: [
      {
        name: 'Ember',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d6 + CHA fire damage. DC 13 Dex save or burned.',
        levelLearned: 1,
      },
      {
        name: 'Tail Whip',
        type: 'Normal',
        effect: 'DC 13 Dex save or AC reduced by 1 until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Will-O-Wisp',
        type: 'Fire',
        effect: 'Ranged (30ft). DC 13 Dex save or target is burned.',
        levelLearned: 6,
      },
      {
        name: 'Fire Spin',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d4 fire damage and trapped for 1d4 turns, taking 1d4 fire damage at the start of their turns.',
        levelLearned: 10,
      },
    ],
  },
  {
    dexNumber: 38,
    species: 'Ninetales',
    types: ['Fire'],
    baseHp: 14,
    hpPerLevel: 7,
    baseAc: 15,
    moves: [
      {
        name: 'Will-O-Wisp',
        type: 'Fire',
        effect: 'Ranged (30ft). DC 15 Dex save or target is burned.',
        levelLearned: 1,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        effect:
          '30ft line. DC 15 Dex save. 3d8 fire damage on fail, half on success. 10% chance to burn.',
        levelLearned: 1,
      },
      {
        name: 'Confuse Ray',
        type: 'Ghost',
        effect:
          'Ranged (30ft). DC 15 Wis save or target is Confused for 1 minute.',
        levelLearned: 8,
      },
      {
        name: 'Fire Blast',
        type: 'Fire',
        effect:
          'Ranged (60ft). Hit: 4d10 + CHA fire damage. Attack has disadvantage. 10% chance to burn.',
        levelLearned: 15,
      },
    ],
  },

  // --- JIGGLYPUFF LINE ---
  {
    dexNumber: 39,
    species: 'Jigglypuff',
    types: ['Normal', 'Fairy'],
    baseHp: 14,
    hpPerLevel: 8,
    baseAc: 11,
    evolution: { targetSpecies: 'Wigglytuff', item: 'Moon Stone' },
    moves: [
      {
        name: 'Sing',
        type: 'Normal',
        effect:
          'DC 13 Cha save or fall unconscious (asleep) for 1 minute or until taking damage.',
        levelLearned: 1,
      },
      {
        name: 'Pound',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Defense Curl',
        type: 'Normal',
        effect:
          'Bonus Action: +2 AC and resistance to bludgeoning damage until next turn.',
        levelLearned: 4,
      },
      {
        name: 'Rest',
        type: 'Psychic',
        effect:
          'Action: Fully restore HP, but fall asleep for exactly 2 turns.',
        levelLearned: 10,
      },
    ],
  },
  {
    dexNumber: 40,
    species: 'Wigglytuff',
    types: ['Normal', 'Fairy'],
    baseHp: 20,
    hpPerLevel: 11,
    baseAc: 13,
    moves: [
      {
        name: 'Sing',
        type: 'Normal',
        effect: 'DC 15 Cha save or fall asleep for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Double Slap',
        type: 'Normal',
        effect: 'Melee. Make 1d4 attacks. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Hyper Voice',
        type: 'Normal',
        effect:
          '30ft cone. DC 15 Con save or 3d6 thunder damage. Ignores Substitute and cover.',
        levelLearned: 12,
      },
      {
        name: 'Play Rough',
        type: 'Fairy',
        effect:
          'Melee. Hit: 3d8 + STR bludgeoning. DC 15 Con save or attacker gains disadvantage on their next attack.',
        levelLearned: 16,
      },
    ],
  },

  // --- ZUBAT LINE ---
  {
    dexNumber: 41,
    species: 'Zubat',
    types: ['Poison', 'Flying'],
    baseHp: 8,
    hpPerLevel: 5,
    baseAc: 14,
    evolution: { targetSpecies: 'Golbat', level: 22 },
    moves: [
      {
        name: 'Leech Life',
        type: 'Bug',
        effect:
          'Melee. Hit: 1d6 + STR piercing. User regains HP equal to half the damage dealt.',
        levelLearned: 1,
      },
      {
        name: 'Supersonic',
        type: 'Normal',
        effect: 'DC 13 Wis save or target is Confused for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 13 Con save or frightened.',
        levelLearned: 9,
      },
      {
        name: 'Wing Attack',
        type: 'Flying',
        effect: 'Melee. Hit: 2d6 + DEX slashing.',
        levelLearned: 13,
      },
    ],
  },
  {
    dexNumber: 42,
    species: 'Golbat',
    types: ['Poison', 'Flying'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Leech Life',
        type: 'Bug',
        effect:
          'Melee. Hit: 1d6 + STR piercing. User regains HP equal to half damage dealt.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 15 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Confuse Ray',
        type: 'Ghost',
        effect:
          'Ranged (30ft). DC 15 Wis save or target is Confused for 1 minute.',
        levelLearned: 12,
      },
      {
        name: 'Air Cutter',
        type: 'Flying',
        effect:
          '30ft cone. DC 15 Dex save. 2d8 slashing damage. Crits on 18-20.',
        levelLearned: 18,
      },
    ],
  }, // --- ODDISH LINE ---
  {
    dexNumber: 43,
    species: 'Oddish',
    types: ['Grass', 'Poison'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 12,
    evolution: { targetSpecies: 'Gloom', level: 21 },
    moves: [
      {
        name: 'Absorb',
        type: 'Grass',
        effect:
          'Ranged (30ft). Hit: 1d4 + WIS necrotic. User heals HP equal to half the damage dealt.',
        levelLearned: 1,
      },
      {
        name: 'Sweet Scent',
        type: 'Normal',
        effect:
          'DC 13 Wis save or target has -2 to their AC until the end of your next turn.',
        levelLearned: 5,
      },
      {
        name: 'Acid',
        type: 'Poison',
        effect:
          '15ft cone. DC 13 Dex save. 2d6 acid damage and AC reduced by 1 for 1 minute.',
        levelLearned: 9,
      },
      {
        name: 'Sleep Powder',
        type: 'Grass',
        effect:
          'Ranged (30ft). DC 13 Con save or target falls asleep for 1 minute.',
        levelLearned: 13,
      },
    ],
  },
  {
    dexNumber: 44,
    species: 'Gloom',
    types: ['Grass', 'Poison'],
    baseHp: 12,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Vileplume', item: 'Leaf Stone' },
    moves: [
      {
        name: 'Absorb',
        type: 'Grass',
        effect:
          'Ranged (30ft). Hit: 1d4 + WIS necrotic. User heals half damage dealt.',
        levelLearned: 1,
      },
      {
        name: 'Acid',
        type: 'Poison',
        effect:
          '15ft cone. DC 14 Dex save. 2d6 acid damage and AC reduced by 1.',
        levelLearned: 1,
      },
      {
        name: 'Mega Drain',
        type: 'Grass',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS necrotic. User heals half damage dealt.',
        levelLearned: 14,
      },
      {
        name: 'Petal Dance',
        type: 'Grass',
        effect:
          'Melee. Hit: 3d8 + WIS magical bludgeoning. Must be used for 1d4 turns. User is confused afterward.',
        levelLearned: 18,
      },
    ],
  },
  {
    dexNumber: 45,
    species: 'Vileplume',
    types: ['Grass', 'Poison'],
    baseHp: 16,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Mega Drain',
        type: 'Grass',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS necrotic. User heals half damage dealt.',
        levelLearned: 1,
      },
      {
        name: 'Aromatherapy',
        type: 'Grass',
        effect: 'Action: Cure all allies within 30ft of all status conditions.',
        levelLearned: 10,
      },
      {
        name: 'Solar Beam',
        type: 'Grass',
        effect:
          '60ft line. Turn 1: Charge. Turn 2: DC 16 Dex save or 6d10 radiant damage (half on success). No charge required in harsh sunlight.',
        levelLearned: 15,
      },
    ],
  },

  // --- PARAS LINE ---
  {
    dexNumber: 46,
    species: 'Paras',
    types: ['Bug', 'Grass'],
    baseHp: 8,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Parasect', level: 24 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Stun Spore',
        type: 'Grass',
        effect: 'Ranged (30ft). DC 13 Con save or paralyzed for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'Poison Powder',
        type: 'Poison',
        effect: 'Ranged (30ft). DC 13 Con save or poisoned for 1 minute.',
        levelLearned: 11,
      },
      {
        name: 'Leech Life',
        type: 'Bug',
        effect:
          'Melee. Hit: 1d6 + STR piercing. User heals HP equal to half damage dealt.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 47,
    species: 'Parasect',
    types: ['Bug', 'Grass'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 15,
    moves: [
      {
        name: 'Leech Life',
        type: 'Bug',
        effect: 'Melee. Hit: 1d6 + STR piercing. User heals half damage dealt.',
        levelLearned: 1,
      },
      {
        name: 'Spore',
        type: 'Grass',
        effect:
          'Ranged (30ft). Target automatically falls asleep. Fails against Grass types or Overcoat abilities.',
        levelLearned: 1,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + STR slashing. Crits on 19 or 20.',
        levelLearned: 12,
      },
      {
        name: 'X-Scissor',
        type: 'Bug',
        effect: 'Melee. Hit: 3d8 + STR slashing.',
        levelLearned: 16,
      },
    ],
  },

  // --- VENONAT LINE ---
  {
    dexNumber: 48,
    species: 'Venonat',
    types: ['Bug', 'Poison'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Venomoth', level: 31 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Supersonic',
        type: 'Normal',
        effect: 'DC 13 Wis save or Confused for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 11,
      },
      {
        name: 'Poison Powder',
        type: 'Poison',
        effect: 'Ranged (30ft). DC 13 Con save or poisoned.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 49,
    species: 'Venomoth',
    types: ['Bug', 'Poison'],
    baseHp: 14,
    hpPerLevel: 7,
    baseAc: 15,
    moves: [
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 1,
      },
      {
        name: 'Gust',
        type: 'Flying',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS slashing. Damage doubles if target is Flying or Bouncing.',
        levelLearned: 1,
      },
      {
        name: 'Psybeam',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 2d8 + WIS psychic damage. 10% chance to Confuse.',
        levelLearned: 12,
      },
      {
        name: 'Bug Buzz',
        type: 'Bug',
        effect:
          '30ft radius. DC 15 Con save. 3d8 thunder damage and 10% chance to lower target AC by 1.',
        levelLearned: 18,
      },
    ],
  },

  // --- DIGLETT LINE ---
  {
    dexNumber: 50,
    species: 'Diglett',
    types: ['Ground'],
    baseHp: 6,
    hpPerLevel: 4,
    baseAc: 14,
    evolution: { targetSpecies: 'Dugtrio', level: 26 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 13 Dex save or disadvantage on next attack.',
        levelLearned: 4,
      },
      {
        name: 'Magnitude',
        type: 'Ground',
        effect:
          '30ft radius. Roll 1d10 to determine Magnitude (1-3: 1d4 damage, 4-6: 2d6, 7-8: 3d8, 9: 4d10, 10: 6d12). Dex save for half.',
        levelLearned: 9,
      },
      {
        name: 'Dig',
        type: 'Ground',
        effect:
          'Turn 1: Burrow underground (untargetable by most attacks). Turn 2: Melee. Hit: 2d8 + STR bludgeoning.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 51,
    species: 'Dugtrio',
    types: ['Ground'],
    baseHp: 9,
    hpPerLevel: 6,
    baseAc: 16,
    moves: [
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 15 Dex save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Dig',
        type: 'Ground',
        effect: 'Turn 1: Burrow. Turn 2: Melee. Hit: 2d8 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + STR slashing. Crits on 19 or 20.',
        levelLearned: 12,
      },
      {
        name: 'Earthquake',
        type: 'Ground',
        effect:
          '30ft radius. DC 16 Dex save or 6d8 bludgeoning damage and knocked prone.',
        levelLearned: 18,
      },
    ],
  },

  // --- MEOWTH LINE ---
  {
    dexNumber: 52,
    species: 'Meowth',
    types: ['Normal'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 14,
    evolution: { targetSpecies: 'Persian', level: 28 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 13 Con save or frightened.',
        levelLearned: 6,
      },
      {
        name: 'Pay Day',
        type: 'Normal',
        effect:
          'Ranged (30ft). Hit: 1d6 + DEX bludgeoning. Spawns 1d4 gold pieces on the ground.',
        levelLearned: 12,
      },
      {
        name: 'Faint Attack',
        type: 'Dark',
        effect: 'Melee. Hit: 2d6 + DEX dark damage. This attack never misses.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 53,
    species: 'Persian',
    types: ['Normal'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 16,
    moves: [
      {
        name: 'Fake Out',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d6 + DEX bludgeoning. Target is stunned until end of turn. Only usable on first turn of combat.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 14 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + DEX slashing. Crits on 19 or 20.',
        levelLearned: 12,
      },
      {
        name: 'Power Gem',
        type: 'Rock',
        effect: 'Ranged (60ft). Hit: 3d8 + WIS magical piercing.',
        levelLearned: 18,
      },
    ],
  }, // --- PSYDUCK LINE ---
  {
    dexNumber: 54,
    species: 'Psyduck',
    types: ['Water'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 12,
    evolution: { targetSpecies: 'Golduck', level: 33 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 5,
      },
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 10,
      },
      {
        name: 'Disable',
        type: 'Normal',
        effect:
          'DC 13 Wis save. Target cannot use the last move it used for 1 minute.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 55,
    species: 'Golduck',
    types: ['Water'],
    baseHp: 16,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse.',
        levelLearned: 1,
      },
      {
        name: 'Surf',
        type: 'Water',
        effect:
          '15ft radius. DC 15 Dex save or 4d8 water damage (half on success).',
        levelLearned: 14,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 19,
      },
    ],
  },

  // --- MANKEY LINE ---
  {
    dexNumber: 56,
    species: 'Mankey',
    types: ['Fighting'],
    baseHp: 8,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Primeape', level: 28 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Leer',
        type: 'Normal',
        effect: 'DC 13 Wis save or AC reduced by 1 for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Karate Chop',
        type: 'Fighting',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. Crits on 19 or 20.',
        levelLearned: 9,
      },
      {
        name: 'Cross Chop',
        type: 'Fighting',
        effect:
          'Melee. Hit: 3d6 + STR bludgeoning. Attack roll has disadvantage. Crits on 19 or 20.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 57,
    species: 'Primeape',
    types: ['Fighting'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 14,
    moves: [
      {
        name: 'Karate Chop',
        type: 'Fighting',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. Crits on 19 or 20.',
        levelLearned: 1,
      },
      {
        name: 'Cross Chop',
        type: 'Fighting',
        effect:
          'Melee. Hit: 3d6 + STR bludgeoning. Attack roll has disadvantage. Crits on 19 or 20.',
        levelLearned: 1,
      },
      {
        name: 'Thrash',
        type: 'Normal',
        effect:
          'Melee. Hit: 3d8 + STR bludgeoning. Must be used for 1d4 turns. User is Confused afterward.',
        levelLearned: 12,
      },
      {
        name: 'Close Combat',
        type: 'Fighting',
        effect:
          'Melee. Hit: 4d10 + STR bludgeoning. User suffers -2 AC for 1 minute.',
        levelLearned: 18,
      },
    ],
  },

  // --- GROWLITHE LINE ---
  {
    dexNumber: 58,
    species: 'Growlithe',
    types: ['Fire'],
    baseHp: 11,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Arcanine', item: 'Fire Stone' },
    moves: [
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 13 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Roar',
        type: 'Normal',
        effect: 'DC 13 Wis save or target is forced to flee or be swapped out.',
        levelLearned: 5,
      },
      {
        name: 'Ember',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d6 + CHA fire damage. DC 13 Dex save or burned.',
        levelLearned: 9,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        effect:
          '30ft line. DC 14 Dex save. 3d8 fire damage on fail, half on success. 10% chance to burn.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 59,
    species: 'Arcanine',
    types: ['Fire'],
    baseHp: 18,
    hpPerLevel: 10,
    baseAc: 16,
    moves: [
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 15 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        effect:
          '30ft line. DC 16 Dex save. 3d8 fire damage on fail, half on success. 10% chance to burn.',
        levelLearned: 1,
      },
      {
        name: 'Extreme Speed',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. This attack always goes first in the initiative order.',
        levelLearned: 12,
      },
      {
        name: 'Flare Blitz',
        type: 'Fire',
        effect:
          'Melee. Hit: 5d10 + STR fire damage. User takes recoil damage equal to 1/3 of the damage dealt. 10% chance to burn target.',
        levelLearned: 18,
      },
    ],
  },

  // --- POLIWAG LINE ---
  {
    dexNumber: 60,
    species: 'Poliwag',
    types: ['Water'],
    baseHp: 8,
    hpPerLevel: 5,
    baseAc: 12,
    evolution: { targetSpecies: 'Poliwhirl', level: 25 },
    moves: [
      {
        name: 'Bubble',
        type: 'Water',
        effect:
          'Ranged (30ft). Hit: 1d4 + WIS water damage. DC 13 Dex save or speed is halved.',
        levelLearned: 1,
      },
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect: 'Ranged (30ft). DC 13 Wis save or fall asleep for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 9,
      },
      {
        name: 'Double Slap',
        type: 'Normal',
        effect: 'Melee. Make 1d4 attacks. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 14,
      },
    ],
  },
  {
    dexNumber: 61,
    species: 'Poliwhirl',
    types: ['Water'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 14,
    evolution: { targetSpecies: 'Poliwrath', item: 'Water Stone' },
    moves: [
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect: 'Ranged (30ft). DC 14 Wis save or fall asleep for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Body Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. DC 14 Con save or paralyzed.',
        levelLearned: 12,
      },
      {
        name: 'Bubble Beam',
        type: 'Water',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS water damage. DC 14 Dex save or speed halved.',
        levelLearned: 16,
      },
    ],
  },
  {
    dexNumber: 62,
    species: 'Poliwrath',
    types: ['Water', 'Fighting'],
    baseHp: 18,
    hpPerLevel: 9,
    baseAc: 16,
    moves: [
      {
        name: 'Body Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. DC 15 Con save or paralyzed.',
        levelLearned: 1,
      },
      {
        name: 'Bubble Beam',
        type: 'Water',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS water damage. DC 15 Dex save or speed halved.',
        levelLearned: 1,
      },
      {
        name: 'Submission',
        type: 'Fighting',
        effect:
          'Melee. Hit: 3d8 + STR bludgeoning. Target is grappled. User takes recoil damage equal to 1/4 of damage dealt.',
        levelLearned: 14,
      },
      {
        name: 'Dynamic Punch',
        type: 'Fighting',
        effect:
          'Melee. Hit: 4d10 + STR bludgeoning. Target is automatically Confused. Attack roll has disadvantage.',
        levelLearned: 18,
      },
    ],
  },

  // --- ABRA LINE ---
  {
    dexNumber: 63,
    species: 'Abra',
    types: ['Psychic'],
    baseHp: 6,
    hpPerLevel: 3,
    baseAc: 12,
    evolution: { targetSpecies: 'Kadabra', level: 16 },
    moves: [
      {
        name: 'Teleport',
        type: 'Psychic',
        effect:
          'Reaction: When targeted by an attack, user teleports up to 30ft away, causing the attack to automatically miss.',
        levelLearned: 1,
      },
    ],
  },
  {
    dexNumber: 64,
    species: 'Kadabra',
    types: ['Psychic'],
    baseHp: 11,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Alakazam', item: 'Trade' },
    moves: [
      {
        name: 'Teleport',
        type: 'Psychic',
        effect: 'Reaction: Teleport up to 30ft away, avoiding an attack.',
        levelLearned: 1,
      },
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 1,
      },
      {
        name: 'Disable',
        type: 'Normal',
        effect:
          'DC 14 Wis save. Target cannot use the last move it used for 1 minute.',
        levelLearned: 12,
      },
      {
        name: 'Psybeam',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 2d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 16,
      },
    ],
  },
  {
    dexNumber: 65,
    species: 'Alakazam',
    types: ['Psychic'],
    baseHp: 14,
    hpPerLevel: 6,
    baseAc: 14,
    moves: [
      {
        name: 'Psybeam',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 2d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 1,
      },
      {
        name: 'Recover',
        type: 'Normal',
        effect: 'Action: Restore up to half of your maximum HP.',
        levelLearned: 10,
      },
      {
        name: 'Calm Mind',
        type: 'Psychic',
        effect:
          'Bonus Action: +2 to your WIS modifier for attacks and saves for 1 minute.',
        levelLearned: 15,
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 4d8 + WIS psychic damage. DC 16 Wis save or target AC is reduced by 1.',
        levelLearned: 18,
      },
    ],
  }, // --- BELLSPROUT LINE ---
  {
    dexNumber: 69,
    species: 'Bellsprout',
    types: ['Grass', 'Poison'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 11,
    evolution: { targetSpecies: 'Weepinbell', level: 21 },
    moves: [
      {
        name: 'Vine Whip',
        type: 'Grass',
        effect: 'Melee (15ft reach). Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Growth',
        type: 'Normal',
        effect:
          'Bonus Action: Gain +1 to Attack and Damage rolls for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Wrap',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d4 + STR bludgeoning. Target is Grappled (escape DC 13).',
        levelLearned: 9,
      },
      {
        name: 'Sleep Powder',
        type: 'Grass',
        effect:
          'Ranged (30ft). DC 13 Con save or target falls asleep for 1 minute.',
        levelLearned: 13,
      },
    ],
  },
  {
    dexNumber: 70,
    species: 'Weepinbell',
    types: ['Grass', 'Poison'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 13,
    evolution: { targetSpecies: 'Victreebel', item: 'Leaf Stone' },
    moves: [
      {
        name: 'Vine Whip',
        type: 'Grass',
        effect: 'Melee (15ft reach). Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Acid',
        type: 'Poison',
        effect:
          '15ft cone. DC 14 Dex save. 2d6 acid damage and AC reduced by 1.',
        levelLearned: 1,
      },
      {
        name: 'Stun Spore',
        type: 'Grass',
        effect: 'Ranged (30ft). DC 14 Con save or paralyzed for 1 minute.',
        levelLearned: 15,
      },
      {
        name: 'Razor Leaf',
        type: 'Grass',
        effect: 'Ranged (30ft). Hit: 2d6 + WIS slashing. Crits on 19 or 20.',
        levelLearned: 19,
      },
    ],
  },
  {
    dexNumber: 71,
    species: 'Victreebel',
    types: ['Grass', 'Poison'],
    baseHp: 17,
    hpPerLevel: 9,
    baseAc: 15,
    moves: [
      {
        name: 'Razor Leaf',
        type: 'Grass',
        effect: 'Ranged (30ft). Hit: 2d6 + WIS slashing. Crits on 19 or 20.',
        levelLearned: 1,
      },
      {
        name: 'Sleep Powder',
        type: 'Grass',
        effect: 'Ranged (30ft). DC 15 Con save or target falls asleep.',
        levelLearned: 1,
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 3d8 + WIS poison damage. 30% chance to poison target.',
        levelLearned: 14,
      },
      {
        name: 'Solar Beam',
        type: 'Grass',
        effect:
          '60ft line. Turn 1: Charge. Turn 2: DC 16 Dex save or 6d10 radiant damage (half on success). No charge required in harsh sunlight.',
        levelLearned: 18,
      },
    ],
  },

  // --- TENTACOOL LINE ---
  {
    dexNumber: 72,
    species: 'Tentacool',
    types: ['Water', 'Poison'],
    baseHp: 8,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Tentacruel', level: 30 },
    moves: [
      {
        name: 'Poison Sting',
        type: 'Poison',
        effect: 'Melee. Hit: 1d4 + STR piercing. DC 13 Con save or poisoned.',
        levelLearned: 1,
      },
      {
        name: 'Supersonic',
        type: 'Normal',
        effect: 'DC 13 Wis save or target is Confused for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Acid',
        type: 'Poison',
        effect:
          '15ft cone. DC 13 Dex save. 2d6 acid damage and AC reduced by 1.',
        levelLearned: 10,
      },
      {
        name: 'Bubble Beam',
        type: 'Water',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS water damage. DC 13 Dex save or speed halved.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 73,
    species: 'Tentacruel',
    types: ['Water', 'Poison'],
    baseHp: 16,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Acid',
        type: 'Poison',
        effect:
          '15ft cone. DC 15 Dex save. 2d6 acid damage and AC reduced by 1.',
        levelLearned: 1,
      },
      {
        name: 'Bubble Beam',
        type: 'Water',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS water damage. DC 15 Dex save or speed halved.',
        levelLearned: 1,
      },
      {
        name: 'Barrier',
        type: 'Psychic',
        effect: 'Bonus Action: Gain +2 AC for 1 minute.',
        levelLearned: 14,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 18,
      },
    ],
  },

  // --- GEODUDE LINE ---
  {
    dexNumber: 74,
    species: 'Geodude',
    types: ['Rock', 'Ground'],
    baseHp: 9,
    hpPerLevel: 6,
    baseAc: 15, // High base AC for rock
    evolution: { targetSpecies: 'Graveler', level: 25 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Defense Curl',
        type: 'Normal',
        effect:
          'Bonus Action: +2 AC and resistance to bludgeoning until next turn.',
        levelLearned: 4,
      },
      {
        name: 'Rock Throw',
        type: 'Rock',
        effect: 'Ranged (30ft). Hit: 1d8 + STR bludgeoning.',
        levelLearned: 9,
      },
      {
        name: 'Magnitude',
        type: 'Ground',
        effect:
          '30ft radius. Roll 1d10 to determine Magnitude (1-3: 1d4 damage, 4-6: 2d6, 7-8: 3d8, 9: 4d10, 10: 6d12). Dex save for half.',
        levelLearned: 14,
      },
    ],
  },
  {
    dexNumber: 75,
    species: 'Graveler',
    types: ['Rock', 'Ground'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 16,
    evolution: { targetSpecies: 'Golem', item: 'Trade' },
    moves: [
      {
        name: 'Rock Throw',
        type: 'Rock',
        effect: 'Ranged (30ft). Hit: 1d8 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Magnitude',
        type: 'Ground',
        effect:
          '30ft radius. Roll 1d10 for damage (1-3: 1d4, 4-6: 2d6, 7-8: 3d8, 9: 4d10, 10: 6d12).',
        levelLearned: 1,
      },
      {
        name: 'Rollout',
        type: 'Rock',
        effect:
          'Melee. Hit: 1d6 bludgeoning. Damage doubles each consecutive turn you use this move (up to 5 turns).',
        levelLearned: 12,
      },
      {
        name: 'Earthquake',
        type: 'Ground',
        effect:
          '30ft radius. DC 15 Dex save or 6d8 bludgeoning damage and knocked prone.',
        levelLearned: 18,
      },
    ],
  },
  {
    dexNumber: 76,
    species: 'Golem',
    types: ['Rock', 'Ground'],
    baseHp: 18,
    hpPerLevel: 10,
    baseAc: 18,
    moves: [
      {
        name: 'Rollout',
        type: 'Rock',
        effect:
          'Melee. Hit: 1d6 bludgeoning. Damage doubles each consecutive turn.',
        levelLearned: 1,
      },
      {
        name: 'Earthquake',
        type: 'Ground',
        effect:
          '30ft radius. DC 16 Dex save or 6d8 bludgeoning damage and knocked prone.',
        levelLearned: 1,
      },
      {
        name: 'Explosion',
        type: 'Normal',
        effect:
          '30ft radius. DC 16 Dex save or 10d10 fire/bludgeoning damage (half on success). User instantly drops to 0 HP.',
        levelLearned: 14,
      },
      {
        name: 'Stone Edge',
        type: 'Rock',
        effect: 'Melee. Hit: 4d8 + STR slashing. Crits on 18, 19, or 20.',
        levelLearned: 18,
      },
    ],
  },

  // --- PONYTA LINE ---
  {
    dexNumber: 77,
    species: 'Ponyta',
    types: ['Fire'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Rapidash', level: 40 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Ember',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d6 + CHA fire damage. DC 13 Dex save or burned.',
        levelLearned: 6,
      },
      {
        name: 'Stomp',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d8 + STR bludgeoning. 30% chance target is stunned until next turn.',
        levelLearned: 12,
      },
    ],
  },
  {
    dexNumber: 78,
    species: 'Rapidash',
    types: ['Fire'],
    baseHp: 15,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Stomp',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d8 + STR bludgeoning. 30% chance target is stunned until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Ember',
        type: 'Fire',
        effect: 'Ranged (30ft). Hit: 1d6 + CHA fire. DC 14 Dex save or burned.',
        levelLearned: 1,
      },
      {
        name: 'Fire Spin',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d4 fire damage and trapped for 1d4 turns, taking 1d4 fire damage at the start of their turns.',
        levelLearned: 14,
      },
      {
        name: 'Fire Blast',
        type: 'Fire',
        effect:
          'Ranged (60ft). Hit: 4d10 + CHA fire damage. Attack has disadvantage. 10% chance to burn.',
        levelLearned: 18,
      },
    ],
  },

  // --- SLOWPOKE LINE ---
  {
    dexNumber: 79,
    species: 'Slowpoke',
    types: ['Water', 'Psychic'],
    baseHp: 14,
    hpPerLevel: 8,
    baseAc: 11,
    evolution: { targetSpecies: 'Slowbro', level: 37 },
    moves: [
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 5,
      },
      {
        name: 'Yawn',
        type: 'Normal',
        effect:
          'Target must make a DC 13 Con save. On a fail, they fall asleep at the end of their next turn.',
        levelLearned: 10,
      },
      {
        name: 'Zen Headbutt',
        type: 'Psychic',
        effect:
          'Melee. Hit: 2d6 + STR psychic damage. 20% chance to stun target.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 80,
    species: 'Slowbro',
    types: ['Water', 'Psychic'],
    baseHp: 19,
    hpPerLevel: 10,
    baseAc: 16,
    moves: [
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Zen Headbutt',
        type: 'Psychic',
        effect:
          'Melee. Hit: 2d6 + STR psychic damage. 20% chance to stun target.',
        levelLearned: 1,
      },
      {
        name: 'Amnesia',
        type: 'Psychic',
        effect: 'Bonus Action: Gain resistance to magical damage for 1 minute.',
        levelLearned: 14,
      },
      {
        name: 'Surf',
        type: 'Water',
        effect:
          '15ft radius. DC 15 Dex save or 4d8 water damage (half on success).',
        levelLearned: 18,
      },
    ],
  }, // --- MAGNEMITE LINE ---
  {
    dexNumber: 81,
    species: 'Magnemite',
    types: ['Electric', 'Steel'],
    baseHp: 8,
    hpPerLevel: 4,
    baseAc: 15, // High AC due to steel body
    evolution: { targetSpecies: 'Magneton', level: 30 },
    moves: [
      {
        name: 'Thunder Shock',
        type: 'Electric',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS lightning damage. DC 13 Con save or paralyzed.',
        levelLearned: 1,
      },
      {
        name: 'Sonic Boom',
        type: 'Normal',
        effect:
          'Ranged (30ft). Automatically deals exactly 10 points of thunder damage. Fails against Ghost types.',
        levelLearned: 5,
      },
      {
        name: 'Thunder Wave',
        type: 'Electric',
        effect:
          'Ranged (30ft). DC 13 Dex save or target is paralyzed for 1 minute.',
        levelLearned: 11,
      },
      {
        name: 'Spark',
        type: 'Electric',
        effect:
          'Melee. Hit: 2d6 + STR lightning damage. 30% chance to paralyze.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 82,
    species: 'Magneton',
    types: ['Electric', 'Steel'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 17,
    moves: [
      {
        name: 'Thunder Shock',
        type: 'Electric',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS lightning. DC 15 Con save or paralyzed.',
        levelLearned: 1,
      },
      {
        name: 'Spark',
        type: 'Electric',
        effect:
          'Melee. Hit: 2d6 + STR lightning damage. 30% chance to paralyze.',
        levelLearned: 1,
      },
      {
        name: 'Tri Attack',
        type: 'Normal',
        effect:
          'Ranged (60ft). Hit: 3d8 + WIS magical bludgeoning. 20% chance to either burn, paralyze, or freeze the target.',
        levelLearned: 14,
      },
      {
        name: 'Zap Cannon',
        type: 'Electric',
        effect:
          'Ranged (60ft). Hit: 5d10 + WIS lightning damage. Attack has disadvantage. If it hits, target is automatically paralyzed.',
        levelLearned: 19,
      },
    ],
  },

  // --- FARFETCH'D ---
  {
    dexNumber: 83,
    species: "Farfetch'd",
    types: ['Normal', 'Flying'],
    baseHp: 12,
    hpPerLevel: 6,
    baseAc: 14,
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 14 Dex save or disadvantage on next attack.',
        levelLearned: 5,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + DEX slashing. Crits on 19 or 20.',
        levelLearned: 10,
      },
      {
        name: 'Brave Bird',
        type: 'Flying',
        effect:
          'Melee. Hit: 4d10 + STR bludgeoning. User takes recoil damage equal to 1/3 of the damage dealt.',
        levelLearned: 16,
      },
    ],
  },

  // --- DODUO LINE ---
  {
    dexNumber: 84,
    species: 'Doduo',
    types: ['Normal', 'Flying'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Dodrio', level: 31 },
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 5,
      },
      {
        name: 'Double Hit',
        type: 'Normal',
        effect: 'Melee. Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 10,
      },
      {
        name: 'Jump Kick',
        type: 'Fighting',
        effect:
          'Melee. Hit: 3d8 + STR bludgeoning. If the attack misses, the user takes half the damage they would have dealt.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 85,
    species: 'Dodrio',
    types: ['Normal', 'Flying'],
    baseHp: 14,
    hpPerLevel: 7,
    baseAc: 15,
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Double Hit',
        type: 'Normal',
        effect: 'Melee. Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 1,
      },
      {
        name: 'Tri Attack',
        type: 'Normal',
        effect:
          'Ranged (60ft). Hit: 3d8 + WIS magical bludgeoning. 20% chance to burn, paralyze, or freeze.',
        levelLearned: 12,
      },
      {
        name: 'Drill Peck',
        type: 'Flying',
        effect:
          'Melee. Hit: 3d8 + DEX piercing. Ignores Shield/Protect effects.',
        levelLearned: 18,
      },
    ],
  },

  // --- SEEL LINE ---
  {
    dexNumber: 86,
    species: 'Seel',
    types: ['Water'],
    baseHp: 12,
    hpPerLevel: 7,
    baseAc: 12,
    evolution: { targetSpecies: 'Dewgong', level: 34 },
    moves: [
      {
        name: 'Headbutt',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 5,
      },
      {
        name: 'Aurora Beam',
        type: 'Ice',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS cold damage. DC 13 Con save or target suffers -1 to Attack rolls.',
        levelLearned: 11,
      },
      {
        name: 'Aqua Ring',
        type: 'Water',
        effect:
          'Bonus Action: Surround yourself with water. Regain 1d4 HP at the start of each of your turns for 1 minute.',
        levelLearned: 16,
      },
    ],
  },
  {
    dexNumber: 87,
    species: 'Dewgong',
    types: ['Water', 'Ice'],
    baseHp: 18,
    hpPerLevel: 9,
    baseAc: 14,
    moves: [
      {
        name: 'Headbutt',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target.',
        levelLearned: 1,
      },
      {
        name: 'Aurora Beam',
        type: 'Ice',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS cold damage. DC 14 Con save or target suffers -1 to Attack rolls.',
        levelLearned: 1,
      },
      {
        name: 'Ice Beam',
        type: 'Ice',
        effect:
          'Ranged (60ft). Hit: 3d8 + WIS cold damage. 10% chance to freeze target.',
        levelLearned: 14,
      },
      {
        name: 'Sheer Cold',
        type: 'Ice',
        effect:
          'Melee. Roll 1d100. On a 10 or lower, the target drops to 0 HP instantly. Otherwise, the attack fails.',
        levelLearned: 20,
      },
    ],
  },

  // --- GRIMER LINE ---
  {
    dexNumber: 88,
    species: 'Grimer',
    types: ['Poison'],
    baseHp: 13,
    hpPerLevel: 8,
    baseAc: 11,
    evolution: { targetSpecies: 'Muk', level: 38 },
    moves: [
      {
        name: 'Pound',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Poison Gas',
        type: 'Poison',
        effect: '15ft radius. DC 13 Con save or poisoned for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Sludge',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS poison damage. 30% chance to poison target.',
        levelLearned: 10,
      },
      {
        name: 'Minimize',
        type: 'Normal',
        effect:
          'Bonus Action: Target size becomes Tiny. Gain +2 AC and advantage on Stealth checks.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 89,
    species: 'Muk',
    types: ['Poison'],
    baseHp: 20,
    hpPerLevel: 11,
    baseAc: 13,
    moves: [
      {
        name: 'Sludge',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS poison damage. 30% chance to poison target.',
        levelLearned: 1,
      },
      {
        name: 'Minimize',
        type: 'Normal',
        effect: 'Bonus Action: Target size becomes Tiny. Gain +2 AC.',
        levelLearned: 1,
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 3d8 + WIS poison damage. 30% chance to poison target.',
        levelLearned: 14,
      },
      {
        name: 'Gunk Shot',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 4d10 + STR poison damage. Attack roll has disadvantage. 30% chance to poison.',
        levelLearned: 19,
      },
    ],
  }, // --- SHELLDER LINE ---
  {
    dexNumber: 90,
    species: 'Shellder',
    types: ['Water'],
    baseHp: 8,
    hpPerLevel: 5,
    baseAc: 16, // Very high base AC for a basic Pokémon
    evolution: { targetSpecies: 'Cloyster', item: 'Water Stone' },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Withdraw',
        type: 'Water',
        effect:
          'Bonus Action: Retreat into shell, gaining +2 AC and advantage on CON saves until the start of your next turn. Speed becomes 0.',
        levelLearned: 1,
      },
      {
        name: 'Supersonic',
        type: 'Normal',
        effect: 'DC 13 Wis save or target is Confused for 1 minute.',
        levelLearned: 9,
      },
      {
        name: 'Icicle Spear',
        type: 'Ice',
        effect:
          'Ranged (30ft). Make 1d4 attacks. Hit: 1d4 + WIS cold damage per strike.',
        levelLearned: 13,
      },
    ],
  },
  {
    dexNumber: 91,
    species: 'Cloyster',
    types: ['Water', 'Ice'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 18, // Incredible physical defense
    moves: [
      {
        name: 'Withdraw',
        type: 'Water',
        effect:
          'Bonus Action: +2 AC and advantage on CON saves until next turn. Speed becomes 0.',
        levelLearned: 1,
      },
      {
        name: 'Icicle Spear',
        type: 'Ice',
        effect:
          'Ranged (30ft). Make 1d4 attacks. Hit: 1d4 + WIS cold damage per strike.',
        levelLearned: 1,
      },
      {
        name: 'Aurora Beam',
        type: 'Ice',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS cold damage. DC 15 Con save or target suffers -1 to Attack rolls.',
        levelLearned: 12,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 18,
      },
    ],
  },

  // --- ONIX ---
  {
    dexNumber: 95, // Skipping 92-94 (Gastly line) as requested!
    species: 'Onix',
    types: ['Rock', 'Ground'],
    baseHp: 12,
    hpPerLevel: 7,
    baseAc: 17, // Massive physical defense
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Bind',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d4 + STR bludgeoning. Target is Grappled (escape DC 15) and takes 1d4 damage at the start of its turns.',
        levelLearned: 1,
      },
      {
        name: 'Rock Throw',
        type: 'Rock',
        effect: 'Ranged (30ft). Hit: 1d8 + STR bludgeoning.',
        levelLearned: 9,
      },
      {
        name: 'Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 15,
      },
    ],
  },

  // --- DROWZEE LINE ---
  {
    dexNumber: 96,
    species: 'Drowzee',
    types: ['Psychic'],
    baseHp: 12,
    hpPerLevel: 6,
    baseAc: 12,
    evolution: { targetSpecies: 'Hypno', level: 26 },
    moves: [
      {
        name: 'Pound',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect:
          'Ranged (30ft). DC 13 Wis save or target falls asleep for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 9,
      },
      {
        name: 'Headbutt',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target until next turn.',
        levelLearned: 13,
      },
    ],
  },
  {
    dexNumber: 97,
    species: 'Hypno',
    types: ['Psychic'],
    baseHp: 17,
    hpPerLevel: 9,
    baseAc: 14,
    moves: [
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect:
          'Ranged (30ft). DC 15 Wis save or target falls asleep for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 1,
      },
      {
        name: 'Dream Eater',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Only works on sleeping targets. Hit: 3d8 + WIS psychic damage. User heals HP equal to half damage dealt.',
        levelLearned: 14,
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 4d8 + WIS psychic damage. DC 16 Wis save or target AC is reduced by 1.',
        levelLearned: 19,
      },
    ],
  },

  // --- KRABBY LINE ---
  {
    dexNumber: 98,
    species: 'Krabby',
    types: ['Water'],
    baseHp: 8,
    hpPerLevel: 5,
    baseAc: 14,
    evolution: { targetSpecies: 'Kingler', level: 28 },
    moves: [
      {
        name: 'Bubble',
        type: 'Water',
        effect:
          'Ranged (30ft). Hit: 1d4 + WIS water damage. DC 13 Dex save or speed is halved.',
        levelLearned: 1,
      },
      {
        name: 'Vice Grip',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR slashing.',
        levelLearned: 5,
      },
      {
        name: 'Leer',
        type: 'Normal',
        effect: 'DC 13 Wis save or AC reduced by 1 for 1 minute.',
        levelLearned: 9,
      },
      {
        name: 'Crabhammer',
        type: 'Water',
        effect: 'Melee. Hit: 2d8 + STR water damage. Crits on 19 or 20.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 99,
    species: 'Kingler',
    types: ['Water'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 16,
    moves: [
      {
        name: 'Vice Grip',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Crabhammer',
        type: 'Water',
        effect: 'Melee. Hit: 2d8 + STR water damage. Crits on 19 or 20.',
        levelLearned: 1,
      },
      {
        name: 'Protect',
        type: 'Normal',
        effect:
          'Reaction: Add +5 to your AC against one attack. Fails if used consecutively.',
        levelLearned: 14,
      },
      {
        name: 'Guillotine',
        type: 'Normal',
        effect:
          'Melee. Roll 1d100. On a 10 or lower, the target drops to 0 HP instantly. Otherwise, the attack fails.',
        levelLearned: 18,
      },
    ],
  },

  // --- VOLTORB LINE ---
  {
    dexNumber: 100,
    species: 'Voltorb',
    types: ['Electric'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Electrode', level: 30 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Screech',
        type: 'Normal',
        effect: 'DC 13 Con save or AC reduced by 2 for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Spark',
        type: 'Electric',
        effect:
          'Melee. Hit: 2d6 + STR lightning damage. 30% chance to paralyze.',
        levelLearned: 11,
      },
      {
        name: 'Self-Destruct',
        type: 'Normal',
        effect:
          '30ft radius. DC 15 Dex save or 6d10 fire/bludgeoning damage (half on success). User instantly drops to 0 HP.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 101,
    species: 'Electrode',
    types: ['Electric'],
    baseHp: 14,
    hpPerLevel: 7,
    baseAc: 14,
    moves: [
      {
        name: 'Spark',
        type: 'Electric',
        effect:
          'Melee. Hit: 2d6 + STR lightning damage. 30% chance to paralyze.',
        levelLearned: 1,
      },
      {
        name: 'Screech',
        type: 'Normal',
        effect: 'DC 15 Con save or AC reduced by 2 for 1 minute.',
        levelLearned: 1,
      },
      {
        name: 'Light Screen',
        type: 'Psychic',
        effect:
          'Action: For 1 minute, allies within 30ft have resistance to magical damage.',
        levelLearned: 14,
      },
      {
        name: 'Explosion',
        type: 'Normal',
        effect:
          '30ft radius. DC 16 Dex save or 10d10 fire/bludgeoning damage (half on success). User instantly drops to 0 HP.',
        levelLearned: 19,
      },
    ],
  }, // --- EXEGGCUTE LINE ---
  {
    dexNumber: 102,
    species: 'Exeggcute',
    types: ['Grass', 'Psychic'],
    baseHp: 11,
    hpPerLevel: 6,
    baseAc: 14,
    evolution: { targetSpecies: 'Exeggutor', item: 'Leaf Stone' },
    moves: [
      {
        name: 'Barrage',
        type: 'Normal',
        effect:
          'Ranged (30ft). Make 1d4 attacks. Hit: 1d4 + WIS bludgeoning per strike.',
        levelLearned: 1,
      },
      {
        name: 'Hypnosis',
        type: 'Psychic',
        effect:
          'Ranged (30ft). DC 13 Wis save or target falls asleep for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Leech Seed',
        type: 'Grass',
        effect:
          'Ranged (30ft). Target must make a DC 13 Dex save. On a fail, they take 1d4 necrotic damage at the start of their turns, and you heal for the same amount.',
        levelLearned: 11,
      },
      {
        name: 'Reflect',
        type: 'Psychic',
        effect:
          'Action: For 1 minute, allies within 30ft have resistance to physical bludgeoning, piercing, and slashing damage.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 103,
    species: 'Exeggutor',
    types: ['Grass', 'Psychic'],
    baseHp: 19,
    hpPerLevel: 10,
    baseAc: 15,
    moves: [
      {
        name: 'Stomp',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target until next turn.',
        levelLearned: 1,
      },
      {
        name: 'Egg Bomb',
        type: 'Normal',
        effect:
          'Ranged (30ft). Hit: 3d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 12,
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 4d8 + WIS psychic damage. DC 16 Wis save or target AC is reduced by 1.',
        levelLearned: 16,
      },
      {
        name: 'Solar Beam',
        type: 'Grass',
        effect:
          '60ft line. Turn 1: Charge. Turn 2: DC 16 Dex save or 6d10 radiant damage (half on success). No charge required in harsh sunlight.',
        levelLearned: 20,
      },
    ],
  },

  // --- CUBONE LINE ---
  {
    dexNumber: 104,
    species: 'Cubone',
    types: ['Ground'],
    baseHp: 10,
    hpPerLevel: 6,
    baseAc: 15, // High base AC from the skull helmet
    evolution: { targetSpecies: 'Marowak', level: 28 },
    moves: [
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 1,
      },
      {
        name: 'Bone Club',
        type: 'Ground',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 10% chance to stun target.',
        levelLearned: 5,
      },
      {
        name: 'Headbutt',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target.',
        levelLearned: 9,
      },
      {
        name: 'Bonemerang',
        type: 'Ground',
        effect:
          'Ranged (30ft). Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 105,
    species: 'Marowak',
    types: ['Ground'],
    baseHp: 15,
    hpPerLevel: 8,
    baseAc: 17, // Very high AC from armor and bone
    moves: [
      {
        name: 'Bone Club',
        type: 'Ground',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 10% chance to stun target.',
        levelLearned: 1,
      },
      {
        name: 'Bonemerang',
        type: 'Ground',
        effect:
          'Ranged (30ft). Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 1,
      },
      {
        name: 'Thrash',
        type: 'Normal',
        effect:
          'Melee. Hit: 3d8 + STR bludgeoning. Must be used for 1d4 turns. User is Confused afterward.',
        levelLearned: 14,
      },
      {
        name: 'Double-Edge',
        type: 'Normal',
        effect:
          'Melee. Hit: 4d10 + STR bludgeoning. User takes recoil damage equal to 1/3 of the damage dealt.',
        levelLearned: 18,
      },
    ],
  },

  // --- HITMONLEE & HITMONCHAN ---
  {
    dexNumber: 106,
    species: 'Hitmonlee',
    types: ['Fighting'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 14,
    moves: [
      {
        name: 'Double Kick',
        type: 'Fighting',
        effect: 'Melee. Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 1,
      },
      {
        name: 'Meditate',
        type: 'Psychic',
        effect:
          'Bonus Action: Gain +1 to Attack and Damage rolls for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'High Jump Kick',
        type: 'Fighting',
        effect:
          'Melee. Hit: 3d10 + STR bludgeoning. If the attack misses, the user takes half the damage they would have dealt.',
        levelLearned: 12,
      },
      {
        name: 'Mega Kick',
        type: 'Normal',
        effect:
          'Melee. Hit: 4d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 18,
      },
    ],
  },
  {
    dexNumber: 107,
    species: 'Hitmonchan',
    types: ['Fighting'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 15, // Slightly higher defense than Hitmonlee
    moves: [
      {
        name: 'Comet Punch',
        type: 'Normal',
        effect:
          'Melee. Make 1d4 attacks. Hit: 1d4 + STR bludgeoning per strike.',
        levelLearned: 1,
      },
      {
        name: 'Agility',
        type: 'Psychic',
        effect:
          'Bonus Action: Speed increases by 15ft and gain advantage on Dex saves for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'Elemental Punches',
        type: 'Varies',
        effect:
          'Melee. Hit: 2d8 + STR damage. Choose Fire, Cold, or Lightning before attacking. 10% chance to apply corresponding status effect (Burn, Freeze, Paralyze).',
        levelLearned: 12,
      },
      {
        name: 'Mega Punch',
        type: 'Normal',
        effect: 'Melee. Hit: 3d8 + STR bludgeoning. Crits on 19 or 20.',
        levelLearned: 18,
      },
    ],
  },

  // --- LICKITUNG ---
  {
    dexNumber: 108,
    species: 'Lickitung',
    types: ['Normal'],
    baseHp: 18, // Very high base HP
    hpPerLevel: 9,
    baseAc: 13,
    moves: [
      {
        name: 'Lick',
        type: 'Ghost',
        effect:
          'Melee (15ft reach). Hit: 1d4 + DEX necrotic damage. 30% chance to paralyze target.',
        levelLearned: 1,
      },
      {
        name: 'Wrap',
        type: 'Normal',
        effect:
          'Melee (15ft reach). Hit: 1d4 + STR bludgeoning. Target is Grappled (escape DC 14).',
        levelLearned: 5,
      },
      {
        name: 'Stomp',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target.',
        levelLearned: 11,
      },
      {
        name: 'Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 17,
      },
    ],
  },

  // --- KOFFING LINE ---
  {
    dexNumber: 109,
    species: 'Koffing',
    types: ['Poison'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 14, // Surprisingly tanky
    evolution: { targetSpecies: 'Weezing', level: 35 },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Smog',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS poison damage. 40% chance to poison target.',
        levelLearned: 5,
      },
      {
        name: 'Sludge',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS poison damage. 30% chance to poison target.',
        levelLearned: 11,
      },
      {
        name: 'Self-Destruct',
        type: 'Normal',
        effect:
          '30ft radius. DC 15 Dex save or 6d10 fire/bludgeoning damage (half on success). User instantly drops to 0 HP.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 110,
    species: 'Weezing',
    types: ['Poison'],
    baseHp: 14,
    hpPerLevel: 7,
    baseAc: 16,
    moves: [
      {
        name: 'Smog',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS poison damage. 40% chance to poison target.',
        levelLearned: 1,
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 3d8 + WIS poison damage. 30% chance to poison target.',
        levelLearned: 1,
      },
      {
        name: 'Toxic',
        type: 'Poison',
        effect:
          'Ranged (30ft). Target is badly poisoned. Poison damage doubles at the end of each of their turns (1d4, 2d4, 4d4, etc.) until cured.',
        levelLearned: 14,
      },
      {
        name: 'Explosion',
        type: 'Normal',
        effect:
          '30ft radius. DC 16 Dex save or 10d10 fire/bludgeoning damage (half on success). User instantly drops to 0 HP.',
        levelLearned: 19,
      },
    ],
  }, // --- RHYHORN LINE ---
  {
    dexNumber: 111,
    species: 'Rhyhorn',
    types: ['Ground', 'Rock'],
    baseHp: 16,
    hpPerLevel: 8,
    baseAc: 16, // Heavy armor
    evolution: { targetSpecies: 'Rhydon', level: 42 },
    moves: [
      {
        name: 'Horn Attack',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Stomp',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target.',
        levelLearned: 5,
      },
      {
        name: 'Take Down',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d10 + STR bludgeoning. User takes recoil damage equal to 1/4 of damage dealt.',
        levelLearned: 12,
      },
      {
        name: 'Horn Drill',
        type: 'Normal',
        effect:
          'Melee. Roll 1d100. On a 10 or lower, the target drops to 0 HP instantly. Otherwise, the attack fails.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 112,
    species: 'Rhydon',
    types: ['Ground', 'Rock'],
    baseHp: 21,
    hpPerLevel: 11,
    baseAc: 17,
    moves: [
      {
        name: 'Horn Attack',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Stomp',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target.',
        levelLearned: 1,
      },
      {
        name: 'Earthquake',
        type: 'Ground',
        effect:
          '30ft radius. DC 16 Dex save or 6d8 bludgeoning damage and knocked prone.',
        levelLearned: 16,
      },
      {
        name: 'Megahorn',
        type: 'Bug',
        effect:
          'Melee. Hit: 4d10 + STR piercing. Attack roll has disadvantage.',
        levelLearned: 20,
      },
    ],
  },

  // --- CHANSEY ---
  {
    dexNumber: 113,
    species: 'Chansey',
    types: ['Normal'],
    baseHp: 30, // Extremely high base HP
    hpPerLevel: 15, // Massive HP scaling
    baseAc: 10, // Very low AC
    moves: [
      {
        name: 'Pound',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Sing',
        type: 'Normal',
        effect: '30ft radius. DC 13 Wis save or fall asleep for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Soft-Boiled',
        type: 'Normal',
        effect:
          'Action: Restore up to half of your maximum HP. Can be used outside of combat to heal an ally by sacrificing your own HP.',
        levelLearned: 12,
      },
      {
        name: 'Double-Edge',
        type: 'Normal',
        effect:
          'Melee. Hit: 4d10 + STR bludgeoning. User takes recoil damage equal to 1/3 of the damage dealt.',
        levelLearned: 18,
      },
    ],
  },

  // --- TANGELA ---
  {
    dexNumber: 114,
    species: 'Tangela',
    types: ['Grass'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 15, // High physical defense
    moves: [
      {
        name: 'Constrict',
        type: 'Normal',
        effect:
          "Melee (15ft reach). Hit: 1d4 + STR bludgeoning. Target's speed is reduced by 10ft until next turn.",
        levelLearned: 1,
      },
      {
        name: 'Sleep Powder',
        type: 'Grass',
        effect: 'Ranged (30ft). DC 14 Con save or target falls asleep.',
        levelLearned: 6,
      },
      {
        name: 'Mega Drain',
        type: 'Grass',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS necrotic. User heals half damage dealt.',
        levelLearned: 12,
      },
      {
        name: 'Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 18,
      },
    ],
  },

  // --- KANGASKHAN ---
  {
    dexNumber: 115,
    species: 'Kangaskhan',
    types: ['Normal'],
    baseHp: 21,
    hpPerLevel: 10,
    baseAc: 15,
    moves: [
      {
        name: 'Comet Punch',
        type: 'Normal',
        effect:
          'Melee. Make 1d4 attacks. Hit: 1d4 + STR bludgeoning per strike.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 14 Con save or frightened.',
        levelLearned: 6,
      },
      {
        name: 'Dizzy Punch',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. 20% chance to Confuse target.',
        levelLearned: 12,
      },
      {
        name: 'Outrage',
        type: 'Dragon',
        effect:
          'Melee. Hit: 4d10 + STR dragon damage. Must be used for 1d4 turns. User is Confused afterward.',
        levelLearned: 18,
      },
    ],
  },

  // --- HORSEA LINE ---
  {
    dexNumber: 116,
    species: 'Horsea',
    types: ['Water'],
    baseHp: 8,
    hpPerLevel: 4,
    baseAc: 14,
    evolution: { targetSpecies: 'Seadra', level: 32 },
    moves: [
      {
        name: 'Bubble',
        type: 'Water',
        effect:
          'Ranged (30ft). Hit: 1d4 + WIS water damage. DC 13 Dex save or speed is halved.',
        levelLearned: 1,
      },
      {
        name: 'Smokescreen',
        type: 'Normal',
        effect:
          'Ranged (30ft). Creates a 15ft radius cloud of ink/smoke. Areas inside are heavily obscured for 1 minute.',
        levelLearned: 5,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 11,
      },
      {
        name: 'Agility',
        type: 'Psychic',
        effect:
          'Bonus Action: Speed increases by 15ft and gain advantage on Dex saves for 1 minute.',
        levelLearned: 16,
      },
    ],
  },
  {
    dexNumber: 117,
    species: 'Seadra',
    types: ['Water'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 16,
    moves: [
      {
        name: 'Smokescreen',
        type: 'Normal',
        effect:
          'Ranged (30ft). Creates a 15ft radius cloud of ink. Area is heavily obscured.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Waterfall',
        type: 'Water',
        effect:
          'Melee. Hit: 2d8 + STR water damage. 20% chance to stun target.',
        levelLearned: 14,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 19,
      },
    ],
  },

  // --- GOLDEEN LINE ---
  {
    dexNumber: 118,
    species: 'Goldeen',
    types: ['Water'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 13,
    evolution: { targetSpecies: 'Seaking', level: 33 },
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Supersonic',
        type: 'Normal',
        effect: 'DC 13 Wis save or target is Confused for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'Horn Attack',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR piercing.',
        levelLearned: 11,
      },
      {
        name: 'Waterfall',
        type: 'Water',
        effect:
          'Melee. Hit: 2d8 + STR water damage. 20% chance to stun target.',
        levelLearned: 16,
      },
    ],
  },
  {
    dexNumber: 119,
    species: 'Seaking',
    types: ['Water'],
    baseHp: 16,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Horn Attack',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR piercing.',
        levelLearned: 1,
      },
      {
        name: 'Waterfall',
        type: 'Water',
        effect:
          'Melee. Hit: 2d8 + STR water damage. 20% chance to stun target.',
        levelLearned: 1,
      },
      {
        name: 'Fury Attack',
        type: 'Normal',
        effect: 'Melee. Make 1d4 attacks. Hit: 1d4 + STR piercing per strike.',
        levelLearned: 14,
      },
      {
        name: 'Horn Drill',
        type: 'Normal',
        effect:
          'Melee. Roll 1d100. On a 10 or lower, the target drops to 0 HP instantly. Otherwise, the attack fails.',
        levelLearned: 19,
      },
    ],
  }, // --- STARYU LINE ---
  {
    dexNumber: 120,
    species: 'Staryu',
    types: ['Water'],
    baseHp: 8,
    hpPerLevel: 4,
    baseAc: 13,
    evolution: { targetSpecies: 'Starmie', item: 'Water Stone' },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 5,
      },
      {
        name: 'Recover',
        type: 'Normal',
        effect: 'Action: Restore up to half of your maximum HP.',
        levelLearned: 11,
      },
      {
        name: 'Swift',
        type: 'Normal',
        effect:
          'Ranged (60ft). Hit: 2d6 + DEX magical bludgeoning. This attack never misses.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 121,
    species: 'Starmie',
    types: ['Water', 'Psychic'],
    baseHp: 12,
    hpPerLevel: 6,
    baseAc: 16,
    moves: [
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Recover',
        type: 'Normal',
        effect: 'Action: Restore up to half of your maximum HP.',
        levelLearned: 1,
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 4d8 + WIS psychic damage. DC 16 Wis save or target AC is reduced by 1.',
        levelLearned: 14,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 19,
      },
    ],
  },

  // --- MR. MIME ---
  {
    dexNumber: 122,
    species: 'Mr. Mime',
    types: ['Psychic', 'Fairy'],
    baseHp: 10,
    hpPerLevel: 5,
    baseAc: 14,
    moves: [
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 1,
      },
      {
        name: 'Barrier',
        type: 'Psychic',
        effect: 'Bonus Action: Gain +2 AC for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'Light Screen',
        type: 'Psychic',
        effect:
          'Action: For 1 minute, allies within 30ft have resistance to magical damage.',
        levelLearned: 12,
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 4d8 + WIS psychic damage. DC 16 Wis save or target AC is reduced by 1.',
        levelLearned: 18,
      },
    ],
  },

  // --- SCYTHER ---
  {
    dexNumber: 123,
    species: 'Scyther',
    types: ['Bug', 'Flying'],
    baseHp: 14,
    hpPerLevel: 7,
    baseAc: 15,
    moves: [
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d6 + DEX bludgeoning. This attack always goes first in the initiative order.',
        levelLearned: 1,
      },
      {
        name: 'Leer',
        type: 'Normal',
        effect: 'DC 14 Wis save or AC reduced by 1 for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + DEX slashing. Crits on 19 or 20.',
        levelLearned: 12,
      },
      {
        name: 'Swords Dance',
        type: 'Normal',
        effect: 'Action: Increase your attack damage by +2 for 1 minute.',
        levelLearned: 18,
      },
    ],
  },

  // --- JYNX ---
  {
    dexNumber: 124,
    species: 'Jynx',
    types: ['Ice', 'Psychic'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 12,
    moves: [
      {
        name: 'Pound',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Lovely Kiss',
        type: 'Normal',
        effect: 'Melee. DC 14 Wis save or target falls asleep for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'Ice Punch',
        type: 'Ice',
        effect:
          'Melee. Hit: 2d8 + STR cold damage. 10% chance to freeze target.',
        levelLearned: 12,
      },
      {
        name: 'Blizzard',
        type: 'Ice',
        effect:
          '30ft cone. DC 16 Con save. 5d10 cold damage on a fail, half on success. 10% chance to freeze.',
        levelLearned: 18,
      },
    ],
  },

  // --- ELECTABUZZ ---
  {
    dexNumber: 125,
    species: 'Electabuzz',
    types: ['Electric'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 14,
    moves: [
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d6 + DEX bludgeoning. Goes first in initiative order.',
        levelLearned: 1,
      },
      {
        name: 'Thunder Shock',
        type: 'Electric',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS lightning damage. DC 13 Con save or paralyzed.',
        levelLearned: 6,
      },
      {
        name: 'Thunder Punch',
        type: 'Electric',
        effect:
          'Melee. Hit: 2d8 + STR lightning damage. 10% chance to paralyze target.',
        levelLearned: 12,
      },
      {
        name: 'Thunder',
        type: 'Electric',
        effect:
          'Ranged (60ft). Hit: 5d10 + WIS lightning. Attack has disadvantage (unless it is raining). 30% chance to paralyze.',
        levelLearned: 18,
      },
    ],
  },

  // --- MAGMAR ---
  {
    dexNumber: 126,
    species: 'Magmar',
    types: ['Fire'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 14,
    moves: [
      {
        name: 'Ember',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d6 + CHA fire damage. DC 13 Dex save or burned.',
        levelLearned: 1,
      },
      {
        name: 'Smog',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS poison damage. 40% chance to poison target.',
        levelLearned: 6,
      },
      {
        name: 'Fire Punch',
        type: 'Fire',
        effect: 'Melee. Hit: 2d8 + STR fire damage. 10% chance to burn target.',
        levelLearned: 12,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        effect:
          '30ft line. DC 16 Dex save. 3d8 fire damage on fail, half on success. 10% chance to burn.',
        levelLearned: 18,
      },
    ],
  },

  // --- PINSIR ---
  {
    dexNumber: 127,
    species: 'Pinsir',
    types: ['Bug'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 16,
    moves: [
      {
        name: 'Vice Grip',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Seismic Toss',
        type: 'Fighting',
        effect:
          'Melee. Automatically deals damage equal to your current level.',
        levelLearned: 6,
      },
      {
        name: 'Swords Dance',
        type: 'Normal',
        effect: 'Action: Increase your attack damage by +2 for 1 minute.',
        levelLearned: 12,
      },
      {
        name: 'Guillotine',
        type: 'Normal',
        effect:
          'Melee. Roll 1d100. On a 10 or lower, the target drops to 0 HP instantly. Otherwise, the attack fails.',
        levelLearned: 18,
      },
    ],
  },

  // --- TAUROS ---
  {
    dexNumber: 128,
    species: 'Tauros',
    types: ['Normal'],
    baseHp: 15,
    hpPerLevel: 7,
    baseAc: 15,
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Stomp',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target.',
        levelLearned: 6,
      },
      {
        name: 'Take Down',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d10 + STR bludgeoning. User takes recoil damage equal to 1/4 of damage dealt.',
        levelLearned: 12,
      },
      {
        name: 'Hyper Beam',
        type: 'Normal',
        effect:
          'Ranged (60ft line). Hit: 5d10 + DEX bludgeoning damage. User must skip their next turn to recharge.',
        levelLearned: 18,
      },
    ],
  }, // --- MAGIKARP LINE ---
  {
    dexNumber: 129,
    species: 'Magikarp',
    types: ['Water'],
    baseHp: 5, // Very weak
    hpPerLevel: 2,
    baseAc: 10,
    evolution: { targetSpecies: 'Gyarados', level: 20 },
    moves: [
      {
        name: 'Splash',
        type: 'Normal',
        effect: 'Bonus Action: You flop around. Nothing happens.',
        levelLearned: 1,
      },
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 15,
      },
      {
        name: 'Flail',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d6 bludgeoning. Damage increases to 2d6 if HP is below half, and 3d6 if HP is below 1/4.',
        levelLearned: 30,
      },
    ],
  },
  {
    dexNumber: 130,
    species: 'Gyarados',
    types: ['Water', 'Flying'],
    baseHp: 20, // Massive glow-up
    hpPerLevel: 10,
    baseAc: 16,
    moves: [
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 15 Con save or frightened.',
        levelLearned: 1,
      },
      {
        name: 'Dragon Rage',
        type: 'Dragon',
        effect:
          'Ranged (30ft). Automatically deals exactly 40 points of dragon damage.',
        levelLearned: 1,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 15,
      },
      {
        name: 'Hyper Beam',
        type: 'Normal',
        effect:
          'Ranged (60ft line). Hit: 5d10 + DEX bludgeoning damage. User must skip their next turn to recharge.',
        levelLearned: 20,
      },
    ],
  },

  // --- LAPRAS ---
  {
    dexNumber: 131,
    species: 'Lapras',
    types: ['Water', 'Ice'],
    baseHp: 22, // Very tanky
    hpPerLevel: 11,
    baseAc: 15,
    moves: [
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Body Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. DC 15 Con save or paralyzed.',
        levelLearned: 8,
      },
      {
        name: 'Ice Beam',
        type: 'Ice',
        effect:
          'Ranged (60ft). Hit: 3d8 + WIS cold damage. 10% chance to freeze target.',
        levelLearned: 16,
      },
      {
        name: 'Surf',
        type: 'Water',
        effect:
          '15ft radius. DC 16 Dex save or 4d8 water damage (half on success). Allies can ride on your back safely.',
        levelLearned: 20,
      },
    ],
  },

  // --- DITTO ---
  {
    dexNumber: 132,
    species: 'Ditto',
    types: ['Normal'],
    baseHp: 12,
    hpPerLevel: 6,
    baseAc: 12,
    moves: [
      {
        name: 'Transform',
        type: 'Normal',
        effect:
          'Action: Transform into an exact replica of the target. You adopt their types, AC, and moveset, but retain your own HP. Revert if knocked out or combat ends.',
        levelLearned: 1,
      },
    ],
  },

  // --- EEVEE FAMILY ---
  {
    dexNumber: 133,
    species: 'Eevee',
    types: ['Normal'],
    baseHp: 11,
    hpPerLevel: 6,
    baseAc: 13,
    evolution: { targetSpecies: 'Varies', item: 'Evolution Stone' },
    moves: [
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Sand Attack',
        type: 'Ground',
        effect: 'DC 13 Dex save or disadvantage on next attack.',
        levelLearned: 5,
      },
      {
        name: 'Growl',
        type: 'Normal',
        effect: 'DC 13 Wis save or disadvantage on next attack.',
        levelLearned: 10,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 13 Con save or frightened.',
        levelLearned: 15,
      },
    ],
  },
  {
    dexNumber: 134,
    species: 'Vaporeon',
    types: ['Water'],
    baseHp: 20, // High HP Eeveelution
    hpPerLevel: 10,
    baseAc: 14,
    moves: [
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Quick Attack',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d6 + DEX bludgeoning. Goes first in initiative order.',
        levelLearned: 6,
      },
      {
        name: 'Aurora Beam',
        type: 'Ice',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS cold damage. DC 15 Con save or target suffers -1 to Attack rolls.',
        levelLearned: 12,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 18,
      },
    ],
  },
  {
    dexNumber: 135,
    species: 'Jolteon',
    types: ['Electric'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 16, // High AC/Speed Eeveelution
    moves: [
      {
        name: 'Thunder Shock',
        type: 'Electric',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS lightning damage. DC 14 Con save or paralyzed.',
        levelLearned: 1,
      },
      {
        name: 'Double Kick',
        type: 'Fighting',
        effect: 'Melee. Make 2 attacks. Hit: 1d6 + STR bludgeoning per strike.',
        levelLearned: 6,
      },
      {
        name: 'Pin Missile',
        type: 'Bug',
        effect:
          'Ranged (30ft). Make 1d4 attacks. Hit: 1d4 + DEX piercing per strike.',
        levelLearned: 12,
      },
      {
        name: 'Thunder',
        type: 'Electric',
        effect:
          'Ranged (60ft). Hit: 5d10 + WIS lightning. Attack has disadvantage (unless it is raining). 30% chance to paralyze.',
        levelLearned: 18,
      },
    ],
  },
  {
    dexNumber: 136,
    species: 'Flareon',
    types: ['Fire'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 14, // High Attack Eeveelution
    moves: [
      {
        name: 'Ember',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d6 + CHA fire damage. DC 14 Dex save or burned.',
        levelLearned: 1,
      },
      {
        name: 'Smog',
        type: 'Poison',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS poison damage. 40% chance to poison target.',
        levelLearned: 6,
      },
      {
        name: 'Fire Spin',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d4 fire damage and trapped for 1d4 turns, taking 1d4 fire damage at the start of their turns.',
        levelLearned: 12,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        effect:
          '30ft line. DC 16 Dex save. 3d8 fire damage on fail, half on success. 10% chance to burn.',
        levelLearned: 18,
      },
    ],
  },

  // --- PORYGON ---
  {
    dexNumber: 137,
    species: 'Porygon',
    types: ['Normal'],
    baseHp: 13,
    hpPerLevel: 6,
    baseAc: 14,
    moves: [
      {
        name: 'Conversion',
        type: 'Normal',
        effect:
          'Bonus Action: Change your typing to match the type of one of your moves.',
        levelLearned: 1,
      },
      {
        name: 'Tackle',
        type: 'Normal',
        effect: 'Melee. Hit: 1d6 + STR bludgeoning.',
        levelLearned: 5,
      },
      {
        name: 'Psybeam',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 2d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 12,
      },
      {
        name: 'Tri Attack',
        type: 'Normal',
        effect:
          'Ranged (60ft). Hit: 3d8 + WIS magical bludgeoning. 20% chance to either burn, paralyze, or freeze the target.',
        levelLearned: 18,
      },
    ],
  },

  // --- OMANYTE LINE ---
  {
    dexNumber: 138,
    species: 'Omanyte',
    types: ['Rock', 'Water'],
    baseHp: 10,
    hpPerLevel: 5,
    baseAc: 16,
    evolution: { targetSpecies: 'Omastar', level: 40 },
    moves: [
      {
        name: 'Constrict',
        type: 'Normal',
        effect:
          "Melee (15ft reach). Hit: 1d4 + STR bludgeoning. Target's speed is reduced by 10ft until next turn.",
        levelLearned: 1,
      },
      {
        name: 'Withdraw',
        type: 'Water',
        effect:
          'Bonus Action: +2 AC and advantage on CON saves until next turn. Speed becomes 0.',
        levelLearned: 6,
      },
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 11,
      },
      {
        name: 'Ancient Power',
        type: 'Rock',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS magical bludgeoning. 10% chance to gain +1 to all stats for 1 minute.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 139,
    species: 'Omastar',
    types: ['Rock', 'Water'],
    baseHp: 14,
    hpPerLevel: 7,
    baseAc: 18,
    moves: [
      {
        name: 'Water Gun',
        type: 'Water',
        effect: 'Ranged (30ft). Hit: 1d6 + WIS water damage.',
        levelLearned: 1,
      },
      {
        name: 'Spike Cannon',
        type: 'Normal',
        effect:
          'Ranged (30ft). Make 1d4 attacks. Hit: 1d4 + DEX piercing per strike.',
        levelLearned: 6,
      },
      {
        name: 'Ancient Power',
        type: 'Rock',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS magical bludgeoning. 10% chance to gain +1 to all stats for 1 minute.',
        levelLearned: 12,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 18,
      },
    ],
  }, // --- KABUTO LINE ---
  {
    dexNumber: 140,
    species: 'Kabuto',
    types: ['Rock', 'Water'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 15,
    evolution: { targetSpecies: 'Kabutops', level: 40 },
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Harden',
        type: 'Normal',
        effect: 'Bonus Action: +2 AC until the start of your next turn.',
        levelLearned: 6,
      },
      {
        name: 'Absorb',
        type: 'Grass',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS necrotic. User heals half damage dealt.',
        levelLearned: 11,
      },
      {
        name: 'Ancient Power',
        type: 'Rock',
        effect:
          'Ranged (30ft). Hit: 2d6 + WIS magical bludgeoning. 10% chance to gain +1 to all stats for 1 minute.',
        levelLearned: 17,
      },
    ],
  },
  {
    dexNumber: 141,
    species: 'Kabutops',
    types: ['Rock', 'Water'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 17,
    moves: [
      {
        name: 'Scratch',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR slashing.',
        levelLearned: 1,
      },
      {
        name: 'Absorb',
        type: 'Grass',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS necrotic. User heals half damage dealt.',
        levelLearned: 1,
      },
      {
        name: 'Slash',
        type: 'Normal',
        effect: 'Melee. Hit: 2d6 + DEX slashing. Crits on 19 or 20.',
        levelLearned: 12,
      },
      {
        name: 'Hydro Pump',
        type: 'Water',
        effect:
          '60ft line. DC 16 Dex save or 6d10 water damage and pushed back 10ft.',
        levelLearned: 18,
      },
    ],
  },

  // --- AERODACTYL ---
  {
    dexNumber: 142,
    species: 'Aerodactyl',
    types: ['Rock', 'Flying'],
    baseHp: 16,
    hpPerLevel: 8,
    baseAc: 15,
    moves: [
      {
        name: 'Wing Attack',
        type: 'Flying',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Bite',
        type: 'Dark',
        effect: 'Melee. Hit: 1d6 + STR piercing. DC 15 Con save or frightened.',
        levelLearned: 6,
      },
      {
        name: 'Supersonic',
        type: 'Normal',
        effect: 'DC 15 Wis save or target is Confused for 1 minute.',
        levelLearned: 12,
      },
      {
        name: 'Hyper Beam',
        type: 'Normal',
        effect:
          'Ranged (60ft line). Hit: 5d10 + DEX bludgeoning damage. User must skip their next turn to recharge.',
        levelLearned: 18,
      },
    ],
  },

  // --- SNORLAX ---
  {
    dexNumber: 143,
    species: 'Snorlax',
    types: ['Normal'],
    baseHp: 32, // Massive HP
    hpPerLevel: 16,
    baseAc: 12, // Low AC, but huge health pool
    moves: [
      {
        name: 'Headbutt',
        type: 'Normal',
        effect: 'Melee. Hit: 1d8 + STR bludgeoning. 30% chance to stun target.',
        levelLearned: 1,
      },
      {
        name: 'Amnesia',
        type: 'Psychic',
        effect: 'Bonus Action: Gain resistance to magical damage for 1 minute.',
        levelLearned: 6,
      },
      {
        name: 'Rest',
        type: 'Psychic',
        effect:
          'Action: Fall asleep for 2 turns. Fully restore HP and cure all status conditions.',
        levelLearned: 12,
      },
      {
        name: 'Body Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. DC 16 Con save or paralyzed.',
        levelLearned: 18,
      },
    ],
  },

  // --- LEGENDARY BIRDS ---
  {
    dexNumber: 144,
    species: 'Articuno',
    types: ['Ice', 'Flying'],
    baseHp: 18,
    hpPerLevel: 9,
    baseAc: 17,
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Ice Beam',
        type: 'Ice',
        effect:
          'Ranged (60ft). Hit: 3d8 + WIS cold damage. 10% chance to freeze target.',
        levelLearned: 8,
      },
      {
        name: 'Agility',
        type: 'Psychic',
        effect:
          'Bonus Action: Speed increases by 15ft and gain advantage on Dex saves for 1 minute.',
        levelLearned: 15,
      },
      {
        name: 'Blizzard',
        type: 'Ice',
        effect:
          '30ft cone. DC 18 Con save. 5d10 cold damage on a fail, half on success. 10% chance to freeze.',
        levelLearned: 20,
      },
    ],
  },
  {
    dexNumber: 145,
    species: 'Zapdos',
    types: ['Electric', 'Flying'],
    baseHp: 18,
    hpPerLevel: 9,
    baseAc: 16,
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Thunder Shock',
        type: 'Electric',
        effect:
          'Ranged (30ft). Hit: 1d6 + WIS lightning damage. DC 15 Con save or paralyzed.',
        levelLearned: 8,
      },
      {
        name: 'Drill Peck',
        type: 'Flying',
        effect:
          'Melee. Hit: 3d8 + DEX piercing. Ignores Shield/Protect effects.',
        levelLearned: 15,
      },
      {
        name: 'Thunder',
        type: 'Electric',
        effect:
          'Ranged (60ft). Hit: 5d10 + WIS lightning. Attack has disadvantage (unless raining). 30% chance to paralyze.',
        levelLearned: 20,
      },
    ],
  },
  {
    dexNumber: 146,
    species: 'Moltres',
    types: ['Fire', 'Flying'],
    baseHp: 18,
    hpPerLevel: 9,
    baseAc: 16,
    moves: [
      {
        name: 'Peck',
        type: 'Flying',
        effect: 'Melee. Hit: 1d6 + DEX piercing.',
        levelLearned: 1,
      },
      {
        name: 'Fire Spin',
        type: 'Fire',
        effect:
          'Ranged (30ft). Hit: 1d4 fire damage and trapped for 1d4 turns, taking 1d4 fire damage at the start of their turns.',
        levelLearned: 8,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        effect:
          '30ft line. DC 17 Dex save. 3d8 fire damage on fail, half on success. 10% chance to burn.',
        levelLearned: 15,
      },
      {
        name: 'Sky Attack',
        type: 'Flying',
        effect:
          'Melee. Turn 1: Charge and gain +2 AC. Turn 2: Hit: 5d10 + STR bludgeoning. 30% chance to frighten.',
        levelLearned: 20,
      },
    ],
  },

  // --- DRATINI LINE ---
  {
    dexNumber: 147,
    species: 'Dratini',
    types: ['Dragon'],
    baseHp: 9,
    hpPerLevel: 5,
    baseAc: 12,
    evolution: { targetSpecies: 'Dragonair', level: 30 },
    moves: [
      {
        name: 'Wrap',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d4 + STR bludgeoning. Target is Grappled (escape DC 13).',
        levelLearned: 1,
      },
      {
        name: 'Thunder Wave',
        type: 'Electric',
        effect:
          'Ranged (30ft). DC 13 Dex save or target is paralyzed for 1 minute.',
        levelLearned: 8,
      },
      {
        name: 'Dragon Rage',
        type: 'Dragon',
        effect:
          'Ranged (30ft). Automatically deals exactly 40 points of dragon damage.',
        levelLearned: 15,
      },
      {
        name: 'Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 22,
      },
    ],
  },
  {
    dexNumber: 148,
    species: 'Dragonair',
    types: ['Dragon'],
    baseHp: 13,
    hpPerLevel: 7,
    baseAc: 14,
    evolution: { targetSpecies: 'Dragonite', level: 55 },
    moves: [
      {
        name: 'Wrap',
        type: 'Normal',
        effect:
          'Melee. Hit: 1d4 + STR bludgeoning. Target is Grappled (escape DC 15).',
        levelLearned: 1,
      },
      {
        name: 'Dragon Rage',
        type: 'Dragon',
        effect:
          'Ranged (30ft). Automatically deals exactly 40 points of dragon damage.',
        levelLearned: 1,
      },
      {
        name: 'Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 16,
      },
      {
        name: 'Agility',
        type: 'Psychic',
        effect:
          'Bonus Action: Speed increases by 15ft and gain advantage on Dex saves for 1 minute.',
        levelLearned: 24,
      },
    ],
  },
  {
    dexNumber: 149,
    species: 'Dragonite',
    types: ['Dragon', 'Flying'],
    baseHp: 19,
    hpPerLevel: 10,
    baseAc: 17,
    moves: [
      {
        name: 'Slam',
        type: 'Normal',
        effect:
          'Melee. Hit: 2d8 + STR bludgeoning. Attack roll has disadvantage.',
        levelLearned: 1,
      },
      {
        name: 'Dragon Rage',
        type: 'Dragon',
        effect:
          'Ranged (30ft). Automatically deals exactly 40 points of dragon damage.',
        levelLearned: 1,
      },
      {
        name: 'Hyper Beam',
        type: 'Normal',
        effect:
          'Ranged (60ft line). Hit: 5d10 + DEX bludgeoning damage. User must skip their next turn to recharge.',
        levelLearned: 18,
      },
      {
        name: 'Outrage',
        type: 'Dragon',
        effect:
          'Melee. Hit: 4d10 + STR dragon damage. Must be used for 1d4 turns. User is Confused afterward.',
        levelLearned: 25,
      },
    ],
  },

  // --- MEWTWO ---
  {
    dexNumber: 150,
    species: 'Mewtwo',
    types: ['Psychic'],
    baseHp: 21,
    hpPerLevel: 11,
    baseAc: 18, // Incredible defenses
    moves: [
      {
        name: 'Confusion',
        type: 'Psychic',
        effect:
          'Ranged (30ft). Hit: 1d8 + WIS psychic damage. 10% chance to Confuse target.',
        levelLearned: 1,
      },
      {
        name: 'Barrier',
        type: 'Psychic',
        effect: 'Bonus Action: Gain +2 AC for 1 minute.',
        levelLearned: 10,
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 4d8 + WIS psychic damage. DC 18 Wis save or target AC is reduced by 1.',
        levelLearned: 20,
      },
      {
        name: 'Recover',
        type: 'Normal',
        effect: 'Action: Restore up to half of your maximum HP.',
        levelLearned: 25,
      },
    ],
  },

  // --- MEW ---
  {
    dexNumber: 151,
    species: 'Mew',
    types: ['Psychic'],
    baseHp: 20,
    hpPerLevel: 10,
    baseAc: 17, // Perfectly balanced stats
    moves: [
      {
        name: 'Pound',
        type: 'Normal',
        effect: 'Melee. Hit: 1d4 + STR bludgeoning.',
        levelLearned: 1,
      },
      {
        name: 'Transform',
        type: 'Normal',
        effect:
          'Action: Transform into an exact replica of the target. You adopt their types, AC, and moveset, but retain your own HP. Revert if knocked out or combat ends.',
        levelLearned: 10,
      },
      {
        name: 'Psychic',
        type: 'Psychic',
        effect:
          'Ranged (60ft). Hit: 4d8 + WIS psychic damage. DC 17 Wis save or target AC is reduced by 1.',
        levelLearned: 20,
      },
      {
        name: 'Metronome',
        type: 'Normal',
        effect:
          'Action: Wiggle your fingers. Roll 1d100. The DM randomly selects any move from the game to be executed immediately.',
        levelLearned: 25,
      },
    ],
  },
];
pokemonDatabase.sort((a, b) => a.dexNumber - b.dexNumber);
