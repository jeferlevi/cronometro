let btnReset = document.getElementById("reset")
let btnStop = document.getElementById("stop")
let btnStart = document.getElementById("start")
let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")
let mili = document.getElementById("mili")

let startTimer
let ms = "00"
let sg = "00"
let mn = "00"
let hr = "00"

function start() {
    startTimer = setInterval(function () {
        ms++
        if (ms === 100) {
            sg++
            if (sg < 10) {
                sg = "0" + sg
            }
            ms = 00
        }
        if (sg === 60) {
            mn++
            if (mn < 10) {
                mn = "0" + mn
            }
            sg = 00

        }
        if (mn === 60) {
            hr++
            if (hr < 10) {
                hr = "0" + hr
            }
            mn = 00
        }
        atualizaValor()

    }, 10);
}
function stop() {
    clearInterval(startTimer)
}
function reset() {
    clearInterval(startTimer)
    ms = "00"
    sg = "00"
    mn = "00"
    hr = "00"
    atualizaValor()


}
function atualizaValor() {
    mili.innerHTML = ms
    segundos.innerHTML = sg
    minutos.innerHTML = mn
    horas.innerHTML = hr

}

btnStart.addEventListener("click", start)
btnStop.addEventListener("click", stop)
btnReset.addEventListener("click", reset)