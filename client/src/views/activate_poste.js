var m = require('mithril');
const souscription = require('../models/souscriptions');
const client = require('../models/client');
const computer = require('../components/computer');

const activate_poste = {

    title: "Activer le décompte",
    saveButtonTitle: "activer",
    errorDisplay() {
        return activate_poste.error != "" ? "" : "none"
    },
    error: "",
    _client: "",
    _client_name: "",
    _active_poste : "",
    _subscribing: [],

    _total_time: 0,
    _time : 0,
    _start : 0,
    _state : false,

    save(){
        souscription.list.map((sb, index)=>{
            if((sb.clientId == this._client ) && (sb.groupeId == this._active_poste.groupe.id))
                this._subscribing.push(sb);
        })

        console.log(this._subscribing);

        if(this._subscribing.length != 0){
            var active_subscribing = this._subscribing[this._subscribing.length - 1];

            computer._total_time = active_subscribing.dureeRestante;

            console.log(computer._total_time);

            this._start = Date.now();
            this._state = !this._state;
            if(this._state){
                var timer_id = setInterval(()=>{
                    time = Math.floor((Date.now() - this._start)/1000);
                    computer._total_time--;
                    console.log(computer._total_time);
                    m.redraw();
                }, 1000);
            } 

            console.log(active_subscribing);
        }
        else {
            this.error = "ce client ne dispose pas de forfait dans ce groupe de console";
            var  div = document.getElementById("computer");
            console.log(div);
            m.mount(div, {
                view: function () {
                    return  m(".alert.alert-danger[role='alert']", {
                                "style": {
                                    "display": this.errorDisplay()
                                }
                    }, this.error);
                }
            })

            setTimeout(()=>{
                this.error = "";
                this.errorDisplay();
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
              activate_poste._client = client.list[e.target.value]['id'];
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
module.exports = activate_poste;