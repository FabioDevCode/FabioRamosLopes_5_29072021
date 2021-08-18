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

        // Entrain de travailler sur la fonction ajoutAuPanier()
        //------------------------------------------------------
        // 1 - Récupérer les données
        // 2 - Créer un objets avec les infos
        // 3 - Récupérer l'objet panier (un Array)
        // 4 - Transformer l'objet des données en String
        // 5 - push la String de l'objet dans le tableau
        // 6 - Actualiser le tableau dans local storage

        function ajoutAuPanier() {

            const buttonSendPanier = document.querySelector("button");

            buttonSendPanier.addEventListener("click", function(e) {
    
                e.preventDefault();
                
                const nameArticleChoisi = document.querySelector("h2");
                const urlArticleChoisi = window.location.search;
                const couleurChoisi = document.querySelector("#color");
                const prixArticleChoisi = document.querySelector(".prixArticle");
                
                const articleChoisi = {
                    name: nameArticleChoisi.textContent,
                    id: urlArticleChoisi.slice(1),
                    color: couleurChoisi.options[couleurChoisi.selectedIndex].text,
                    price: prixArticleChoisi.textContent
                };

                let stringArticleChoisi = JSON.stringify(articleChoisi)

                console.log(stringArticleChoisi);


                setOrGetPanier()
                // fonction récupérer ou créer Panier dans localStorage

                // transformer en boulce qui rajoute les Objets des articles a l'Array du localstorage
                function setOrGetPanier() {

                    if(localStorage.getItem('panierKey') == null) {

                        let panierArray = [];

                        localStorage.setItem("panierKey", panierArray);
                
                    } else {
                
                    };
                    
                }

                

                
                
            }) 
        }

        ajoutAuPanier()
 
    
    }));

}