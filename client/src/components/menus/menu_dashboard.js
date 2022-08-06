var m = require('mithril');

module.exports = {
    view: function(vnode){
        return [
               m("div", {
                   "class": "container"
               }, [
                    m("div", {"class":"d-flex justify-content-end"}, 
                        m("ul", {"class":"nav nav-pills mb-3","id":"pills-tab","role":"tablist"},
                            [
                                m("li", {"class":"nav-item"},[
                                   m("a", {
                                       "class": "",
                                       "href": "#"
                                   },[
                                        m("img", {
                                            "class": "nav_icon",
                                            "src": "./assets/list_display2.png"
                                        }),
                                   ]),
                                    m("span", {"class":" me-3"}, 
                                        "Affichage"
                                    )
                                ]
                                ),
                                m("li", {"class":"nav-item"},
                                    m("a", {
                                        "class": "",
                                        "href": "#"
                                    },[
                                        m("img", {
                                            "class": "nav_icon",
                                            "src": "./assets/monitor2.png"
                                        }),
                                    ]),
                                    m("span", {"class": "me-3"}, 
                                        "Categories"
                                    )
                                ),
                                m("li", {"class":"nav-item"}, 
                                    m("img", {
                                        "class": "nav_icon me-3",
                                        "src": "./assets/xbox.png"
                                    })
                                ),
                                m("li", {"class":"nav-item"}, 
                                    m("img", {
                                        "class": "nav_icon me-3",
                                        "src": "./assets/ps4.png"
                                    })
                                ),
                                m("li", {"class":"nav-item"}, 
                                    m("img", {
                                        "class": "nav_icon me-3",
                                        "src": "./assets/manette.png"
                                    })
                                )
                            ]
                        )
                    )
               ])
        ]
    }
}