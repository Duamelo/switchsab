var m = require("mithril");

function item_list(){

    var time = 0;
    var start = 0;
    var state = false;

    return {
        view(vnode){
            return [
                m("div", {
                    "class": "container"
                },[
                    m("div", {
                        "class": "row alert alert-primary text-dark","role":"alert"
                    }, [
                        m("div", {
                            "class": "col-2"
                        },
                         vnode.attrs.post.nom
                        ),
                        m("div", {
                            "class": "col-3"
                        },[
                            m("span",{
                                "class": ""
                            } ,
                            "État : "
                            ),
                            m("span", {
                                "class": "",
                            }, 
                                vnode.attrs.post.status ? "on" : "off"
                            )
                        ]
                        ),
                        m("div", {
                            "class": "col-2"
                        },[
                            m("img",{
                                "class": "icon_dash_profil",
                                "src": "./assets/profil2.png"
                            }),
                            m("span", {
                                "class": "",
                            }, "John Doe")
                        ]
                        ),
                        m("div", {
                            "class": "col-2"
                        },[
                            m("img",{
                                "class": "icon_dash_clock",
                                "src": "./assets/clock.png"
                            }),
                            m("span", {
                                "class": "",
                            }, 
                                time
                            )
                        ]
                        ),
                        m("div", {
                            "class": "col-3"
                        },[
                            m("span", {"class":"form-check form-switch"}, 
                                 m("input", {
                                     "class":"form-check-input",
                                     "type":"checkbox",
                                     "role":"switch",
                                     "id":"flexSwitchCheckDefault"
                                })
                            )
                        ]),
                    ])
                ])
            ]
        }
    }
   
}

module.exports = {
    view: function(vnode){
        return [
        vnode.attrs.posts.map((pt, index)=>{
            return m(item_list, {post: pt})
        })
        ]
    }
}