var m = require('mithril');
const server = require('../config/server');
const client = require('../models/client');

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
                    "Gérer les informations des comptes administrateurs en cliquant sur chacun d'eux pour modifier ou supprimer"
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
                                "Nom et Prénom"
                            ),
                            m("th", {"scope":"col"}, 
                                "Pseudonyme"
                            ),
                            m("th", {"scope":"col"}, 
                                "Rôle"
                            ),
                            m("th", {"scope":"col"}, 
                            ""
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
                                        m("td", 
                                        m("button", {
                                            "class":"btn btn-outline-primary add_button",
                                            "type":"button",
                                            onclick:function(e){
                                                m.request({
                                                    headers: {
                                                        Authorization: "Bearer " + window.localStorage.jwt,
                                                    },
                                                    method: "DELETE",
                                                    url: server.url + "/users/"+admin.id,
                                                })
                                                .then((result)=>{
                                                    console.log(result);
                                                    client.list.splice(index, 1);
                                                }, (error) => {
                                                    if (error.code == 400)
                                                      console.log(error);
                                                });
                                            }
                                        }, 
                                        m("span.add_poste", "-")
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