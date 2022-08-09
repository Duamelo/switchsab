var m = require('mithril');

module.exports = {
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
                            )
                            ]
                        )
                        ),
                        m("tbody",
                        [
                            m("tr",
                            [
                                m("td", 
                                "John Doe"
                                ),
                                m("td", 
                                "@boss_johnny"
                                ),
                                m("td", 
                                "administrateur général"
                                )
                            ]
                            ),
                            m("tr",
                            [
                                m("td", 
                                "John Doe"
                                ),
                                m("td", 
                                "@boss_johnny"
                                ),
                                m("td", 
                                "administrateur général"
                                )
                            ]
                            ),
                            m("tr",
                            [
                                m("td", 
                                "John Doe"
                                ),
                                m("td", 
                                "@boss_johnny"
                                ),
                                m("td", 
                                "administrateur général"
                                )
                            ]
                            )
                        ]
                        )
                    ]
                    )
                ])
            ])
        ])
    }
}