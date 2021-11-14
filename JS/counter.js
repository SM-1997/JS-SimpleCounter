const sum1 = document.querySelector('[data-sum1]')
const sub1 = document.querySelector('[data-sub1]')
const reset = document.querySelector('[data-reset]')

sum1.addEventListener("click", button => { plus1() })
sub1.addEventListener("click", button => { substract1() })
reset.addEventListener("click", button => { resetTo0() })

function plus1() {
    c = document.getElementById('counter')
    c.innerHTML = parseInt(c.innerHTML) + 1
}

function substract1() {
    c = document.getElementById('counter')
    c.innerHTML = parseInt(c.innerHTML) - 1
}

function resetTo0() {
    c = document.getElementById('counter')
    c.innerHTML = 0
}