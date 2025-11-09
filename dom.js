document.title = "New Rahmat"
const body = document.body

// const h1 = document.createElement('h1')
// h1.textContent = "Ini H1 pake JS DOM"

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = "RAHMAT HIDAYAT"

// body.append(h1)
// body.append(namaSaya)


const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

btn1.style.background = 'tomato'
btn1.style.border = 'none'
btn1.style.fontSize = '24px'
btn1.style.padding = '8px'

const textDefaultBtn1 = "Klik saya 1"
btn1.textContent = textDefaultBtn1
const textDefaultBtn2 = "Klik saya 2"
btn2.textContent = textDefaultBtn2

//function btn1
function clickButton1(){
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'Haloo btn 1 Berhasil di klik'
    body.append(newText)
}
function updateText1(){
    btn1.textContent = "btn 1 berhasil dihover"
}
function oriText1(){
    btn1.textContent = textDefaultBtn1
}

//function btn2
let newTextDiBawah;
let newBtnBackgroud = btn2

// stye
btn2.style.background = 'blue'
btn2.style.border = 'none'
btn2.style.fontSize = '24px'
btn2.style.padding = '8px'

function muculkanDiBawah(){
    btn2.style.background = 'gold'
    newTextDiBawah = document.createElement('p')
    newTextDiBawah.textContent = 'Halo Nama Kamu Rahmat'
    body.append(newTextDiBawah)
}
function gantiWarna(){
    newTextDiBawah.style.background = 'aqua'
    newTextDiBawah.style.color = 'red'
    newBtnBackgroud.style.background = 'aqua'
}