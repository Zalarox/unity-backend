var thinky = require('thinky')({ db: "DataStore" });
var r = thinky.r;
var type = thinky.type;

var ShapeTrackerData = thinky.createModel("ClothesData", {
    name: type.string(),
    score: type.number(),
    //totalattempts: type.number(),
    created: type.date().default(r.now())
});

module.exports = ShapeTrackerData;
