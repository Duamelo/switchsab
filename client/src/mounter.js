var m = require("mithril");
var layout = require("./views/layout");
const sidebar_dashboard = require("./components/sidebar/sidebar_dashboard");
const dashboard = require("./views/dashboard");


function mountRoutes() {
    document.body.className = "";
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout, m(sidebar_dashboard), m(dashboard));
                }
            }
        });
}
exports.mountRoutes = mountRoutes;