//abstraction
class Switch {
    constructor() {
    }
    turnOn() {}
    turnOff() {}
}

class AutomaticRemoteController extends Switch {
    constructor(out) {
        super();
        this.out = out;
    }
    turnOn() {
        this.out.start_working();
    }
    turnOff() {
        this.out.stop_working();
    }
}

class ManualRemoteController extends Switch {
    constructor(out) {
        super();
        this.out = out;
    }
    turnOn() {
        this.out.start_working();
    }
    turnOff() {
        this.out.stop_working();
    }
}

// implementation
class AppliancesForHome {
    constructor() {
    }
}

class AC extends AppliancesForHome {
    constructor() {
        super();
    }
    start_working() {
        console.log('Choose a temperature and start cooling the air.');
    }
    stop_working() {
        console.log('Stop cooling the air. It is cold.');
    }
}

class Fridge extends AppliancesForHome {
    constructor() {
        super();
    }
    start_working() {
        console.log('Preserve food.');
    }
    stop_working() {
        console.log(`Gone sleeping...`);
    }
}

class Fan extends AppliancesForHome {
    constructor() {
        super();
    }
    start_working() {
        console.log('Cool the air');
    }
    stop_working() {
        console.log(`Stop cooling the air.`);
    }
}

class TV extends AppliancesForHome {
    constructor() {
        super();
    }

    start_working() {
        console.log('Watch something');
    }

    stop_working() {
        console.log(`Turn off. Read books.`);
    }
}

class GateOpener extends AppliancesForHome {
    constructor() {
        super();
    }
    start_working() {
        console.log('Open gates, let people in');
    }

    stop_working() {
        console.log(`Finally, I am an introvert!`);
    }
}

const pleaseWork = () => {
    let ac = new AC();
    let fridge = new Fridge();
    let fan = new Fan();
    let tv = new TV();
    let gate_opener = new GateOpener();

    let arc = new AutomaticRemoteController(ac);
    let mrc = new ManualRemoteController(tv);

    arc.turnOn();
    arc.turnOff();

    mrc.turnOn();
    mrc.turnOff();

}

pleaseWork();