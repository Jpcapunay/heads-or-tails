
// document.getElementById('flipcoin').onclick = function() {
//     const coin = document.getElementById('coin');
//     const resultText = document.createElement('p');
//     document.body.appendChild(resultText);

  
//     coin.style.animation = "flipCoin 1s forwards";

//     coin.onanimationend = () => {
//         let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
//         resultText.textContent = 'Result: ' + result;

       
//         coin.style.animation = '';
//     };
// };

// const card = document.getElementById("card")

// card.addEventListener("click", flipCard)

// function flipCard(){
//     card.classList.toggle("flipCard")
// }

const card = document.getElementById("card");

card.addEventListener("click", flipCard);

function flipCard(){
    // This starts the flip animation.
    card.classList.add("flipCard");

    // This will simulate a coin flip and log 'Army' or 'Marines' to the console.
    let coinOutcome = Math.random() < 0.5 ? 'Army' : 'Marines'; 
    console.log(coinOutcome);

    // Define the number of flips 
    let numberOfFlips = 5; 
    let totalAnimationTime = numberOfFlips * 600;  

    // To stop the animation and alert the coin flip result.
    setTimeout(() => {
        card.classList.remove("flipCard"); // This stops the flip animation.
        alert(`The coin landed on: ${coinOutcome}`);
    }, totalAnimationTime);
}


