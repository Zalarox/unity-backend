var thinky = require('thinky')({ db: "DataStore" });
var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel("BuilderData", {
    name: type.string(),
    score: type.number(),
    //levels: type.number(),
    //totalattempts: type.number(),
    created: type.date().default(r.now())
});

module.exports = User;
