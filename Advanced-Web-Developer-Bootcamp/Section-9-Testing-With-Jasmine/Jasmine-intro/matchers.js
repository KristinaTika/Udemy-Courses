describe("Jasmine Matchers", () => {
    it("allows for === and deep equality", () => {
        expect(1 + 1).toBe(2);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
    it("allows for easy precision checking", () => {
        expect(3.1415).toBeCloseTo(3.14, 2);
    });
    it("allows for easy truthy / falsey checking", () => {
        expect(null).toBeFalsy();
        expect([]).toBeTruthy();
    });
    it("allows for easy type checking", () => {
        expect([]).toEqual(jasmine.any(Array));
        expect(() => { }).toEqual(jasmine.any(Function));
    });
    it("allows for checking contents of an object", () => {
        expect([1, 2, 3]).toContain(2);
        expect({ name: 'Elie', job: 'Instructor' }).toEqual(jasmine.objectContaining({ name: 'Elie' }));
    });
});

// describe("Arrays", () => {
//     const arr;
//     beforeEach(() => {
//         arr = [1, 3, 5];
//     });
//     it("adds elements to an array", () => {
//         arr.push(7);
//         expect(arr).toEqual([1, 3, 5, 7]);
//     });

//     it("returns the new length of the array", () => {
//         expect(arr.push(7).toBe(4));
//     })

//     it("adds anything into the array", () => {
//         expect(arr.push({}).toBe(4));
//     });
// });