describe("Pending specs", () => {

    xit("can start with an xit", () => {
        expect(true).toBe(true);
    });

    it("is a pending test if there is no callback function");

    it("is pending if the pending function is invoked inside the callback", () => {
        expect(2).toBe(2);
        pending();
    });

});