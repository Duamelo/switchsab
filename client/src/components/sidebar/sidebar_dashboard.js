var m = require('mithril');

const t_sidebar_dash = {
  _state : false,


  get state(){
    return this._state;
  },

  set state(value){
    this._state = value;
  }
}

const add_credit = {
  view(vnode){
    return [
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
          "Groupe de jeu "
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
          "Groupe de jeu "
        ), 
        m("br"), 
        m("select", {"class":"form-select","aria-label":"Default select example"},
          [
            m("option", {"selected":"selected"}, 
              "bêta"
            ),
            m("option", {"value":"1"}, 
              "alpha"
            ),
            m("option", {"value":"2"}, 
              "bêta"
            )
          ]
        )
      ]),
      m("div", {
          "class": "mb-3"
      },[
        m("label", 
          "Tarifs"
        ), 
        m("br"), 
        m("select", {"class":"form-select","aria-label":"Default select example"},
          [
            m("option", {"selected":"selected"}, 
              "500"
            ),
            m("option", {"value":"1"}, 
              "1000"
            ),
            m("option", {"value":"2"}, 
              "1500"
            ),
            m("option", {"value":"3"}, 
              "2000"
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
                    "class":"btn btn-outline-primary float-end ",
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
          m("div", {"class":"d-flex align-items-start text-dark"}, 
          m("div", {"class":"nav flex-column nav-pills me-3 t_sidebar_dash","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
            [
              m("button", {
                  "class":"nav-link active rounded-pill mb-3 ",
                  "id":"v-pills-home-tab",
                  "data-bs-toggle":"pill",
                  "data-bs-target":"#v-pills-home",
                  "type":"button",
                  "role":"tab",
                  "aria-controls":"v-pills-home",
                  "aria-selected":"true",
                  onclick: function(e){
                    t_sidebar_dash.state = !t_sidebar_dash.state;
                  }
              }, 
                  "Acheter du crédit"
              ),

              t_sidebar_dash.state ? m(add_credit) : m("p")
            ]
          )
        )
        ]
    }
}