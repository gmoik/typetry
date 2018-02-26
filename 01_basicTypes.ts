// ------------------------------------------------------------------------------------------------
// B A S I C - T Y P E S 
// ------------------------------------------------------------------------------------------------

// - Boolean --------------------------------------------------------------------------------------

let isDone: boolean = true;

console.log(typeof(isDone)); // boolean

// - Number ---------------------------------------------------------------------------------------

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let age: number = 32;

console.log(typeof(decimal)); // number
console.log(typeof(octal)); // number

// - String ---------------------------------------------------------------------------------------

const fullName: string = 'Georg Moik';
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next year.`;

// - Array ----------------------------------------------------------------------------------------

let listA: number[] = [1, 2, 3];
let listB: Array<number> = [1, 2, 3]; // i like

console.log(typeof(listB)); // object

// - Tuble ----------------------------------------------------------------------------------------

let t: [string, number];
t = ["Georg", 32]; // OK
// t = [32, "Georg"]; // Error

let keyValueList: Array<[number, string]> = [];

keyValueList.push([1,'a']);
keyValueList.push([2,'b']);
keyValueList.push([3,'c']);

console.log(JSON.stringify(keyValueList)); // [[1,"a"],[2,"b"],[3,"c"]]

// - Enum -----------------------------------------------------------------------------------------

enum ItemTypes { 
    Disposal, 
    Bigbag,
}

let typeBigbag = ItemTypes.Bigbag;

console.log(typeBigbag); // 1
console.log(typeof(typeBigbag)); // number

enum OrderTypes { 
    Delivery = 1, 
    Retrieval = 2, 
    ImediateLoading = 4, 
    Change = 5 
}

let typeDelivery = OrderTypes.Delivery;
let typeChange = OrderTypes.Change;

console.log(typeChange); // 5
console.log(typeChange === OrderTypes.Change) // true
console.log(typeof(typeDelivery)) // number

enum ItemPcDocumentTypes { 
    legalWeightDocument = "LEGALWEIGHT",
    dangerousGoodsDocument = "DANGEROUSGOODS",
}

// - Any ------------------------------------------------------------------------------------------

let anything: any = 'Text';
console.log(typeof(anything)) // string;
anything = 1; // change type
console.log(typeof(anything)) // number;

let trash: Array<any> = [1, true, 'for what ever'];

// - Void -----------------------------------------------------------------------------------------

function nothing(): void {
    console.log('nothing to return');
}

// - Never -----------------------------------------------------------------------------------------

function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {
    }
}

// - Type assertions -------------------------------------------------------------------------------

let something: any = "this is a string";
let lengthA: number = (<string>something).length;
let lengthB: number = (something as string).length;
// like a cast without checking -> "trust me, I know what I'm doing"

something = 5;
let test: string = something.toString();
console.log(typeof(test)); // string