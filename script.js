const shebang = [...document.querySelectorAll('.box ')];
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
    
    player(e.target)
}
function player(player){
console.log(player);
const playerO = document.createElement('p')
playerO.innerText='O'
playerO.classList.add='playerO'
player.append(playerO)
console.log(playerO);
player.removeEventListener('click',theGame)
/*const playerX = document.createElement('p')
playerX.innerText='X'
playerX.classList.add='playerX'
player.append(playerX)
console.log(playerX);*/
}