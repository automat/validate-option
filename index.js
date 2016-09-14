var deepcopy = require('deepcopy');

module.exports = function(options,defaults,setDefaultValues){
    options = options || {};
    setDefaultValues = setDefaultValues === undefined ? true : setDefaultValues;

    //validate options
    for(var option in options){
        if(defaults[option] === undefined){
            throw new Error('Invalid option "' + option + '". Available options: [' +
                Object.keys(defaults).map(function(obj){
                    return '"' + obj + '"';
                }).join(', ') + ']'
            );
        }
    }

    //out
    var validated = {};

    //set all or selected default options
    if(setDefaultValues){
        //only selected keys
        if(Array.isArray(setDefaultValues)){
            for(var option in options){
                validated[option] = options[option];
            }
            for(var i = 0; i < setDefaultValues.length; ++i){
                var key = setDefaultValues[i];
                if(defaults[key] === undefined){
                    throw new Error('Invalid defaults key "' + key + '". Available keys: [' +
                        Object.keys(defaults).map(function(obj){
                            return '"' + obj + '"';
                        }).join(', ') + ']'
                    );
                }
                if(options[key] !== undefined){
                    continue;
                }
                validated[key] = defaults[key];
            }
        //set all unset values from default options
        } else{
            var type = typeof setDefaultValues;
            if(type !== 'boolean'){
                throw new Error("'setDefaultValues' invalid type '" + type + "'. Must be of type 'boolean' or 'array'.");
            }

            for(var option in defaults){
                validated[option] = options[option] === undefined ?
                    deepcopy(defaults[option]) :
                    options[option];
            }
        }
    //only use validated keys from options
    } else {
        for(var option in options){
            validated[option] = options[option];
        }
    }

    return validated;
};