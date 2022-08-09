var m = require('mithril');

const t_sidebar_poste = {
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
            m("div", {"class":"nav flex-column nav-pills me-3 sidebar_poste","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("div", {
                  "class": ""
                }, [
                  m("img", {
                    "class": "xbox_img",
                    "src": "./assets/xbox.png"
                  }),
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
                        m.route.set('/xbox')
                    }
                }, 
                    "XBOX"
                ),
                ]),
                m("div", {
                  "class": ""
                }, [
                  // m("img", {
                  //   "class": "ps_img",
                  //   "src": "./assets/ps4.png"
                  // }),
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
                        m.route.set('/ps')
                    }
                }, 
                    "PS"
                ),
                ]),

                m("div", {
                  "class": ""
                }, [
                  // m("img", {
                  //   "class": "manette_img",
                  //   "src": "./assets/manette.png"
                  // }),
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
                        m.route.set('/manette')
                    }
                }, 
                    "Manette"
                ),
                ]),

              ]
            )
          )
        ]
    }
}