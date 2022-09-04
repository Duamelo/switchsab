var m = require('mithril');

module.exports = {
    view: function(vnode){
        return m("div", {
            "class": "container"
        },[
            m("div", {
                "class": "row"
            }, [
                m("p", {
                    "class": "text-center"
                }, 
                    "Sélectionnez une catégorie pour afficher tous les postes attribués et disponibles. Cliquez pour supprimer ou ajouter "
                ),
                m("div", {
                    "class": ""
                },
                    vnode.children
                )
            ])
        ]
        )
    }
}