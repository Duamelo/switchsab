var m = require('mithril');

const group_mng = {
    view(vnode){
        return [
            m("p", {
                "class": ""
            }, "Punitions et actions"),
            m("table", {"class":"table"},
                [
                    m("thead.table-secondary", 
                    m("tr",
                        [
                        m("th", {"scope":"col"}, 
                            "Catégorie"
                        ),
                        m("th", {"scope":"col"}, 
                            "Nom du groupe"
                        ),
                        m("th", {"scope":"col"}, 
                            "Punitions (minutes)"
                        ),
                        m("th", {"scope":"col"}, 
                            "Actions"
                        )
                        ]
                    )
                    ),
                    m("tbody",
                    [
                        m("tr.table-primary",
                        [
                            m("th", {"scope":"row"},[
                                m("img", {
                                    "class": "nav_icon me-3",
                                    "src": "./assets/ps4.png"
                                })
                            ]
                            ),
                            m("td", 
                            "Alpha"
                            ),
                            m("td",{
                                "class": ""
                            },[
                                m("div", {"class": "punition"}, "1000")
                            ]
                            ),
                            m("td",
                            [
                                m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                "X"
                                ),
                                m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                "X"
                                ),
                                m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                "X"
                                )
                            ]
                            )
                        ]
                        ),
                        m("tr.table-primary",
                        [
                            m("th", {"scope":"row"},[
                                m("img", {
                                    "class": "nav_icon me-3",
                                    "src": "./assets/xbox.png"
                                })
                            ]
                            ),
                            m("td", 
                            "Bêta"
                            ),
                            m("td",{
                                "class": ""
                            },[
                                m("div", {"class": "punition"}, "1000")
                            ]
                            ),
                            m("td", 
                            m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                "X"
                            )
                            )
                        ]
                        ),
                        m("tr.table-primary",
                        [
                            m("th", {"scope":"row"},[
                                m("img", {
                                    "class": "nav_icon me-3",
                                    "src": "./assets/ps4.png"
                                })
                            ]
                            ),
                            m("td", 
                            "Lambda"
                            ),
                            m("td",{
                                "class": ""
                            },[
                                m("div", {"class": "punition"}, "1000")
                            ]
                            ),
                            m("td", 
                            m("button", {"class":"btn btn-danger mx-1","type":"button"}, 
                                "X"
                            )
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
module.exports = group_mng;