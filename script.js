
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
    let coinOutcome = Math.random() < 0.5 ? 'Army' : 'Marines'; // 50-50 chance
    console.log(coinOutcome);

    // Define the number of flips (each flip is 0.6s from the CSS)
    let numberOfFlips = 5; // for example, change this to control flip times
    let totalAnimationTime = numberOfFlips * 600; // Total time of the animation

    // After some time (enough for the desired number of flips), stop the animation and alert the coin flip result.
    setTimeout(() => {
        card.classList.remove("flipCard"); // This stops the flip animation.
        alert(`The coin landed on: ${coinOutcome}`);
    }, totalAnimationTime);
}


