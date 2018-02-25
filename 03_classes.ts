// ------------------------------------------------------------------------------------------------
// C L A S S E S
// ------------------------------------------------------------------------------------------------

class Greeter {
    public publicGreeting: string; // inside, child and outside -> defaut
    protected greeting: string; // in this and child class
    private _name: string; // only in this class

    readonly version: number = 10;

    get Name(): string {
        return this._name;
    }
    set Name(newShouter: string) {
        if(newShouter.length > 3) {
            this._name = newShouter;
        }
        else {
            console.log('ERROR: Name is to short!');
        }
    }

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello " + this.greeting;
    }
}

class BigGreeter extends Greeter {
    bigGreet() {
        return "Big Hello  " + this.greeting;
    }
}

class SmallGreeter extends Greeter {
    constructor(message: string) {
        super(message.toLowerCase());
    }
    greet() {
        return super.greet().toLowerCase();
    }
}

let greeter = new Greeter("World");
let bigGreeter = new BigGreeter("World");
let smallGreeter = new SmallGreeter("World");

console.log(greeter.greet());       // Hello World
console.log(bigGreeter.greet());    // Hello World
console.log(bigGreeter.bigGreet()); // Big Hallo World
console.log(smallGreeter.greet());  // hello world

greeter.Name = 'Ma';                // ERROR Name is to short!

console.log(greeter.Name);          // undefined

greeter.Name = 'Magdalena';

console.log(greeter.Name);          // Magdalena

// - Abstract Class -------------------------------------------------------------------------------

abstract class Group {
    constructor(public name: string) { }
    printName(): void {
        console.log("Group name is " + this.name)
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class PartnerGroup extends Group {
    constructor() {
        super("Partner"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Partner Group meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let group: Group;           // is allowed
// group = new Group();     // ERROR
group = new PartnerGroup();
group.printName();          // Group name is Partner
group.printMeeting();       // The Partner Group meets each Monday at 10am.
// group.generateReports(); // ERROR method doesn't exist on declared abstract type

// - Interfaces and Classes -----------------------------------------------------------------------

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): string;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        return "beep beep";
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        return "tick tock";
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

console.log(digital.tick()); // beep beep
console.log(analog.tick()); // tick tock