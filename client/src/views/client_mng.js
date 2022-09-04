var m = require('mithril');
const Modal = require('../components/modal/modal');
const client = require('../models/client');



module.exports = {
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
                            "Groupe 1"
                        ),
                        m("th", {"scope":"col"}, 
                            "Groupe 2"
                        ),
                        m("th", {"scope":"col"}, 
                            "Groupe 3"
                        ),
                        m("th", {"scope":"col"}, 
                            "Punition"
                        ),
                        m("th", {"scope":"col"}, 
                        ""
                        )
                        ]
                    )
                    ),
                    Modal.placeholder,
                    m("tbody",
                    [
                        m("tr",
                        [
                            m("th", {"scope":"row"}, 
                            "John Doe"
                            ),
                            m("td", 
                            "HH:MM:SS"
                            ),
                            m("td", 
                            "HH:MM:SS"
                            ),
                            m("td", 
                            "HH:MM:SS"
                            ),
                            m("td", 
                            "0"
                            ),
                            m("td", 
                            m("button", {
                                "class":"btn btn-outline-primary add_button",
                                "type":"button",
                                // onclick:function(e){
                                //     box.object_id = pt.id_object;
                                //     box.attribute_poste();
                                // }
                                onclick(e){
                                    // modal = document.getElementById("modal");
                                    // m.mount(modal, {
                                    //     view: function () {
                                    //         return m(Modal, activate_poste);
                                    //     }
                                    // });
                                }
                            }, 
                            m("span.add_poste", "-"))
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