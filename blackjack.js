
function runGame() {

    var display = document.querySelector('figure');
    var cards = ['A', '2','3', '4','5','6','7','8', '9', '10', 'J', 'Q', 'K'];

    function hit() {
        var card = Math.floor(Math.random() * cards.length);
        randomCard();
        checkResult(false);
    }

    function checkResult(standing) {
       var deal = display.innerHTML.split(' ');


        var cardValue = 0;


        deal.forEach(function(card, i) {
            if (Number(card)) {
                cardValue = cardValue + Number(card);
            }

            if (card === 'J' || card === 'Q' || card === 'K') {
                cardValue = cardValue + 10;
            }

            if (card === 'A') 
                cardValue = cardValue + 11; 
        });

        if (cardValue < 15 && standing) {
            alert('Dealer wins.');
            start();
        }
        else if (cardValue <= 18 && standing) {
            alert('Push!');
            start();
        }
        else if (cardValue > 21) {
            alert('You Bust.');
            start();
        }

        else if ((cardValue > 18 && standing) || cardValue === 21) {
            alert('You win!');
            start();
        }


    }

    document.getElementById('stand').addEventListener('click',function(){ 
        checkResult(true); 
    });
    function randomCard(){
        card = Math.floor(Math.random() * cards.length);
        display.innerHTML = display.innerHTML + ' ' + cards[card];
    }
    function start (){
        display.innerHTML = '';
        randomCard();
        randomCard();

    checkResult();
}
    start();
    document.getElementById('hit').addEventListener('click', function(){
        hit();
    });
}

runGame();
