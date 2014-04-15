// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// Answer: 6857

describe("Question 3", function() {
    it("should have a function named isPrime()", function() {
        expect(typeof question3.isPrime).toBe('function');
    });

    it("should have a function named isFactor()", function() {
        expect(typeof question3.isFactor).toBe('function');
    });

    it("should have a function named findLargestPrime()", function() {
        expect(typeof question3.findLargestPrimeFactor).toBe('function');
    });

    it("7 should be a prime number", function() {
        expect(question3.isPrime(7)).toBe(true);
    });

    it("4 should be a factor of 8", function() {
        expect(question3.isFactor(8, 4)).toBe(true);
    });

    it("5 should be a prime factor of 35", function() {
        expect(question3.isPrime(5) && question3.isFactor(35, 5)).toBe(true);
    });

    it("the largest prime factor of 13195 should be 29", function() {
        expect(question3.findLargestPrimeFactor(13195)).toBe(29);
    });

    it("the largest prime factor of 600851475143 should be 6857", function() {
        // This takes 104 seconds on a 2014 MacBook Air
        expect(question3.findLargestPrimeFactor()).toBe(6857);
    });
});