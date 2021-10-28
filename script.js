// Variables - Styling Misc

const divBg = document.getElementById("div-bg");
const divZero = document.getElementById("div-zero");
const divOne = document.getElementById("div-one");
const divTwo = document.getElementById("div-two");
const divThree = document.getElementById("div-three");
const divFour = document.getElementById("div-four");

const buttonZero = document.getElementById("button-zero");

document.getElementById("button-four-try").addEventListener("click", () => {
    window.location.href = window.location.href;
});

document.getElementById("button-three-try").addEventListener("click", () => {
    console.log("test");
    window.location.href = window.location.href;
});

// Variables - Profile Pick

const myDmg = document.getElementById("mydmg");
const myDef = document.getElementById("mydef");
const myWep = document.getElementById("mywep");
const myHealth = document.getElementById("myhealth")
const myName = document.getElementById("myname");
const myRace = document.getElementById("select-one-race");
const myInv = document.getElementById("ul-one-inv");
const selectWep = document.getElementById("select-one-wep");
const selectMisc = document.getElementById("select-one-misc");
const buttonPreview = document.getElementById("button-one-preview");
const buttonReady = document.getElementById("button-one-ready");
const myProf = document.getElementById("div-one-prof");

const sword = document.getElementById("sword");
const axe = document.getElementById("axe");
const staff = document.getElementById("staff");
const dagger = document.getElementById("dagger");
const fist = document.getElementById("fist");

// Variables - NPC Generator

const buttonBegin = document.getElementById("button-two-begin")

const fightName = document.getElementById("fightname");
const fightRace = document.getElementById("fightrace");
const fightWep = document.getElementById("fightwep");
const fightDmg = document.getElementById("fightdmg");
const fightDef = document.getElementById("fightdef");

// Variables - Battle Generator

const fightHealth = document.getElementById("fighthealth"); 
const combatList = document.getElementById("ol-two-combat");

// Variables - Currency Converter

const sgdText = document.getElementById("text-three-sgd");
const eurText = document.getElementById("text-three-eur");
const usdText = document.getElementById("text-three-usd");

const sgdButton = document.getElementById("button-three-sgd");
const eurButton = document.getElementById("button-three-eur");
const usdButton = document.getElementById("button-three-usd");

const sgdOutput = document.getElementById("p-three-sgd");
const eurOutput = document.getElementById("p-three-eur");
const usdOutput = document.getElementById("p-three-usd");

// Styling Misc

// divBg.remove();
// divZero.remove();
divOne.remove();
divTwo.remove();
divThree.remove();
divFour.remove();

document.body.style.opacity = 1;
divZero.style.opacity = 1;
divBg.style.opacity = 1;

buttonZero.addEventListener("click", () => {
    divZero.style.opacity = 0;
    setTimeout(() => {
        divZero.remove();
        divBg.style.backgroundImage = `url("https://wallpaperaccess.com/full/2796640.jpg")`;
        document.body.append(divOne);
        divOne.style.opacity = 1;
    }, 1000)
})

// Functions

function d4() {return Math.floor(Math.random()*4) + 1};
function d6() {return Math.floor(Math.random()*6) + 1};
function d8() {return Math.floor(Math.random()*8) + 1};
function d10() {return Math.floor(Math.random()*10) + 1};
function d12() {return Math.floor(Math.random()*12) + 1};
function d20() {return Math.floor(Math.random()*20) + 1};

function randomArr(item) {
    return item[Math.floor(Math.random()*item.length)];
}

// NPC Template

class Fighter {
    constructor(name, race, weapon, damage, defence, health = 10) {
        this.name = name;
        this.race = race;
        this.weapon = weapon;      
        this.damage = damage;
        this.defence = defence;  
        this.health = health;
    }
}

// NPC Arrays

nameArray = ["Gratin Dauphinois", "Reibekuchen", "Bratkartoffeln", "Rosti", "Patat Frites", "Stamppot", "Hutspot"];

raceArray = ["Human", "Elf", "Dwarf", "Half-orc", "Halfling", "Gnome", "Dragonborn", "Half-elf"];

// Item Arrays

weaponArray = [
    {
        id: 1,
        weapon: "Greatsword",
        damage: d12,
        defence: -2,
    },

    {
        id: 2,
        weapon: "Battleaxe",
        damage: d10,
        defence: -1,
    },

    {
        id: 3,
        weapon: "Quarterstaff",
        damage: d8,
        defence: 0,
    },

    {
        id: 4,
        weapon: "Twin Daggers",
        damage: d6,
        defence: 1,
    },

    {
        id: 5,
        weapon: "Bare Hands",
        damage: d4,
        defence: 2,
    }
];

