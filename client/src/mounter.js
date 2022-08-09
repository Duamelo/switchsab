var m = require("mithril");
var layout = require("./views/layout");
const sidebar_dashboard = require("./components/sidebar/sidebar_dashboard");
const dashboard = require("./views/dashboard");
const sidebar_client_mng = require("./components/sidebar/sidebar_client_mng");
const client_mng = require("./views/client_mng");
const sidebar_configuration = require("./components/sidebar/sidebar_configuration");
const configuration = require("./views/configuration");
const add_tarif = require("./components/tarif/add_tarif");
const sidebar_tarif = require("./components/sidebar/sidebar_tarif");
const group_mng = require("./components/configuration/group_mng");
const tarif = require("./views/tarif");
const sidebar_poste = require("./components/sidebar/sidebar_poste");
const poste = require("./views/poste");
const c_xbox = require("./components/posts/c_xbox");
const sidebar_admin = require("./components/sidebar/sidebar_admin");
const admin = require("./views/admin");


function mountRoutes() {
    document.body.className = "";
        m.route(document.body, "/dashboard", {
            "/dashboard": {
                render: function() {
                    return m(layout, m(sidebar_dashboard), m(dashboard));
                }
            },
            "/gestion_client": {
                render: function(){
                    return m(layout, m(sidebar_client_mng), m(client_mng))
                }
            },
            "/configuration": {
                render: function(){
                    return m(layout, m(sidebar_configuration), m(configuration, m(group_mng)))
                }
            },
            "/groupes": {
                render: function(){
                    return m(layout, m(sidebar_configuration), m(configuration, m(group_mng)))
                }
            },
            "/tarifs": {
                render: function(){
                    return m(layout, m(sidebar_tarif), m(configuration, m(tarif)))
                }
            },
            "/postes": {
                render: function(){
                    return m(layout, m(sidebar_poste), m(configuration, m(poste, m(c_xbox))))
                }
            },
            "/administration": {
                render: function(){
                    return m(layout, m(sidebar_admin), m(configuration, m(admin)))
                }
            }
        });
}
exports.mountRoutes = mountRoutes;