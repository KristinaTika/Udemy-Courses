const CardState = {
    hiding: 0, // card is not being shown
    showing: 1, // card is shown, but doesn't have a match yet
    matching: 2 // card is shown, has a match
}

export const colorCards = [
    { id: 0, cardState: CardState.hiding, backgroundColor: "red" },
    { id: 1, cardState: CardState.hiding, backgroundColor: "red" },
    { id: 2, cardState: CardState.hiding, backgroundColor: "navy" },
    { id: 3, cardState: CardState.hiding, backgroundColor: "navy" },
    { id: 4, cardState: CardState.hiding, backgroundColor: "green" },
    { id: 5, cardState: CardState.hiding, backgroundColor: "green" },
    { id: 6, cardState: CardState.hiding, backgroundColor: "yellow" },
    { id: 7, cardState: CardState.hiding, backgroundColor: "yellow" },
    { id: 8, cardState: CardState.hiding, backgroundColor: "black" },
    { id: 9, cardState: CardState.hiding, backgroundColor: "black" },
    { id: 10, cardState: CardState.hiding, backgroundColor: "purple" },
    { id: 11, cardState: CardState.hiding, backgroundColor: "purple" },
    { id: 12, cardState: CardState.hiding, backgroundColor: "orange" },
    { id: 13, cardState: CardState.hiding, backgroundColor: "orange" },
    { id: 14, cardState: CardState.hiding, backgroundColor: "lightblue" },
    { id: 15, cardState: CardState.hiding, backgroundColor: "lightblue" },

    { id: 16, cardState: CardState.hiding, backgroundColor: "greenyellow" },
    { id: 17, cardState: CardState.hiding, backgroundColor: "greenyellow" },
    { id: 18, cardState: CardState.hiding, backgroundColor: "tan" },
    { id: 19, cardState: CardState.hiding, backgroundColor: "tan" },
    { id: 20, cardState: CardState.hiding, backgroundColor: "indianred" },
    { id: 21, cardState: CardState.hiding, backgroundColor: "indianred" },
    { id: 22, cardState: CardState.hiding, backgroundColor: "deeppink" },
    { id: 23, cardState: CardState.hiding, backgroundColor: "deeppink" },
    { id: 24, cardState: CardState.hiding, backgroundColor: "moccasin" },
    { id: 25, cardState: CardState.hiding, backgroundColor: "moccasin" },
    { id: 26, cardState: CardState.hiding, backgroundColor: "darkolivegreen" },
    { id: 27, cardState: CardState.hiding, backgroundColor: "darkolivegreen" },
    { id: 28, cardState: CardState.hiding, backgroundColor: "midnightblue" },
    { id: 29, cardState: CardState.hiding, backgroundColor: "midnightblue" },
    { id: 30, cardState: CardState.hiding, backgroundColor: "mediumslateblue" },
    { id: 31, cardState: CardState.hiding, backgroundColor: "mediumslateblue" },
];