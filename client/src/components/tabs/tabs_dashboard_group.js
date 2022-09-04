var m = require('mithril');
const group = require('../../models/group');

module.exports = {
    oninit(){
     group.load_group();
    },

    view: function(vnode){
        return [
           m("div", {
               "class": "container",
           }, [
               m("div", {
                   "class": "row"
               }, [
                    m("ul", {"class":"nav nav-pills mb-3 ","id":"pills-tab","role":"tablist"},
                    [
                        m("li", {"class":"nav-item","role":"presentation"}, 
                            m("button", {
                                "class":"nav-link active text-dark",
                                "id":"pills-home-tab",
                                "data-bs-toggle":"pill",
                                "data-bs-target":"#pills-home",
                                "type":"button",
                                "role":"tab",
                                "aria-controls":"pills-home",
                                "aria-selected":"true",
                                onclick : function(e){
                                    
                                }
                            }, 
                            "Tous les postes"
                            )
                        ),
                         group.list.map((gp, index)=>{
                            return m("li", {"class":"nav-item","role":"presentation"}, 
                                m("button", {"class":"nav-link text-dark","id":"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile","type":"button","role":"tab","aria-controls":"pills-profile","aria-selected":"false"}, 
                                    gp.nom
                                )
                            )
                         })
                    ]
                )
               ])
           ])
        ]
    }
}