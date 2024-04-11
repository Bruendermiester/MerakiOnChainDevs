

function extractUniqueCardNames(cardsJson) {
    const uniqueNames = new Set();

    // Assuming cardsJson is an object with a "cards" array
    cardsJson.cards.forEach(card => {
        // Add each attribute to the Set, automatically filtering out duplicates
        uniqueNames.add(card.Damage);
        uniqueNames.add(card.Health);
        uniqueNames.add(card.Speed);
        uniqueNames.add(card.Evasion);
        uniqueNames.add(card.Accuracy);
    });

    // Convert the Set to an array before returning
    return [...uniqueNames];
}

// Example usage:
const cardsJson = {
    "cards": [
    {
      "Card Number": 1,
      "Level": 1,
      "Damage": "Rapid Strike",
      "Health": "Rapid Strike",
      "Speed": "Rapid Strike",
      "Evasion": "Rapid Strike",
      "Accuracy": "Rapid Strike"
    },
    {
      "Card Number": 2,
      "Level": 1,
      "Damage": "Broadside",
      "Health": "Broadside",
      "Speed": "Broadside",
      "Evasion": "Broadside",
      "Accuracy": "Broadside"
    },
    {
      "Card Number": 3,
      "Level": 1,
      "Damage": "Heavy Blow",
      "Health": "Heavy Blow",
      "Speed": "Heavy Blow",
      "Evasion": "Heavy Blow",
      "Accuracy": "Heavy Blow"
    },
    {
      "Card Number": 4,
      "Level": 1,
      "Damage": "Scatter Shot",
      "Health": "Scatter Shot",
      "Speed": "Scatter Shot",
      "Evasion": "Scatter Shot",
      "Accuracy": "Scatter Shot"
    },
    {
      "Card Number": 5,
      "Level": 1,
      "Damage": "Breach The Hull",
      "Health": "Breach The Hull",
      "Speed": "Breach The Hull",
      "Evasion": "Breach the Hull",
      "Accuracy": "Breach the Hull"
    },
    {
      "Card Number": 6,
      "Level": 1,
      "Damage": "Barnacle Barrier",
      "Health": "Barnacle Barrier",
      "Speed": "Barnacle Barrier",
      "Evasion": "Barnacle Barrier",
      "Accuracy": "Barnacle Barrier"
    },
    {
      "Card Number": 7,
      "Level": 1,
      "Damage": "Basic Planning",
      "Health": "Basic Planning",
      "Speed": "Basic Planning",
      "Evasion": "Basic Planning",
      "Accuracy": "Basic Planning"
    },
    {
      "Card Number": 8,
      "Level": 1,
      "Damage": "Presence",
      "Health": "Presence",
      "Speed": "Presence",
      "Evasion": "Presence",
      "Accuracy": "Presence"
    },
    {
      "Card Number": 9,
      "Level": 1,
      "Damage": "Critical Target",
      "Health": "Critical Target",
      "Speed": "Critical Target",
      "Evasion": "Critical Target",
      "Accuracy": "Critical Target"
    },
    {
      "Card Number": 10,
      "Level": 1,
      "Damage": "Patch Work",
      "Health": "Patch Work",
      "Speed": "Patch Work",
      "Evasion": "Patch Work",
      "Accuracy": "Patch Work"
    },
    {
      "Card Number": 11,
      "Level": 1,
      "Damage": "Heavy Blow",
      "Health": "Broadside",
      "Speed": "Rapid Strike",
      "Evasion": "Rapid Strike",
      "Accuracy": "Broadside"
    },
    {
      "Card Number": 12,
      "Level": 2,
      "Damage": "Defensive Strike",
      "Health": "Shell of Defense",
      "Speed": "Presence",
      "Evasion": "Slippery Moves",
      "Accuracy": "Hit the Dry Powder"
    },
    {
      "Card Number": 13,
      "Level": 3,
      "Damage": "Harpoon the Hull",
      "Health": "Defensive Strike",
      "Speed": "Hit Em Where It Hurts",
      "Evasion": "Thrilling Shot",
      "Accuracy": "Breach the Hull"
    },
    {
      "Card Number": 14,
      "Level": 4,
      "Damage": "Shell of Defense",
      "Health": "Counter Strike",
      "Speed": "Evasive",
      "Evasion": "Sneaky",
      "Accuracy": "Shell Of Defense"
    },
    {
      "Card Number": 15,
      "Level": 5,
      "Damage": "Counter Strike",
      "Health": "Renew",
      "Speed": "New Plan",
      "Evasion": "Respond in Kind",
      "Accuracy": "Careful Planning"
    },
    {
      "Card Number": 16,
      "Level": 6,
      "Damage": "Inspiration",
      "Health": "Improvised Plan",
      "Speed": "Act with Haste",
      "Evasion": "Presence",
      "Accuracy": "Masterful Plan"
    },
    {
      "Card Number": 17,
      "Level": 7,
      "Damage": "Scatter Shot",
      "Health": "Scatter Shot",
      "Speed": "Scatter Shot",
      "Evasion": "Twin Barrel",
      "Accuracy": "Bombardment"
    },
    {
      "Card Number": 18,
      "Level": 8,
      "Damage": "Respond In Kind",
      "Health": "Great Relief",
      "Speed": "Inspired Attack",
      "Evasion": "Sneaky",
      "Accuracy": "Stack The Deck"
    },
    {
      "Card Number": 19,
      "Level": 9,
      "Damage": "Patch Work",
      "Health": "Poseidons Blessing",
      "Speed": "Renew",
      "Evasion": "Fix It",
      "Accuracy": "Fix It!"
    },
    {
      "Card Number": 20,
      "Level": 10,
      "Damage": "Heavy Blow",
      "Health": "Counter Strike",
      "Speed": "Broadside",
      "Evasion": "Broadside",
      "Accuracy": "Feint"
    },
    {
      "Card Number": 21,
      "Level": 11,
      "Damage": "Long 9s",
      "Health": "Total Relief",
      "Speed": "The Power of Rum",
      "Evasion": "Ghost Mode",
      "Accuracy": "Target Weakness"
    },
    {
      "Card Number": 22,
      "Level": 12,
      "Damage": "Regroup",
      "Health": "Basic Planning",
      "Speed": "Stack The Deck",
      "Evasion": "Act with Haste",
      "Accuracy": "Act with Haste"
    },
    {
      "Card Number": 23,
      "Level": 13,
      "Damage": "Twin Barrel",
      "Health": "Continuous Repairs",
      "Speed": "Double Strike",
      "Evasion": "Stick and Move",
      "Accuracy": "Misdirection"
    },
    {
      "Card Number": 24,
      "Level": 14,
      "Damage": "Basic Relief",
      "Health": "Vampiric Strike",
      "Speed": "Masterful Plan",
      "Evasion": "Defensive Strike",
      "Accuracy": "Careful Aim"
    },
    {
      "Card Number": 25,
      "Level": 15,
      "Damage": "Big Guns",
      "Health": "Heavy Blow",
      "Speed": "Heavy Blow",
      "Evasion": "Breach the Hull",
      "Accuracy": "Hit Em Where It Hurts"
    },
    {
      "Card Number": 26,
      "Level": 16,
      "Damage": "Fix It",
      "Health": "Poseidons Blessing",
      "Speed": "Basic Relief",
      "Evasion": "Basic Relief",
      "Accuracy": "Basic Relief"
    },
    {
      "Card Number": 27,
      "Level": 17,
      "Damage": "Hardened Shield",
      "Health": "Respond in Kind",
      "Speed": "Inspired Attack",
      "Evasion": "Masterful Plan",
      "Accuracy": "Thunderstruck"
    },
    {
      "Card Number": 28,
      "Level": 18,
      "Damage": "Inspired Attack",
      "Health": "Regroup",
      "Speed": "Act with Haste",
      "Evasion": "Act with Haste",
      "Accuracy": "Masterful Plan"
    },
    {
      "Card Number": 29,
      "Level": 19,
      "Damage": "Shell of defense",
      "Health": "Defensive Strike",
      "Speed": "Roll With It",
      "Evasion": "Defensive Strike",
      "Accuracy": "Roll With It"
    },
    {
      "Card Number": 30,
      "Level": 20,
      "Damage": "That's a big hole",
      "Health": "Fortitude",
      "Speed": "Remember That?",
      "Evasion": "The Power of Rum",
      "Accuracy": "Overwatch"
    },
    {
      "Card Number": 31,
      "Level": 21,
      "Damage": "Poseidon's Blessing",
      "Health": "Continuous Repairs",
      "Speed": "Harpoon the Hull",
      "Evasion": "Careful Planning",
      "Accuracy": "Hit The Weak Spot"
    },
    {
      "Card Number": 32,
      "Level": 22,
      "Damage": "Bombardment",
      "Health": "Scatter Shot",
      "Speed": "Scatter Shot",
      "Evasion": "Twin Barrel",
      "Accuracy": "Bombardment"
    },
    {
      "Card Number": 33,
      "Level": 23,
      "Damage": "Respond In Kind",
      "Health": "Vampiric Strike",
      "Speed": "New Plan",
      "Evasion": "Reload",
      "Accuracy": "Inspiration"
    },
    {
      "Card Number": 34,
      "Level": 24,
      "Damage": "Harpoon the Hull",
      "Health": "Heavy Blow",
      "Speed": "Inspiration",
      "Evasion": "Heavy Blow",
      "Accuracy": "Big Gun"
    },
    {
      "Card Number": 35,
      "Level": 25,
      "Damage": "Fix It!",
      "Health": "Harpoon the Hull",
      "Speed": "Careful Planning",
      "Evasion": "Inspired Attack",
      "Accuracy": "Blinding Glare"
    },
    {
      "Card Number": 36,
      "Level": 26,
      "Damage": "Rain of Iron",
      "Health": "Overwatch",
      "Speed": "Deja Vu",
      "Evasion": "Overwatch",
      "Accuracy": "Target Weakness"
    },
    {
      "Card Number": 37,
      "Level": 27,
      "Damage": "Big Guns",
      "Health": "Big guns",
      "Speed": "Heavy Blow",
      "Evasion": "Thrilling Shot",
      "Accuracy": "Heavy Blow"
    },
    {
      "Card Number": 38,
      "Level": 28,
      "Damage": "Vampiric Strike",
      "Health": "Total Relief",
      "Speed": "Double Strike",
      "Evasion": "Rope A Dope",
      "Accuracy": "Deja Vu"
    },
    {
      "Card Number": 39,
      "Level": 29,
      "Damage": "Hardened Shield",
      "Health": "Bombardment",
      "Speed": "Act In The Hole",
      "Evasion": "Stick and Move",
      "Accuracy": "Long 9s"
    },
    {
      "Card Number": 40,
      "Level": 30,
      "Damage": "Long 9s",
      "Health": "Fortitude",
      "Speed": "The Power of Rum",
      "Evasion": "Ghost Mode",
      "Accuracy": "Misdirection"
    }
    ]
}

const uniqueNames = extractUniqueCardNames(cardsJson);
console.log(uniqueNames.length);