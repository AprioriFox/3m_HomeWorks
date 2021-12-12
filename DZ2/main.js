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
const startSetTimeOut = () => {
    setTimeout(elem,500)
}
//Third task
