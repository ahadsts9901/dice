//audio function

function audio(){

    document.getElementById('audio').play()

}

//dice 1 function

function dice1(event) {

    {
        event.preventDefault()
    }

    let Dice1 = ""

    let number = Math.random(Dice1) * 6
    number = Number.parseInt(number)

    if (number === 0) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'

    } else if (number === 1) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'

    } else if (number === 2) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'

    } else if (number === 3) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'

    } else if (number === 4) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'

    } else {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'

    }

}

// dice 2 function

function dice2(event) {

    {
        event.preventDefault()
    }

    let Dice2 = ""

    let number = Math.random(Dice2) * 6
    number = Number.parseInt(number)

    if (number === 0) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 1) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 2) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 3) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 4) {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else {

        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    }

}

// both dice function

function diceAll(event) {

    {
        event.preventDefault()
    }

    let DiceAll = ""

    let number = Math.random(DiceAll) * 36
    number = Number.parseInt(number)

    if (number === 0) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 1) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 2) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 3) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 4) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else if (number === 5) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-1 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    } else if (number === 6) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 7) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 8) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 9) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 10) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else if (number === 11) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-2 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    } else if (number === 12) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 13) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 14) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 15) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 16) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else if (number === 17) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-3 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    } else if (number === 18) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 19) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 20) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 21) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 22) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else if (number === 23) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-4 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    } else if (number === 24) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 25) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 26) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 27) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 28) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else if (number === 29) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-5 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    } else if (number === 30) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-1-fill icon"></i>'

    } else if (number === 31) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-2-fill icon"></i>'

    } else if (number === 32) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-3-fill icon"></i>'

    } else if (number === 33) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-4-fill icon"></i>'

    } else if (number === 34) {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-5-fill icon"></i>'

    } else {

        document.querySelector('#dice-1').innerHTML = '<i class="bi bi-dice-6 icon"></i>'
        document.querySelector('#dice-2').innerHTML = '<i class="bi bi-dice-6-fill icon"></i>'

    }

}