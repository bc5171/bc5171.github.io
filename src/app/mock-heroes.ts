import { Hero } from "./hero";

export const HEROES: Hero[] = [

    // Strength
    { id: 1, name: 'Alchemist', rank: 2 },
    { id: 2, name: 'Axe', rank: 5 }, // updated from 4.5 to 5.0
    { id: 3, name: 'Bristleback', rank: 3.5 },
    { id: 4, name: 'Centaur Warrunner', rank: 2.75 },
    { id: 5, name: 'Chaos Knight', rank: 2.5 },
    { id: 6, name: 'Dawnbreaker', rank: 2 },
    { id: 7, name: 'Doom', rank: 3 },
    { id: 8, name: 'Dragon Knight', rank: 3 },
    { id: 9, name: 'Earth Spirit', rank: 1 },
    { id: 10, name: 'Earthshaker', rank: 2 }, // updated from 1.5 to 2
    { id: 11, name: 'Elder Titan', rank: 1.5 },
    { id: 12, name: 'Huskar', rank: 3.5 }, // from 3 to 3.5
    { id: 13, name: 'Kunkka', rank: 3 },
    { id: 14, name: 'Legion Commander', rank: 4 },
    { id: 15, name: 'Lifestealer', rank: 3 },
    { id: 16, name: 'Mars', rank: 1.5 },
    { id: 17, name: 'Night Stalker', rank: 3 },
    { id: 18, name: 'Ogre Magi', rank: 2.5 },
    { id: 19, name: 'Omniknight', rank: 1 },
    { id: 20, name: 'Primal Beast', rank: 1.25 }, // another due to kyle... moving to 1.25 from 1
    { id: 21, name: 'Pudge', rank: 1.5 },
    { id: 22, name: 'Slardar', rank: 3.5 }, // updated from 3 to 3.5
    { id: 23, name: 'Spirit Breaker', rank: 2.75 },
    { id: 24, name: 'Sven', rank: 3 },
    { id: 25, name: 'Tidehunter', rank: 2 },
    { id: 26, name: 'Tiny', rank: 2.25 },
    { id: 27, name: 'Treant Protector', rank: 1.25 }, // bc Kyle is super good at them moving up to 1.5 from 1
    { id: 28, name: 'Tusk', rank: 1 },
    { id: 29, name: 'Underlord', rank: 1 },
    { id: 30, name: 'Undying', rank: 1.5}, // updated from 1 to 1.5
    { id: 31, name: 'Wraith King', rank: 2.25 },

    // Agility
    { id: 32, name: 'Anti-Mage', rank: 2.75 },
    { id: 33, name: 'Arc Warden', rank: 1 },
    { id: 34, name: 'Bloodseeker', rank: 4 },
    { id: 35, name: 'Bounty Hunter', rank: 3 },
    { id: 36, name: 'Clinkz', rank: 2.25 }, // from 3 to 2.25
    { id: 37, name: 'Drow Ranger', rank: 3 },
    { id: 38, name: 'Ember Spirit', rank: 1 },
    { id: 39, name: 'Faceless Void', rank: 3 },
    { id: 40, name: 'Gyrocopter', rank: 3 },
    { id: 41, name: 'Hoodwink', rank: 1 },
    { id: 42, name: 'Juggernaut', rank: 4 },
    { id: 43, name: 'Luna', rank: 3 },
    { id: 44, name: 'Medusa', rank: 2.5 }, //reduce from 2.75 to 2.5
    { id: 45, name: 'Meepo', rank: 1 },
    { id: 46, name: 'Monkey King', rank: 1 },
    { id: 47, name: 'Morphling', rank: 2.75 },
    { id: 48, name: 'Naga Siren', rank: 4 },
    { id: 49, name: 'Phantom Assassin', rank: 3 },
    { id: 50, name: 'Phantom Lancer', rank: 4 },
    { id: 51, name: 'Razor', rank: 3 },
    { id: 52, name: 'Riki', rank: 3 },
    { id: 53, name: 'Shadow Fiend', rank: 3.5 },
    { id: 54, name: 'Slark', rank: 3 },
    { id: 55, name: 'Sniper', rank: 4 },
    { id: 56, name: 'Spectre', rank: 3 },
    { id: 57, name: 'Templar Assassin', rank: 2 },
    { id: 58, name: 'Terrorblade', rank: 3 },
    { id: 59, name: 'Troll Warlord', rank: 4 },
    { id: 60, name: 'Ursa', rank: 3.5 }, // from 3 to 3.5
    { id: 61, name: 'Viper', rank: 4 },
    { id: 62, name: 'Weaver', rank: 3 },

    // Intelligence
    { id: 63, name: 'Ancient Apparition', rank: 1 },
    { id: 64, name: 'Crystal Maiden', rank: 1.25 }, // from 1 to 1.25
    { id: 65, name: 'Death Prophet', rank: 3 },
    { id: 66, name: 'Disruptor', rank: 1 },
    { id: 67, name: 'Enchantress', rank: 4.5 },
    { id: 68, name: 'Grimstroke', rank: 1 },
    { id: 69, name: 'Invoker', rank: 1 },
    { id: 70, name: 'Jakiro', rank: 3 }, // from 2.5 to 3
    { id: 71, name: 'Keeper of the Light', rank: 1 },
    { id: 72, name: 'Leshrac', rank: 3 },
    { id: 73, name: 'Lich', rank: 2.5 },
    { id: 74, name: 'Lina', rank: 3 }, // from 2.5 to 3
    { id: 75, name: 'Lion', rank: 3 },
    { id: 76, name: 'Muerta', rank: 3.5 }, // from 3 to 3.5
    { id: 77, name: "Nature's Prophet", rank: 2.5 },
    { id: 78, name: 'Necrophos', rank: 2.5 },
    { id: 79, name: 'Oracle', rank: 2 }, // from 1 to 2
    { id: 80, name: 'Outworld Destroyer', rank: 2.25 }, // from 2 to 2.25
    { id: 81, name: 'Puck', rank: 1 },
    { id: 82, name: 'Pugna', rank: 2 },
    { id: 83, name: 'Queen of Pain', rank: 2.25 },
    { id: 84, name: 'Rubick', rank: 1 },
    { id: 85, name: 'Shadow Demon', rank: 1 },
    { id: 86, name: 'Shadow Shaman', rank: 2.5 },
    { id: 87, name: 'Silencer', rank: 5 }, // from 4.5 to 5
    { id: 88, name: 'Skywrath Mage', rank: 3 },
    { id: 89, name: 'Storm Spirit', rank: 1 },
    { id: 90, name: 'Tinker', rank: 1 },
    { id: 91, name: 'Warlock', rank: 3 }, // from 2.5 to 3
    { id: 92, name: 'Witch Doctor', rank: 3 }, // from 2.5 to 3
    { id: 93, name: 'Zeus', rank: 1.5 }, // from 1 to 1.5

    // Universal
    { id: 94, name: 'Abaddon', rank: 2 },
    { id: 95, name: 'Bane', rank: 1 },
    { id: 96, name: 'Batrider', rank: 1 },
    { id: 97, name: 'Beastmaser', rank: 2 },
    { id: 98, name: 'Brewmaser', rank: 2 },
    { id: 99, name: 'Broodmother', rank: 1 },
    { id: 100, name: 'Chen', rank: 1 },
    { id: 101, name: 'Clockwerk', rank: 1.5 },
    { id: 102, name: 'Dark Seer', rank: 2.25 },
    { id: 103, name: 'Dark Willow', rank: 1 },
    { id: 104, name: 'Dazzle', rank: 1 },
    { id: 105, name: 'Enigma', rank: 1 },
    { id: 106, name: 'IO', rank: 1 },
    { id: 107, name: 'Lone Druid', rank: 3 }, // from 4 to 3
    { id: 108, name: 'Lycan', rank: 2.5 },
    { id: 109, name: 'Magnus', rank: 2 },
    { id: 110, name: 'Marci', rank: 2.25 },
    { id: 111, name: 'Mirana', rank: 2.5 },
    { id: 112, name: 'Nyx Assassin', rank: 1 },
    { id: 113, name: 'Pangolier', rank: 2 },
    { id: 114, name: 'Phoenix', rank: 1 },
    { id: 115, name: 'Sand King', rank: 1 },
    { id: 116, name: 'Snapfire', rank: 2.5 },
    { id: 117, name: 'Techies', rank: 2.5 }, // due to kc - from 2 to 2.5
    { id: 118, name: 'Timbersaw', rank: 1 },
    { id: 119, name: 'Vengful Spirit', rank: 2.5 },
    { id: 120, name: 'Venomancer', rank: 2.25 },
    { id: 121, name: 'Visage', rank: 1 },
    { id: 122, name: 'Void Spirit', rank: 1 },
    { id: 123, name: 'Windranger', rank: 2.25 },
    { id: 124, name: 'Winter Wyvern', rank: 1 }

]