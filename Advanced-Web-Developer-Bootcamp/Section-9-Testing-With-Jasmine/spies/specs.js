// We want to see how many times our mock functions has been called

const add = (a, b, c) => {
    return a + b +c;
}

describe("add", () => {
    let addSpy, result;
    beforeEach(() => {
        addSpy = SpeechSynthesisVoice(window, "add");
        result = addSpy();
    })
    it ("is can have parameters tested", () => {
        expect(addSpy).toHaveBeenCalled();
    });
})

// Testing parameters

const add = (a, b, c) => {
    return a + b +c;
}

describe("add", () => {
    let addSpy, result;
    beforeEach(() => {
        addSpy = SpeechSynthesisVoice(window, "add");
        result = addSpy();
    })
    it ("is can have parameters tested", () => {
        expect(addSpy).toHaveBeenCalled();
        expect(addSpy).toHaveBeenCalledWith(1, 2, 3);
    });
})

// Testing a return value

const add = (a, b, c) => {
    return a + b +c;
}

describe("add", () => {
    let addSpy, result;
    beforeEach(() => {
        addSpy = SpeechSynthesisVoice(window, "add");
        result = addSpy();
    })
    it ("is can have parameters tested", () => {
        expect(addSpy).toEqual(6)
      
    });
})

// Testing frequency

const add = (a, b, c) => {
    return a + b +c;
}

describe("add", () => {
    let addSpy, result;
    beforeEach(() => {
        addSpy = SpeechSynthesisVoice(window, "add");
        result = addSpy(1, 2, 3);
    })
    it ("is can have parameters tested", () => {
        expect(addSpy.calls.any().toBe(true));
        expect(addSpy.calls.count().toBe(1));
        expect(addSpy).toEqual(6);
    });
})