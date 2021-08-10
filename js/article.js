const urlWindow = window.location.search;
let idArticle = urlWindow.slice(1);

let urlArticle = `http://localhost:3000/api/teddies/` + idArticle;


const mainArticle = document.querySelector("#mainArticle");


fetch(urlArticle)
.then(response => response.json()

.then(function(data) {

    const articleOurs = data;
    const colors = data.colors;

    console.table(articleOurs);
    console.table(colors);

    // Converssion du prix
    const priceEuro = (articleOurs.price / 100).toFixed(2);

    // Création dynamique de la page article
    let articleCarte = document.createElement("div");
    articleCarte.classList.add("article");
    articleCarte.innerHTML = `

    <img id="article-img" src=${articleOurs.imageUrl} alt="ours en peluche">

    <section id="bloc-article-text">
        <h2>${articleOurs.name}</h2>
        <div class="description"> ${articleOurs.description} </div>
        <div class="prix">${priceEuro} €</div>

        <form>
            <label for="color">Choisir la couleur :</label>
            <select name="color" id="color">
                <option value=${colors[0]}>${colors[0]}</option>
                <option value="${colors[1]}">${colors[1]}</option>
                <option value="${colors[2]}">${colors[2]}</option>
                <option value="${colors[3]}">${colors[3]}</option>
            </select>

            <label for="quantité">Quantité :</label>
                <select name="quantité" id="quantité">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button>Ajouter au panier</button>
        </form>

        <a href="index.html" class="retour flex items-center  ">
        Retour
        </a>
    </section>
    `;

    mainArticle.appendChild(articleCarte);

}))
// Message d'erreur si problème de serveur
.catch((error) => {
    
    // mainIndex.innerHTML = 
    // `<div class="cardError">
    //     <p> Désolé, nous n'avons pas pu charger l'article.</p> 
    //     <p> Vérifier que le serveur soit bien fonctionnel.</p>
    // </div>`; 
});

{/* <div id="bloc-aricle-img">
<img id="article-img" src=${articleOurs.imageUrl} alt="ours en peluche">
</div> */}