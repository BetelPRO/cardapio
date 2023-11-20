function menu() {
    const menu = document.getElementById('menu');
    const exit =document.getElementById('exit');
    const left = document.getElementById('navLeft')
    left.classList.add('navLeft')
    menu.classList.add("menuAtivo");
    exit.classList.add('Off');
};

function exit() {
    const exit = document.getElementById('exit');
    const menu = document.getElementById('menu');
    const left = document.getElementById('navLeft')
    left.classList.remove('navLeft')
    menu.classList.remove('menuAtivo');
    exit.classList.remove('Off');
};