var m = require('mithril');
const server = require('../config/server');

const tarif = {
    list_by_group: [],
    load_tarif_by_group: function(group_id){
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/tarifs/groupe/"+ group_id,
        })
        .then((result)=>{
            tarif.list_by_group = result;
        });
    },
    
    list: [],
    load_tarif: function(){
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/tarifs",
        })
        .then((result)=>{
            tarif.list = result;
            console.log(tarif.list);
        });
    }
}
module.exports = tarif;