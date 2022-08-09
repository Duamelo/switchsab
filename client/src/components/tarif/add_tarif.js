var m = require('mithril');

const add_tarif = {
    view(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("div", {
                    "class": "mb-3"
                },[
                    m("label", 
                      "Label"
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
                      "Tarif "
                    ), 
                    m("br"), 
                    m("input", {
                        "class":"form-control",
                        "type":"text",
                        "placeholder": "1000",
                        oninput: function(e) {
                        },
                        value: 0
                      }
                    ),
                  ]),
                  m("div", {
                    "class": "mb-3"
                  },[
                    m("label", 
                      "Minutes équivalentes "
                    ), 
                    m("br"), 
                    m("input", {
                        "class":"form-control",
                        "type":"text",
                        "placeholder": "20",
                        oninput: function(e) {
                        },
                        value: 0
                      }
                    ),
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
                                "class":"btn btn_color float-start",
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
module.exports = add_tarif;