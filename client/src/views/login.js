var m = require("mithril");
const jwt = require('../config/jwt');
const server = require("../config/server");

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
        m.request({
            method: "POST",
            url: server.url + "/auth/log-in",
            body: {
                "pseudo": credential.username,
                "password": credential.password
            }
        }).then((response) => {
            if (response != undefined) {
                jwt.token = response.token
                mountRoutes()
            }
        }, (error) => {
            if (error.code == 400)
                credential.error = "Erreur de login"
        })
    }
}

module.exports = {
    view: function(vnode){
        return [
          m("div", {
            "class": "justify-content-center mt-5"
          }, [
            m("div", {
              "class": "row"
            }, [
              m("div", {
                "class": "col-4"
              }),
              m("div", {
                "class": "col-4"
              },[
                m("p", {"class": "text-center mb-3"}, "Connexion"),
                m("div", {
                  "class": "card"
                },[
                  m("div", {
                    "class": "header_login"
                  }, [
                    m("a", {"class":"navbar-brand","href":"#"},[
                      m("img",{
                          "class": "switchsab_logo",
                          "src": "./assets/logo.jpeg"
                      }),
                      m("span", {
                          "class": "switch"
                      }, 
                      " SWITCH "
                      ),
                      m("span", {
                          "class": "sab"
                      }, 
                      "SAB"
                      ),
                  ]
                  ),
                  ]),
                  m("div", {
                    "class": "card-body"
                  }, [
                    m("div", {
                      "class": "login_form mx-auto"
                    }, [
                        m("form",
                        [
                          m("div", {"class":"mb-3"},
                            [
                              m("label", {"class":"form-label"}, 
                                "Nom d'utilisateur"
                              ),
                              m("input", {
                                "class":"form-control",
                                "type":"text",
                                "placeholder": "John Doe",
                                oninput: function(e) {
                                  credential.username = e.target.value
                                },
                                value: credential.username
                              }),
                            ]
                          ),
                          m("div", {"class":"mb-3"},
                            [
                              m("label", {"class":"form-label"}, 
                                "Mot de passe"
                              ),
                              m("input", {
                                "class":"form-control",
                                "type":"password",
                                "placeholder": "Entrez votre mot de passe",
                                oninput: function(e) {
                                  credential.password = e.target.value
                                },
                                value: credential.password
                              })
                            ]
                          ),
                          m(".alert.alert-danger[role='alert']", {
                            "style": {
                                "display": credential.errorDisplay()
                            }
                          }, credential.error),
                          m("button", {
                            "class":"btn  btn_login mb-3",
                            "type":"submit",
                            // disabled: !credential.canSubmit(),
                            onclick: credential.login
                          }, 
                            "Se connecter"
                          ),
                          m("div", {"class":"text-center"},
                            [
                              " Pas de compte ? ",
                              m(m.route.Link, {
                                "class":"text-dark",
                                "href":"/register"
                                }, 
                                "Créer un compte"
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              m("div", {
                "class": "col-4"
              })
            ])
          ])
        ]
    }
}