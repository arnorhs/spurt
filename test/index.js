var spurt = require('../'),
    assert = require('assert');

describe('looping through an array of items', function() {
    it('should call each callback method synchronously', function(done) {
        var expected = [];
        for (var i = 0; i < 1000; i++) {
            expected.push(i);
        }
        var called = [];
        spurt(expected, function(item, next) {
            called.push(item);
            process.nextTick(next);
        }, function() {
            assert(called.length === expected.length, "Items contain too few things");
            done();
        });
    });
});

