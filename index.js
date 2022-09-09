let player1 = 0;
let player2 = 0;

$(".play").click(function(){
let randomeno1 = Math.floor(Math.random() * 6) + 1;
let randomeno2 = Math.floor(Math.random() * 6) + 1;
$(".img1").attr("src", "images/Alea_" + randomeno1 + ".png");
$(".img2").attr("src", "images/Alea_" + randomeno2 + ".png");
if(randomeno1 > randomeno2){
    $("h1").text("Player one wins 💪");
    player1 = player1 + 1;
    if(player1 === 10){
        alert("Player one wins the Game 🚩🚩");
        window.location.reload(); 
    }
}
else if(randomeno1 < randomeno2){
    $("h1").text("Player second wins 💪");
    player2 = player2 + 1;
    if(player2 === 10){
        alert("Player second wins the Game 🚩🚩");
        window.location.reload(); 
    }
}
else {
    $("h1").text("Match Tie ");
}
$(".player1").text(player1);
$(".player2").text(player2);
});

$("h5").addClass("score");


