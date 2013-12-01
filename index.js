module.exports = function(list, entry, done) {
    // Clone the array
    list = list.slice();
    var run = function() {
        var item = list.shift();
        if (item === undefined) {
            return done();
        }
        entry(item, function() {
            setImmediate(function() {
                run();
            });
        });
    };
    run();
};
