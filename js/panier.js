affichePanier()

function affichePanier() {

    let getPanier = localStorage.getItem("panierKey");
    let numGetPanier = JSON.parse(getPanier);
    console.log(numGetPanier.length);
    if (numGetPanier.length == 0) {
        const messagePanierVide = document.querySelector(".paniervide ")
        messagePanierVide.classList.remove("cache");
    }


    for (let articleChoisi in numGetPanier) {

        let articlePanier = numGetPanier[articleChoisi];
        let convertInArray = JSON.parse(articlePanier);
        
        const tableauPanier = document.querySelector("#liste-panier");

        let carteFormatPanier = document.createElement("div");
        carteFormatPanier.classList.add("articles-panier")
        carteFormatPanier.innerHTML = 
        `
        <div class="name"> ${convertInArray.name} </div>
        <div class="color"> ${convertInArray.color} </div>
        <div class="price"> ${convertInArray.price} </div>
        <div class="delete"><i class="fas fa-trash-alt"></i></div>
        `;

        tableauPanier.appendChild(carteFormatPanier);

    }

    console.log(numGetPanier);

    const allPrices = document.querySelectorAll(".price"); 
    const arrayAllPrices = Array.from(allPrices)

    const nbPrices = arrayAllPrices.length
    let itérations = 0;
    let totalPanier = 0;
    
    for (itérations; itérations < nbPrices; itérations++) {
        let strBasis = arrayAllPrices[itérations].textContent;
        let newStrBasis = strBasis.substring(0, strBasis.length - 2);
        let convertStrInNum = parseInt(newStrBasis);

        totalPanier += convertStrInNum;
    }

    const affichageTotal = document.querySelector("#panierTotaux");
    let blocTotal = document.createElement("div");
    blocTotal.innerHTML =
    `<div>TOTAL : ${totalPanier} €</div>`;

    affichageTotal.appendChild(blocTotal);

}