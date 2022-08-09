var m = require('mithril');

const add_group = {
    view(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("div", {
                    "class": "mb-3"
                },[
                    m("label", 
                      "Nom du Groupe"
                    ), 
                    m("br"), 
                    m("input", {
                        "class":"form-control",
                        "type":"text",
                        "placeholder": "PS2",
                        oninput: function(e) {
                        },
                        value: 0
                      }),
                  ]),
                  m("div", {
                    "class": "mb-3"
                  },[
                    m("label", 
                      "Catégorie "
                    ), 
                    m("br"), 
                    m("select", {"class":"form-select","aria-label":"Default select example"},
                      [
                        m("option", {"selected":"selected"}, 
                          "PS"
                        ),
                        m("option", {"value":"1"}, 
                          "XBOX"
                        ),
                        m("option", {"value":"2"}, 
                          "MANETTE"
                        )
                      ]
                    )
                  ]),
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
                                "class":"btn float-start btn_color",
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
module.exports = add_group;