const shebang = [...document.querySelectorAll('.box')];
console.log(shebang);

const screenboard = document.querySelector('.quijoue');
console.log(screenboard);
let scoreplayer1 = document.querySelector('.score1');
console.log(scoreplayer1);
let scoreplayer2 = document.querySelector('.score2');
console.log(scoreplayer2);
let egality = document.querySelector('.scorenul');
console.log(egality);

//--------------------------------Selecteurs--------------------------------------------------------
shebang.forEach(e => {
    e.addEventListener('click',theGame)
    
});

//------------------------------Structure du jeu------------------------------------------------

function theGame(e){
    console.log(e);
    player()
}
function player(){
console.log('hello');
}