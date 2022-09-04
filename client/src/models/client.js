var m = require('mithril');
const server = require('../config/server');

const client = {
    list: [],
    load_client: function(){
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/users",
        })
        .then((result)=>{
            client.list = result;
        });
    }
}

module.exports = client;