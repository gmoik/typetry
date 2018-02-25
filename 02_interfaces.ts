// ------------------------------------------------------------------------------------------------
// I N T E R F A C E S
// ------------------------------------------------------------------------------------------------

interface LabelledValue {
    label: string;
    description?: string; // optional
    readonly version: number; //cannot set
}
// function printLabel(a: { label: string }) { 
function printLabel(a: LabelledValue) {
    console.log(a.label);
    if(a.description) {
        console.log(a.description);
    }
    // a.version = 11; -> ERROR
}
let ab = {
        siz: 10, // not in interface
        label: "Überschrift",
        version: 10
    };
printLabel(ab);

// - ReadonlyArray --------------------------------------------------------------------------------

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// readonly vs const
//  variables : const
//  properties : readonly

// - Function Types -------------------------------------------------------------------------------

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

console.log(mySearch('Hallo Georg, wie geht´s','Georg'));

// - Indexable Types ------------------------------------------------------------------------------

interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Sebastian", "Darijan"];
console.log(myArray[1]); // Darijan

// - Extending Interfaces -------------------------------------------------------------------------

interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
