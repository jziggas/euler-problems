var question2 = {
    fibonacci: function(range) {
        range = (typeof range === 'undefined') ? this.range : range;
        var firstNum = 1,
            secondNum = 2,
            sum = 0,
            temp;

        while (secondNum < range) {

            if (this.isEven(secondNum)) sum += secondNum;
            temp = firstNum;
            firstNum = secondNum;
            secondNum = firstNum + temp;
        }
        return sum;
    },

    range: 4000000,

    isEven: function(n) {
        return n % 2 === 0;
    }
};