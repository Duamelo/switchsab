var m = require('mithril');


module.exports = {
    view: function(vnode){
        return [
            m("nav", {"class":"navbar navbar-expand-lg"}, 
                m("div", {"class":"container-fluid"},
                    [
                    m("a", {"class":"navbar-brand","href":"#"}, 
                        "SWITCHSAB"
                    ),
                    m("button", {"class":"navbar-toggler","type":"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}, 
                        m("span", {"class":"navbar-toggler-icon"})
                    ),
                    m("div", {"class":"collapse navbar-collapse","id":"navbarSupportedContent"},
                        [
                        m("ul", {"class":"navbar-nav me-auto mb-2 mb-lg-0"},
                            [
                            m("li", {"class":"nav-item  navbar_li"}, 
                                m("a", {"class":"nav-link active","aria-current":"page","href":"#"}, 
                                "Dashboard"
                                )
                            ),
                            m("li", {"class":"nav-item  navbar_li"}, 
                                m("a", {"class":"nav-link active","href":"#"}, 
                                "Gestion Client"
                                )
                            ),
                            m("li", {"class":"nav-item  navbar_li"}, 
                                m("a", {"class":"nav-link active","href":"#"}, 
                                "Configuration"
                                )
                            ),
                            ]
                        ),
                        m("div", {"class":"d-flex"},
                            [
                                m("i", {
                                    "class":"bi bi-question-circle help"
                                }),
                                m("div", {
                                    "class":"rounded-circle border border-success profil",
                                    },[
                                        m("img", {
                                            "src": "./assets/profil2.png",
                                            "class": "profil_img"
                                        })
                                    ]
                                )
                            ]
                        )
                        ]
                    )
                    ]
                )
            )
        ]
    }
}