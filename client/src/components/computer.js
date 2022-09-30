var m = require('mithril');
const server = require('../config/server');
const souscription = require('../models/souscriptions');
const _poste = require('../models/update_poste');
const { t_sidebar_dash } = require('./sidebar/sidebar_dashboard');


function show_time(h, m, s){
    if( h < 10 )
        h = '0' + h;
    if( m < 10 )
        m = '0' + m;
    if( s < 10)
        s = '0' + s;
    return h + ':' + m + ':' + s;
};



const perform_count = (hour, minute, second) => {
    var start = Date.now();
    var timer_id = setInterval(()=>{
        console.log(Math.floor((Date.now() -start)/1000));
        if(second != 0)
            second--;
        if((minute == 0) && (second == 0) && (hour != 0)){
            second = 59;
            minute = 59;
            if(hour >= 1)
                hour--;
        }
        else if((second == 0) && (minute == 0) && (hour == 0)){
            state = false;
            clearInterval(timer_id);
        }
        else if(second == 0){
            second = 59;
            if(minute>=1)
                minute--;
        }
        _total_time =  show_time(hour, minute, second);
        m.redraw();
    }, 1000);
}

function computer(status){
    var hour = 0, minute = 0, second = 0, test = 0;
    var r_duration, cpt;
    var start_time;
    var _total_time;
    var state = false;
    var error = "";
    var errorDisplay = ()=> {
        return error != "" ? "" : "none"
    };
    var _subscribing = [];
    var timer_id;

    return {
        oninit(vnode){
            souscription.load_souscription(); 
            _subscribing = [];
            var duration, active_subscribing;
            var start_time = vnode.attrs.poste.start_time ? vnode.attrs.poste.start_time : 0;
            var h = Number(start_time[11] + start_time[12]) + 1;
            var m = Number(start_time[14] + start_time[15]);
            console.log(h + " heures " + m + " minutes");
            var subscribing = vnode.attrs.subscribing;
            var client_id = vnode.attrs.poste.gamer;
            if(vnode.attrs.poste.status == 'on'){
                subscribing.map((sb, index)=>{
                    if((sb.clientId == client_id) && (sb.groupeId == vnode.attrs.poste.groupe.id)){
                        _subscribing.push(sb);
                    }
                });
                if(_subscribing.length){
                    active_subscribing = _subscribing[_subscribing.length - 1];
                    duration = active_subscribing.dureeRestante;
                }
                var s_hour = Math.floor(duration / 60);
                var s_minute = duration - (60 * s_hour);

                hour = new Date().getHours() - h;
                minute = Math.abs(new Date().getMinutes() - m);
                second = 59;
                if( (s_hour - hour == 0) && (s_minute - minute == 0)){
                    hour = 0;
                    minute = 0;
                    second = 0;
                    m.request({
                        headers: {
                            Authorization: "Bearer " + window.localStorage.jwt,
                        },
                        method: "PUT",
                        url: server.url + "/souscription/"+ active_subscribing.id,
                        body: {
                            'dureeRestante': 0,
                        }
                    })
                    .then((result)=>{
                        console.log(result);
                    });
                    m.request({
                        headers: {
                            Authorization: "Bearer " + window.localStorage.jwt,
                        },
                        method: "PUT",
                        url: server.url + "/postes/"+ vnode.attrs.poste.id,
                        body: {
                            nom: vnode.attrs.poste.nom,
                            status: 'off',
                            groupeId: vnode.attrs.poste.groupe.id,
                            start_time: null,
                            gamer: 0
                        }
                    })
                    .then((result)=>{
                        console.log(result);
                    });
                    _total_time = show_time(hour, minute, second);
                }
                else{
                    hour = s_hour - hour;
                    minute = s_minute - minute;
                    second = 59;
                    test = 1;
                }
            }
        },

        view: function(vnode){
            return [
                m("div", {
                    "class": ""
                }, [
                   m("div#computer", {
                    "class": "border border-primary rounded-4 poste_object",
                    onclick(e){
                        if(!t_sidebar_dash.id_client){
                            var div = document.getElementById("sub_nav");
                            error = "veuillez choisir le client"
                            m.mount(div, {
                                view: function(){
                                    return  m("div", {
                                        "class": "row"
                                    }, [
                                        m("div", {
                                            "class": "col-4"
                                        }),
                                        m("div", {
                                            "class": "col-4"
                                        }, [
                                            m(".alert.alert-danger[role='alert'].no_client", {
                                                "style": {
                                                    "display": errorDisplay()
                                                }
                                    }, error)
                                        ]),
                                    m("div", {
                                        "class": "col-4"
                                    })
                                    ])
                                }
                            })
                            var id_timer = setTimeout(()=>{
                                error = "";
                                errorDisplay();
                                m.redraw();
                                clearTimeout(id_timer);
                            }, 3000);
                        }
                        else{
                            var active_subscribing;
                            _subscribing = [];
                            souscription.list.map((sb, index)=>{
                                if((sb.clientId == t_sidebar_dash.id_client) && (sb.groupeId == vnode.attrs.poste.groupe.id)){
                                    _subscribing.push(sb);
                                }
                            });
                            if(_subscribing.length){
                                active_subscribing = _subscribing[_subscribing.length - 1];

                                var duration = active_subscribing.dureeRestante;

                                state = !state;

                                if( state){
                                    console.log("debuggggggggggggggggggggggggggggggggggg");
                                    console.group(state);
                                    hour = Math.floor(duration / 60);
                                    minute = duration - (60 * hour);
                                    second = 59;

                                    var start = Date.now();
                                    start_time = new Date();
                                    var sec;
                                    timer_id = setInterval(()=>{
                                        sec = Math.floor((Date.now() -start)/1000);
                                        console.log(sec);
                                        console.log(start_time.getHours() + " heures " + start_time.getMinutes() + " minutes ");
                                        if(second != 0)
                                            second--;
                                        if((minute == 0) && (second == 0) && (hour != 0)){
                                            second = 59;
                                            minute = 59;
                                            if(hour >= 1)
                                                hour--;
                                        }
                                        else if((second == 0) && (minute == 0) && (hour == 0)){
                                            state = false;
                                            clearInterval(timer_id);
                                        }
                                        else if(second == 0){
                                            second = 59;
                                            if(minute >= 1)
                                                minute--;
                                        }
                                        _total_time =  show_time(hour, minute, second);
                                        _poste.update(start_time, state, vnode.attrs.poste.nom, vnode.attrs.poste.id, vnode.attrs.poste.groupe.id, t_sidebar_dash.id_client, timer_id, r_duration, cpt, active_subscribing.id);
                                    }, 1000);
                                }
                                else{
                                    console.log("nooooooooooooooooooooooooooooooooooooooooooooooooooo");
                                    console.group(state);
                                    var current_time;

                                    current_time = new Date();

                                    var h_duration = current_time.getHours() - start_time.getHours();
                                    var m_duration = current_time.getMinutes() - start_time.getMinutes();

                                    console.log(current_time.getHours() + "current hours--------------------");
                                    console.log(current_time.getMinutes() + "current minutes--------------------");

                                    console.log(h_duration + " en heures" + m_duration + "en minutes " + "debugggfgggggggggggg");

                                    var t_hour = Math.floor(duration / 60);
                                    var t_minute = duration - (60 * t_hour);

                                    if(t_hour - h_duration >= 0 || (t_minute - m_duration >= 0)){
                                        cpt = 1;
                                        var h_rest = t_hour - h_duration;
                                        var m_rest = t_minute - m_duration;
                                        r_duration = m_rest + h_rest * 60;

                                        setTimeout(()=>{
                                            souscription.load_souscription();
                                        }, 3000);
                                    }
                                    else{
                                        cpt = 2;
                                    }
                                    // _total_time = show_time(0,0,0);
                                }
                            }
                        }
                    }
                   }, [
                    m("span", {
                        "class": "text_poste",
                    }, 
                        `${vnode.attrs.poste.nom}`
                    ),
                    m("br"),
                    m("span", {
                        "class": "text_time",
                    }, 
                        _total_time
                    ),
                   ]),
                    m("div", {
                        "class": " mt-3 mb-3"
                    },[
                        m("div", {
                            "class": ""
                        },[
                            m("div", {
                                "class": "border border-primary rounded-4 box_name",
                                onclick(e){
                                }
                            },[
                                m("div", {
                                    "class": "col-12"
                                },
                                m("input", {
                                    "class":"form-control",
                                    "type":"text",
                                    "placeholder":"        John Doe",
                                    oninput(e){
                                       
                                    }
                                })
                                ),
                              ])
                        ]),
                    ])
            ])
            ]
        }
    }
}
module.exports = computer;