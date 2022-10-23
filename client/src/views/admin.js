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
                                if(admin.type != 'client'){
                                    return m("tr",
                                    [
                                        m("td", 
                                        admin.pseudo
                                        ),
                                        m("td", 
                                            admin.type
                                        ),
                                        m("td.form-switch", 
                                            m("input." + `${admin.pseudo}`, 
                                                {
                                                    "class":"form-check-input check_permission",
                                                    "type":"checkbox",
                                                    "role":"switch",
                                                    "id":"flexSwitchCheckChecked",
                                                    "checked": admin.access_report ? "checked" : "",
                                                    onclick: function(e){
                                                        console.log("accessss report");
                                                        console.log(admin.access_report);
                                                       
                                                        m.request({
                                                            headers: {
                                                                Authorization: "Bearer " + window.localStorage.jwt,
                                                            },
                                                            method: "PUT",
                                                            url: server.url + "/users/access_report/" + admin.id,
                                                            body: {
                                                                pseudo: admin.pseudo,
                                                                access_report: !admin.access_report
                                                            }
                                                        })
                                                        .then((result)=>{
                                                            console.log("resssssssssssssssssssssssult");
                                                            console.log(result);
                                                            if(admin.access_report == false){
                                                                admin.access_report = true;
                                                                var input = document.querySelector("."+`${admin.pseudo}`);
                                                                console.log(input);
                                                                input.setAttribute("checked", "checked");
                                                            }
                                                            else{
                                                                admin.access_report = false;
                                                                jeton.access_report = false;
                                                                var input = document.querySelector("."+`${admin.pseudo}`);
                                                                console.log(input);
                                                                input.setAttribute("checked", "");
                                                            }
                                                        }, (error) => {
                                                            if (error.code == 400)
                                                              console.log(error);
                                                        });
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
                                }
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