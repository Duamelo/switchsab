var m = require('mithril');
const server = require('../../config/server');
const group = require('../../models/group');
const tarif = require('../../models/tarif');
const { group_list } = require('../../views/tarif');

const update_tarif = {
  label: "",

  tarif_id: '',

  montant: 0,
  
  duree: 0,

  groupeId: 0,

  save(){
    group_list.tarifs_group.map((v, index)=>{
        console.log(v);
        if(v.label == update_tarif.label){
            group_list.tarifs_group[index] = {label: update_tarif.label, groupe: {}, montant: update_tarif.montant, duree: update_tarif.duree};
        }
    });
    m.request({
      method: "PUT",
      url: server.url + "/tarifs/" + update_tarif.tarif_id,
      body: {
          label: update_tarif.label,
          montant: update_tarif.montant,
          duree: update_tarif.duree,
          groupeId: update_tarif.groupeId
      }
    })
    .then((response) => {
        if (response != undefined) {
          console.log(response);
        }
    }, (error) => {
        if (error.code == 400)
          console.log(error);
    })
  },

  oninit(){
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
                    "Label"
                  ), 
                  m("br"), 
                  m("input", {
                      "class":"form-control",
                      "type":"text",
                      "placeholder": "libellé tarif",
                      oninput: function(e) {
                        update_tarif.label = e.target.value;
                        tarif.list.map((t, index)=>{
                            if(t.label == update_tarif.label){
                                update_tarif.tarif_id = t.id;
                                update_tarif.groupeId = t.groupe.id;
                                // console.log(update_tarif.groupeId);
                            }
                        });
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
                        update_tarif.montant = e.target.value;
                        console.log(update_tarif.montant);
                      },
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
                        update_tarif.duree = e.target.value;
                        console.log(update_tarif.duree);
                      },
                    }
                  ),
                ]),
                m("div", {"class":"row mt-3 mb-5"},
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
                              onclick: update_tarif.save
                          }, 
                              "Modifier"
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
module.exports = update_tarif;