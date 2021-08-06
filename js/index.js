console.log('Hello Wolrd');
const mainIndex = document.querySelector("#mainIndex");
const msgAccueil = document.querySelector(".msg-accueil");

let url = `http://localhost:3000/api/teddies/`;

fetch(url)
.then(response => response.json()

.then(function(data) {
    const objets = data;
    console.log(objets);
    // teste de répartition des éléments
    for (let objet in objets) {

        msgAccueil.classList.add("none")
        let objetCarte = document.createElement("div");
        objetCarte.classList.add("card");
        objetCarte.innerHTML = `
        <div class="bloc-img">
        <img src=${objets[objet].imageUrl}>
        </div>
        <h3>${objets[objet].name}</h3>
        <a href="article.html"> Voir plus </a>
        `;

        mainIndex.appendChild(objetCarte);
        ;
    }
}))

// Message d'erreur si problème avec l'adresse de l'API 
.catch((error) => {
    msgAccueil.classList.add("none");
    mainIndex.innerHTML = 
    `<div class="cardError">
        <p> Désolé, nous n'avons pas pu charger les articles.</p> 
        <p> Vérifier si l'adresse de l'API est correcte puis réessayez.</p>
    </div>`;
    
});
