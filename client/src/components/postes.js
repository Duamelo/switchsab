var m = require('mithril');
const computer = require('./computer');
const souscription = require('../models/souscriptions');

module.exports = {
    oninit(vnode){
        souscription.load_souscription();
    },
    view: function(vnode){
        return [
            m("div", {"class":"g-3 row row-cols-4"},
            [
                vnode.attrs.posts.map((pt, index)=>{
                    return m("div", {
                        "class": "col"
                    },
                        m(computer, {poste: pt, subscribing: souscription.list})
                    )
                }),
            ]
            )
        ]
    }
}