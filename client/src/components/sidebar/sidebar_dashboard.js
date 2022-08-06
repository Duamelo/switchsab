var m = require('mithril');

module.exports = {
    view: function(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("button", {
                    "class":"nav-link active rounded-pill mb-3",
                    "id":"v-pills-home-tab",
                    "data-bs-toggle":"pill",
                    "data-bs-target":"#v-pills-home",
                    "type":"button",
                    "role":"tab",
                    "aria-controls":"v-pills-home",
                    "aria-selected":"true"
                }, 
                    "Acheter du crédit"
                ),
                m("div", {
                    "class": "mb-3"
                },[
                    m("label", 
                      " Choisir le client "
                    ), 
                    m("br"), 
                    m("select", {"class":"form-select","aria-label":"Default select example"},
                      [
                        m("option", {"selected":"selected"}, 
                          "John Doe"
                        ),
                        m("option", {"value":"1"}, 
                          "John Doe"
                        ),
                        m("option", {"value":"2"}, 
                          "John Doe"
                        ),
                        m("option", {"value":"3"}, 
                          "John Doe"
                        )
                      ]
                    )
                  ]),
                  m("div", {
                    "class": "mb-3"
                  },[
                    m("label", 
                      "Console de jeu "
                    ), 
                    m("br"), 
                    m("select", {"class":"form-select","aria-label":"Default select example"},
                      [
                        m("option", {"selected":"selected"}, 
                          "PS2"
                        ),
                        m("option", {"value":"1"}, 
                          "John Doe"
                        ),
                        m("option", {"value":"2"}, 
                          "John Doe"
                        ),
                        m("option", {"value":"3"}, 
                          "John Doe"
                        )
                      ]
                    )
                  ]),
                  m("div", {
                      "class": "mb-3"
                  },[
                    m("label", 
                      "Durée de jeu"
                    ), 
                    m("br"), 
                    m("select", {"class":"form-select","aria-label":"Default select example"},
                      [
                        m("option", {"selected":"selected"}, 
                          "PS2"
                        ),
                        m("option", {"value":"1"}, 
                          "John Doe"
                        ),
                        m("option", {"value":"2"}, 
                          "John Doe"
                        ),
                        m("option", {"value":"3"}, 
                          "John Doe"
                        )
                      ]
                    )
                  ]),

                  m("div", {"class":"row"},
                    [
                        m("div", {"class":"col"},
                        [
                            m("label", 
                            "Minutes "
                            ),
                            m("input", {"class":"form-control","type":"text","placeholder":"60"})
                        ]
                        ),
                        m("div", {"class":"col"},
                        [
                            m("label", 
                            "Montant"
                            ),
                            m("input", {"class":"form-control","type":"text","placeholder":"prix"})
                        ]
                        )
                    ]
                  ),
                  m("div", {"class":"row mt-3"},
                    [
                        m("div", {"class":"col"}, 
                            m("button", {
                                "class":"btn btn-outline-primary float-end",
                                "type":"button"
                            }, 
                                "Annuler"
                            )
                        ),
                        m("div", {"class":"col"}, 
                            m("button", {
                                "class":"btn btn-primary float-start",
                                "type":"button"
                            }, 
                                "Ajouter"
                            )
                        )
                    ]
                 )
              ]
            )
          )
        ]
    }
}