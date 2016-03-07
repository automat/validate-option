#validate-options
   
Validates option argument against a default option.
   
```
    var validateOption = require('validate-option');
    
    var defaults = {
        a : 0,
        b : 1,
        c : 2
    };
    
    function foo(options){
        options = validateOption(options,defaults);
        console.log(options);
    }
    
    foo(); //logs { a: 0, b: 1, c: 2 }
    foo({a:0}); //logs { a: 0, b: 1, c: 2 }
    foo({a:0,b:0}); //logs { a: 0, b: 0, c: 2 }
    foo({a:0,d:0}); //throws Invalid option "d". Available options: ["a", "b", "c"]

```