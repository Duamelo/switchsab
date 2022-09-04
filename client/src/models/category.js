var m = require('mithril');
const server = require('../config/server');

const categories = {
    list: [],
    load_categories: function(){
        return m.request({
            headers: {
                Authorization: "Bearer " + window.localStorage.jwt,
            },
            method: "GET",
            url: server.url + "/categories",
        })
        .then((result)=>{
            categories.list = result;
            console.log(categories.list);
        });
    }
}
module.exports = categories;