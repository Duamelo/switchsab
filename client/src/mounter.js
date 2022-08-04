var m = require("mithril");
var layout = require("./views/layout");
var register = require("./views/register");
var login = require("./views/login");


function mountRoutes() {
    document.body.className = "";
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout);
                }
            }
        });
}


exports.mountRoutes = mountRoutes;