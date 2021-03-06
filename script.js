// Variables - Styling Misc

const divBg = document.getElementById("div-bg");
const divZero = document.getElementById("div-zero");
const divOne = document.getElementById("div-one");
const divTwo = document.getElementById("div-two");
const divThree = document.getElementById("div-three");
const divFour = document.getElementById("div-four");

const buttonZero = document.getElementById("button-zero");

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
const fightStatlist = document.getElementById("ul-two-fighter-c")

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
const itemThirteen = document.createElement("li");
const itemFourteen = document.createElement("li");
const itemFifteen = document.createElement("li");

const textOne = document.createElement("input");
const textTwo = document.createElement("input");
const textSix = document.createElement("input");
const textNine = document.createElement("input");
const textFifteen = document.createElement("input");

const buttonAtk = document.createElement("button");
const buttonItem = document.createElement("button");
const buttonFight = document.createElement("button");
const buttonMy = document.createElement("button");
const buttonVic = document.createElement("button")
const buttonDef = document.createElement("button")

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

document.getElementById("button-four-try").addEventListener("click", () => {
    window.location.href = window.location.href;
});

document.getElementById("button-three-try").addEventListener("click", () => {
    console.log("test");
    window.location.href = window.location.href;
});

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

// Roll Functions

function d2() {return Math.floor(Math.random()*2) + 1;}
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
    constructor(name, race, weapon, damage, defence, health = 15) {
        this.name = name;
        this.race = race;
        this.weapon = weapon;      
        this.damage = damage;
        this.defence = defence;  
        this.health = health;
    }
}

// NPC Arrays

const nameArray = ["Gratin Dauphinois", "Reibekuchen", "Bratkartoffeln", "Rosti", "Patat Frites", "Stamppot", "Hutspot"];

const raceArray = ["Human", "Elf", "Dwarf", "Half-orc", "Halfling", "Gnome", "Dragonborn", "Half-elf"];

// Item Arrays

const weaponArray = [
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

const miscArray = [

    {
        id: 6,
        invMisc: "A Neurotic Chihuahua",
        descrp: "The dog goes in for the bite!",
        effect: () => {
            const dog = d2();
            if (dog === 2) {
                textSix.value = d12();
                fightHealth.value -= textSix.value;
            } else {
                itemSix.remove();
                textSix.remove();
                itemFourteen.innerHTML = "No... no. The dog stood there, trembling uncontrollably, and drooled on the floor.";
                combatList.append(itemFourteen);
            }
        },
    },

    {
        id: 7,
        invMisc: "Health Potion",
        descrp: "You gain 10 points of health back!",
        effect: () => myHealth.value = Number(myHealth.value) + 10,
    },

    {
        id: 8,
        invMisc: "Firebomb",
        descrp: "You threw a homemade molotov at them!",
        effect: () => {
            textSix.value = d10();
            fightHealth.value -= textSix.value;
            itemFourteen.innerHTML = `${fightName.value} dives into a nearby puddle of beer!`
            combatList.append(itemFourteen);
        },
    },

    {
        id: 9,
        invMisc: "Pocket Sand",
        descrp: "Why is your pockets full of sand? No matter, you throw some at them.",
        effect: () => {
            textSix.value = d6();
            fightHealth.value -= textSix.value;
            itemFourteen.innerHTML = `${fightName.value} is blinded for a turn!`
            combatList.append(itemFourteen);
        },
    },

    {
        id: 10,
        invMisc: "Magic Beans",
        descrp: "You have some 'Magic Beans'. You throw them at the enemy's feet and hoped that it will do something.",
        effect: () => {
            textFifteen.value = d4();
            textSix.value = textFifteen.value;
            fightHealth.value -= textFifteen.value;
            itemFourteen.innerHTML = `A beautiful sunflower grows out of the ground and coughs in ${fightName.value}'s face. They are now poisoned!`
            combatList.append(itemFourteen);
            itemFifteen.innerHTML = "Poisoned";
            fightStatlist.append(itemFifteen);
            fightStatlist.append(textFifteen);
        },
    },
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

const fightDamage = [
    "They deal a powerful blow to your face!",
    "A strike to your chest slice your skin open!",
    "You are stunned by a sudden swing to your side!",
    "A masterful slash opens a wound on your arm!",
    "They shank you in the kidney!"
]

const fightDodge = [
    "They leap backwards and jeer at you.",
    "They sidestep your wild swing.",
    "Scrambling backwards, they manage to avoid your attack.",
    "With the ease of a drunk, they wobble out of the way.",
    "They limbo'ed under your attack, and you feel quite insulted.",
    "You wobble and fall over your own legs.",
    "You were distracted by someone running past with no pants.",
    "A splash of beer to the back of your head threw you off.",
    "You look like you momentarily forgot what you were doing.",
    "A drunk barreled into you and knocked you off balance"
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

const myDodge = [
    "You leap backwards and jeer at them.",
    "You sidestep their wild swing.",
    "Scrambling backwards, you manage to avoid their attack.",
    "With the grace of a butterfly, you fluttered out of the way.",
    "You limbo'ed under their attack; they looked quite insulted.",
    "They wobble and fall over their own legs.",
    "They were distracted by someone running past with no pants.",
    "A splash of beer to the back of their head threw them off.",
    "They look like they momentarily forgot what they were doing.",
    "A drunk barreled into them and knocked them off balance"
]

// NPC Generator

fightName.readOnly = true;
fightRace.readOnly = true;
fightWep.readOnly = true;
fightDmg.readOnly = true;
fightDef.readOnly = true;
fightHealth.readOnly = true;

const wepGen = randomArr(weaponArray);
const [a, b, c, d, e] = [randomArr(nameArray), randomArr(raceArray),wepGen.weapon, wepGen.damage, wepGen.defence];

function genFighter() {
    const fighterOne = new Fighter (a, b, c, d, e);
    fightName.value = a;
    fightRace.value = b;
    fightWep.value = c;
    fightDmg.value = (d.name).toUpperCase();
    fightDef.value = e - 5; // ----------------------------------------------------------------------------Nerf the fighter
    fightHealth.value = fighterOne.health;
}

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
    invOne.innerHTML = miscItem.invMisc;
    myInv.append(invOne);
}

buttonReady.disabled = true;

buttonPreview.addEventListener("click", () => {
    findItem();
    buttonReady.disabled = false;
});

buttonReady.addEventListener("click", () => {
    genFighter();
    divOne.style.opacity = 0;
    setTimeout(() => {
        divOne.remove();
        document.body.append(divTwo);
        myProf.style.paddingRight = "0px";
        myProf.style.marginTop = "-70px";
        divTwo.append(myProf);
        myName.readOnly = true;
        myRace.disabled = true; // -------------------------------------------------------------------- To be Implemented
        divTwo.style.opacity = 1;
    }, 1000);
})

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
itemTwelve.innerHTML = "Your vision starts to go black!";

buttonAtk.innerHTML = "Attack!";
buttonAtk.classList.add("button-two-all");

buttonItem.innerHTML = "Use Item";
buttonItem.classList.add("button-two-all");

buttonFight.innerHTML = "Enemy's Turn";
buttonFight.classList.add("button-two-all");

buttonMy.innerHTML = "Your Turn";
buttonMy.classList.add("button-two-all");

buttonVic.innerHTML = "Victory!";
buttonVic.classList.add("button-two-all");

buttonDef.innerHTML = "Defeat!";
buttonDef.classList.add("button-two-all");

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
        combatList.append(buttonAtk);
        combatList.append(buttonItem);
    } else if (Number(textOne.value) < Number(textTwo.value)) {
        combatList.append(itemFour);
        combatList.append(buttonFight);
    } else {
        combatList.append(itemFive);
        combatList.append(buttonFight);
    }
}

