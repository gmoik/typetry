// ------------------------------------------------------------------------------------------------
// G E N E R I C S
// ------------------------------------------------------------------------------------------------

class CarPool {
    carCapacity: number;
}
class Incinerator {
    wasteCapacityinTons: number;
}
class Partner {
    name: string;
}
class Logistician extends Partner {
    destination: CarPool;
}
class Processor extends Partner {
    destination: Incinerator;
}
function createInstance<P extends Partner>(newP: new () => P): P {
    let p = new newP;
    p.name = 'not set';
    return p;
}

createInstance(Logistician).destination.carCapacity;       // typechecks!
createInstance(Processor).destination.wasteCapacityinTons; // typechecks!
