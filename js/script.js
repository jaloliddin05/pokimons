let elPocemonsList = document.querySelector(".pocemons-list");
//.. el variables  above


for(let pocemon of pokemons){
    let pocemonCard = document.createElement("li");
    let pocemonImageBox = document.createElement("div");
    let pocemonImg = document.createElement("img");
    let pocemonCardBody = document.createElement("div");
    let pocemonCardBodyTop = document.createElement("div");
    let pocemonName = document.createElement("h3");
    let pocemonHeartImg = document.createElement("img");
    let pocemonDesc = document.createElement("p");
    let pocemonCardBodyBottom = document.createElement("div");
    let pocemonWeight = document.createElement("p");
    let pocemonHeight = document.createElement("p");

    // creating html element  in JS  above ↑.

    pocemonImageBox.appendChild(pocemonImg);
    //....
    pocemonCardBody.appendChild(pocemonCardBodyTop);
    pocemonCardBody.appendChild(pocemonDesc);
    pocemonCardBody.appendChild(pocemonCardBodyBottom);
    //....
    pocemonCardBodyTop.appendChild(pocemonName);
    pocemonCardBodyTop.appendChild(pocemonHeartImg);
    //.....
    pocemonCardBodyBottom.appendChild(pocemonWeight);
    pocemonCardBodyBottom.appendChild(pocemonHeight);
    //....
    pocemonCard.appendChild(pocemonImageBox);
    pocemonCard.appendChild(pocemonCardBody);
    //.......
    elPocemonsList.appendChild(pocemonCard);

    // placement elements  above ↑

    pocemonCard.setAttribute("class","pocemon-item bg-white");
    pocemonImageBox.setAttribute("class","pocemon-img-box w-100");
    pocemonImg.setAttribute("src", `${pocemon.img}`);
    pocemonImg.setAttribute("width",157 );
    pocemonImg.setAttribute("height",157 );
    pocemonCardBody.setAttribute("class","pocemon-item-body");
    pocemonCardBodyTop.setAttribute("class","d-flex align-items-center w-100 justify-content-between");
    pocemonName.setAttribute("class","pocemon-heading");
    pocemonHeartImg.setAttribute("src", `./images/heart.svg`);
    pocemonHeartImg.setAttribute("width",30 );
    pocemonHeartImg.setAttribute("height",30 );
    pocemonDesc.setAttribute("class","pocemon-candy");
    pocemonCardBodyBottom.setAttribute("class","d-flex align-items-center w-100 pocemon-item-bottom");
    pocemonWeight.setAttribute("class","pocemon-weight");
    pocemonHeight.setAttribute("class","pocemon-height");

    // setting atributes to elements above ↑

    pocemonName.innerHTML = pocemon.name;
    pocemonDesc.innerHTML = pocemon.candy;
    pocemonWeight.innerHTML = pocemon.weight;
    pocemonHeight.innerHTML = pocemon.height;

}