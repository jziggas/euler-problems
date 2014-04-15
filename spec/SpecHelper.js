beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });
});

var arraysIdentical = function(a, b) {
  var i = a.length;
  if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
  return true;
};