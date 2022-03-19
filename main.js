// var info = function () {
//     // anonimna funkcija = ime varijable = ime funkcije
//     console.log("Zdravo opet!");
// }

// setTimeout(function () {
//     console.log("Radi");
// },2000)
// var counter = 0;
// var loop = setInterval(function() {
//     counter++;
//     console.log("Proslo je " +counter+ " s");
// }, 1000)

// setTimeout(function() {
//     clearInterval(loop);
// }, 6000);

var player1 = prompt("Player1");
var player2 = prompt("Player2");
var pl1Score = 0;
var pl2Score = 0;
var round = 0;
function bacnanjeKockice() {
    round++;
    var k1 = Math.ceil(Math.random()*6);
    var k2 = Math.ceil(Math.random()*6);
    pl1Score += k1;
    pl2Score += k2;

    console.log("*** Round "+round+" ***");
    console.log(player1 + " : "+k1+"----"+k2+" "+player2);
    console.log(player1 + "("+pl1Score+")   " + player2 + "(" + pl2Score+")");
    if (round === 10) {
        winner();
    }else {
        setTimeout(bacnanjeKockice, 1000);
    }
}

bacnanjeKockice()

function winner() {
    if (pl1Score > pl2Score){
        console.log("Winner : "+player1);
    }else if(pl2Score > pl1Score) {
        console.log("Winner : "+player2);
    }else {
        console.log("No winner");
    }
}