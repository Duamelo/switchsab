
var m = require('mithril');
const server = require('../config/server');

const _poste = {
    update: function(start_time, state, name, poste_id, groupe_id, client_id, timer_id, r_duration, cpt, id_subscribing) {
        m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            background: state ? false : true,
            method: "PUT",
            url: server.url + "/postes/"+ poste_id,
            body: {
                nom: name,
                status: state == true ? "on" : "off",
                groupeId: groupe_id,
                start_time: start_time,
                gamer: client_id
            }
        })
        .then((result)=>{
            console.log(result);
            if(!state){
                if(cpt == 1){
                    console.log("cpt====================================1");
                    m.request({
                        headers: {
                            Authorization: "Bearer " + window.localStorage.jwt,
                        },
                        method: "PUT",
                        url: server.url + "/souscriptions/"+ id_subscribing,
                        body: {
                            rest_duration: r_duration,
                        }
                    })
                    .then((result)=>{
                        console.log(result);
                        m.request({
                            headers: {
                                Authorization: "Bearer " + window.localStorage.jwt,
                            },
                            method: "PUT",
                            url: server.url + "/postes/"+ poste_id,
                            body: {
                                nom: name,
                                status: 'off',
                                groupeId: groupe_id,
                                start_time: null,
                                gamer: 0
                            }
                        })
                        .then((result)=>{
                            console.log(result);
                            clearInterval(timer_id);
                        });
                    });
                }
                else if(cpt == 2){
                    console.log("cpt====================================2");
                    m.request({
                        headers: {
                            Authorization: "Bearer " + window.localStorage.jwt,
                        },
                        background: true,
                        method: "PUT",
                        url: server.url + "/souscriptions/" + id_subscribing,
                        body: {
                            rest_duration: 0,
                        }
                    })
                    .then((result)=>{
                        console.log(result);
                        m.request({
                            headers: {
                                Authorization: "Bearer " + window.localStorage.jwt,
                            },
                            background: true,
                            method: "PUT",
                            url: server.url + "/postes/"+ poste_id,
                            body: {
                                nom: name,
                                status: 'off',
                                groupeId: groupe_id,
                                start_time: null,
                                gamer: 0
                            }
                        })
                        .then((result)=>{
                            console.log(result);
                        });
                    });
                }
            }
        });
    }
}
module.exports = _poste;