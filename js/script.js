const player = document.querySelector('#player');


document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            player.style.left = `${parseInt(player.style.left, 10) - 10}px`;
            console.log('ArrowLeft');
            break;
        case 'd':
            player.style.left = `${parseInt(player.style.left, 10) + 10}px`;
            console.log('ArrowRight');
            break;
            
        case 's':
            player.style.top = `${parseInt(player.style.top, 10) - 10}px`;
            console.log('ArrowDown');
            break;
            
        case 'w':
            player.style.top = `${parseInt(player.style.top, 10) + 10}px`;
            console.log('ArrowUp');
            break;
            
        default:
    }
});