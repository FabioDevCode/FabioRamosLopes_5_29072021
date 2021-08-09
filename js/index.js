console.log('Hello Wolrd');
const mainIndex = document.querySelector("#mainIndex");
const msgAccueil = document.querySelector(".msg-accueil");

let url = `http://localhost:3000/api/teddies/`;

fetch(url)
.then(response => response.json()

.then(function(data) {
    const objets = data;
    console.log(objets);
    
    // Répartition des objets en forme de carte
    for (let objet in objets) {
        // Suppression du message initial.
        msgAccueil.classList.add("none")
        // Converssion du prix en euro pour affichage
        const priceEuro = (objets[objet].price / 100).toFixed(2);

        // Création de cartes
        let objetCarte = document.createElement("div");
        objetCarte.classList.add("card");
        objetCarte.innerHTML = 
        `<div class="bloc-img">
        <img src=${objets[objet].imageUrl}>
        </div>
        <h3>${objets[objet].name}</h3>
        <div class="prix">${priceEuro} €</div>
        <a href="article.html" id=${objets[objet]._id} class="lien" onclick="setData(id)"> Choisir </a>`;

        mainIndex.appendChild(objetCarte);

    }
}))
// Message d'erreur si problème de serveur
.catch((error) => {
    msgAccueil.classList.add("none");
    mainIndex.innerHTML = 
    `<div class="cardError">
        <p> Désolé, nous n'avons pas pu charger les articles.</p> 
        <p> Vérifier que le serveur soit bien fonctionnel.</p>
    </div>`; 
});