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
let playeractif = 0

//--------------------------------Selecteurs--------------------------------------------------------
shebang.forEach(e => {
    e.addEventListener('click',theGame)
    
   
    
});

//------------------------------Structure du jeu------------------------------------------------

function theGame(e){
    
    const choix=e.target
    choix.removeEventListener('click',theGame)
    console.dir(choix);
    const playerO = document.createElement('p')
    playerO.innerText='O'
    playerO.classList.add('playerO')
    choix.append(playerO)
    console.dir(playerO);
    
    const playerX = document.createElement('p')
    playerX.innerText='X'
    playerX.classList.add('playerX')
    choix.append(playerX)
    console.log(playerX);
    
    const PLAYERS = [playerO,playerX]
    console.log(PLAYERS);
    /*for(const p of PLAYERS){
        console.log(p);
        if(p.textContent==="X"){
            console.log('ok');
            playerX.style.visibility="visible"
            playerO.remove()
        }

    }*/
    PLAYERS[playeractif].classList.add('visible')
    PLAYERS[1].classList.add('hidden')
    playeractif+=1
    
    console.log(playeractif);
    if(playeractif>=PLAYERS.length){
        console.log(true);
        PLAYERS[1].classList.remove('hidden')
        PLAYERS[0].classList.add('hidden')
        playeractif=0
        //choix.removeEventListener('click',theGame)
    }
    AquideJouer(playeractif)
}

function AquideJouer(player){
    if(player===1){
        screenboard.innerText="C'est au player X de joué !"
    }else 
    {
        screenboard.innerText="C'est au player O de joué !"
    }
console.log();



}




    

