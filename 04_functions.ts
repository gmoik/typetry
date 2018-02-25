// ------------------------------------------------------------------------------------------------
// F U N C T I O N S
// ------------------------------------------------------------------------------------------------

function buildName1(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName1("Michael","Friessnegg")); // Michael Friessnegg
console.log(buildName1("Patrick"));              // Patrick

function buildName2(firstName: string, lastName = "Musk") {
    return firstName + " " + lastName;
}

console.log(buildName2("Alon")); // Will Smith

// - Rest Parameters ------------------------------------------------------------------------------

function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

console.log(buildName3("Joseph", "Samuel", "Lucas", "MacKinzie"));

// - this -----------------------------------------------------------------------------------------

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
