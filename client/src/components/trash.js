var retrieve_subscribing = (vnode)=>{
    var _subscribing = [];
    var duration, active_subscribing;
    var client_id = vnode.attrs.poste.gamer;
    var s_time = vnode.attrs.poste.start_time != null ? vnode.attrs.poste.start_time : 0;
    if(s_time != 0){
        console.log("s_timmmmmmmmmmmmmmmmmmmme");
        console.log(s_time);
        var h = Number(s_time[11] + s_time[12]) + 1;
        var m = Number(s_time[14] + s_time[15]);
    }
    console.log('************************************');
    console.log(h + " heures " + m + " minutes");
    console.log(souscription.list);
    console.log("cliennnnnnnnnnnnnnnnnnnnnt id");
    console.log(client_id);
    if(vnode.attrs.poste.status == 'on'){
        souscription.list.map((sb, index)=>{
            if((sb.clientId == client_id) && (sb.groupeId == vnode.attrs.poste.groupe.id)){
                _subscribing.push(sb);
            }
        });

        console.log("_subscribing.lennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnngh");
        console.log(_subscribing.length)
        if(_subscribing.length){
            console.log("dureeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            active_subscribing = _subscribing[_subscribing.length - 1];
            duration = active_subscribing.dureeRestante;
        }
        var s_hour = Math.floor(duration / 60);
        var s_minute = duration - (60 * s_hour);

        hour = new Date().getHours() - h;
        minute = Math.abs(new Date().getMinutes() - m);
        second = 59;
        console.log('---------------------------------------');
        console.log(hour + " heures " + minute   + " minutes");
        if( (s_hour - hour == 0) && (s_minute - minute == 0)){
            hour = 0;
            minute = 0;
            second = 0;
            m.request({
                headers: {
                    Authorization: "Bearer " + window.localStorage.jwt,
                },
                background: true,
                method: "PUT",
                url: server.url + "/souscriptions/"+ active_subscribing.id,
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
            });
          
            _total_time = show_time(hour, minute, second);
        }
        else{
            hour = s_hour - hour;
            minute = s_minute - minute;
            second = 59;
            console.log(s_hour + " aaaaaaaaaa " + s_minute);
            // s_time != 0 ? 
            //     _total_time = show_time(hour, minute, second):
                    _total_time = show_time(0, 0, 0) ;
        }
    }
}