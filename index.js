module.exports = function(options,defaults,setDefaultValues){
    options = options || {};
    setDefaultValues = setDefaultValues === undefined ? true : setDefaultValues;
    for(var option in options){
        if(defaults[option] === undefined){
            throw new Error('Invalid option "' + option + '". Available options: [' +
                Object.keys(defaults).map(function(obj){
                    return '"' + obj + '"';
                }).join(', ') + ']'
            );
        }
    }
    var validated = {};
    if(setDefaultValues){
        for(var option in defaults){
            validated[option] = options[option] === undefined ?
                defaults[option] :
                options[option];
        }
    } else {
        for(var option in options){
            validated[option] = options[option];
        }
    }


    return validated;
};