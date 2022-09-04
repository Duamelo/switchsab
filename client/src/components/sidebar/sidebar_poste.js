var m = require('mithril');
const categories = require('../../models/category');

const t_sidebar_poste = {
  _state: true,

  _groupes: [],

  get state(){
    return this._state;
  },

  set state(value){
    this._state = value;
  },

  get groupes(){
    return this._groupes;
  },

  set groupes(value){
    this._groupes = value;
  }
}


const sidebar_poste = {
  oninit(){
    categories.load_categories();
  },

  view: function(vnode){
      return [
          m("div", {"class":"d-flex align-items-start"}, 
          m("div", {"class":"nav flex-column nav-pills me-3 sidebar_poste","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
            [
              categories.list.map((ct, index)=>{
                return m("div", {
                    "class": ""
                  }, [
                    ct.nom == 'xbox' ?
                    m("img", {
                      "class": "xbox_img",
                      "src": "./assets/xbox.png"
                    }) :
                    null,
                    m("button", {
                      "class":"nav-link active rounded c_group_button mb-3 btn_color",
                      "id":"v-pills-home-tab",
                      "data-bs-toggle":"pill",
                      "data-bs-target":"#v-pills-home",
                      "type":"button",
                      "role":"tab",
                      "aria-controls":"v-pills-home",
                      "aria-selected":"true",
                      onclick: function(e){
                          t_sidebar_poste.groupes = ct.groupes;
                      }
                  }, 
                      ct.nom
                  ),
                  ])
              }),
            ]
          )
        )
      ]
  }
}

module.exports = {t_sidebar_poste, sidebar_poste};