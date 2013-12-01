# spurt

A function to iterate over items with asynchronous calls synchronously.

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
