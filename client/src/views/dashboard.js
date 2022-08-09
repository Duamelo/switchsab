var m = require('mithril');
const list_postes = require('../components/list_postes');
const { t_menu_bar } = require('../components/menus/menu_dashboard');
const table_postes = require('../components/postes');
const tabs_dashboard_group = require('../components/tabs/tabs_dashboard_group');


module.exports = {
    view: function(vnode){
        return [
            m("div", {
                "class": "container-fluid"
            }, 
            [
                m("h6", {
                    "class": "text-dark"
                },
                    "Mon tableau de bord"
                ),
                m(tabs_dashboard_group),
                 !t_menu_bar.state ? m(table_postes) : m(list_postes)
            ])
        ]
    }
}