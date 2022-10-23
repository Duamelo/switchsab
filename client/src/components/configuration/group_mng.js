var m = require('mithril');
const server = require('../../config/server');
const group = require('../../models/group');

const group_mng = {
    oninit(){
        // group.load_group();
    },
    
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
                        ),
                        m("th", {"scope":"col"}, 
                        "Supprimer"
                        )
                        ]
                    )
                    ),
                    m("tbody",
                    [
                        group.list.map((gp, index)=>{
                            if(gp.categorie.nom  == 'xbox' || gp.categorie.nom == 'ps')
                                return m("tr.table-primary", [
                                    m("th", {"scope": "row"}, [
                                        gp.categorie.nom == 'xbox' ?
                                            m("img", {
                                                "class": "nav_icon me-3",
                                                "src": "./assets/xbox.png"
                                            }) : gp.categorie.nom == "ps" ?
                                            m("img", {
                                                "class": "nav_icon me-3",
                                                "src": "./assets/ps4.png"
                                            }) : null
                                    ]),
                                    m("td", 
                                        gp.nom
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
                                    ),
                                   m("td", 
                                        m("button", {
                                            "class":"btn btn-outline-primary add_button delete_client",
                                            "type":"button",
                                            onclick(e){
                                                group.list.splice(index, 1);
                                                m.request({
                                                    headers: {
                                                        Authorization: "Bearer " + window.localStorage.jwt,
                                                    },
                                                    method: "DELETE",
                                                    url: server.url + "/groupes/" + gp.id,
                                                })
                                                .then((result)=>{
                                                    console.log(result);
                                                });
                                            }
                                        }, 
                                        m("span.delete_client_span", "-"))
                                   )
                                ])
                        }),
                    ]
                    )
                ]
            )
        ]
    }
}
module.exports = group_mng;