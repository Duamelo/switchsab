var m = require('mithril');

module.exports = {
    view: function(vnode){
        return [
           m("div", {
               "class": "container",
           }, [
               m("div", {
                   "class": "row"
               }, [
                    m("ul", {"class":"nav nav-pills mb-3 ","id":"pills-tab","role":"tablist"},
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
                                onclick : function(e){

                                }
                            }, 
                            "Tous les postes"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link text-dark","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "Alpha"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link text-dark","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "Beta"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link text-dark","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "Omega"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link text-dark","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "tete"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link text-dark","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "dzêta"
                            )
                        ),
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {"class":"nav-link text-dark","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                            "lambda"
                            )
                        )
                    ]
                )
               ])
           ])
        ]
    }
}