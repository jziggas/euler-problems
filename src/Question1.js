var question1 = {

    findMultiples: function(number, list) {
        multiples = [];
        for (var n = 1; n < number; n++) {
            for (var i = 0; i < list.length; i++) {
                if (n % list[i] == 0) multiples.push(n);
            }
        }
        return multiples.filter(function(value, index, self) {
            return self.indexOf(value) == index;
        });
    },

    answer: function() {
        return this.findMultiples(1000, [3, 5]).reduce(function(memo, number) {
            return memo += number;
        });
    }

};