var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'easy') {
    criaMosquitoTempo = 1500
} else if (nivel === 'normal') {
    criaMosquitoTempo = 1000
} else if (nivel === 'hard') {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = innerHeight
    largura = innerWidth

    console.log(largura, altura )
}
    
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {
    tempo -=1
    
    
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
    window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
}

}, 1000)

function randomPosition() {

    // prev mosquito removal
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if(vidas > 2){
            window.location.href = 'gameover.html'
        } else {
            document.getElementById("v" + vidas).src = 'imagens/coracao_vazio.png'
        
        vidas++
        }
        
}
    //mosquito position

    var posicaoX = Math.floor(Math.random() * altura) -90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY <0? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //  HTML OBJECT

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

    
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
        
    }
}

function randomSide() {
     var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'sideA'
        
        case 1:
            return 'sideB'
       
    }
}


