var thinky = require('thinky')({ db: "DataStore" });
var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel("ARData", {
    name: type.string(),
    password: type.string(),
    created: type.date().default(r.now())
});

module.exports = User;
