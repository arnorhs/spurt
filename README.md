# spurt

A super simple function to loop over items accepting a callback, so asynchronous callbacks
will be executed in order.

### Usage:

Install with npm:
```
npm install spurt
```

Example usage:

```javascript
var spurt = require('spurt');
var items = [1, 2, 3];

spurt(items, function(item, next) {
    // do something async, such as insert into db:
    db.insert(item, function(err, res) { // each entry
        if (!err) {
            next();
        }
    }, function() { // all rows done
        console.log("Inserted all the rows");
    });
```

*Pull requests welcome*

### TODO:
- maybe more flexible error handling
- optional success callback

### Licnse:
MIT license
