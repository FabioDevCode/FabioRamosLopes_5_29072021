mainArticle()

function mainArticle() {
    const urlWindow = window.location.search;

    let idArticle = urlWindow.slice(1);

    let urlArticle = `http://localhost:3000/api/teddies/` + idArticle;

    const mainArticle = document.querySelector("#mainArticle");

    fetch(urlArticle)
    .then(response => response.json()

    .then(function(data) {

        const articleOurs = data;
        const colors = data.colors;

        // Converssion du prix
        // const priceEuro = (articleOurs.price / 100).toFixed(2);
        const priceEuro = convertPrice(articleOurs.price);

        // Création dynamique de la page article
        let articleCarte = document.createElement("div");
        articleCarte.classList.add("article");

        articleCarte.innerHTML = 
        `
        <img id="article-img" src=${articleOurs.imageUrl} alt="ours en peluche">

        <section id="bloc-article-text">
            <h2 class="nameArticle">${articleOurs.name}</h2>
            <div class="descriptionArticle"> ${articleOurs.description} </div>
            <div class="prixArticle">${priceEuro} €</div>

            <form>
                <label for="color">Choisir la couleur :</label>
                <select name="color" id="color">
                
                </select>

                <button id=${articleOurs._id}>Ajouter au panier</button>
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
                `<option class="optionColor" value="${colors[numOfColors]}">${colors[numOfColors]}</option>`
            };
        }

        addColors();

        const buttonSendPanier = document.querySelector("button");

        buttonSendPanier.addEventListener("click", function(e) {
            console.log('click');
            console.log(e.composedPath(2));
            const colorArticleC = document.querySelectorAll("option");

        
            e.preventDefault();
        }) 
 
    
    }));

    function errorPage() {
        const urlPageArticle = window.location.search;
        let scearchParams = new URLSearchParams(urlPageArticle);
    
        let couleurChoisi = scearchParams.get("color");
    
        if(couleurChoisi == null) {
    
        } else {
            console.log(couleurChoisi);
        }
    
    }
    
    errorPage()

}