miscArray = [

    {
        id: 6,
        item: "A Neurotic Chihuahua",
        effect: null, // attack
    },

    {
        id: 7,
        item: "Health Potion",
        effect: null, // +10 HP
    },

    {
        id: 8,
        item: "Firebomb",
        effect: d8,
    },

    {
        id: 9,
        item: "Pocket Sand",
        effect: null, // lose a turn
    },

    {
        id: 10,
        item: "Magic Beans",
        effect: null, // poison damage
    },

    {
        id: 11,
        item: "Gold",
        effect: null, // adds gold
    }
];

// Conversation Arrays

const startConvo = [
    `"I'm going to... put you down!"`,
    `"I'll try and make this quick!"`,
    `"Give up while you still can!"`,
    `"I'll mount your head on my wall!"`,
    `"Aghh! Just... die already!"`
];

const endConvo = [
    `"No more! I yield! I yield!"`,
    `"Death is highly overrated!"`,
    `"Victory is yours! I submit!"`,
    `"I'll live to drink another day!"`,
    `"I cannot best you!"`
];

// NPC Action Arrays

const fightAttack = [
    "With an almighty swing, they go for your neck!",
    "They lunge with lightning speed towards you!",
    "They move in for the kill with confidence.",
    "With a roar, they charge towards you!",
    "They close in for a quick strike."
];

const fightDamage = [
    "They deal a powerful blow to your face!",
    "A strike to your chest slice your skin open!",
    "You are stunned by a sudden swing to your side!",
    "A masterful slash opens a wound on your arm!",
    "They shank you in the kidney!"
]

const fightMiss = [
    "They wobble and fall over their own legs.",
    "They were distracted by someone running past with no pants.",
    "A splash of beer to the back of their head threw them off.",
    "They look like they momentarily forgot what they were doing.",
    "A drunk barreled into them and knocked them off balance"
];

const fightDodge = [
    "They leap backwards and jeer at you.",
    "They sidestep your wild swing.",
    "Scrambling backwards, they manage to avoid your attack.",
    "With the ease of a drunk, they wobble out of the way.",
    "They limbo'ed under your attack, and you feel quite insulted."
]

// My Action Arrays

const myAttack = [
    "With an almighty swing, you go for their neck!",
    "You lunge with lightning speed towards them!",
    "You move in for the kill with confidence.",
    "With a roar, you charge towards them!",
    "You close in for a quick strike."
];

const myDamage = [
    "You deal a powerful blow to their face!",
    "A strike to their chest slice their skin open!",
    "They are stunned by a sudden swing to their side!",
    "A masterful slash opens a wound on their arm!",
    "You shank them in the kidney!"
]

const myMiss = [
    "You wobble and fall over your own legs.",
    "You were distracted by someone running past with no pants.",
    "A splash of beer to the back of your head threw you off.",
    "You look like you momentarily forgot what you were doing.",
    "A drunk barreled into you and knocked you off balance"
];

const myDodge = [
    "You leap backwards and jeer at them.",
    "You sidestep their wild swing.",
    "Scrambling backwards, you manage to avoid their attack.",
    "With the grace of a butterfly, you fluttered out of the way.",
    "You limbo'ed under their attack; they looked quite insulted."
]

// Profile Pick 

const invOne = document.createElement("li");

myWep.readOnly = true;
myDmg.readOnly = true;
myDef.readOnly = true;
myHealth.readOnly = true;

myHealth.value = 15;

function findItem() {
    function find(arr, select) {
        return arr.find(item => item.id === Number(select.value));
    }

    const wepItem = find(weaponArray, selectWep); 
    myWep.value = wepItem.weapon;
    myDmg.value = (wepItem.damage).name.toUpperCase();
    myDef.value = wepItem.defence;

    const miscItem = find(miscArray, selectMisc);
    myInv.innerHTML = "";
    invOne.innerHTML = miscItem.item
    myInv.append(invOne);
}

buttonPreview.addEventListener("click", findItem);

buttonReady.addEventListener("click", () => {
    divOne.style.opacity = 0;
    setTimeout(() => {
        divOne.remove();
        document.body.append(divTwo);
        myProf.style.paddingRight = "0px";
        divTwo.append(myProf);
        myName.readOnly = true;
        myRace.disabled = true; // ---------- To be Implemented
        divTwo.style.opacity = 1;
    }, 1000)
})

