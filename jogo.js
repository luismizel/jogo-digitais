const mario = document . queerySelector('.mario');
const pipe = document . querySelector('.pipe');

const jump = () => {
    mario.classlist.add('jump');

    setTimeout(()=> {
        mario.classlist.remove('jump');
    }, 500);
}

const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getCompusedStyle(mario).bottom.replace('px',''); 

console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
      
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

