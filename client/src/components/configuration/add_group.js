var m = require('mithril');
const server = require('../../config/server');
const categories = require('../../models/category');
const group = require('../../models/group');

const new_group = {

  _groups: [],

  _nom: "",

  _category: 0,

  error: "",
  errorDisplay() {
      return new_group.error != "" ? "" : "none"
  },

  get nom(){
    return this._nom;
  },

  set nom(value){
    this._nom = value;
  },

  get category(){
    return this._category;
  },

  set category(value){
    this._category = value;
  },

  get group(){
    return this._groups;
  },

  set group(value){
    this._groups.push(...value); 
  },

  submit(e){
    e.preventDefault();
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
  }
}


const add_group = {
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
                                onclick: new_group.submit
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
module.exports = {add_group, new_group};