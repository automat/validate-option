module.exports = function(options,defaults){
    options = options || {};
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
    for(var option in defaults){
        validated[option] = options[option] === undefined ?
            defaults[option] :
            options[option];
    }
    return validated;
};