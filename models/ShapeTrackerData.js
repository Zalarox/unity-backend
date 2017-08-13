var thinky = require('thinky')({ db: "DataStore" });
var r = thinky.r;
var type = thinky.type;

var ShapeTrackerData = thinky.createModel("ShapeTrackerData", {
    name: type.string(),
    score: type.number(),
    gametype: type.string(),
    //totalattempts: type.number(),
    created: type.date().default(r.now())
});

module.exports = ShapeTrackerData;
