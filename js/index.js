mainIndex()

function mainIndex(){

    console.log('Orinoco (Teddies) _ par Fabio R. LOPES');

    const mainIndex = document.querySelector("#mainIndex");
    const msgAccueil = document.querySelector(".msg-accueil");
    const body404 = document.querySelector("body");


    let urlApi = `http://localhost:3000/api/teddies/`;

    fetch(urlApi)
    
    .then(function(response) {

        if (response.status >= 400 && response.status < 600) {
            const codeErreur = response.status;

            body404.innerHTML = 
            `<header class="w-screen h-16 shadow-md ">
                <div class="max-w-screen-xl h-16 mx-auto flex justify-between px-4 items-center ">
                    <div class="h-16 flex items-center ">Orin'ours</div>
                </div>
            </header>

            <main id="main404">

                <div id="bloc404">

                    <div class="text404">
                        <h1>OUPS !</h1>
                        <h2>La page que vous cherchez semble introuvable.</h2>
                        <p>Code erreur : <span>${codeErreur}</span></p>
                        <a href="index.html">Réactualiser</a>
            
                    </div>
            
                    <div class="img404">
                        <img src="./images/teddy4044.jpg" alt="ours triste">
                    </div>

                </div>

            </main>

            <footer>
                <div id="copyright" class="footer_div_centrale">
                    <p><i class="far fa-copyright"></i>2021 - Tous droits réservés - Orinoco & filiales </p>
                </div>
            </footer>`;
        }

        return response.json();
    })
    .then(function(data) {

        const objets = data;
        const nombreDePeluches = objets.length;

        function bientotNouveauProduits() {
            // création d'une carte si le nombre de produits est impair
            if (nombreDePeluches%2) {
                let bientotNewPeluche = document.createElement("bientot");
                bientotNewPeluche.classList.add("bientot");
                bientotNewPeluche.innerHTML = 
                `<div class="text_bientot"> Bientôt <br>
                d'autres peluches<br> 
                aggrandiront <br>la famille</div>`;

                mainIndex.appendChild(bientotNewPeluche);

            } else {
                //rien
            }
        }
        
        function creationCartePourProduits() {
            // Répartition des objets en forme de carte
            for (let objet in objets) {
            
                msgAccueil.classList.add("cache");

                const priceEuro = (objets[objet].price / 100).toFixed(2);
                
                const urlForEachArticle = "article.html" + "?" + objets[objet]._id;
            
                let objetCarte = document.createElement("div");
                objetCarte.classList.add("card");
                objetCarte.innerHTML = 
                `<div class="bloc-img">
                <img src=${objets[objet].imageUrl}>
                </div>
                <h3>${objets[objet].name}</h3>
                <div class="prix">${priceEuro} €</div>
                <a href=${urlForEachArticle} id=${objets[objet]._id} class="lien"> Choisir </a>`;
        
                mainIndex.appendChild(objetCarte);
            }
        }

        creationCartePourProduits()
        bientotNouveauProduits()
        


    })
    // Message d'erreur si problème de serveur
    .catch((error) => {

        function problemeServeur() {
            msgAccueil.classList.add("cache");
            mainIndex.innerHTML = 
            `<div class="cardError">
                <p> Désolé, nous n'avons pas pu charger les articles.</p> 
                <p> Vérifier que le serveur soit bien fonctionnel.</p>
            </div>`; 
        }
        problemeServeur()
        
    });

}