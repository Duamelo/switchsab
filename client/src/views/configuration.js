var m = require('mithril');
const tabs_configuration = require('../components/tabs/tabs_configuration');


module.exports = {
    view: function(vnode){
        return [
            m("div", {
                "class": "container-fluid"
            }, 
            [
                m("h6", {
                    "class": ""
                },
                    "Configuration"
                ),
                m(tabs_configuration),
                vnode.children 
            ])
        ]
    }
}