// NPC Generator

fightName.readOnly = true;
fightRace.readOnly = true;
fightWep.readOnly = true;
fightDmg.readOnly = true;
fightDef.readOnly = true;
// fightHealth.readOnly = true;

const wepGen = randomArr(weaponArray);
[a, b, c, d, e] = [randomArr(nameArray), randomArr(raceArray),wepGen.weapon, wepGen.damage, wepGen.defence];

buttonBegin.addEventListener("click", () => {
    fighterOne = new Fighter (a, b, c, d, e);
    fightName.value = a;
    fightRace.value = b;
    fightWep.value = c;
    fightDmg.value = (d.name).toUpperCase();
    fightDef.value = e - 5; // ---------- Nerf the Fighter for now
    fightHealth.value = fighterOne.health;
});

// Battle Generator - Created Variables

const itemOne = document.createElement("li");
const itemTwo = document.createElement("li");
const itemThree = document.createElement("li");
const itemFour = document.createElement("li");
const itemFive = document.createElement("li");
const itemSix = document.createElement("li");
const itemSeven = document.createElement("li");
const itemEight = document.createElement("li");
const itemNine = document.createElement("li");
const itemTen = document.createElement("li");
const itemEleven = document.createElement("li");
const itemTwelve = document.createElement("li");

const textOne = document.createElement("input");
const textTwo = document.createElement("input");
const textThree = document.createElement("input");
const textFour = document.createElement("input");
const textFive = document.createElement("input");
const textSix = document.createElement("input");
const textNine = document.createElement("input");

const buttonAtk = document.createElement("button");
const buttonItem = document.createElement("button");
const buttonFight = document.createElement("button");
const buttonMy = document.createElement("button");
const buttonVic = document.createElement("button")
const buttonDef = document.createElement("button")

// Battle Generator - Styling

itemOne.innerHTML = "You Roll:";
itemSix.innerHTML = "You Roll:";
itemTwo.innerHTML = "They Roll:";
itemThree.innerHTML = myAttack[Math.floor(Math.random()*myAttack.length)];
itemFour.innerHTML = fightDodge[Math.floor(Math.random()*fightDodge.length)];
itemFive.innerHTML = "You both flail about embarrassingly and nothing happens.";
itemSeven.innerHTML = myDamage[Math.floor(Math.random()*myDamage.length)];
itemEight.innerHTML = myDodge[Math.floor(Math.random()*myDodge.length)];
itemNine.innerHTML = fightDamage[Math.floor(Math.random()*fightDamage.length)];
itemTen.innerHTML = startConvo[Math.floor(Math.random()*startConvo.length)];
itemEleven.innerHTML = endConvo[Math.floor(Math.random()*endConvo.length)];
itemTwelve.innerHTML = "Your vision starts to go black!";

buttonAtk.innerHTML = "Attack!";
buttonAtk.style.backgroundColor = "rgba(165, 42, 42, 0)";
buttonAtk.style.border = "1px solid black";
buttonAtk.style.fontSize = "80%";

buttonItem.innerHTML = "Use Item";
buttonItem.style.backgroundColor = "rgba(165, 42, 42, 0)";
buttonItem.style.border = "1px solid black";
buttonItem.style.fontSize = "80%";

buttonFight.innerHTML = "Enemy's Turn";
buttonFight.style.backgroundColor = "rgba(165, 42, 42, 0)";
buttonFight.style.border = "1px solid black";
buttonFight.style.fontSize = "80%";

buttonMy.innerHTML = "Your Turn";
buttonMy.style.backgroundColor = "rgba(165, 42, 42, 0)";
buttonMy.style.border = "1px solid black";
buttonMy.style.fontSize = "80%";

buttonVic.innerHTML = "Victory!";
buttonVic.style.backgroundColor = "rgba(165, 42, 42, 0)";
buttonVic.style.border = "1px solid black";
buttonVic.style.fontSize = "80%";

buttonDef.innerHTML = "Defeat!";
buttonDef.style.backgroundColor = "rgba(165, 42, 42, 0)";
buttonDef.style.border = "1px solid black";
buttonDef.style.fontSize = "80%";

// Battle Generator - Functions

function attackRoll() {
    textOne.value = d20() + Number(myDef.value);
    combatList.append(itemOne);
    itemOne.append(textOne);
    textTwo.value = d20() + Number(fightDef.value);
    combatList.append(itemTwo);
    itemTwo.append(textTwo);
}

