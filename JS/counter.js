const sum1 = document.querySelector('[data-sum1]')
const sub1 = document.querySelector('[data-sub1]')
const reset = document.querySelector('[data-reset]')
const c = document.getElementById('counter')

sum1.addEventListener("click", button => {  c.innerHTML = parseInt(c.innerHTML) + 1 })
sub1.addEventListener("click", button => {  c.innerHTML = parseInt(c.innerHTML) - 1 })
reset.addEventListener("click", button => { c.innerHTML = 0 })