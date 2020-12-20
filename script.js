let game
let randomId
let score
let newCh
let count = 0
let start
let prevCh = 0
window.onload = function() {
    game = document.getElementById('game')
    score = document.getElementById('score')
    reset = document.getElementById('reset')
    reset.onclick = function() {
        count = 0;
        score.innerHTML = `Счет: ${count}`
        start.disabled = false
        deleteCh(prevCh.id)
        clearInterval(newCh)
    }
    for (let i = 0; i < 6; i++) {
        game.innerHTML += `<div class="hole" id='${i}'>`
    }
    start = document.getElementById('start')
    start.onclick = function() {
        start.disabled = true
        spawnCh()
        createNewCh()
};
//Счет
    for (let i = 0; i < 6; i++) {
        document.getElementById(`${i}`).addEventListener("click", (e) => { // если клик на картинке то счет++ если нет счет--
            if (e.target.id == 'Ch') {
                count++
                score.innerHTML = `Счет: ${count}`
                clearInterval(newCh)
                deleteCh(e.target.parentElement.id)
                createNewCh()
            } else {
                count--
                score.innerHTML = `Счет: ${count}`
            }

        })
    }
    function spawnCh() { //появление Рика
        randomId = Math.floor(Math.random() * 6) //округлили рандомный id
        prevCh = document.getElementById(`${randomId}`)
        document.getElementById(`${randomId}`).innerHTML = '<div id="Ch"></div>'
    }
    function createNewCh() { //перемещение Рика
        newCh = setInterval(() => {
            deleteCh(prevCh.id)
            randomId = Math.floor(Math.random() * 6)
            prevCh = document.getElementById(`${randomId}`)
            document.getElementById(`${randomId}`).innerHTML = '<div id="Ch"></div>'
        }, 1200)
    }
    function deleteCh(id) {//исчезновение Рика
        document.getElementById(id).innerHTML = ''
    }
}