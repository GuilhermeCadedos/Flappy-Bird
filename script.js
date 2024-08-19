var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var bird = new Image()
bird.src = "images/bird.png"
var bg = new Image()
bg.src = "images/bg.png"
var chao = new Image()
chao.src = "images/chao.png"
var canocima = new Image()
canocima = "images/canocima.png"
var canobaixo = new Image()
canobaixo = "images/canobaixo.png" 

 var eec = 100
 var constant
 var bX = 33
 var bY = 200
 var gravidade = 1.4
 var score = 0 
 var cano = []

 cano[0] = {x: canvas.width, y: 0}

 function jogo() {
    ctx.drawImage(bg,0,0)
    for(let i = 0; i < cano.length; i++){
        constant = canocima.height + eec
        console.log(canocima)
        ctx.drawImage(canocima, 0, 0)
    }

 } 
 requestAnimationFrame(jogo)
 jogo()

