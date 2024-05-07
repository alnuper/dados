const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const resultado = document.querySelector("h1")

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png")
//dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png")
dice2.setAttribute("src", `./images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    resultado.textContent = "🥇 Player 1 Wins"
} else if (randomNumber1 < randomNumber2) {
    resultado.textContent = "Player 2 Wins 🥇"
} else {
    resultado.textContent = "Draw"    
}

console.log(randomNumber1);
console.log(randomNumber2);


