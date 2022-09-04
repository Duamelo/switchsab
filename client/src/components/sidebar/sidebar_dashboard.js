var m = require('mithril');
const client = require('../../models/client');
const group = require('../../models/group');
const tarif = require('../../models/tarif');

const t_sidebar_dash = {
  _state : false,

  _id_client: 0,

  _id_group: 1,

  _id_tarif: 0,

  _minute: 0,

  _price: 0,

  get state(){
    return this._state;
  },

  set state(value){
    this._state = value;
  },

  get id_client(){
     return this._id_client;
  },

  set id_client(value){
     this._id_client = value;
  },

  get id_group(){
     return this._id_group;
  },

  set id_group(value){
     this._id_group = value;
  },

  get id_tarif(){
     return this._id_tarif;
  },

  set id_tarif(value){
     this._id_tarif = value;
  },

  get minute(){
    return this._minute;
  },

  set minute(value){
    this._minute = value;
  },

  get price(){
    return this._price;
  },

  set price(value){
    this._price = value;
  }
}



const add_credit = {

  oninit(){
    client.load_client();
    group.load_group();
    tarif.load_tarif();
    tarif.load_tarif_by_group(t_sidebar_dash.id_group);
  },

  view(vnode){
    return [
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
          onclick: function(e){
            console.log(client.list[e.target.value]['id']);
            t_sidebar_dash.id_client = client.list[e.target.value]['id'];
          }
        },
          [
            client.list.map((cl, index)=>{
              return m("option", {
                "value": index,
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
          "Groupe de jeu "
        ), 
        m("br"), 
        m("select", {
          "class":"form-select",
          "aria-label":"Default select example",
          onclick: function(e){
            t_sidebar_dash.id_group = group.list[e.target.value]['id'];
            tarif.load_tarif_by_group(t_sidebar_dash.id_group);
          }
        },
          [
            group.list.map((gp, index)=>{
              return m("option", {
                "value": index,
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
          onclick: function(e){
            t_sidebar_dash.id_tarif = tarif.list_by_group[e.target.value]['montant'];
            t_sidebar_dash.minute = tarif.list_by_group[e.target.value]['duree'];
            t_sidebar_dash.price = tarif.list_by_group[e.target.value]['montant'];
          }
        },
          [
            tarif.list_by_group.map((t, index)=>{
              return m("option", {
                "value": index,
              },
               t.montant
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
                  "placeholder":"60",
                  "disabled":"disabled",
                  "value": t_sidebar_dash.minute
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
                  "placeholder":"prix",
                  "disabled":"disabled",
                  "value": t_sidebar_dash.price
                })
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