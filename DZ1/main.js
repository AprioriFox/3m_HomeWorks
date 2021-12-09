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
console.log("===============Second task============")
const obj = document.getElementsByClassName('element')
console.log(obj.length)
const red1= document.querySelector(`.red1`).style.color = `#ff0000`
const red2= document.querySelector(`.red2`).style.color = `#ff0000`
const red3= document.querySelector(`.red3`).style.color = `#ff0000`
const green1 = document.querySelector(`.green1`).style.color = `#00ff00`
const green2 = document.querySelector(`.green2`).style.color = `#00ff00`
const green3 = document.querySelector(`.green3`).style.color = `#00ff00`
console.log("======================================")
// Third task
console.log("================Third task============")
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
const todo = document.getElementById(`todo-list`)
for (let i = 0; i<tasks.length; i++){
    let li = document.createElement("li")
    li.innerHTML = tasks[i];
    li.className = "task"
    todo.append(li)
}
console.log("======================================")
//Forth task
console.log("================Forth task============")
document.querySelectorAll('article>p').forEach((addHr) => {
    addHr.insertAdjacentHTML('afterend', '<hr/>');
})
console.log("======================================")
//Fifth task
console.log("================Fifth task============")
const div = document.querySelectorAll(`.item`);
for (let i = 0; i <div.length; i++){

}
console.log("======================================")
// //Sixth task
// console.log("================Sixth task============")
// console.log("======================================")
