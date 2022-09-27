var m = require('mithril');
const server = require('../config/server');
const souscription = require('../models/souscriptions');
const { t_sidebar_dash } = require('./sidebar/sidebar_dashboard');

var hour = 0, minute = 0, second = 0;

function show_time(h, m, s){
    if( h < 10 )
        h = '0' + h;
    if( m < 10 )
        m = '0' + m;
    if( s < 10)
        s = '0' + s;
    return h + ':' + m + ':' + s;
};

function computer(status){
    console.log(status);
    var time = 0;
    var _total_time;
    var start = 0;
    var state = false;
    var error = "";
    var errorDisplay = ()=> {
        return error != "" ? "" : "none"
    };
    var _subscribing = [];

    return {
        oninit(vnode){
            _total_time = "";
            souscription.load_souscription();
            console.log(vnode);
            console.log(window.localStorage.getItem(`${vnode.attrs.idx}`));
            if(window.localStorage.getItem(`${vnode.attrs.poste.id}`) != null){
                var data = JSON.parse( "[" + window.localStorage.getItem(`${vnode.attrs.poste.id}`) + "]");
                console.log("oui");
                hour = data[0];
                minute = data[1];
                second = data[2];
                console.log(data[0] + " " + data[1] + " " + data[2] )
                _total_time =  show_time(hour, minute, second);
            }
            else{
                hour = 0;
                minute = 0;
                second = 0;
                _total_time =  show_time(hour, minute, second);
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
                        console.log("id client");
                        console.log(t_sidebar_dash.id_client);
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
                            souscription.list.map((sb, index)=>{
                                console.log(vnode.attrs);
                                if((sb.clientId == t_sidebar_dash.id_client) && (sb.groupeId == vnode.attrs.poste.groupe.id)){
                                    _subscribing.push(sb);
                                }
                            });

                            if(_subscribing.length){
                                active_subscribing = _subscribing[_subscribing.length - 1];

                                var duration = active_subscribing.dureeRestante;

                                hour = Math.floor(duration / 60);
                                minute = duration - (60 * hour);
                                second = 59;
                                state = !state;
                                
                                start = Date.now();
                                var timer_id = setInterval(()=>{
                                    time = Math.floor((Date.now() - start)/1000);
                                    console.log(time);
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
                                    m.request({
                                        headers: {
                                            Authorization: "Bearer " + window.localStorage.jwt,
                                        },
                                        method: "PUT",
                                        url: server.url + "/postes/"+ vnode.attrs.poste.id,
                                        body: {
                                            nom: vnode.attrs.poste.nom,
                                            status: state == true ? "on" : "off",
                                            hour: hour,
                                            minute: minute,
                                            second: second,
                                            groupeId: vnode.attrs.poste.groupe.id
                                        }
                                    })
                                    .then((result)=>{
                                        console.log(result);
                                    });
                                    window.localStorage.setItem(`${vnode.attrs.poste.id}`, [hour, minute, second, t_sidebar_dash.id_client]);
                                    _total_time =  show_time(hour, minute, second);
                                    m.redraw();
                                }, 1000);
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