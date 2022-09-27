var m = require('mithril');
const server = require('../../config/server');
const free_poste = require('../../models/free_posts');
const { t_sidebar_poste } = require('../sidebar/sidebar_poste');
var post = [];

const box = {

    _object_id: 0,

    _groupe_id: 0,


    get object_id(){
        return this._object_id;
    },

    get group_id(){
        return this._groupe_id;
    },

    set group_id(value){
        this._groupe_id = value;
    },

    set object_id(value){
        this._object_id = value;
    },

    remove_poste(){
        
    },

    attribute_poste(){
        console.log(box.group_id);
        console.log(box.object_id);
        m.request({
            method: "POST",
            url: server.url + "/postes/",
            body: {
                nom: 'post '+ `${box.object_id}`,
                status: false,
                object_id: box.object_id,
                groupeId: box.group_id
            }
        }).then((response) => {
            if (response != undefined) {
                post.push(response);
                free_poste.list.map((pt, index)=>{
                    if(pt.id_object == box.object_id)
                        free_poste.list.splice(index, 1);
                });
                m.request({
                    headers: {
                        Authorization: "Bearer " + window.localStorage.jwt,
                    },
                    method: "DELETE",
                    url: server.url + "/freepost/"+ box.object_id,
                })
                .then((result)=>{
                    console.log(result);
                });
            }
        }, (error) => {
            if (error.code == 400)
                credential.error = "Erreur de suppression"
        })
    }
}


function c_xbox(){

    return {
        oninit(){
            free_poste.load_free_post();
        },

        view: function(vnode){
            return m("div", {
                "class": "container-fluid"
            }, [
                m("div", {
                    "class": "row"
                }, [
                    m("div", {
                        "class": "col-2"
                    }, [
                        m("div", {"class":"d-flex align-items-start"}, 
                        m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
                          [
                           t_sidebar_poste.groupes.map((gp, index)=>{
                                return  m("button", {
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
                                            headers: {
                                                Authorization: "Bearer " + window.localStorage.jwt,
                                            },
                                            method: "GET",
                                            url: server.url + "/postes/groupes/"+ gp.id,
                                        })
                                        .then((result)=>{
                                            post = result;
                                            box.group_id = gp.id;
                                        });
                                    }
                                }, 
                                    gp.nom
                                )
                           })
                          ]
                        )
                      )
                    ]),
                    m("div", {
                        "class": "col-4"
                    }, [
                        m("table", {"class":"table table-borderless"},
                        [
                            m("thead.table-primary", 
                            m("tr", 
                                m("th", {"scope":"col"}, 
                                "Postes attribués"
                                )
                            )
                            ),
                            m("tbody",
                            [
                                post.map((pt, index)=>{
                                    return m("tr", 
                                        m("td", [
                                            m("span", pt.nom),
                                            m("button", {
                                                "class":"btn btn-outline-primary add_button",
                                                "type":"button",
                                                onclick: function(e){
                                                    m.request({
                                                        headers: {
                                                            Authorization: "Bearer " + window.localStorage.jwt,
                                                        },
                                                        method: "DELETE",
                                                        url: server.url + "/postes/"+pt.id,
                                                    })
                                                    .then((result)=>{
                                                        console.log(result);
                                                        post.splice(index, 1);
                                                        m.request({
                                                            headers: {
                                                                Authorization: "Bearer " + window.localStorage.jwt,
                                                            },
                                                            method: "POST",
                                                            url: server.url + "/freepost/",
                                                            body: {
                                                                id_object: pt.object_id
                                                            }
                                                        })
                                                        .then((result)=>{
                                                            console.log(result);
                                                            free_poste.list.push(result);
                                                        });
                                                    });
                                                }
                                            }, 
                                        m("span.add_poste", "-")
                                      )
                                        ]
                                    )
                                    )
                                })
                            ]
                            )
                        ]
                        )
                    ]),
                    // m("hr", {"class": "col-2 hr_delimiter_poste"}),
                    m("div", {
                        "class": "col-4"
                    }, [
                        m("table", {"class":"table table-borderless"},
                        [
                            m("thead.table-primary", 
                            m("tr", 
                                m("th", {"scope":"col"}, 
                                "Postes disponibles"
                                )
                            )
                            ),
                            m("tbody",
                            [
                                free_poste.list.map((pt, index)=>{
                                    return  m("tr", [
                                        m("td", [
                                            m("span", pt.id_object),
                                            m("button", {
                                                "class":"btn btn-outline-primary add_button",
                                                "type":"button",
                                                onclick:function(e){
                                                    box.object_id = pt.id_object;
                                                    box.attribute_poste();
                                                }
                                            }, 
                                            m("span.add_poste", "+")
                                          )
                                        ]
                                        ),
                                    ]
                                    )
                               })
                            ]
                            )
                        ]
                        )
                    ])
                ])
            ])
        }
    }
   
}

module.exports = c_xbox;