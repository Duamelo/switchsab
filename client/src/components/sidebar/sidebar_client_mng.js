var m = require('mithril');
const server = require('../../config/server');
const categories = require('../../models/category');
const client = require('../../models/client');
const group = require('../../models/group');
const tarif = require('../../models/tarif');
const { oninit } = require('../modal/modal');


const t_side_sell = {
    _state: false,

    get state(){
        return this._state;
    },

    set state(value){
        this._state = value;
    },
}

const t_side_client = {
    _state: false,

    get state(){
        return this._state;
    },

    set state(value){
        this._state = value;
    },
}

const add_client = {
    error: "",
    error_reg: "",
    errorDisplay() {
        return add_client.error != "" ? "" : "none";
    },
    error_register(){
        return add_client.error_reg != "" ? "" : "none";
    },
    _pseudo: '',
    _password: '',
    _confirm_password: '',

    get pseudo(){
      return this._pseudo;
    },
    set pseudo(value){
      this._pseudo = value;
    },

    get password(){
      return this._password;
    },
    set password(value){
      this._password = value;
    },

    get confirm_password(){
      return this._confirm_password;
    },
    set confirm_password(value){
      this._confirm_password = value;
    },

    submit(e){
      e.preventDefault();
      if(add_client.password == add_client.confirm_password){
        console.log("mot de passe match");
        m.request({
          method: "POST",
          url: server.url + "/auth/register",
          body: {
            pseudo: add_client.pseudo,
            password: add_client.password,
            type: "client"
          }
        }).then((response) => {
          if (response != undefined) {
            add_client.error_reg = "utilisateur " + add_client.pseudo + " bien enregistré";
            console.log(response);
          }
        }, (error) => {
          if (error.code == 400)
            console.log(error);
        })
      }
      else{
        add_client.error = " votre mot de passe ne correspond pas !";
        setTimeout(() => {
          add_client.error = "";
          m.redraw();
        }, 5000);
      }
    },

    oninit(vnode){
      client.load_client();
    },
    view(vnode){
        return [
            m("div", {
                "class": "mb-3"
              },[
                m("label", 
                  "Nom d'utilisateur"
                ), 
                m("br"), 
                m("input", {
                    "class":"form-control",
                    "type":"text",
                    "placeholder": "John Doe",
                    oninput: function(e) {
                        client.list.map((cl, index)=>{
                            if(cl.pseudo == e.target.value)
                              add_client.error = "ce pseudo est pris";
                        })
                        setTimeout(()=>{
                            add_client.error = "";
                            m.redraw();
                        }, 5000);
                        add_client.pseudo = e.target.value;
                        console.log(add_client.pseudo);
                    },
                  }),
                  m(".alert.alert-danger[role='alert']", {
                    "style": {
                        "display": add_client.errorDisplay(),
                    }
                  }, add_client.error),
                ]
            ),
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
                      add_client.password = e.target.value;
                      // console.log(add_client.password);
                  },
                })
              ]
            ),
            m("div", {"class":"mb-3"},
            [
              m("label", {"class":"form-label"}, 
                "Valider mot de passe"
              ),
              m("input", {
                "class":"form-control",
                "type":"password",
                "placeholder": "***********",
                oninput: function(e) {
                    add_client.confirm_password = e.target.value;
                    // console.log(add_client.confirm_password);
                },
              })
            ]
            ),
            m("div", {"class":"row mt-3"},
                [
                    m(".alert.alert-danger[role='alert']#check_register", {
                        "style": {
                            "display": add_client.error_register(),
                        }
                    }, 
                      add_client.error_reg
                    ),
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
                            onclick: add_client.submit
                        }, 
                            "Ajouter"
                        )
                    )
                ]
            )
        ]
    }
}

