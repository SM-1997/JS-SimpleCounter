document.body.onload = addElement();

function addElement() {
    const title = document.createElement("div");
    title.innerHTML = "Just a counter";
    document.body.appendChild(title);

    const counterDiv = document.createElement("div");
    counterDiv.innerHTML = "0";
    document.body.appendChild(counterDiv);

    const sub1 = document.createElement("button");
    sub1.name = "sub1";
    sub1.innerHTML = "-";
    sub1.classList="btn btn-primary"
    sub1.addEventListener("click", button => { counterDiv.innerHTML = parseInt(counterDiv.innerHTML) - 1 })
    document.body.appendChild(sub1);
    
    const sum1 = document.createElement("button");
    sum1.name = "sum1";
    sum1.innerHTML = "+";
    sum1.classList="btn btn-primary"
    sum1.addEventListener("click", button => { counterDiv.innerHTML = parseInt(counterDiv.innerHTML) + 1 })
    document.body.appendChild(sum1);

    const reset = document.createElement("button");
    reset.name = "reset";
    reset.innerHTML = "reset";
    reset.classList="btn btn-secondary"
    reset.addEventListener("click", button => { counterDiv.innerHTML = 0 })
    document.body.appendChild(reset);
}