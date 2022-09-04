var m = require('mithril');
const Modal = require('./modal/modal');
const client = require('../models/client');
const souscription = require('../models/souscriptions');

const activate_poste = {
    title: "Activer le décompte",
    saveButtonTitle: "activer",

    save(){
        souscription.list.map((sb, index)=>{
            if((sb.clientId == computer._client ) && (sb.groupeId == computer._active_poste.groupe.id))
                computer._subscribing.push(sb);
        })

        console.log(computer._subscribing);

        if(computer._subscribing.length != 0){
            var active_subscribing = computer._subscribing[computer._subscribing.length - 1];

            computer._total_time = active_subscribing.dureeRestante;

            console.log(computer._total_time);

            computer._start = Date.now();
            computer._state = !computer._state;
            if(computer._state){
                var timer_id = setInterval(()=>{
                    time = Math.floor((Date.now() - computer._start)/1000);
                    computer._total_time--;
                    console.log(computer._total_time);
                    m.redraw();
                }, 1000);
            } 

            console.log(active_subscribing);
        }
        else {
            computer.error = "ce client ne dispose pas de forfait dans ce groupe de console";
            var  div = document.getElementById("computer");
            console.log(div);
            m.mount(div, {
                view: function () {
                    return  m(".alert.alert-danger[role='alert']", {
                                "style": {
                                    "display": computer.errorDisplay()
                                }
                    }, computer.error);
                }
            })

            setTimeout(()=>{
                computer.error = "";
                computer.errorDisplay();
                m.redraw();
            }, 3000)
        }
    },

    oninit(){
        client.load_client();
        souscription.load_souscription();
    },

    view(){
        return m("div", {
            "class": "mb-3 mt-3"
        },
        [
            m("label[for=formControlInput1].form-label", 
            " Choisir le client "
          ), 
          m("br"), 
          m("select", {
            "class":"form-select",
            "aria-label":"Default select example",
            onclick: function(e){
              computer._client = client.list[e.target.value]['id'];
              computer._client_name = client.list[e.target.value]['pseudo'];
            }
          },
            [
              client.list.map((cl, index)=>{
                return m("option", {
                  "value": index,
                },
                  cl.pseudo
                )
              })
  
            ]
          )
        ])
    }
}

const computer = {
    errorDisplay() {
        return this.error != "" ? "" : "none"
    },
    error: "",
    _client: "",
    _active_poste : "",
    _subscribing: [],
    _time : 0,
    _start : 0,
    _state : false,


    _total_time: 0,
    _client_name: "",
 
        view: function(vnode){
            var modal;
            var id = vnode.attrs.poste.id;
            return [
                m("div", {
                    "class": ""
                }, [
                    Modal.placeholder,
                   m("div#computer[data-bs-target=#modal][data-bs-toggle=modal]", {
                    "class": "border border-primary rounded-4 poste_object",
                     onclick(e){
                        console.log(e.target);
                        console.log(id);
                        modal = document.getElementById("modal");
                        computer._active_poste = vnode.attrs.poste;
                        m.mount(modal, {
                            view: function () {
                                return m(Modal, activate_poste);
                            }
                        });
                    }
                   }, [
                    m("span", {
                        "class": "text_poste",
                    }, 
                        vnode.attrs.poste.nom
                    ),
                    m("br"),
                    m("span", {
                        "class": "text_time",
                    }, 
                        this._total_time
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
                            },[
                                m("div", {
                                    "class": "col-12"
                                },
                                m("input", {
                                    "class":"form-control",
                                    "type":"text",
                                    "placeholder": this._client_name,
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
module.exports = computer;