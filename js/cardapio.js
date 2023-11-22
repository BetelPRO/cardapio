//ativação do cardapio

function cardapio() {
    const cardapio = document.getElementById('cardapio');

    if (document.getElementById('sete').checked) {
        text = 'Você tem direito a todos os acompanhantes e até 2 sabores de cobertura\n Se você quiser uma explosão ainda maior de sabor\n Experimente os nossos adicionais'
        if (confirm(text) === true) {
            cardapio.classList.remove('cardapioOff');
            cardapio.classList.add('cardapioOn');
        }
    } else if (document.getElementById('seis').checked) {
        alert('Tem certeza que 300ml é suficiente pra você?\n Você ainda pode mudar seu pedido...');
        text = 'Você tem direito a todos os acompanhantes e até 2 sabores de cobertura\n Se você quiser uma explosão ainda maior de sabor\n Experimente os nossos adicionais'
        if (confirm(text) === true) {
            cardapio.classList.remove('cardapioOff');
            cardapio.classList.add('cardapioOn');
        }
    }
}

function sete() {
    const sete = document.getElementById('_4ml');
    const seis = document.getElementById('_3ml');

    seis.classList.remove('tamanhoAtivo');
    seis.classList.add('tamanhoOff')
    sete.classList.add('tamanhoAtivo');
    

}

function seis() {
    const sete = document.getElementById('_4ml');
    const seis = document.getElementById('_3ml');

    sete.classList.remove('tamanhoAtivo');
    sete.classList.add('tamanhoOff')
    seis.classList.add('tamanhoAtivo');
}

//efeitos dos acompanhamentos

function leite() {
    const leite = document.getElementById('leite');
    leite.classList.toggle('ativo');
};

function paçoca() {
    const paçoca = document.getElementById('paçoca');
    paçoca.classList.toggle('ativo');
};
    
function granola() {
    const granola = document.getElementById('granola');
    granola.classList.toggle('ativo');
};

function jujuba() {
    const jujuba = document.getElementById('jujuba');
    jujuba.classList.toggle('ativo');
};

function confete() {
    const confete = document.getElementById('confete');
    confete.classList.toggle('ativo');
}

function chocoball() {
    const chocoball = document.getElementById('chocoball');
    chocoball.classList.toggle('ativo');
};

function banana() {
    const banana = document.getElementById('banana');
    banana.classList.toggle('ativo');
};

//efeitos das coberturas

function condensado() {
    const condensado = document.getElementById('condensado');
    condensado.classList.toggle('ativo');
}

function cmorango() {
    const morango = document.getElementById('cob_morango');
    morango.classList.toggle('ativo');
}

function chocolate() {
    const chocolate = document.getElementById('chocolate');
    chocolate.classList.toggle('ativo');
}

//efeitos adicionais

function acida() {
    const acida = document.getElementById('acida');
    acida.classList.toggle('ativo');
}

function goma() {
    const goma = document.getElementById('goma');
    goma.classList.toggle('ativo');
}

function canudinho() {
    const canudinho = document.getElementById('canudinho');
    canudinho.classList.toggle('ativo');
}

function marshmallow() {
    const marshmallow = document.getElementById('marshmallow');
    marshmallow.classList.toggle('ativo');
};

function fini() {
    const fini = document.getElementById('fini');
    fini.classList.toggle('ativo');
};

function morango() {
    const morango = document.getElementById('morango');
    morango.classList.toggle('ativo');
};

//confirmar pedido

function pedido(){
    const text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        alert('confirmado')
    } else {
        alert("You canceled!")
    }
}