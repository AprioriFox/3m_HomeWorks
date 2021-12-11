//First task
console.log("================First task============")
const frst = document.getElementById("string-3").innerText
const scnd = document.getElementById("string-5").innerText
const thrd = document.getElementById("string-2").innerText
const frth = document.getElementById("string-6").innerText
const ffth = document.getElementById("string-4").innerText
const sxth = document.getElementById("string-1").innerText
console.log(`${frst+"\n"+scnd+"\n"+thrd+"\n"+frth+"\n"+ffth+"\n"+sxth}`)
console.log("======================================")
//Second task
const elems = document.querySelectorAll('.element')
for (let i = 0; i<elems.length; i++){
    if (i<3) {
        elems[i].style.color=`#ff0000`
    }else{
        elems[i].style.color = `#00ff00`
    }
}
// Third task
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
const todo = document.getElementById(`todo-list`)
for (let i = 0; i<tasks.length; i++){
    let li = document.createElement("li")
    li.innerHTML = tasks[i];
    li.className = "task"
    todo.append(li)
}

//Forth task
document.querySelectorAll('article>p').forEach((addHr) => {
    addHr.insertAdjacentHTML('afterend', '<hr/>');
})
//Fifth task
const cola = document.getElementById(`cola`)
cola.remove()
const oldElem = document.getElementById(`chocolate`)
const newElem = document.createElement(`div`)
newElem.setAttribute('class', `item`)
newElem.innerText = `Canned Fish x 4`
const chokolateToFish = oldElem.parentNode
chokolateToFish.replaceChild(newElem, oldElem)
// //Sixth task
const sixthEx = document.querySelector(`.sixth_task`)
const ul = document.createElement('ul')
ul.setAttribute(`class`,`list`)
sixthEx.append(ul)
while (true) {
    const listTask = prompt("Введите задание");
    if (listTask === null || listTask.length === 0){
        break;
    }
    const li = document.createElement(`li`)
    li.appendChild(document.createTextNode(listTask));
    ul.appendChild(li)
}