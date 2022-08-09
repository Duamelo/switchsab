var m = require('mithril');

t_menu_bar = {
    _state: "",

    set state(value){
        this._state = value;
    },

    get state(){
        return this._state;
    }
}

const menu_dashboard = {
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
                                            "src": "./assets/list_display2.png",
                                            onclick: function(e){
                                                t_menu_bar.state = !t_menu_bar.state;
                                            }
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

module.exports = {t_menu_bar, menu_dashboard};