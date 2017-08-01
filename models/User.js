var thinky = require('thinky')({ db: "DataStore" });
var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel("data", {
    name: type.string(),
    score: type.number(),
    created: type.date().default(r.now())
});

module.exports = User;
