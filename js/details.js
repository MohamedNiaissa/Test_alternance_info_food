let titreItem = document.querySelector(".titreItem");

titreItem.innerHTML = localStorage.getItem("nom");

let imgProduit = document.querySelector(".img_produit");

imgProduit.setAttribute("src",localStorage.getItem("img"))

let desc = document.querySelector(".description");

let paraUn = document.createElement("p");
let paraDeux = document.createElement("p");

let detailsItem = document.querySelector(".detailsItem")

paraUn.innerHTML = "Catégories : " + localStorage.getItem("categories");
paraDeux.innerHTML = "Ancien packaging : " + localStorage.getItem("Ancien packaging")

desc.appendChild(paraUn);
desc.appendChild(paraDeux);

let paraLorem = document.createElement("p");
paraLorem.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolores fugiat temporibus assumenda aliquam modi eum quisquam dicta nisi repellendus perferendis iure qui vero doloremque libero, magnam laborum nesciunt maxime.Laboriosam enim rerum repellat in accusamus libero, dolor deserunt, soluta praesentium odio veritatis quasi incidunt laborum doloribus laudantium labore similique? Delectus voluptates impedit perspiciatis qui aliquam! Consequuntur eveniet nisi neque.Eaque est, voluptatum nam qui quasi voluptatem aspernatur molestiae ducimus incidunt earum iusto placeat sed alias debitis maxime possimus dolores consequatur itaque! Doloribus sint quibusdam enim provident sunt? Saepe, praesentium!";
paraLorem.style.textAlign = "center";
paraLorem.style.paddingLeft = "266px";
paraLorem.style.paddingRight = "266px"

detailsItem.appendChild(paraLorem);

