//First task
const container = document.getElementById(`container`)
const addElement = () => {
    const div = document.createElement(`div`)
    div.setAttribute(`class`, `element`)
    div.textContent="Element"
    container.appendChild(div)
}
//Second task

const container2 = document.getElementById(`container2`)
const max = 20;
const min = 0;
const elem = () => {
    const elem1 = document.createElement(`div`)
    elem1.setAttribute(`class`, `element`)
    elem1.innerHTML = Math.floor(Math.random()*20);
    container2.appendChild(elem1);
}
let interval = setInterval(elem,1000)
const startInterval = () => {
        interval = setInterval(elem,1000)
}
const stopInterval = () => {
    clearInterval(interval)
}

//Third task
const minutes = document.getElementById(`minutes`)
const seconds = document.getElementById(`seconds`)
const goBtn = document.getElementById(`start_tt`)
const stopBtn = document.getElementById(`pause`)
const nullBtn = document.getElementById(`reset`)

const timer = () => {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, `0`);
    if (seconds.textContent === `60`){
        minutes.textContent = (+minutes.textContent + 1).toString().padStart(2, `0`);
        seconds.textContent = `00`
    }
}
const startBtn = () => {
    strtInt = setInterval(timer,1000)
    goBtn.disabled = true;
    stopBtn.disabled = false;
    nullBtn.disabled = false;

}
const pauseBtn = () => {
    clearInterval(strtInt)
    goBtn.disabled = false;
    stopBtn.disabled = true;
    nullBtn.disabled = false;
}
const resetBtn = () => {
    clearInterval(strtInt)
    minutes.textContent = `00`
    seconds.textContent = `00`
    goBtn.disabled = false;
    stopBtn.disabled=true;
    nullBtn.disabled=true;
}
//Forth task
const user = document.forms[0];
const logIn = user.lastElementChild;
const minVal = 6;
const check = () => {
    if (user.username.value.length < minVal || user.password.value.length < minVal){
        logIn.disabled = true;
    }else{
        logIn.disabled = false;
    }
}
const log = (e) => {
    e.preventDefault();
    alert(`Username = ${user.username.value} \n Password = ${user.password.value}`)
}
user.addEventListener(`change`, check)
logIn.addEventListener(`click`, log)


