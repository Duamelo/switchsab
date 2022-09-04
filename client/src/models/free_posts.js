var m = require('mithril');
const server = require('../config/server');

const free_poste = {
    list: [],
    load_free_post: function(){
        return  m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/freepost",
          })
          .then((response) => {
              if (response != undefined) {
                console.log(response);
                free_poste.list = response
            }
          }, (error) => {
              if (error.code == 400)
                console.log(error);
          });
    }
}
module.exports = free_poste;