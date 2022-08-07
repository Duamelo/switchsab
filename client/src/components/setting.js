var m = require('mithril');

module.exports = {
    view: function(vnode){
        return [
            m("div", {"class":"btn-group"},
            [
                m("h6", {
                    "class": "",
                }, "Paramètres Généraux"),
                m('hr'),
                m("h6", {
                    "class": "",
                }, "Autoriasation au rapport"),
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
                    ),
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
                        "Enregistrer"
                    ),
                  ]),
            ]
            )
        ]
    }
}