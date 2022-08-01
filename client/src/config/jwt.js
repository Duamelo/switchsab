var jwt_decode = require('jwt-decode');

const jwt = {
    get token() {
        if (window.localStorage.jwt != undefined)
            return jwt_decode(window.localStorage.jwt, {
                payload: true
            })
        return undefined;
    },
    set token(value) {
        window.localStorage.setItem('jwt', value);
    },
}

module.exports = jwt;