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
    _email: "",
    get email() {
        return this._email;
    },
    set email(value) {
        this._email = value;
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
            if((user.email == credential.email) && (user.password == credential.password)){
                jwt.token = credential.email + "-" + credential.password;
                mountRoutes(),
                check++;
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
            m("div", {"class":"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"}, 
  m("div", {"class":"max-w-md w-full space-y-8"},
    [
      m("div",
        [
          m("img.logo-login", {"class":"mx-auto h-12 w-auto","src":"logoiwe.svg","alt":"iwé"}),
          m("h2", {"class":"mt-6 text-center text-3xl font-extrabold text-gray-900"}, 
            "Connexion"
          ),
          m("p", {"class":"mt-2 text-center text-sm text-gray-600"},
            [
            //   " Or ",
            //   m("a", {"class":"font-medium text-indigo-600 hover:text-indigo-500","href":"#"}, 
            //     " start your 14-day free trial "
            //   )
            ]
          )
        ]
      ),
      m("form", {"class":"mt-8 space-y-6","action":"#","method":"POST"},
        [
          m("div", {"class":" shadow-sm space-y-4"},
            [
              m("div",
                [
                  m("label", {"class":"sr-only","for":"email-address"}, 
                    "Email address"
                  ),
                  m("input", {
                    "class":"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm","id":"email-address","name":"email","type":"email","autocomplete":"email","required":"required","placeholder":"Email address",
                        oninput: function(e) {
                            credential.email = e.target.value
                        },
                        value: credential.email
                })
                ]
              ),
              m("div",
                [
                  m("label", {"class":"sr-only","for":"password"}, 
                    "Password"
                  ),
                  m("input", {
                    "class":"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm","id":"password","name":"password","type":"password","autocomplete":"current-password","required":"required","placeholder":"Password",
                        oninput: function(e) {
                            credential.password = e.target.value
                        },
                        value: credential.password
                })
                ]
              )
            ]
          ),
          m("div", {"class":"flex items-center justify-between"},
            [
              m("div", {"class":"flex items-center"},
                [
                  m("input", {"class":"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded","id":"remember-me","name":"remember-me","type":"checkbox"}),
                  m("label", {"class":"ml-2 block text-sm text-gray-900","for":"remember-me"}, 
                    " Remember me "
                  )
                ]
              ),
              m("div", {"class":"text-sm"}, 
                m("a", {"class":"font-medium text-indigo-600 hover:text-indigo-500","href":"#"}, 
                  " Forgot your password? "
                )
              ),
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
          m("div", 
            m("button", {
                "class":"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500","type":"submit",
                disabled: !credential.canSubmit(),
                onclick: credential.login

            },
              [
                m("span", {"class":"absolute left-0 inset-y-0 flex items-center pl-3"}, 
                  m("svg", {"class":"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"}, 
                    m("path", {"fill-rule":"evenodd","d":"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})
                  )
                ),
                " Se connecter "
              ]
            )
          )
        ]
      )
    ]
  )
)
        ]
    }
}