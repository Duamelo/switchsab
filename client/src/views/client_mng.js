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
                        client.groupes.map((gp, index)=>{
                            return m("th", 
                                gp.nom
                            )
                        }),
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
                        m("tr",
                        [
                            // client.client_with_group.map((cl, index)=>{
                            //     return m("td", 
                            //         cl.clientId
                            //     )
                            // }),
                            m("td", 'John Doe'),
                            client.groupes.map((g, index)=>{
                                return m("td", 
                                    "HH:MM:SS"
                                )
                            }),
                            m("td", 
                            "0"
                            ),
                            m("td", 
                            m("button", {
                                "class":"btn btn-outline-primary add_button delete_client",
                                "type":"button",
                                onclick(e){
                                    // modal = document.getElementById("modal");
                                    // m.mount(modal, {
                                    //     view: function () {
                                    //         return m(Modal, activate_poste);
                                    //     }
                                    // });
                                }
                            }, 
                            m("span.delete_client_span", "-"))
                            )
                        ]
                        ),
                    ]
                    )
                ]
                )
            ])
        ]
    }
}