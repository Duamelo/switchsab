var m = require('mithril');
const server = require('../config/server');

const souscription = {
    list: [],

    load_souscription: function(){
        souscription.list = [];
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/souscriptions",
        })
        .then((result)=>{
            console.log(result);
            souscription.list = result;
        });
    },
}
module.exports = souscription;