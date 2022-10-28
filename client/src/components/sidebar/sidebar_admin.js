var m = require('mithril');
const server = require('../../config/server');
const client = require('../../models/client');


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
    type_admin : ['gerant', 'promoteur'],

    type: "",

    nom: "",
    prenom: "",

    identifiant: "",

    mot_de_passe: "",

    confirmation_mot_de_passe: "",

    save(e){
      e.preventDefault();
      m.request({
        method: "POST",
        url: server.url + "/auth/register",
        body: {
          pseudo: add_admin.identifiant,
          password : add_admin.mot_de_passe,
          type: add_admin.type,
        }
      })
      .then((response) => {
          if (response != undefined) {
              console.log(response);
              client.list.push(response);
          }
      }, (error) => {
          if (error.code == 400)
              credential.error = "Erreur d'enregistrement"
      })
    },

    view(vnode){
        return [
            m("div", {
                "class": "mb-3"
            },[
                m("label", 
                  "Type administrateur "
                ), 
                m("br"), 
                m("select", {
                  "class":"form-select",
                  "aria-label":"Default select example",
                  onclick: function(e){
                    add_admin.type = e.target.value;
                    console.log(add_admin.type);
                  }
                },
                  [
                   add_admin.type_admin.map((ad, index)=>{
                    return m("option", {
                      "value":ad
                    }, 
                      ad
                    )
                   })
                  ]
                )
            ]),
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
                      add_admin.identifiant = e.target.value;
                      console.log(add_admin.identifiant);
                    },
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
                    add_admin.password = e.target.value;
                    console.log(add_admin.password);
                  },
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
                  add_admin.confirmation_mot_de_passe = e.target.value;
                  console.log(e.target.value);
                },
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
                            "type":"button",
                            onclick: add_admin.save
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