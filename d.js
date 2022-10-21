var hikoukix = 655
var hikoukiy = 500
let tamay = []
let tamax = []
var tekix = 0
var tekiy = 0
let tama = []
let count = 0
let a = []
let countj=0
const uttakazu= document.createElement("p")
const tekiimg = document.createElement('img')
document.body.appendChild(tekiimg)
tekiimg.src = 'teki.png'
tekiimg.className = 'tekiclass'
let ad = new Audio("./oto.mp3");
let ad2=new Audio("./oto2.mp3")

function teki() {
    tekix = tekix + 50
    tekiimg.style.left = (tekix) + 'px'
    tekiimg.style.top = (tekiy) + 'px'
    if (tekix >= 1300) {
        tekix = 0
        tekiy = tekiy + 100
    }
    if (hikoukiy < tekiy) {
        alert('ゲームオーバー\n再読み込みして下さい')
        clearInterval(tekikieru)
    }
}

function youso() {
    const img = document.createElement('img')
    document.body.appendChild(img)
    img.src = 'tama.png'
    img.className = 'tamaclass'
    img.id = 'tamaid' + count
    tama.push(img)

}

function game(event) {
    inputKey = event.code
    if (inputKey === 'ArrowRight') {
        hikoukix = hikoukix + 20
    }
    else if (inputKey === "ArrowLeft") {
        hikoukix = hikoukix - 20
    }
    else if (inputKey === "ArrowUp") {
        hikoukiy = hikoukiy - 20
    }
    else if (inputKey === "ArrowDown") {
        hikoukiy = hikoukiy + 20
    }
    if (inputKey === "Space") {
        countj++
        uttakazu.innerText='打った数:'+countj+'発'
        document.body.appendChild(uttakazu)
        youso()
        tamax[count] = hikoukix + 30
        tamay[count] = hikoukiy
        kesu = setInterval("tamaugoki(" + count + ")", 10)
        a.push(kesu)
        count++
        if(countj==10){
            alert('警告\nこのpcに43この脅威が発見されました\n自動的に東大医学部頭悪いおじさんが流れます\nついでにその心笑ってるねおばさんも')
            ad.play(); //audioを再生
            ad2.play()
            window.open("oto.html")
        }
    }
    hikouki.style.left = (hikoukix) + 'px'
    hikouki.style.top = (hikoukiy) + 'px'
}

function tamaugoki(counta) {
    tamay[counta] = tamay[counta] - 10
    tama[counta].style.top = (tamay[counta]) + 'px'
    tama[counta].style.left = (tamax[counta]) + 'px'
    let maxtamay = tamay[counta] + 25
    let maxtamax = tamax[counta] + 25
    let mintamax = tamax[counta] - 25
    let mintamay = tamay[counta] - 25
    if (maxtamax > tekix && mintamax < tekix && maxtamay > tekiy && mintamay < tekiy) {
        alert('Hit\n打った数:'+countj)
        if(countj<5){
            window.open('a.html')
        }
        else if(countj<10){
            window.open('b.html')
        }
        else {
            window.open('c.html')
        }
        tamax = 0
        tamay = 0
        clearInterval(tekikieru)
        clearInterval(kesu)
    }
    if (tamay[counta] <= -50) {
        tamay[counta] = 0
        tama[counta].remove()
        clearInterval(a[counta])
    }
}


tekikieru = setInterval(teki, 100)
document.addEventListener('keydown', game)