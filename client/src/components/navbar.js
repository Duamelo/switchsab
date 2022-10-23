var m = require('mithril');
import jwt_decode from "jwt-decode";



module.exports = {
    oninit(vnode){
        jeton = jwt_decode(window.localStorage['jwt']);
        user_type = jeton.type;
        console.log(jeton);
    },
    view: function(vnode){
        return [
            m("nav", {"class":"navbar navbar-expand-lg"}, 
                m("div", {"class":"container-fluid"},
                    [
                    m("a", {"class":"navbar-brand","href":"#"},[
                        m("img",{
                            "class": "switchsab_logo",
                            "src": "./assets/logo.jpeg"
                        }),
                        m("span", {
                            "class": "switch"
                        }, 
                        "SWITCH "
                        ),
                        m("span", {
                            "class": "sab"
                        }, 
                        "SAB"
                        ),
                    ]
                    ),
                    m("button", {"class":"navbar-toggler","type":"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}, 
                        m("span", {"class":"navbar-toggler-icon"})
                    ),
                    m("div", {"class":"collapse navbar-collapse","id":"navbarSupportedContent"},
                        [
                        m("ul", {"class":"navbar-nav me-auto mb-2 mb-lg-0"},
                            [
                            m("li", {"class":"nav-item  navbar_li"}, 
                                m(m.route.Link, {
                                    "class":"nav-link active",
                                    "aria-current":"page",
                                    "href":"/dashboard"}, 
                                    "Dashboard"
                                )
                            ),
                            user_type == 'admin' || user_type == "promoteur" || user_type  == 'gerant' ?
                                m("li", {"class":"nav-item  navbar_li"}, 
                                    m(m.route.Link, {
                                        "class":"nav-link active",
                                        "href":"/gestion_client"
                                    }, 
                                    "Gestion Client"
                                    )
                                ) : "",
                        user_type == 'admin' || user_type == "promoteur" || user_type  == 'gerant' ?
                                m("li", {"class":"nav-item  navbar_li"}, 
                                    m(m.route.Link, {
                                        "class":"nav-link active",
                                        "href":"/configuration"
                                    }, 
                                    "Configuration"
                                    )
                                )
                                 : "",
                                user_type != "client" ? 
                                    m("li", {"class":"nav-item  navbar_li"}, 
                                       jeton.access_report == true ?
                                        m(m.route.Link, {
                                            "class":"nav-link active",
                                            "href":"/report"
                                        }, 
                                        "Rapport"
                                        ) : ""
                                ) : "",
                            ]
                        ),
                        m("div", {"class":"d-flex"},
                            [
                                m("span.pseudo", {
                                    "class":"",
                                    onclick(e) {
                                        window.localStorage.removeItem('jwt')
                                        // m.mount(document.body, login)
                                        window.location.reload()
                                    }
                                },
                                    jeton.pseudo
                                ),
                                m("i", {
                                    "class":"bi bi-question-circle help"
                                }),
                                m("div", {
                                    "class":"rounded-circle border border-success profil",
                                    },[
                                        m("img", {
                                            "src": "./assets/profil2.png",
                                            "class": "profil_img",
                                            onclick(e) {
                                                m.route.set('/compte')
                                            }
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