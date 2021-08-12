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
    // const priceEuro = (articleOurs.price / 100).toFixed(2);
    const priceEuro = convertPrice(articleOurs.price);

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

    // ajout des couleurs dynamiques en fonction du nombre de couleur
    function addColors() {

        const colorsIndex = document.querySelector('#color');

        let numOfColors = 0;
        
        for (numOfColors; numOfColors < colors.length; numOfColors++ ) {
            colorsIndex.innerHTML += 
            `<option class=${colors[numOfColors]} value=${colors[numOfColors]}>${colors[numOfColors]}</option>`
        };
    }

    addColors();

}));