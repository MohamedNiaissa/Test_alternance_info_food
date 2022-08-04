
let url = "https://world.openfoodfacts.org?json=true"
let headers = {};


async function displayItems(url){

    try {
        let prods = document.querySelector(".Produits");
        prods.innerHTML = " ";

    } catch (error) {
        console.log(error)
    }
    
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    }).then((response) => {
        
        return response.json().then((data) => {
                let prods = document.querySelector(".Produits");
                console.log(data)
        
                for(let i = 0; i<data.products.length; i++){
                    let divProd = document.createElement('div');
                    divProd.className = "divProd";
    
                    let imgProd = document.createElement("img");
                    imgProd.className = "imgProd";
                    imgProd.setAttribute("src",data.products[i].image_front_small_url);
                    
                    let nomProd = document.createElement('p');
                    nomProd.className = "nomProd";
                    nomProd.innerHTML = data.products[i].brands;
    
                    let btnESP = document.createElement('a');
                    btnESP.className = "ESP";
                    btnESP.innerHTML = "Plus d'informations";
                    btnESP.setAttribute("href","details.html");
    
                    prods.appendChild(divProd);
                    divProd.appendChild(imgProd);
                    divProd.appendChild(nomProd)
                    divProd.appendChild(btnESP);
    
    
                    btnESP.addEventListener("click",function(){
                        // alert("ici")
                        // localStorage.clear();
                        window.localStorage.clear();
    
                        localStorage.setItem("nom",data.products[i].brands);
                        localStorage.setItem("img",data.products[i].image_front_small_url);
                        localStorage.setItem("categories",data.products[i].categories);
                        localStorage.setItem("Ancien packaging", data.products[i].packaging_old)

                        
                    })
    

                }
    
    
            })
    })
}

displayItems(url);
// let prodUSA = document.querySelector(".prodUSA");



async function produitFrance() {
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let prodFrance = document.querySelector(".prodFrance");
          prodFrance.addEventListener('click',function(){
              url = "https://fr.openfoodfacts.org?json=true"
              displayItems(url)
          })

      }, 1000)
    });
  
  
  }
  
  async function produitUSA() {
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let prodUSA = document.querySelector(".prodUSA");
            prodUSA.addEventListener('click',function(){
              url = "https://us.openfoodfacts.org?json=true"
              displayItems(url)
          })

      }, 1000)
    });
  
  
  }

 async function reset(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let reset = document.querySelector(".reset");
            reset.addEventListener('click',function(){
              url = "https://world.openfoodfacts.org?json=true"
              displayItems(url)
          })

      }, 1000)
    });

 }


  produitFrance();
  produitUSA();
  reset();

// Desc();