var m = require('mithril');

const group_list = {
    view(vnode){
        return [
            m("div", {"class":"d-flex align-items-start"}, 
            m("div", {"class":"nav flex-column nav-pills me-3","id":"v-pills-tab","role":"tablist","aria-orientation":"vertical"},
              [
                m("button", {
                    "class":"nav-link active rounded c_group_button mb-3",
                    "id":"v-pills-home-tab",
                    "data-bs-toggle":"pill",
                    "data-bs-target":"#v-pills-home",
                    "type":"button",
                    "role":"tab",
                    "aria-controls":"v-pills-home",
                    "aria-selected":"true",
                    onclick: function(e){

                    }
                }, 
                    "Bêta"
                ),
                m("button", {
                    "class":"nav-link active rounded c_group_button mb-3",
                    "id":"v-pills-home-tab",
                    "data-bs-toggle":"pill",
                    "data-bs-target":"#v-pills-home",
                    "type":"button",
                    "role":"tab",
                    "aria-controls":"v-pills-home",
                    "aria-selected":"true",
                    onclick: function(e){

                    }
                }, 
                    "Alpha"
                ),
                m("button", {
                    "class":"nav-link active rounded c_group_button mb-3",
                    "id":"v-pills-home-tab",
                    "data-bs-toggle":"pill",
                    "data-bs-target":"#v-pills-home",
                    "type":"button",
                    "role":"tab",
                    "aria-controls":"v-pills-home",
                    "aria-selected":"true",
                    onclick: function(e){
                    
                    }
                }, 
                    "Lambda"
                ),
              ]
            )
          )
        ]
    }
}

const group_list_tarif = {
    view(vnode){
        return [
            m("table", {"class":"table"},
            [
                m("thead.table-primary", 
                m("tr",
                    [
                    m("th", {"scope":"col"}, 
                        "N°"
                    ),
                    m("th", {"scope":"col"}, 
                        "Label"
                    ),
                    m("th", {"scope":"col"}, 
                        "Minutes"
                    ),
                    m("th", {"scope":"col"}, 
                        "Tarifs"
                    )
                    ]
                )
                ),
                m("tbody",
                [
                    m("tr",
                    [
                        m("th", {"scope":"row"},
                        "1"
                        ),
                        m("td", 
                        "zola"
                        ),
                        m("td", 
                        "14"
                        ),
                        m("td", 
                        "2000"
                        )
                    ]
                    ),
                    m("tr",
                    [
                        m("th", {"scope":"row"}, 
                        "2"
                        ),
                        m("td", 
                        "zola"
                        ),
                        m("td", 
                        "14"
                        ),
                        m("td", 
                        "2000"
                        )
                    ]
                    ),
                    m("tr",
                    [
                        m("th", {"scope":"row"}, 
                        "3"
                        ),
                        m("td", 
                        "zola"
                        ),
                        m("td", 
                        "14"
                        ),
                        m("td", 
                        "2000"
                        )
                    ]
                    )
                ]
                )
            ]
            )
        ]
    }
}

module.exports = {
    view: function(vnode){
        return [
            m("div", {
                "class": "row"
            }, [
                m("p", {
                    "class": "",
                },
                    "Sélectionnez un groupe pour afficher tous les tarifs détaillés relatifs au groupe dans le tableau, cliquez pour modifier"
                ),
                m("div", {"class":"col-2 mt-5"}, 
                    m(group_list)
                ),
                m("div", {"class":"col-9"}, 
                    m(group_list_tarif)
                )
            ])
        ]
    }
}