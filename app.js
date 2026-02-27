class Druh {
    constructor(name) {
        this.name = name;
    }
}

class Chovatel {
    constructor(name) {
        this.name = name;
        this.druhy = [];
    }
    addDruh(druh) {
        this.druhy.push(druh);
    }
    getDruhy() {
        return this.druhy;
    }
}

class Jedinec {
    constructor(name, druh) {
        this.name = name;
        this.druh = druh;
    }
}

class Management {
    constructor() {
        this.chovatele = [];
        this.druhy = [];
        this.jedinci = [];
    }
    addChovatel(chovatel) {
        this.chovatele.push(chovatel);
    }
    addDruh(druh) {
        this.druhy.push(druh);
    }
    addJedinec(jedinec) {
        this.jedinci.push(jedinec);
    }
    findChovatel(name) {
        return this.chovatele.find(ch => ch.name === name);
    }
    findDruh(name) {
        return this.druhy.find(d => d.name === name);
    }
}

// Usage Example:
const management = new Management();
const chovatel1 = new Chovatel('Chovatel 1');
const druh1 = new Druh('Druh 1');
const jedinec1 = new Jedinec('Jedinec 1', druh1);

management.addChovatel(chovatel1);
management.addDruh(druh1);
management.addJedinec(jedinec1);

chovatel1.addDruh(druh1);

console.log(management);
