var m = require('mithril');

function computer(state){
    var time = 0;
    var start = 0;
    var state = false;

    return {
        view: function(vnode){
            return [
                m("div", {
                    "class": ""
                }, [
                   m("div", {
                    "class": "border border-primary rounded-4 poste_object"
                   }, [
                    m("span", {
                        "class": "text_poste",
                    }, 
                    "Poste 1"
                    ),
                    m("br"),
                    m("span", {
                        "class": "text_time",
                    }, 
                        time
                    ),
                   ]),
                    m("div", {
                        "class": " mt-3 mb-3"
                    },[
                        m("div", {
                            "class": ""
                        },[
                            m("div", {
                                "class": "border border-primary rounded-4 box_name",
                                onclick(e){
                                }
                            },[
                                m("div", {
                                    "class": "col-12"
                                },
                                m("input", {
                                    "class":"form-control",
                                    "type":"text",
                                    "placeholder":"        John Doe",
                                    oninput(e){
                                        console.log(e.target.value);
                                        start = Date.now();
                                        state = !state;
                                        if(state){
                                            var timer_id = setInterval(()=>{
                                                time = Math.floor((Date.now() - start)/1000);
                                                m.redraw();
                                            }, 1000);
                                        } 
                                    }
                                })
                                ),
                              ])
                        ]),
                    ])
            ])
            ]
        }
    }
}
module.exports = computer;