buttonBegin.addEventListener("click", () => {
    itemTen.innerHTML = `${fightName.value}: ${startConvo[Math.floor(Math.random()*startConvo.length)]}`;
    combatList.append(itemTen);
    attackRoll();
    setTimeout(() => {myAction()}, 1000)
});

function myAtkdmg() {
    combatList.append(itemThree);
    const thisWep = weaponArray.find(item => item.weapon === myWep.value);
    textSix.value = thisWep.damage();
    fightHealth.value -= textSix.value;
    combatList.append(itemSix);
    itemSix.append(textSix);
    combatList.append(itemSeven);
    buttonAtk.remove();
    buttonItem.remove();
    if (fightHealth.value <= 0) {
        itemEleven.innerHTML = `${fightName.value}: ${endConvo[Math.floor(Math.random()*endConvo.length)]}`;
        combatList.append(itemEleven);
        combatList.append(buttonVic);
    } else {
        combatList.append(buttonFight);
    }
}

buttonAtk.addEventListener("click", myAtkdmg);

function fightAction() {
    statEffect();
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

function conCombat(action) {
    combatList.innerHTML = "";
    attackRoll();
    setTimeout(() => {action()}, 1000);
}

buttonFight.addEventListener("click", () => conCombat(fightAction));

buttonMy.addEventListener("click", () => conCombat(myAction));

function endCombat(ele) {
    divTwo.style.opacity = 0;
    divOne.style.opacity = 0;
    setTimeout(() => {
        divTwo.remove();
        myProf.remove();
        document.body.append(ele);
        ele.style.opacity = 1;
    }, 1000)
}

buttonVic.addEventListener("click", () => endCombat(divThree));

buttonDef.addEventListener("click", () => endCombat(divFour));

// Item Use

function itemUsage() {
    const itemUsed = miscArray.find(item => item.invMisc === invOne.innerHTML);
    itemThirteen.innerHTML = itemUsed.descrp;
    combatList.append(itemThirteen);
    combatList.append(itemSix);
    itemSix.append(textSix);
    itemUsed.effect();
    buttonItem.disabled = true;
    setTimeout(() => {
        if (fightHealth.value <= 0) {
            itemEleven.innerHTML = `${fightName.value}: ${endConvo[Math.floor(Math.random()*endConvo.length)]}`;
            combatList.append(itemEleven);
            combatList.append(buttonVic);
        } else if (itemUsed.id === 9) {
            combatList.append(buttonMy);
        } else {
            combatList.append(buttonFight);
        }
    }, 1000);
}

buttonItem.addEventListener("click", itemUsage);

// Status Effects

function statEffect() {
    if (itemFifteen.innerHTML === "Poisoned") {
        textFifteen.value = d4();
        fightHealth.value -= textFifteen.value;
        itemFourteen.innerHTML = `The sunflower coughs even more. ${fightName.value} is poisoned again!`;
        combatList.append(itemFourteen);
    }
}

// Currency Converter

function convCur(curText, mathsgd, matheur, mathusd) {
    const curr = Number(curText.value);
    sgdOutput.innerHTML = (`Singapore Dollars: $${Math.round((curr * mathsgd) * 100) / 100}`);
    eurOutput.innerHTML = (`Euros: ???${Math.round((curr * matheur) * 100) / 100}`);
    usdOutput.innerHTML = (`US Dollars: $${Math.round((curr * mathusd) * 100) / 100}`);
    curText.value = '';
}

sgdButton.addEventListener('click', () => convCur(sgdText, 1, 0.63683787, 0.74412913));
eurButton.addEventListener('click', () => convCur(eurText, 1.5698403, 1, 1.1680166));
usdButton.addEventListener('click', () => convCur(usdText, 1.3442522, 0.85619182, 1));
