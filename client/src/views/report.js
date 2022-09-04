var m = require('mithril');


module.exports = {
    oninit(){

    },

    view: function(){
        return m("div", {
            "class": "container",
        }, [
            m("h6", {
                "class": "text-dark"
            },
                "Rapport"
            ),
           m("div", {"class": "row mt-3"}, [
                m("div", {
                    "class": "col-11"
                }, [
                    m("table", {"class":" table"},
                    [
                      m("thead", 
                        m("tr",
                          [
                            m("th", {"scope":"col"}, 
                              "Date"
                            ),
                            m("th", {"scope":"col"}, 
                              "Heure"
                            ),
                            m("th", {"scope":"col"}, 
                              "Client"
                            ),
                            m("th", {"scope":"col"}, 
                              "Montant"
                            ),
                            m("th", {"scope":"col"}, 
                              "Durée jouée"
                            ),
                            m("th", {"scope":"col"}, 
                              "Montant"
                            ),
                            m("th", {"scope":"col"}, 
                              "Catégorie"
                            ),
                            m("th", {"scope":"col"}, 
                              "Utilisateur"
                            )
                          ]
                        )
                      ),
                      m("tbody", 
                        m("tr",
                          [
                            m("th", {"scope":"row"}, 
                              "1"
                            ),
                            m("td", 
                              "Mark"
                            ),
                            m("td", 
                              "Otto"
                            ),
                            m("td", 
                              "@mdo"
                            ),
                            m("td", 
                              "@mdo"
                            ),
                            m("td", 
                              "@mdo"
                            ),
                            m("td", 
                              "@mdo"
                            ),
                            m("td", 
                              "@mdo"
                            )
                          ]
                        )
                      )
                    ]
                  )
                ])
           ])
        ])
    }
}