var m = require('mithril');
const list_postes = require('../components/list_postes');
const { t_menu_bar } = require('../components/menus/menu_dashboard');
const table_postes = require('../components/postes');
const group = require('../models/group');
const poste = require('../models/poste');


const tabs = {
        _posts: [],
        group: "az",
        cpt : 0,

        get_postes: (groupe)=>{
            tabs._posts = [];
            if(groupe == 'null')
                poste.list.map((post, index)=>{
                    tabs._posts.push(post);
                });
            else{
                poste.list.map((post, index)=>{
                    if(post.groupe.nom == groupe.nom)
                        tabs._posts.push(post);
                });
            }
            return tabs._posts;
        },

        oninit(){
            group.load_group();
            poste.load_poste();
        },

       view: function(vnode){
           return [
              m("div", {
                  "class": "container",
              }, [
                  m("div", {
                      "class": "row"
                  }, [
                       m("ul", {"class":"nav nav-pills mb-3 ","id":"pills-tab","role":"tablist"},
                       [
                           m("li", {"class":"nav-item","role":"presentation"}, 
                               m("button", {
                                   "class":"nav-link text-dark",
                                   "id":"pills-home-tab",
                                   "data-bs-toggle":"pill",
                                   "data-bs-target":"#pills-home",
                                   "type":"button",
                                   "role":"tab",
                                   "aria-controls":"pills-home",
                                   "aria-selected":"true",
                                   onclick : function(e){
                                    var div = document.getElementById("cp");
                                    tabs._posts = [];
                                    poste.list.map((post, index)=>{
                                        tabs._posts.push(post);
                                    });
                                        !t_menu_bar.state ?
                                            m.mount(div, {
                                                view: function() { 
                                                    return [
                                                        m(tabs),
                                                        m(table_postes, {posts: tabs._posts})
                                                    ]
                                                }
                                            }) :
                                            m.mount(div, {
                                                view: function() { 
                                                    return [
                                                        m(tabs),
                                                        m(list_postes, {posts: tabs._posts})
                                                    ]
                                                }
                                            })
                                }
                               }, 
                               "Tous les postes"
                               )
                           ),
                            group.list.map((gp, index)=>{
                                // console.log(gp);
                                if(gp.categorie.nom != "manette"){
                                    return m("li", {"class":"nav-item","role":"presentation"}, 
                                    m("button", {
                                        "class":"nav-link text-dark",
                                        "id":"pills-profile-tab",
                                        "data-bs-toggle":"pill",
                                        "data-bs-target":"#pills-profile",
                                        "type":"button",
                                        "role":"tab",
                                        "aria-controls":"pills-profile",
                                        "aria-selected":"false",
                                        onclick: function(e){
                                            var div = document.getElementById("cp");
                                            tabs._posts = [];
                                            poste.list.map((post, index)=>{
                                                if(post.groupe.nom == gp.nom)
                                                    tabs._posts.push(post);
                                            });
                                                !t_menu_bar.state ?
                                                    m.mount(div, {
                                                        view: function() { 
                                                            return [
                                                                m(tabs),
                                                                m(table_postes, {posts: tabs._posts})
                                                            ]
                                                        }
                                                    }) :
                                                    m.mount(div, {
                                                        view: function() { 
                                                            return [
                                                                m(tabs),
                                                                m(list_postes, {posts: tabs._posts})
                                                            ]
                                                        }
                                                    })
                                        }
                                    }, 
                                        gp.nom
                                    )
                                )
                                }
                            })
                       ]
                   )
                  ])
              ])
           ]
       }
}

module.exports = {
    view: function(vnode){
        return [
            m("div#cp", {
                "class": "container-fluid"
            }, 
            [
                m("h6", {
                    "class": "text-dark"
                },
                    "Mon tableau de bord"
                ),
                m(tabs),
            ])
        ]
    }
}