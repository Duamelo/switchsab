var m = require("mithril");

const item_list = {
    view(vnode){
        return [
            m("div", {
                "class": "container"
            },[
                m("div", {
                    "class": "row alert alert-primary text-dark","role":"alert"
                }, [
                    m("div", {
                        "class": "col-2"
                    },
                     "Poste 1"
                    ),
                    m("div", {
                        "class": "col-3"
                    },[
                        m("span",{
                            "class": ""
                        } ,
                        "État "
                        ),
                        m("span", {
                            "class": "",
                        }, "Hors de service")
                    ]
                    ),
                    m("div", {
                        "class": "col-2"
                    },[
                        m("img",{
                            "class": "icon_dash_profil",
                            "src": "./assets/profil2.png"
                        }),
                        m("span", {
                            "class": "",
                        }, "John Doe")
                    ]
                    ),
                    m("div", {
                        "class": "col-2"
                    },[
                        m("img",{
                            "class": "icon_dash_clock",
                            "src": "./assets/clock.png"
                        }),
                        m("span", {
                            "class": "",
                        }, " HH:MM:SS")
                    ]
                    ),
                    m("div", {
                        "class": "col-3"
                    },[
                        m("span", {"class":"form-check form-switch"}, 
                             m("input", {
                                 "class":"form-check-input",
                                 "type":"checkbox",
                                 "role":"switch",
                                 "id":"flexSwitchCheckDefault"
                            })
                        )
                    ]),
                ])
            ])
        ]
    }
}

module.exports = {
    view: function(vnode){
        return [
            m(item_list),
            m(item_list),
            m(item_list),
            m(item_list),
            m(item_list),
            m(item_list),
            m(item_list)
        ]
    }
}