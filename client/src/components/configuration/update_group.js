var m = require('mithril');
const server = require('../../config/server');
const categories = require('../../models/category');
const group = require('../../models/group');

const up_grp = {

  _actual_name: '',
  _new_name: '',
  _categorie_id: '',
  _categorie_name: '',
  _actual_id_group: '',
  
  get actual_name(){
    return this._actual_name;
  },

  set actual_name(value){
    this._actual_name = value;
  },

  get actual_id_group(){
    return this._actual_id_group;
  },

  set actual_id_group(value){
    this._actual_id_group = value;
  },

  get new_name(){
    return this.__new_name;
  },

  set new_name(value){
    this.__new_name = value;
  },

  get categorie_id(){
    return this._categorie_id;
  },

  set categorie_id(value){
    this._categorie_id = value;
  },

  get categorie_name(){
    return this._categorie_name;
  },

  set categorie_name(value){
    this._categorie_name = value;
  },

  error: "",
  errorDisplay() {
      return up_grp.error != "" ? "" : "none"
  },

  submit(e){
    e.preventDefault();
    group.list.map((gp, index)=>{
        if(gp.nom == up_grp.actual_name){
            group.list[index] = {categorie: {nom: up_grp.categorie_name}, nom: up_grp.new_name};
        }
    });
    m.request({
        method: "PUT",
        url: server.url + "/groupes/" + up_grp.actual_id_group,
        body: {
            nom: up_grp.new_name,
            categorieId: up_grp.categorie_id
        }
    }).then((response) => {
        if (response != undefined) {
          console.log(response);
        }
    }, (error) => {
        if (error.code == 400){
            up_grp.error = "Erreur de modification du groupe " + up_grp.actual_name;
            setTimeout(() => {
                up_grp.error = "";
            }, (3000));
        }
    })
  }
}


const update_group = {
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
                      "Nom actuel du Groupe"
                    ), 
                    m("br"), 
                    m("input", {
                        "class":"form-control",
                        "type":"text",
                        "placeholder": "nom actuel",
                        oninput: function(e) {
                            // console.log(e.target.value);
                            group.list.map((gp, index)=>{
                                if(gp.nom == e.target.value){
                                    up_grp.actual_name = gp.nom;
                                    up_grp.actual_id_group = gp.id
                                    up_grp.categorie_id = gp.categorie.id;
                                    up_grp.categorie_name = gp.categorie.nom;
                                    console.log(up_grp.actual_name);
                                    console.log(up_grp.actual_id_group);
                                    console.log(up_grp.categorie_id);
                                    console.log(up_grp.categorie_name);
                                }
                            });
                        //   console.log(up_grp.actual_name);
                        },
                      }),
                  ]),
                  m("div", {
                    "class": "mb-3"
                  },[
                    m("label", 
                      "Nouveau nom "
                    ), 
                    m("br"), 
                    m("input", {
                        "class":"form-control",
                        "type":"text",
                        "placeholder": "nouveau nom",
                        oninput: function(e) {
                            group.list.map((gp, index)=>{
                                if(gp.nom == e.target.value){
                                    up_grp.error = "ce nom de groupe est déjà utilisé";
                                    m(".alert.alert-danger[role='alert']", {
                                        "style": {
                                            "display": up_grp.errorDisplay()
                                        }
                                      }, up_grp.error)
                                    setTimeout(() => {
                                        up_grp.error = "";
                                    }, (3000));
                                }
                            });
                          up_grp.new_name = e.target.value;
                        //   console.log(up_grp.new_name);
                        },
                      }),
                  ]),
                  m("div", {"class":"row mt-3"},
                    [
                        m(".alert.alert-danger[role='alert']", {
                          "style": {
                              "display": up_grp.errorDisplay()
                          }
                        }, up_grp.error),
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
                                onclick: up_grp.submit
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
module.exports = {update_group, up_grp};