var validateOptions = require('./../index.js');

var defaults = {
    a : 0,
    b : 1,
    c : 2
};

function foo(options){
    options = validateOptions(options,defaults);
    console.log(options);
}

function foo2(options){
    options = validateOptions(options,defaults,false);
    console.log(options);
}

function foo3(options,defaultValueKeys){
    options = validateOptions(options,defaults,defaultValueKeys);
    console.log(options);
}

foo(); //logs {a: 0, b: 1, c: 2}
foo({a:0}); //logs {a: 0, b: 1, c: 2}
foo({a:0,b:0}); //logs {a: 0, b: 0, c: 2}

foo2(); //logs {}
foo2({a:0}); //logs {a: 0}
foo2({a:0,b:0}); //logs {a: 0, b: 0}

foo3(null,['b']); //logs {b:1}
foo3({a:0},['b']); //logs {a:0, b: 1};
foo3({a:0,b:0},['b']); //logs {a: 0, b: 0}

//...
foo({a:0,d:0}); //throws Invalid option "d". Available options: ["a", "b", "c"]
//...
foo2({a:0,d:0}); //throws Invalid option "d". Available options: ["a", "b", "c"]
//...
foo3({a:0,b:0},['d']); //throws Invalid defaults key "d". Available keys: ["a", "b", "c"]
