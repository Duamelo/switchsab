var m = require('mithril');
const server = require('../../config/server');
const group = require('../../models/group');
const { group_list } = require('../../views/tarif');

const add_tarif = {
  label: "",

  montant: 0,
  
  duree: 0,

  groupeId: 0,

  save(){
    m.request({
      method: "POST",
      url: server.url + "/tarifs",
      body: {
          label: add_tarif.label,
          montant: add_tarif.montant,
          duree: add_tarif.duree,
          groupeId: add_tarif.groupeId
      }
    })
    .then((response) => {
        if (response != undefined) {
          console.log(response);
          group_list.tarifs_group.push(response);
        }
    }, (error) => {
        if (error.code == 400)
          console.log(error);
    })
  },

  oninit(){
    group.load_group();
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
                    "Label"
                  ), 
                  m("br"), 
                  m("input", {
                      "class":"form-control",
                      "type":"text",
                      "placeholder": "libellé tarif",
                      oninput: function(e) {
                        add_tarif.label = e.target.value;
                      },
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
                        add_tarif.montant = e.target.value;
                      },
                    }
                  ),
                ]),
                m("div", {
                  "class": "mb-3"
              },[
                  m("label", 
                    "Groupe"
                  ), 
                  m("br"), 
                  m("select", {
                    "class":"form-select",
                    "aria-label":"Default select example",
                    onclick: function(e){
                      add_tarif.groupeId = group.list[e.target.value]['id'];
                    }
                  },
                    [
                      group.list.map((gp, index)=>{
                        if(gp.categorie.nom != "manette")
                          return m("option", {"value": index}, gp.nom )
                      }),
                    ]
                  )
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
                        add_tarif.duree = e.target.value;
                      },
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
                              "type":"button",
                              onclick: add_tarif.save
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