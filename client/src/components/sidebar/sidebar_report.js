var m = require('mithril');

module.exports = {
    view: function(vnode){
        return m("div", {
            "class": "container",
        }, [
            m("div", {"class":"row mt-3"},
            [
                m("p", {
                    "class": ""
                }, "Trié par"),
                m("hr", {
                    "class": "mt-3"
                }),
                m("span", {
                    "class": "mb-3",
                }, "Fréquence"),
                m("div", {"class":"col"}, 
                m("div", {"class":"form-check"},
                    [
                    m("input", {"class":"form-check-input","type":"checkbox","value":"","id":"flexCheckDefault"}),
                    m("label", {"class":"form-check-label","for":"flexCheckDefault"}, 
                        "Journalier"
                    )
                    ]
                 )
                ),
                m("div", {"class":"col"}, 
                m("div", {"class":"form-check"},
                    [
                    m("input", {"class":"form-check-input","type":"checkbox","value":"","id":"flexCheckDefault"}),
                    m("label", {"class":"form-check-label","for":"flexCheckDefault"}, 
                        "Périodique"
                    )
                    ]
                )
                ),
                m("span", {
                    "class": "mt-3 mb-3",
                }, "Classement"),

                m("div", {"class":"col"}, 
                m("div", {"class":"form-check"},
                    [
                    m("input", {"class":"form-check-input","type":"checkbox","value":"","id":"flexCheckDefault"}),
                    m("label", {"class":"form-check-label","for":"flexCheckDefault"}, 
                        "Tout"
                    )
                    ]
                 )
                ),
                m("br"),
                m("br"),
                m("div", {"class":"col"}, 
                m("div", {"class":"form-check"},
                    [
                    m("input", {"class":"form-check-input","type":"checkbox","value":"","id":"flexCheckDefault"}),
                    m("label", {"class":"form-check-label","for":"flexCheckDefault"}, 
                        "Client"
                    )
                    ]
                )
                ),

              m("div", {
                "class": "row"
              }, [
                m("div", {"class":"col"}, 
                m("div", {"class":"form-check"},
                    [
                    m("input", {"class":"form-check-input","type":"checkbox","value":"","id":"flexCheckDefault"}),
                    m("label", {"class":"form-check-label","for":"flexCheckDefault"}, 
                        "Utilisateur"
                    )
                    ]
                 )
                ),
                m("div", {"class":"col"}, 
                m("div", {"class":"form-check"},
                    [
                    m("input", {"class":"form-check-input","type":"checkbox","value":"","id":"flexCheckDefault"}),
                    m("label", {"class":"form-check-label","for":"flexCheckDefault"}, 
                        "Catégorie"
                    )
                    ]
                )
                ),
              ]),
                m("hr"),
                m("span", {
                    "class": "mb-3",
                }, "Période"),
                m("div", {
                    "class": "row"
                }, [
                    m("div", {
                        "class": "col-9"
                    }, [
                        m('label', 'Date de début'),
                        m("input.form-control[type='date'][placeholder='Debut']", {
                            oninput(e) {
                            }
                        })
                    ])
                ]),
                m("div", {
                    "class": "row mt-3 mb-3"
                }, [
                    m("div", {
                        "class": "col-9"
                    }, [
                        m('label', 'Date de fin'),
                        m("input.form-control[type='date'][placeholder='Debut']", {
                            oninput(e) {
                            }
                        })
                    ])
                ]),
                m("hr"),
            ]
         )
        ])
    }
}