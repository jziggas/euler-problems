// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

describe("Question 1", function() {

    it("should have a function expression named findMultiples()", function() {
        expect(typeof question1.findMultiples).toBe('function');
    });

    it("should return [3, 5, 6, 9] when called with (10, [3,5])", function() {
        expect(
            arraysIdentical(
                question1.findMultiples(10, [3, 5]), [3, 5, 6, 9]
            )
        ).toBe(true);
    });

    it("the sum of the multiples in the example should be 23", function() {
        expect(question1.findMultiples(10, [3, 5]).reduce(function(memo, number) {
            return memo += number;
        })).toBe(23);
    });

    it("the answer should be correct (233168)", function() {
        expect(question1.answer()).toBe(233168);
    });

});