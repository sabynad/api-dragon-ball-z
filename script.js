console.log("test ok");

let apiDragonBall;

async function personnage () {
    const res = await fetch("https://dragonball-api.com/api/characters?limit=200", {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',   
        }
    });
    apiDragonBall = await res.json();
    // then(
        
    // )
    console.log(apiDragonBall);

}

personnage().then(() => {
    let container = document.querySelector(".container");

    apiDragonBall.items.forEach(item => {

        let card = document.createElement("div");
            card.classList.add("card");
           

        let cardName = document.createElement("h2");
            cardName.innerText = item.name;
            
        container.appendChild(card);
        card.appendChild(cardName);

        let cardImage = document.createElement("img");
                cardImage.src = item.image;
                cardImage.classList.add("image");

            cardImage.src = item.image;
            cardImage.classList.add("image");
            card.appendChild(cardImage);


    });

});

