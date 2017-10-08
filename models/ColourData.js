var thinky = require('thinky')({ db: "DataStore" });
var r = thinky.r;
var type = thinky.type;

var ColourData = thinky.createModel("ColourData", {
    name: type.string(),
    shirtcolour: type.string(),
    pantcolour: type.string(),
    //totalattempts: type.number(),
    created: type.date().default(r.now())
});

module.exports = ColourData;
