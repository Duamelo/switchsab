var m = require('mithril');
const setting = require('../setting');

module.exports = {
    view: function(vnode){
        return [
           m("div", {
               "class": "container",
           }, [
               m("div", {
                   "class": "row"
               }, [
                    m("ul", {"class":"nav nav-pills mb-3","id":"pills-tab","role":"tablist"},
                    [
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {
                                "class":"nav-link active text-dark",
                                "id":"pills-home-tab",
                                "data-bs-toggle":"pill",
                                "data-bs-target":"#pills-home",
                                "type":"button",
                                "role":"tab",
                                "aria-controls":"pills-home",
                                "aria-selected":"true",
                                onclick: function(e){
                                    m.route.set('/groupes')
                                }
                            }, 
                                "Gestion des groupes"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {
                                "class":"nav-link text-dark",
                                "id":"pills-profile-tab",
                                "data-bs-toggle":"pill",
                                "data-bs-target":"#pills-profile",
                                "type":"button",
                                "role":"tab",
                                "aria-controls":"pills-profile",
                                "aria-selected":"false",
                                onclick: function(e){
                                    m.route.set('/tarifs')
                                }
                            }, 
                                "Tarifs"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {
                                "class":"nav-link text-dark",
                                "id":"pills-profile-tab",
                                "data-bs-toggle":"pill",
                                "data-bs-target":"#pills-profile",
                                "type":"button",
                                "role":"tab",
                                "aria-controls":"pills-profile",
                                "aria-selected":"false",
                                onclick: function(e){
                                    m.route.set('/postes')
                                }
                            }, 
                                "Postes"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {
                                "class":"nav-link text-dark",
                                "id":"pills-profile-tab",
                                "data-bs-toggle":"pill",
                                "data-bs-target":"#pills-profile",
                                "type":"button",
                                "role":"tab",
                                "aria-controls":"pills-profile",
                                "aria-selected":"false",
                                onclick: function(e){
                                    m.route.set('/administration')
                                }
                            }, 
                                "Administration"
                            )
                        ),
                        // m(setting)
                    ]
                )
               ])
           ])
        ]
    }
}