class Fighter {
    constructor(strength, dexterity, constitution, weapon) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.weapon = weapon;        
    }

    attackroll()

    damageroll()

    itemdrop()
}

class Humanfighter extends Fighter {
    constructor(strength, dexterity, constitution, weapon, race = human) {
        super(strength, dexterity, constitution, weapon);
        this.race = race;
    }

    intro()
}

class Dwarffighter extends Fighter {
    constructor(strength, dexterity, constitution, weapon, race = dwarf) {
        super(strength, dexterity, constitution, weapon);
        this.race = race;
    }

    intro()
}

class Elffighter extends Fighter {
    constructor(strength, dexterity, constitution, weapon, race = elf) {
        super(strength, dexterity, constitution, weapon);
        this.race = race;
    }

    intro()
}

