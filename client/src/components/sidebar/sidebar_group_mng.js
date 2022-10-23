var m = require('mithril');
const {add_group} = require('../configuration/add_group');
const { update_group } = require('../configuration/update_group');



const t_sidebar = {
    _state: true,
  
    get state(){
      return this._state;
    },
  
    set state(value){
      this._state = value;
    }
}
 
const t_side = {
  _state: false,

  get state(){
      return this._state;
  },

  set state(value){
      this._state = value;
  },
}


module.exports = {
    view: function(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3 sidebar_tarif","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("button", {
                    "class":"nav-link active rounded-pill c_group_button mb-3 btn_color",
                    "id":"v-pills-home-tab",
                    "data-bs-toggle":"pill",
                    "data-bs-target":"#v-pills-home",
                    "type":"button",
                    "role":"tab",
                    "aria-controls":"v-pills-home",
                    "aria-selected":"true",
                    onclick: function(e){
                      t_sidebar.state = !t_sidebar.state;
                    }
                  }, 
                    "Nouveau Groupe"
                ),
                t_sidebar.state ? m(add_group) : m("p", {}, ""),
                m("button", {
                  "class":"nav-link active rounded-pill c_group_button mb-3 mt-3 btn_color",
                  "id":"v-pills-home-tab",
                  "data-bs-toggle":"pill",
                  "data-bs-target":"#v-pills-home",
                  "type":"button",
                  "role":"tab",
                  "aria-controls":"v-pills-home",
                  "aria-selected":"true",
                  onclick: function(e){
                    t_side.state = !t_side.state;
                  }
              }, 
                  "Modifier Groupe"
              ),
                t_side.state ? m(update_group) : m("p", {}, "")
              ]
            )
          )
        ]
    }
}