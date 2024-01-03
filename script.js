let time = document.getElementById('time')
let amount = document.getElementById('amount')
let type = document.getElementById('type')
let result = document.getElementById('result')
function slide(time) {
    document.getElementById('timeInput').innerHTML = 'Month: ' + time
}
function calc() {
    let interest
    if (amount.value == "" || type.value == "nochoise") {
        result.innerHTML = "Enter valid detaile"
    } else {
        interest = (amount.value) * (time.value) * ((type.value) / 100)
        result.innerHTML = "Interest:   " + interest/12+" Rs"
    }
}