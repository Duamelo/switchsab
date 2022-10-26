var m = require('mithril');
const Modal = require('../components/modal/modal');
const client = require('../models/client');



module.exports = {
    oninit(vnode){
        client.getByGroup();
    },
    view: function(vnode){
        var modal;
        return [
            m("div", {
                "class": "container"
            }, 
            [
                m("h6", {
                    "class": ""
                },
                    "Tous les clients"
                ),

                m("table", {"class":"table"},
                [
                    m("thead.table-secondary", 
                    m("tr",
                        [
                        m("th", {"scope":"col"}, 
                            "Nom d'utilisateur"
                        ),
                        m("th", {"scope":"col"}, 
                            "Groupe"
                        ),
                        m("th", {"scope":"col"}, 
                        "forfait"
                        ),
                        m("th", {"scope":"col"}, 
                            "Punition"
                        ),
                        m("th", {"scope":"col"}, 
                            "Supprimer"
                        )
                        ]
                    )
                    ),
                    Modal.placeholder,
                    m("tbody",
                    [
                        // Object.keys(client.client_with_group).map((client_name, index)=>{
                        //     return [
                        //         m("tr", [
                        //             m("td", client_name),
                        //             m("td", "xbox"),
                        //             client.client_with_group[client_name].map((duration, index)=>{
                        //                 return m("td", duration | 0)
                        //             }),
                        //             m("td", 
                        //             "0"
                        //             ),
                        //             m("td", 
                        //             m("button", {
                        //                 "class":"btn btn-outline-primary add_button delete_client",
                        //                 "type":"button",
                        //                 onclick(e){
                                        
                        //                 }
                        //             }, 
                        //             m("span.delete_client_span", "-"))
                        //             )
                        //         ])
                        //     ]
                        // }),
                        client.last_filtre.map(({clientId, client_name, groupeId, dureeRestante})=>{
                            return [
                               m("tr", [
                                    m("td", client_name),
                                    m("td", groupeId),
                                    m("td", dureeRestante),
                                    m("td.punition", 0),
                                    m("td", 
                                        m("button", {
                                            "class":"btn btn-outline-primary  delete_mgn_client",
                                            "type":"button",
                                            onclick(e){
                                                m.request({
                                                    headers: {
                                                        Authorization: "Bearer " + window.localStorage.jwt,
                                                    },
                                                    method: "DELETE",
                                                    url: server.url + "/users/" + clientId,
                                                })
                                                .then((result)=>{
                                                    console.log(result);
                                                });
                                            }
                                        }, 
                                        m("span.delete_client_span", "-"))
                                    )
                               ])
                            ]
                        })
                    ]
                    )
                ]
                )
            ])
        ]
    }
}