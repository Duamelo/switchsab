var m = require('mithril');
const server = require('../config/server');

const poste = {
    list: [],
    addGroup: function(gp){
        poste.list.push(gp);
    },

    load_poste: function(){
        poste.list = [];
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/postes",
        })
        .then((result)=>{
            poste.list = result;
        });
    },
}
module.exports = poste;