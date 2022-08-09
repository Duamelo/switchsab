var m = require('mithril');


const t_sidebar_admin = {
    _state: true,
  
    get state(){
      return this._state;
    },
  
    set state(value){
      this._state = value;
    }
  }

const add_admin = {
    view(vnode){
        return [
            m("div", {
                "class": "mb-3"
            },[
                m("label", 
                  "Type administrateur "
                ), 
                m("br"), 
                m("select", {"class":"form-select","aria-label":"Default select example"},
                  [
                    m("option", {"selected":"selected"}, 
                      "Administrateur général"
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
                  "Nom et Prénom"
                ), 
                m("br"), 
                m("input", {
                    "class":"form-control",
                    "type":"text",
                    "placeholder": "John Doe",
                    oninput: function(e) {
                    },
                    value: 'John Doe'
                  }),
                ]
            ),
            m("div", {
                "class": "mb-3"
              },[
                m("label", 
                  "Identifiant"
                ), 
                m("br"), 
                m("input", {
                    "class":"form-control",
                    "type":"text",
                    "placeholder": "@boss_johnny",
                    oninput: function(e) {
                    },
                    value: 0
                  }),
            ]),
            m("div", {"class":"mb-3"},
              [
                m("label", {"class":"form-label"}, 
                  "Mot de passe"
                ),
                m("input", {
                  "class":"form-control",
                  "type":"password",
                  "placeholder": "***********",
                  oninput: function(e) {
                  },
                  value: ""
                })
              ]
            ),
            m("div", {"class":"mb-3"},
            [
              m("label", {"class":"form-label"}, 
                "Retaper mot de passe"
              ),
              m("input", {
                "class":"form-control",
                "type":"password",
                "placeholder": "***********",
                oninput: function(e) {
                },
                value: ""
              })
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
                            "class":"btn float-start btn_color",
                            "type":"button"
                        }, 
                            "Ajouter"
                        )
                    )
                ]
            )
        ]
    }
}

module.exports = {
    view: function(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3 sidebar_admin","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("button", {
                    "class":"nav-link active rounded-pill mb-3 btn_color",
                    "id":"v-pills-home-tab",
                    "data-bs-toggle":"pill",
                    "data-bs-target":"#v-pills-home",
                    "type":"button",
                    "role":"tab",
                    "aria-controls":"v-pills-home",
                    "aria-selected":"true",
                    onclick: function(e){
                        t_sidebar_admin.state = !t_sidebar_admin.state;
                    }
                }, 
                    "Nouveau admin"
                ),
                t_sidebar_admin.state ? m(add_admin) : m("p")
              ]
            )
          )
        ]
    }
}