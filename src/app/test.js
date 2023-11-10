
    let x1 = [2.00,4.50,3.50,2.00,2.50,2.00,3.00,3.00,1.00,1.50,1.50,3.00,3.00,4.00,3.00,1.50,3.00,2.50,1.00,1.00,1.50,3.00,2.75,3.00,2.00,2.25,1.00,1.00,1.00,1.00,2.25]
    let y1 = ["Alchemist","Axe","Bristleback","Centaur Warrunner","Chaos Knight","Dawnbreaker","Doom","Dragon Knight","Earth Spirit","Earthshaker","Elder Titan","Huskar","Kunkka","Legion Commander","Lifestealer","Mars","Night Stalker","Ogre Magi","Omniknight","Primal Beast","Pudge","Slardar","Spirit Breaker","Sven","Tidehunter","Tiny","Treant Protector","Tusk","Underlord","Undying","Wraith King"]
    
    let x2 = [2.75,1.00,4.00,3.00,3.00,3.00,1.00,3.00,3.00,1.00,4.00,3.00,2.75,1.00,1.00,2.75,4.00,3.00,4.00,3.00,3.00,3.50,3.00,4.00,3.00,2.00,3.00,4.00,3.00,4.00,3.00]
    let y2 = ["Anti-Mage","Arc Warden","Bloodseeker","Bounty Hunter","Clinkz","Drow Ranger","Ember Spirit","Faceless Void","Gyrocopter","Hoodwink","Juggernaut","Luna","Medusa","Meepo","Monkey King","Morphling","Naga Siren","Phantom Assassin","Phantom Lancer","Razor","Riki","Shadow Fiend","Slark","Sniper","Spectre","Templar Assassin","Terrorblade","Troll Warlord","Ursa","Viper","Weaver"]

    let x3 = [1.00,1.00,3.00,1.00,4.50,1.00,1.00,2.50,1.00,3.00,2.50,2.50,3.00,3.00,2.50,2.50,1.00,2.00,1.00,2.00,2.25,1.00,1.00,2.50,4.50,3.00,1.00,1.00,2.50,2.50,1.00]
    let y3 = ["Ancient Apparition","Crystal Maiden","Death Prophet","Disruptor","Enchantress","Grimstroke","Invoker","Jakiro","Keeper of the Light","Leshrac","Lich","Lina","Lion","Muerta","Nature's Prophet","Necrophos","Oracle","Outworld Destroyer","Puck","Pugna","Queen of Pain","Rubick","Shadow Demon","Shadow Shaman","Silencer","Skywrath Mage","Storm Spirit","Tinker","Warlock","Witch Doctor","Zeus"]

    let x4 = [2.00,1.00,1.00,2.00,2.00,1.00,1.00,1.50,2.25,1.00,1.00,1.00,1.00,4.00,2.50,2.00,2.25,2.50,1.00,2.00,1.00,1.00,2.50,2.00,1.00,2.50,2.25,1.00,1.00,2.25,1.00]
    let y4 = ["Abaddon","Bane","Batrider","Beastmaser","Brewmaser","Broodmother","Chen","Clockwerk","Dark Seer","Dark Willow","Dazzle","Enigma","IO","Lone Druid","Lycan","Magnus","Marci","Mirana","Nyx Assassin","Pangolier","Phoenix","Sand King","Snapfire","Techies","Timbersaw","Vengful Spirit","Venomancer","Visage","Void Spirit","Windranger","Winter Wyvern"]


    let heroArr = []
    let z = 0

    for (let x = 0; x < x1.length; x++) {
    
        z = z + 1
        id = z
        name = y1[x]
        rank = x1[x]
        heroArr[x] = { id, name, rank}
    
    }

    console.log(heroArr)
    heroArr = []

    for (let x = 0; x < x2.length; x++) {
    
        z = z + 1
        id = z
        name = y2[x]
        rank = x2[x]
        heroArr[x] = { id, name, rank}
    
    }

    console.log(heroArr)
    heroArr = []

    for (let x = 0; x < x3.length; x++) {
    
        z = z + 1
        id = z
        name = y3[x]
        rank = x3[x]
        heroArr[x] = { id, name, rank}
    
    }

    console.log(heroArr)
    heroArr = []

    for (let x = 0; x < x4.length; x++) {
    
        z = z + 1
        id = z
        name = y4[x]
        rank = x4[x]
        heroArr[x] = { id, name, rank}
    
    }

    console.log(heroArr)
    