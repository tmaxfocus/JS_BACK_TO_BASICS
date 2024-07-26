const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);

let position = 0;

function handleKeyPress(e){
    if(e.code === 'ArrowLeft')
        position = position -10;

    if(e.code === 'ArrowRight')
        position = position + 10;

    if(e.code === 'ArrowUp')
        position = position - 10;

    if(e.code === 'ArrowDown')
        position = position + 10;

    if(position < 0)
        position =0;

    if(e.code === 'ArrowLeft' || e.code === 'ArrowRight'){
        refreshRIGHLEFT()
    }else{
        refreshUPDOWN()
    }
    //refresh();
}

function  refreshRIGHLEFT() {
    ball.style.left = position + 'px';
    
}

function  refreshUPDOWN() {
   
    ball.style.top = position + 'px';
}