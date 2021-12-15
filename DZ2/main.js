//First task
const container = document.getElementById(`container`)
const addElement = () =>{
    const div = document.createElement(`div`)
    div.setAttribute(`class`, `element`)
    div.innerText="Element"

    container.appendChild(div)
}
//Second task
const stop = document.getElementById(`stop`)
const start = document.getElementById(`start`)
const container2 = document.getElementById(`container2`)
const max = 20;
const min = 0;

const elem = () => {
    const elem1 = document.createElement(`div`)
    elem1.setAttribute(`class`, `element`)
    elem1.innerHTML = Math.floor(Math.random()*(max-min+1)+min);
    container2.appendChild(elem1);
}
interval = setInterval(elem,5000)
const startInterval = () => {
        interval = setInterval(elem,5000)
}
const stopInterval = () => {
    clearInterval(interval)
}


//Third task
const minutes = document.getElementById(`minutes`)
const seconds = document.getElementById(`seconds`)

const timer = () => {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, `0`);
    if (+seconds.textContent === 60){
        minutes.textContent = (+minutes.textContent + 1).toString().padStart(2, "0");
        seconds.textContent = `00`
    }
}
const startBtn = () => {
    strtInt = setInterval(timer,1000)
}
const pauseBtn = () => {
    clearInterval(strtInt)
}
const resetBtn = () => {
    clearInterval(strtInt)
    minutes.textContent = `00`
    seconds.textContent = `00`
}
//Forth task
