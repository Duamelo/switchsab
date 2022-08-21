var m = require('mithril');
const computer = require('./computer');

module.exports = {
    view: function(vnode){
        return [
            m("div", {"class":"row "},
                [
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                ]
            ),
            m("br"),
            m("div", {"class":"row "},
                [
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                ]
            ),
            m("br"),
            m("div", {"class":"row "},
                [
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                    m("div", {"class":"col"}, 
                    m(computer)
                    ),
                ]
            )
        ]
    }
}