function myAction() {
    if (Number(textOne.value) > Number(textTwo.value)) {
        combatList.append(itemThree);
        combatList.append(buttonAtk);
        combatList.append(buttonItem);
    } else if (Number(textOne.value) < Number(textTwo.value)) {
        combatList.append(itemFour);
        combatList.append(buttonFight);
    } else if (Number(textOne.value) === Number(textTwo.value)) {
        combatList.append(itemFive);
        combatList.append(buttonFight);
    }
}

buttonBegin.addEventListener("click", () => {
    combatList.append(itemTen);
    attackRoll();
    setTimeout(() => {myAction()}, 1000)
});

function myAtkdmg() {
    const thisWep = weaponArray.find(item => item.weapon === myWep.value);
    textSix.value = thisWep.damage();
    fightHealth.value -= textSix.value;
    combatList.append(itemSix);
    itemSix.append(textSix);
    combatList.append(itemSeven);
    buttonAtk.remove();
    buttonItem.remove();
    if (fightHealth.value <= 0) {
        combatList.append(itemEleven);
        combatList.append(buttonVic);
    } else {
        combatList.append(buttonFight);
    }
}

buttonAtk.addEventListener("click", myAtkdmg);

buttonVic.addEventListener("click", () => {
    divTwo.style.opacity = 0;
    divOne.style.opacity = 0;
    setTimeout(() => {
        divTwo.remove();
        myProf.remove();
        document.body.append(divThree);
        divThree.style.opacity = 1;
    }, 1000)
});

function fightAction() {
    if (Number(textOne.value) > Number(textTwo.value)) {
        combatList.append(itemEight); 
        combatList.append(buttonMy);
    } else if (Number(textOne.value) < Number(textTwo.value)) {
        combatList.append(itemNine);
        itemNine.append(textNine);
        const thisWep = weaponArray.find(item => item.weapon === fightWep.value);
        textNine.value = thisWep.damage();
        myHealth.value -= textNine.value;
        if (myHealth.value <= 0) {
            combatList.append(itemTwelve);
            combatList.append(buttonDef);
        } else {
            combatList.append(buttonMy);
        }
    } else if (Number(textOne.value) === Number(textTwo.value)) {
        combatList.append(itemFive);
        combatList.append(buttonMy);
    }
}

buttonDef.addEventListener("click", () => {
    divTwo.style.opacity = 0;
    divOne.style.opacity = 0;
    setTimeout(() => {
        divTwo.remove();
        myProf.remove();
        document.body.append(divFour);
        divFour.style.opacity = 1;
    }, 1000)
});

buttonFight.addEventListener("click", () => {
    combatList.innerHTML = "";
    attackRoll();
    setTimeout(() => {fightAction()}, 1000)
});

buttonMy.addEventListener("click", () => {
    combatList.innerHTML = "";
    attackRoll();
    setTimeout(() => {myAction()}, 1000)
});

// Currency Converter

function convSgd() {
    const sgd = Number(sgdText.value);
    sgdOutput.innerHTML = (`Singapore Dollars: $${(sgd)}`);
    eurOutput.innerHTML = (`Euros: €${Math.round((sgd * 0.63683787) * 100) / 100}`);
    usdOutput.innerHTML = (`US Dollars: $${Math.round((sgd * 0.74412913) * 100) / 100}`);
    sgdText.value = ' ';
}

function convEur() {
    const eur = Number(eurText.value);
    sgdOutput.innerHTML = (`Singapore Dollars: $${Math.round((eur * 1.5698403) * 100) / 100}`);
    eurOutput.innerHTML = (`Euros: €${(eur)}`);
    usdOutput.innerHTML = (`US Dollars: $${Math.round((eur * 1.1680166) * 100) / 100}`);
    eurText.value = ' ';
}    

function convUsd() {
    const usd = Number(usdText.value);
    sgdOutput.innerHTML = (`Singapore Dollars: $${Math.round((usd * 1.3442522) * 100) / 100}`);
    eurOutput.innerHTML = (`Euros: €${Math.round((usd * 0.85619182) * 100) / 100}`);
    usdOutput.innerHTML = (`US Dollars: $${(usd)}`);
    usdText.value = ' ';
}    

sgdButton.addEventListener('click', convSgd);
eurButton.addEventListener('click', convEur);
usdButton.addEventListener('click', convUsd);
