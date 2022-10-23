var m = require("mithril");
const server = require("../config/server");
const client = require("../models/client");
const User = require('../models/users');


const credential = {
    check: 0,
    error: "",
    error_reg: "",

    errorDisplay() {
        return credential.error != "" ? "" : "none"
    },

    error_register(){
      return credential.error_reg != "" ? "" : "none";
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

     _confirm_password: "",
    get confirm_password() {
        return this._confirm_password;
    },
    set confirm_password(value) {
        this._confirm_password = value;
    },
    register(e) {
        e.preventDefault();
        if(credential.password == credential.confirm_password){
          console.log("mot de passe match");
          m.request({
            method: "POST",
            url: server.url + "/auth/register",
            body: {
              pseudo: credential.username,
              password: credential.password,
              type: "client"
            }
          }).then((response) => {
            if (response != undefined) {
              credential.error_reg = "utilisateur " + credential.username + " bien enregistré";
              m.route.set('/login');
              console.log(response);
            }
          }, (error) => {
            if (error.code == 400)
              console.log(error);
          })
        }
        else{
          credential.error = " votre mot de passe ne correspond pas !";
          setTimeout(() => {
            credential.error_reg = "";
            m.redraw();
          }, 5000);
        }
    }
}

module.exports = {
  oninit(vnode){
    client.load_client();
  },
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
            m("p", {"class": "text-center mb-3"}, "Ajouter un compte"),
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
                            "type":"email",
                            "placeholder": "pseudo",
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
                      m("div", {"class":"mb-3"},
                      [
                        m("label", {"class":"form-label"}, 
                          "Confirmation du mot de passe"
                        ),
                        m("input", {
                          "class":"form-control",
                          "type":"password",
                          "placeholder": "Entrez votre mot de passe",
                          oninput: function(e) {
                            credential.confirm_password = e.target.value
                          },
                            value: credential.confirm_password
                        })
                      ]
                    ),
                      m(".alert.alert-danger[role='alert']#check_register", {
                          "style": {
                              "display": credential.error_register(),
                          }
                      }, 
                        credential.error_reg
                      ),
                      m("button", {
                        "class":"btn btn_login mb-3",
                        "type":"submit",
                        // disabled: !credential.canSubmit(),
                        onclick: credential.register
                      }, 
                        "S'enregistrer"
                      ),
                      m("div", {"class":"text-center"},
                        [
                          " Vous avez un compte ? ",
                          m(m.route.Link, {
                            "class":"text-dark",
                            "href":"/login"
                            }, 
                            "Se connecter"
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