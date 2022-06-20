let totalplay = 0;
let sum = 0;
let endgame = [];
let cardsImg = [];
let cardsRemove = [];
let cardsflips = [];
let cardSelect = [];
let realOfCards = 0;
let conter = 0;
let caunt ; 

function putCards() {
    const numberOfCards = prompt("Qual a quantidade de cartas");
    realOfCards = Number(numberOfCards);
    if (isNaN(Number(numberOfCards)) === true || realOfCards < 4 || realOfCards > 14 || realOfCards % 2 !== 0) {
        alert('Numeros entre 4 e 14 pares');
        realOfCards = 0;
        putCards();
    }
    time();
    sort();
    addCards();
}

function addCards() {
    for (let i = 0; realOfCards > i; i++) {
        let nellCards = document.createElement('div');
        nellCards.className = "card";
        nellCards.addEventListener('click', choice, false);
        nellCards.innerHTML = `<div class='faceGif face'><img src='front.png'> </div><div class='backGif face'><img src='${passNumber()}.gif'</div>`;
        document.querySelector(".allCards").appendChild(nellCards);
    }
    let widthAll = (117 * (realOfCards / 2) / realOfCards -1);
    document.querySelector(".allCards").style.cssText = `width : ${widthAll}%;`;

}

function choice() {
    if(cardSelect.length < 2){
    this.classList.add('flip');
    cardSelect.push(this);
    cardsImg.push(this.querySelector('.backGif').innerHTML);
    totalplay++;
    if (cardSelect.length == 2 && cardSelect[0] != cardSelect[1] && cardsImg[0] == cardsImg[1]) {
        cardsRemove.push(cardSelect[0], cardSelect[1]);
        cardSelect.splice(0, cardSelect.length);
        cardsImg.splice(0, cardsImg.length);
        endgame.push(1);
        if (endgame.length === realOfCards / 2) {
            victory();
        }
        console.log(cardsImg, sum);
    }
    else if (cardSelect.length === 2 && (cardSelect[0] === cardSelect[1] || cardsImg[0] !== cardsImg[1])) {
        if(document.querySelector('.click') != null){
        document.removeEventListener(onclick);
        }
        setTimeout(remov, 1000);
    }
}
}

function sort() {
    let gifs = [1, 2, 3, 4, 5, 6, 7];
    gifs.sort(() => Math.random() - 0.5);
    for (let index = 0; index < realOfCards / 2; index++) {
        cardsflips.push(gifs[index]);
        cardsflips.push(gifs[index]);
    }
    cardsflips.sort(() => Math.random() - 0.5);
}

function passNumber() {
    sum++;
    let conts = cardsflips[sum - 1];
    return conts;
}

function remov() {
    cardSelect[0].classList.remove('flip');
    cardSelect[1].classList.remove('flip');
    cardSelect.splice(0, cardSelect.length);
    cardsImg.splice(0, cardsImg.length);
}

function victory() {
    alert(`Você ganhou em ${totalplay} jogadas! e com ${conter} segundos.`);
    let reinitialize = prompt("Gostaria de reiniciar a partida (sim) ou (nao)");
    if (reinitialize === "sim") {
        totalplay = 0;
        sum = 0;
        sum2 = 0;
        endgame = [];
        conter =0;
        document.querySelector("span").remove('span');
        clearInterval(caunt);
        cardsImg.splice(0, cardsImg.length);
        cardsflips.splice(0, cardsflips.length);
        cardSelect.splice(0, cardSelect.length);
        for (let index = 0; index < cardsRemove.length; index++) {
            cardsRemove[index].remove('div .card');
        }
        cardsRemove.splice(0, cardsRemove.length);
        realOfCards = 0;
        putCards();
    }
    else {
        for (let index = 0; index < cardsRemove.length; index++) {
            cardsRemove[index].remove('div .card');
        }
        document.querySelector("span").remove('span');
        clearInterval(caunt);
        alert('saiuuu');
    }
}
function time(){
    const i =document.createElement('span');
    i.innerHTML = conter ;
    document.querySelector("h1").appendChild(i);
    caunt = setInterval(plusConter,1000);
}
function plusConter(){
    conter++;
    document.querySelector("span").innerHTML = conter;   
}