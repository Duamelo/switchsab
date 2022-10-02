var m = require('mithril');
const server = require('../config/server');

const souscription = {
    list: [],

    load_souscription: function(
        client_id, groupe_id, poste_id, s_time, 
        _total_time, hour, minute, second, status, state, poste_name, 
        r_duration, cpt, client_name,
        callback
        ){
        
        souscription.list = [];
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/souscriptions",
        })
        .then((result)=>{
            souscription.list = result;
            m.request({
                headers: {
                    Authorization: "Bearer " + window.localStorage.jwt,
                },
                method: "GET",
                url: server.url + "/users",
            })
            .then((result)=>{
                client_name = result;
                if(status == 'on')
                callback(
                    client_id, groupe_id, poste_id,
                    s_time, _total_time, hour, minute, second, status, state, 
                    poste_name, r_duration, cpt, client_name
                    );
            });
           
        });
    },
}
module.exports = souscription;