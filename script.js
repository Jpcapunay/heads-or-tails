
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

const card = document.getElementById("card")

card.addEventListener("click", flipCard)

function flipCard(){
    card.classList.toggle("flipCard")
}
