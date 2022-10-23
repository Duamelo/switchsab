var m = require('mithril');
const add_tarif = require('../tarif/add_tarif');
const update_tarif = require('../tarif/update_tarif');


const t_sidebar = {
  _state: true,

  get state(){
    return this._state;
  },

  set state(value){
    this._state = value;
  }
}

const t_sidebar_update_tarif = {
  _state: true,

  get state(){
    return this._state;
  },

  set state(value){
    this._state = value;
  }
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
                    "Nouveau Tarif"
                ),
                t_sidebar.state ? m(add_tarif) : m("p", {}, ""),
                m("button", {
                  "class":"nav-link active rounded-pill c_group_button mt-5 mb-3 btn_color",
                  "id":"v-pills-home-tab",
                  "data-bs-toggle":"pill",
                  "data-bs-target":"#v-pills-home",
                  "type":"button",
                  "role":"tab",
                  "aria-controls":"v-pills-home",
                  "aria-selected":"true",
                  onclick: function(e){
                    t_sidebar_update_tarif.state = !t_sidebar_update_tarif.state;
                  }
              }, 
                  "Modifier Tarif"
              ),
              t_sidebar_update_tarif.state ? m(update_tarif) : m("p", {}, "")

              ]
            )
          )
        ]
    }
}