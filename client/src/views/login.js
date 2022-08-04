var m = require("mithril");
const jwt = require('../config/jwt');
const {
    mountRoutes
} = require("../mounter");
const User = require('../models/users');


const credential = {
    check: 0,
    error: "",
    errorDisplay() {
        return credential.error != "" ? "" : "none"
    },
    canSubmit() {
        return credential.email != "" && credential.password != ""
    },
    _username: "",
    get username() {
        return this._username;
    },
    set username(value) {
        this._username = value;
    },
    _password: "",
    get password() {
        return this._password;
    },
    set password(value) {
        this._password = value;
    },
    login(e) {
        e.preventDefault();
        for(var user of User){
            if((user.username == credential.username) && (user.password == credential.password)){
                // jwt.token = credential.username + "-" + credential.password;
                mountRoutes(),
                credential.check++;
            }
        }
        if(credential.check == 0){
            credential.error = "Erreur de login"
        }
    }
}

module.exports = {
    view: function(vnode){
        return [
            m("div", {"class": "flex items-center justify-center pt-8"}, [
              m("div", {"class":" p-4 max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"}, 
              m("form", {"class":"space-y-6","action":"#"},
                [
                  m("h5", {"class":" text-center text-xl font-medium text-gray-900 dark:text-white"}, 
                    "LOGO"
                  ),
                  m("div",
                    [
                      m("label", {"class":"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300","for":"text"}, 
                        "Nom d'utilisateur"
                      ),
                      m("input", {
                        "class":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white","type":"text","name":"username","id":"username","placeholder":"duamelo","required":"required",
                            oninput: function(e) {
                            credential.username = e.target.value
                        },
                        value: credential.username
                      })
                    ]
                  ),
                  m("div",
                    [
                      m("label", {"class":"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300","for":"password"}, 
                        "Mot de passe"
                      ),
                      m("input", {
                        "class":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white","type":"password","name":"password","id":"password","placeholder":"Entrez votre code secret","required":"required",
                            oninput: function(e) {
                            credential.password = e.target.value
                        },
                        value: credential.password
                      })
                    ]
                  ),
                  m("div", {"class":"flex items-start"},
                    [
                      m("div", {"class":"flex items-start"},
                        [
                          m("div", {"class":"flex items-center h-5"}, 
                            m("input", {"class":"w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800","id":"remember","type":"checkbox","value":"","required":"required"})
                          ),
                          m("label", {"class":"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300","for":"remember"}, 
                            "Se souvenir de moi "
                          )
                        ]
                      ),
                      m("a", {"class":"ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500","href":"#"}, 
                        "Mot de passe oublié ?"
                      ),
                      m("br")
                    ]
                  ),
                   m("div", {
                    "class":"p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 font-medium","role":"alert",
                    "style": {
                        "display": credential.errorDisplay()
                    }
                  },
                    credential.error
                  ),
                  m("button", {
                    "class":"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800","type":"submit",
                      disabled: !credential.canSubmit(),
                      onclick: credential.login
                  }, 
                    "Se connecter"
                  ),
                  m("div", {"class":"text-sm font-medium text-gray-500 dark:text-gray-300"},
                    [
                      " Pas de compte ? ",
                      m(m.route.Link, {
                        class:"text-blue-700 hover:underline dark:text-blue-500",
                        href:"/register"
                        }, 
                        "Créer un compte"
                      )
                    ]
                  )
                ]
              )
            )
            ])
        ]
    }
}