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
                            m("button", {"class":"nav-link active","id":"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home","type":"button","role":"tab","aria-controls":"pills-home","aria-selected":"true"}, 
                            "Gestion des groupes"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "Tarifs"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "Postes"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "Administration"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "tete"
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