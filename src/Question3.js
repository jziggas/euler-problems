var question3 = {
    isPrime: function(n) {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }

        return true;
    },

    isFactor: function(dividend, divisor) {
        return dividend % divisor === 0;
    },

    findLargestPrimeFactor: function(target) {

        target = (typeof target === 'undefined') ? this.target : target;

        var ceiling = Math.floor(Math.sqrt(target));
        var largestPrimeFactor;

        for (var i = 3; i < ceiling; i += 2) {
            //console.log("Testing " + i + " and " + ceiling);
            if (this.isPrime(i) && this.isFactor(target, i)) {
                largestPrimeFactor = i;
            }
        }
        return largestPrimeFactor;
    },

    target: 600851475143

};