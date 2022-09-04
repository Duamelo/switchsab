var m = require('mithril');
const group = require('../../models/group');




const new_group = {

    groups: [],
  
    nom: "",
  
    category: 0,
  
    error: "",
    errorDisplay() {
        return new_group.error != "" ? "" : "none"
    },
  
    // get nom(){
    //   return this._nom;
    // },
  
    // set nom(value){
    //   this._nom = value;
    // },
  
    // get category(){
    //   return this._category;
    // },
  
    // set category(value){
    //   this._category = value;
    // },
  
    // get group(){
    //   return this._groups;
    // },
  
    // set group(value){
    //   this._groups.push(...value); 
    // },
  
    save(){
      m.request({
          method: "POST",
          url: server.url + "/groupes",
          body: {
              nom: new_group.nom,
              categorieId: new_group.category
          }
      }).then((response) => {
          if (response != undefined) {
            console.log(response);
            group.addGroup(response);
          }
      }, (error) => {
          if (error.code == 400)
              new_group.error = "Erreur de création de groupe"
      })
    },

    oninit(){
        categories.load_categories();
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
                        "Nom du Groupe"
                      ), 
                      m("br"), 
                      m("input", {
                          "class":"form-control",
                          "type":"text",
                          "placeholder": "nom groupe",
                          oninput: function(e) {
                            new_group.nom = e.target.value;
                          },
                        }),
                    ]),
                    m("div", {
                      "class": "mb-3"
                    },[
                      m("label", 
                        "Catégorie "
                      ), 
                      m("br"), 
                      m("select", {
                        "class":"form-select",
                        "aria-label":"Default select example",
                        onclick: function(e){
                          new_group.category = categories.list[e.target.value]['id'];
                        }
                      },
                        [
                          categories.list.map((ct, index)=>{
                            return m("option", {"value": index}, ct.nom )
                          }),
                        ]
                      )
                    ]),
                    m("div", {"class":"row mt-3"},
                      [
                          m(".alert.alert-danger[role='alert']", {
                            "style": {
                                "display": new_group.errorDisplay()
                            }
                          }, new_group.error),
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
                                  onclick: new_group.save
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
  

const group_mng = {
    oninit(){
        group.load_group();
    },
    
    view(vnode){
        return [
            m("p", {
                "class": ""
            }, "Punitions et actions"),
            m("table", {"class":"table"},
                [
                    m("thead.table-secondary", 
                    m("tr",
                        [
                        m("th", {"scope":"col"}, 
                            "Catégorie"
                        ),
                        m("th", {"scope":"col"}, 
                            "Nom du groupe"
                        ),
                        m("th", {"scope":"col"}, 
                            "Punitions (minutes)"
                        ),
                        m("th", {"scope":"col"}, 
                            "Actions"
                        )
                        ]
                    )
                    ),
                    m("tbody",
                    [
                        group.list.map((gp, index)=>{
                            if(gp.categorie.nom  == 'xbox' || gp.categorie.nom == 'ps')
                                return m("tr.table-primary", [
                                    m("th", {"scope": "row"}, [
                                        gp.categorie.nom == 'xbox' ?
                                            m("img", {
                                                "class": "nav_icon me-3",
                                                "src": "./assets/xbox.png"
                                            }) : gp.categorie.nom == "ps" ?
                                            m("img", {
                                                "class": "nav_icon me-3",
                                                "src": "./assets/ps4.png"
                                            }) : null
                                    ]),
                                    m("td", 
                                        gp.nom
                                    ),
                                    m("td",{
                                        "class": ""
                                    },[
                                        m("div", {"class": "punition"}, "1000")
                                    ]
                                    ),
                                    m("td",
                                    [
                                        m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                        "X"
                                        ),
                                        m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                        "X"
                                        ),
                                        m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                        "X"
                                        )
                                    ]
                                    )
                                ])
                        }),
                    ]
                    )
                ]
            )
        ]
    }
}
module.exports = group_mng;