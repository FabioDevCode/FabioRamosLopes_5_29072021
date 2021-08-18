// fonction de converssion du prix
function convertPrice(price) {
    return (price / 100);
}

// fonction récupérer ou créer Panier dans localStorage
function setOrGetPanier() {

    if(localStorage.getItem('panierKey') == null) {

        let panierArray = [];

        localStorage.setItem("panierKey", panierArray);
 
    } else {
 
    };
    
}