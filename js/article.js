let articleNameStorage = localStorage.getItem('articleSolo')
let urlArticle = `http://localhost:3000/api/teddies/` + articleNameStorage;

const mainArticle = document.querySelector("#mainArticle");


fetch(urlArticle)
.then(response => response.json()

.then(function(data) {
    const articleOurs = data;
    console.log(articleOurs);
    console.log(articleOurs.name);
    console.log(urlArticle);
    console.log(articleOurs.colors.length);
    
    // Création dynamique de la page article

    // let articleCarte = document.createElement("div");
    // articleCarte.classList.add("article");
    // articleCarte.innerHTML = `
    
    
    
    
    
    
    
    // `;
    // mainArticle.appendChild(articleCarte);






}))
// Message d'erreur si problème de serveur
.catch((error) => {
    
    // mainIndex.innerHTML = 
    // `<div class="cardError">
    //     <p> Désolé, nous n'avons pas pu charger l'article.</p> 
    //     <p> Vérifier que le serveur soit bien fonctionnel.</p>
    // </div>`; 
});