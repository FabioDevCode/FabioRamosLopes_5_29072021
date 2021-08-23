pagePanier()
nbArticlesDansPanier();

function pagePanier() {

    let getPanier = localStorage.getItem("panierKey");
    let numGetPanier = JSON.parse(getPanier);
    
    if (numGetPanier.length == 0) {
        const messagePanierVide = document.querySelector(".paniervide ")
        messagePanierVide.classList.remove("cache");
    }

    for (let articleChoisi in numGetPanier) {
    
        let articlePanier = numGetPanier[articleChoisi];
        let convertInArray = JSON.parse(articlePanier);
        
        const tableauPanier = document.querySelector("#liste-panier");

        let carteFormatPanier = document.createElement("div");
        carteFormatPanier.classList.add("articles-panier-beta")
        carteFormatPanier.innerHTML = 
        `
        <div class="name"> ${convertInArray.name} </div>
        <div class="color"> ${convertInArray.color} </div>
        <div class="price"> ${convertInArray.price} </div>
        `;

        tableauPanier.appendChild(carteFormatPanier);

    }

    addButtonDelete();

    function addButtonDelete() {

        numOfArticles = numGetPanier.length;
        let i = 0

        for (i; i < numOfArticles; i++) {
            let artPanier = document.querySelector(".articles-panier-beta");
            artPanier.innerHTML += 
            `<div class="delete" id=${i} onclick="deleteArt(id)"><i class="fas fa-trash-alt"></i></div>`;
            artPanier.classList.add("articles-panier");
            artPanier.classList.remove("articles-panier-beta");
        }
    }

    const allPrices = document.querySelectorAll(".price"); 
    const arrayAllPrices = Array.from(allPrices)

    const nbPrices = arrayAllPrices.length
    let totalPanier = 0;
    
    for (let j = 0; j < nbPrices; j++) {
        let strBasis = arrayAllPrices[j].textContent;
        let newStrBasis = strBasis.substring(0, strBasis.length - 2);
        let convertStrInNum = parseInt(newStrBasis);

        totalPanier += convertStrInNum;
    }

    const affichageTotal = document.querySelector("#panierTotaux");
    let blocTotal = document.createElement("div");
    blocTotal.innerHTML =
    `<div><span>TOTAL :</span> ${totalPanier} €</div>`;

    affichageTotal.appendChild(blocTotal);

}


function deleteArt(indexDel) {

    let getPanierForDel = JSON.parse(localStorage.getItem("panierKey"));
    getPanierForDel.splice(indexDel, 1);
    const newPanier = JSON.stringify(getPanierForDel);
    localStorage.setItem("panierKey", newPanier);
    
    alert("Votre article à bien été supprimé");
    setTimeout(700);
    window.location.reload();
    
}


function nbArticlesDansPanier() {

    let getPanier = localStorage.getItem("panierKey");
    let arrayGetPanier = JSON.parse(getPanier);
    const nbArticleInPanier = arrayGetPanier.length;
    if (nbArticleInPanier == 1) {
        let titrePanier = document.querySelector(".panier-art-titre");
        titrePanier.innerText = `Votre article`
    } else if (nbArticleInPanier > 1) {
        let titrePanier = document.querySelector(".panier-art-titre");
        titrePanier.innerText = `Vos ${nbArticleInPanier} articles`
    } else {

    }
}
