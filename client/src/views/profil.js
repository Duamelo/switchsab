var m = require('mithril');


module.exports = {
    view: function(vnode){
        return m("div", {
            "class": ""
        }, [
            m("p", "hello world")
        ])
    }
}