const sell_credit = {
    _client: undefined,
    _categorie: undefined,
    _group: undefined,
    _tarif: undefined,
    _index_tarif: undefined,

    get client(){
      return this._client;
    },

    set client(value){
      this._client = value;
    },

    get categorie(){
      return this._categorie;
    },

    set categorie(value){
      this._categorie = value;
    },

    get group(){
      return this._group;
    },

    set group(value){
      this._group = value;
    },

    get tarif(){
      return this._tarif;
    },

    set tarif(value){
      this._tarif = value;
    },

    get index_tarif(){
      return this._index_tarif;
    },

    set index_tarif(value){
      this._index_tarif = value;
    },


    submit(e){
      console.log(sell_credit.tarif);
      m.request({
          headers: {
              Authorization: "Bearer " + window.localStorage.jwt,
          },
          method: "POST",
          url: server.url + "/souscriptions",
          body: {
              "clientId": sell_credit.client,
              "tarifId": sell_credit.tarif,
          }
      })
      .then((result)=>{
          console.log(result);
      });
    },

    oninit(vnode){
      client.load_client();
      categories.load_categories();
      group.load_group();
      tarif.load_tarif();
    },
    view(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("div", {
                    "class": "mb-3"
                },[
                    m("label", 
                      " Choisir le client "
                    ), 
                    m("br"), 
                    m("select", {
                      "class":"form-select",
                      "aria-label":"Default select example",
                      onclick(e){
                        sell_credit.client = client.list[e.target.value]['id'];
                        // console.log(sell_credit.client);
                      }
                    },
                      [
                        client.list.map((cl, index)=>{
                          return m("option", {
                            "value":index
                          }, 
                            cl.pseudo
                          )
                        })
                      ]
                    )
                  ]),
                  m("div", {
                    "class": "mb-3"
                  },[
                    m("label", 
                      "Catégories"
                    ), 
                    m("br"), 
                    m("select", {
                      "class":"form-select",
                      "aria-label":"Default select example",
                      onclick(e){
                        sell_credit.categorie = categories.list[e.target.value]['id'];
                        // console.log(sell_credit.categorie);
                      }
                    },
                      [
                        categories.list.map((cat, index)=>{
                            return m("option", {
                              "value":index
                            }, 
                            cat.nom
                          )
                        })
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
                    m("select", {
                      "class":"form-select",
                      "aria-label":"Default select example",
                      onclick(e){
                          sell_credit.group = group.list[e.target.value]['id'];
                          // console.log(sell_credit.group);
                      }
                    },
                      [
                        group.list.map((gp, index)=>{
                          if(gp.categorie.id == sell_credit.categorie)
                            return m("option", {
                              "value":index
                            }, 
                              gp.nom
                            )
                        })
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
                    m("select", {
                      "class":"form-select",
                      "aria-label":"Default select example",
                      onclick(e){
                        sell_credit.tarif = tarif.list[e.target.value]['id'];
                        sell_credit.index_tarif = e.target.value;
                        // console.log(sell_credit.tarif);
                      }
                    },
                      [
                        tarif.list.map((tr, index)=>{
                          if(tr.groupe.id == sell_credit.group)
                            return m("option", {
                              "value":index
                            }, 
                              tr.label
                            )
                        })
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
                            m("input", {
                              "class":"form-control",
                              "type":"text",
                              "placeholder": sell_credit.tarif != undefined ? tarif.list[sell_credit.index_tarif]['duree'] : 0,
                              "disabled":"disabled",
                            })
                        ]
                        ),
                        m("div", {"class":"col"},
                        [
                            m("label", 
                            "Montant"
                            ),
                            m("input", {
                              "class":"form-control",
                              "type":"text",
                              "placeholder":sell_credit.tarif != undefined ? tarif.list[sell_credit.index_tarif]['montant'] : 0,
                              "disabled":"disabled",
                            })
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
                                "class":"btn btn_color float-start",
                                "type":"button",
                                onclick: sell_credit.submit
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

module.exports = {
    view: function(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3 sidebar_client","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
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
                        t_side_sell.state = !t_side_sell.state;
                    }
                }, 
                    "Vendre du crédit"
                ),
                t_side_sell.state ? m(sell_credit) : m("p"),
                m("button", {
                    "class":"nav-link active rounded-pill mb-3 mt-4",
                    "id":"v-pills-home-tab",
                    "data-bs-toggle":"pill",
                    "data-bs-target":"#v-pills-home",
                    "type":"button",
                    "role":"tab",
                    "aria-controls":"v-pills-home",
                    "aria-selected":"true",
                    onclick: function(e){
                        t_side_client.state = !t_side_client.state;
                    }
                }, 
                    "Nouveau client"
                ),
                t_side_client.state ? m(add_client) : m("p"),
              ]
            )
          )
        ]
    }
}