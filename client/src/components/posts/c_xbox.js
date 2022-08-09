var m = require('mithril');

module.exports = {
    view: function(vnode){
        return m("div", {
            "class": "container"
        }, [
            m("div", {
                "class": "row"
            }, [
                m("div", {
                    "class": "col-2"
                }, [
                    m("div", {"class":"d-flex align-items-start"}, 
                    m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
                      [
                        m("button", {
                            "class":"nav-link active rounded c_group_button mb-3",
                            "id":"v-pills-home-tab",
                            "data-bs-toggle":"pill",
                            "data-bs-target":"#v-pills-home",
                            "type":"button",
                            "role":"tab",
                            "aria-controls":"v-pills-home",
                            "aria-selected":"true",
                            onclick: function(e){
                                m.route.set('/')
                            }
                        }, 
                            "Bêta"
                        ),
                        m("button", {
                            "class":"nav-link active rounded c_group_button mb-3",
                            "id":"v-pills-home-tab",
                            "data-bs-toggle":"pill",
                            "data-bs-target":"#v-pills-home",
                            "type":"button",
                            "role":"tab",
                            "aria-controls":"v-pills-home",
                            "aria-selected":"true",
                            onclick: function(e){
                                m.route.set('/')
                            }
                        }, 
                            "Alpha"
                        ),
                        m("button", {
                            "class":"nav-link active rounded c_group_button mb-3",
                            "id":"v-pills-home-tab",
                            "data-bs-toggle":"pill",
                            "data-bs-target":"#v-pills-home",
                            "type":"button",
                            "role":"tab",
                            "aria-controls":"v-pills-home",
                            "aria-selected":"true",
                            onclick: function(e){
                                m.route.set('/')
                            }
                        }, 
                            "Gamma"
                        )
                      ]
                    )
                  )
                ]),
                m("div", {
                    "class": "col-4"
                }, [
                    m("table", {"class":"table table-borderless"},
                    [
                        m("thead.table-primary", 
                        m("tr", 
                            m("th", {"scope":"col"}, 
                            "Postes attribués"
                            )
                        )
                        ),
                        m("tbody",
                        [
                            m("tr", 
                            m("td", 
                                "Poste PS"
                            )
                            ),
                            m("tr", 
                            m("td", 
                                "Poste PS"
                            )
                            ),
                            m("tr", 
                            m("td", 
                                "Poste PS"
                            )
                            )
                        ]
                        )
                    ]
                    )
                ]),
                // m("hr", {"class": "col-2 hr_delimiter_poste"}),
                m("div", {
                    "class": "col-4"
                }, [
                    m("table", {"class":"table table-borderless"},
                    [
                        m("thead.table-primary", 
                        m("tr", 
                            m("th", {"scope":"col"}, 
                            "Postes disponibles"
                            )
                        )
                        ),
                        m("tbody",
                        [
                            m("tr", 
                            m("td", 
                                "Poste B"
                            )
                            ),
                            m("tr", 
                            m("td", 
                                "Poste B"
                            )
                            ),
                            m("tr", 
                            m("td", 
                                "Poste B"
                            )
                            )
                        ]
                        )
                    ]
                    )
                ])
            ])
        ])
    }
}