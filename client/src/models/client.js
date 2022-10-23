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
    },
    user: [],
    getById: function(id){
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/users/" + id,
        })
        .then((result)=>{
            client.user = result;
        });
    },
    client_with_group: {},
    groupes: [],
    getByGroup: function(){
        var client_ids = [], group_ids = [];
        
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/souscriptions",
        })
        .then((result)=>{
            result.map((r, index)=>{
                client_ids.push(r.clientId);
                group_ids.push(r.groupeId);
            });
            var last_filtre = [];
            var filtre = [];
            // console.log(client_ids);
            // console.log(group_ids);

            client.groupes = [];
            group_ids.filter((value, index, self)=> self.indexOf(value) === index).map((g_id, index) =>{
                m.request({
                    headers: {
                        Authorization: "Bearer " + window.localStorage.jwt,
                    },
                    method: "GET",
                    url: server.url + "/groupes/" + g_id,
                })
                .then((result)=>{
                    client.groupes.push(result);
                });
            });

            client_ids.filter((value, index, self)=> self.indexOf(value) === index ).map((c_id, index)=>{
                // console.log(c_id);
                group_ids.filter((value, index, self)=> self.indexOf(value) === index).map((g_id, index)=>{
                    // console.log(g_id);
                    filtre = [];
                    result.map((r, index)=>{
                        if(c_id == r.clientId && g_id == r.groupeId){
                            filtre.push(r);
                        }
                    });
                    if(filtre.length != 0){
                        last_filtre.push(filtre[filtre.length - 1]);
                        // console.log(last_filtre);
                        // console.log(filtre[filtre.length - 1]);
                    }
                });
            });
            var gr = [];
            last_filtre.map((v, index)=>{
                // console.log(v);
                gr = [];
               
                m.request({
                    headers: {
                        Authorization: "Bearer " + window.localStorage.jwt,
                    },
                    background: true,
                    method: "GET",
                    url: server.url + "/users/" + v.clientId,
                })
                .then((result)=>{
                    // console.log(result);
                    last_filtre.filter((value, index, self)=> value.clientId == v.clientId).map((s, index)=>{
                        // console.log(s);
                        // console.log(s.groupeId);
                        gr.push(s.dureeRestante);
                    });
                    client.client_with_group[`${result.pseudo}`] = [...gr];
                    gr = [];
                    console.log(client.client_with_group);
                });
            });
            // console.log(gr);
        });
    }
}
module.exports = client;