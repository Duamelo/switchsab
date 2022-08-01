var m = require("mithril");
var layout = require("./views/layout");

function mountRoutes() {
    document.body.className = "";
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout);
                }
            },
        });
}


exports.mountRoutes = mountRoutes;