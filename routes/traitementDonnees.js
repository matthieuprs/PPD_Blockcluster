
/*
 * GET la page de chargement/gestion des données.
 */


exports.form = function(req, res){
  res.render('traiterDonnees', {
        listeCorpus: {
          id: '1',
          name: 'Aurelien est trop un noob'
        }
      });
};

/**
* créer la variable
* test si param rechercher
* tabDocs
* res.render('traiterDonnees')
* 
*/
