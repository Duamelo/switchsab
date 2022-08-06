var m = require('mithril');

module.exports = {
    view: function(vnode){
        return m("div", {
            "class": ""
        }, [
            m("img", {
                "class": "",
                "src": "./assets/pc_busy.png"
            }),
            m("div", {
                "class": " mt-3 mb-3"
            },[
                // m("div", {
                //     "class": "col-3"
                // },[
                //         m("img", {
                //             "class": "",
                //             "src": "./assets/avatar_pc1.png"
                //         }),
                // ]),
                m("div", {
                    "class": ""
                },[
                    m("div", {
                        "class": "border border-primary rounded-4 box_name"
                    })
                ])
            ])
        ])
    }
}