var m = require('mithril');
const server = require('../config/server');

const group = {
    list: [],
    addGroup: function(gp){
        group.list.push(gp);
    },

    load_group: function(){
        group.list = [];
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/groupes",
        })
        .then((result)=>{
            group.list = [];
            group.list = result;
            // console.log(group.list) ;
        });
    },
}
module.exports = group;