var m = require('mithril');
const server = require('../config/server');

const group_list = {
    group : [],
    tarifs: [],
    tarifs_group : [],

    get_list_tarifs(){
        m.request({
            method: "GET",
            url: server.url + "/tarifs",
        })
        .then((response) => {
            if (response != undefined) {
            //   console.log(response);
              group_list.tarifs = response;
              var gp = [];
              group_list.tarifs.map((t, index)=>{
                  gp.push(t.groupe.id);
              });
      
              var gps = gp.filter((x, i)=> gp.indexOf(x) === i); /* filtre pour ne pas avoir de doublons*/
      
              gps.map((gp_id, index)=>{
                  m.request({
                      method: "GET",
                      url: server.url + "/groupes/"+ gp_id,
                  })
                  .then((response) => {
                      if (response != undefined) {
                        console.log(response);
                        group_list.group.push(response);
                      }
                  }, (error) => {
                      if (error.code == 400)
                          console.log(error)
                  })
              })
      
            }
        }, (error) => {
            if (error.code == 400)
                console.log(error)
        })
    },

    oninit(){
        group_list.get_list_tarifs();
    },

    view(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                group_list.group.map((gp, index)=>{
                    return m("button", {
                        "class":"nav-link active rounded c_group_button mb-3",
                        "id":"v-pills-home-tab",
                        "data-bs-toggle":"pill",
                        "data-bs-target":"#v-pills-home",
                        "type":"button",
                        "role":"tab",
                        "aria-controls":"v-pills-home",
                        "aria-selected":"true",
                        onclick: function(e){
                            m.request({
                                method: "GET",
                                url: server.url + "/tarifs/groupe/"+ gp.id,
                            })
                            .then((response) => {
                                if (response != undefined) {
                                  console.log(response);
                                  group_list.tarifs_group = response;
                                  console.log(group_list.tarifs_group);
                                }
                            }, (error) => {
                                if (error.code == 400)
                                    new_group.error = "Erreur de chargement des tarifs du groupe " + gp.id;
                            })
                        }
                    }, 
                        gp.nom
                    )
                }),
              ]
            )
          )
        ]
    }
}

const group_list_tarif = {
    view(vnode){
        return [
            m("table", {"class":"table"},
            [
                m("thead.table-primary", 
                m("tr",
                    [
                    m("th", {"scope":"col"}, 
                        "N°"
                    ),
                    m("th", {"scope":"col"}, 
                        "Label"
                    ),
                    m("th", {"scope":"col"}, 
                        "Minutes"
                    ),
                    m("th", {"scope":"col"}, 
                        "Tarifs"
                    ),
                    m("th", {"scope": "col"},
                        "Suppression"
                    )
                    ]
                )
                ),
                m("tbody",
                [
                    group_list.tarifs_group.map((t, index)=>{
                        return m("tr",
                        [
                            m("th", {"scope":"row"},
                                index
                            ),
                            m("td", 
                                t.label
                            ),
                            m("td", 
                                t.duree
                            ),
                            m("td", 
                                t.montant
                            ),
                            m("td", 
                                m("button.delete_tarif_button", {
                                    "class":"btn btn-outline-primary add_button",
                                    "type":"button",
                                    onclick:function(e){
                                        group_list.tarifs_group.splice(index, 1),
                                        m.request({
                                            headers: {
                                                Authorization: "Bearer " + window.localStorage.jwt,
                                            },
                                            method: "DELETE",
                                            url: server.url + "/tarifs/"+t.id,
                                        })
                                        .then((result)=>{
                                            console.log(result);
                                        }, (error) => {
                                            if (error.code == 400)
                                            console.log(error);
                                        });
                                    }
                                }, 
                                 m("span.delete_tarif_span", "-")
                                )
                            )
                        ]
                        )})
                ]
                )
            ]
            )
        ]
    }
}

const tarif = {
    view: function(vnode){
        return [
            m("div", {
                "class": "row"
            }, [
                m("p", {
                    "class": "",
                },
                    "Sélectionnez un groupe pour afficher tous les tarifs détaillés relatifs au groupe dans le tableau, cliquez pour modifier"
                ),
                m("div", {"class":"col-2 mt-5"}, 
                    m(group_list)
                ),
                m("div", {"class":"col-9"}, 
                    m(group_list_tarif)
                )
            ])
        ]
    }
}

module.exports = { tarif, group_list, group_list_tarif};