/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var dice,global_score,activeplayer,current_score,gameplaying;
function newgame(){
    current_score=0;
activeplayer=0;
global_score=[0,0];
gameplaying = true;


document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.querySelector('#name-0').textContent='player 1';
document.querySelector('#name-1').textContent='player 2';

document.querySelector('.dice').style.display='none';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

}
newgame();

document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gameplaying){
            var dice = Math.floor((Math.random() * 6) + 1);
    //update the ui
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src ='dice-'+dice+'.png';
    //add current score
    if(dice>1){
        current_score += dice;
        document.querySelector('#current-'+activeplayer).textContent=current_score;

    } else{
        //next playe
        next_player();
    }
  
    }
});
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gameplaying){
       global_score[activeplayer] += current_score;
    //update the global score
    document.querySelector('#score-'+activeplayer).textContent=global_score[activeplayer];
    //check if the active player already won
    if(global_score[activeplayer] >= 30){
        document.querySelector('#name-'+activeplayer).textContent='winner';
        document.querySelector('.dice').style.display = 'none';
        gameplaying = false;
    } else{
    //next player's turn
        next_player();

    }
    
       }
});

function next_player(){
    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    activeplayer === 0 ? activeplayer = 1 : activeplayer=0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
    current_score = 0;
    
}
document.querySelector(".btn-new").addEventListener('click',newgame);


















/*
var scores,roundscore,activeplayer;

scores = [0,0];
roundscore=0;
activeplayer = 1;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('current-0').textContent=0;

document.querySelector('.btn-roll').addEventListener('click',function(){
    //random number
    var dice = Math.floor(Math.random() *6) +1;
    //dispaly result
    document.querySelector('.dice').style.display='block';
    document.querySelector(".dice").src = 'dice-'+dice +'.png';
    
    
});
*/























































































