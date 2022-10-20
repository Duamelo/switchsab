var m = require('mithril');
const server = require('../config/server');
const client = require('../models/client');

const autorisation = {
    _state: false,

    get state(){
        return this._state;
    },

    set state(value){
        this._state = value;
    }
}

module.exports = {
    oninit(){
        client.load_client();
    },
    view: function(vnode){
        return m("div", {
            "class": "container"
        }, [
            m("div", {
                "class": "row"
            }, [
                m("p", {
                    "class": "text-center"
                }, 
                    "Gérer les informations des comptes administrateurs en cliquant sur chacun des boutons correspondant pour autoriser au rapport ou supprimer."
                ),
                m("div", {
                    "class": "col"
                }, [
                   m("table", {"class":"table"},
                    [
                        m("thead", 
                        m("tr",
                            [
                            m("th", {"scope":"col"}, 
                                "nom et prénom"
                            ),
                            m("th", {"scope":"col"}, 
                                "pseudo"
                            ),
                            m("th", {"scope":"col"}, 
                                "rôle"
                            ),
                            m("th", {"scope":"col"}, 
                            "autorisation(rapport)"
                            ),
                            m("th", {"scope":"col"}, 
                            "suppression"
                            )
                            ]
                        )
                        ),
                        m("tbody",
                        [
                            client.list.map((admin, index)=>{
                                if(admin.type != 'client')
                                    return m("tr",
                                    [
                                        m("td", 
                                        admin.nom+ " " + admin.prenoms
                                        ),
                                        m("td", 
                                        admin.pseudo
                                        ),
                                        m("td", 
                                            admin.type
                                        ),
                                        m("td.form-switch", 
                                            m("input", 
                                                {
                                                    "class":"form-check-input check_permission",
                                                    "type":"checkbox",
                                                    "role":"switch",
                                                    "id":"flexSwitchCheckChecked",
                                                    // "checked":'off',
                                                    onclick: function(e){
                                                        console.log("checkbox authorization");
                                                        // console.log(e.target.value);
                                                        autorisation.state = !autorisation.state;
                                                        console.log(autorisation.state);
                                                    }
                                                }
                                            )
                                        ),
                                        m("td", 
                                        m("button.delete_admin_button", {
                                            "class":"btn btn-outline-primary add_button",
                                            "type":"button",
                                            onclick:function(e){
                                                client.list.splice(index, 1);
                                                m.request({
                                                    headers: {
                                                        Authorization: "Bearer " + window.localStorage.jwt,
                                                    },
                                                    method: "DELETE",
                                                    url: server.url + "/users/"+admin.id,
                                                })
                                                .then((result)=>{
                                                    console.log("resssssssssssssssssssssssult");
                                                    console.log(result);
                                                    client.list.splice(index, 1);
                                                }, (error) => {
                                                    if (error.code == 400)
                                                      console.log(error);
                                                });
                                            }
                                        }, 
                                            m("span.delete_admin_span", "-")
                                         )
                                        )
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