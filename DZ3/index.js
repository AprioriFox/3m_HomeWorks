const input = document.querySelector('input'),
    name = document.getElementById('name'),
    region = document.getElementById('region'),
    subregion = document.getElementById('subregion'),
    capital = document.getElementById('capital'),
    flag = document.getElementById('flag')
const inputVal = () =>{
    fetch(`https://restcountries.com/v3.1/name/${input.value}`).then((data) => {
        data.json().then(response => {
            name.innerText = response[0].name.official;
            region.innerText = response[0].region;
            subregion.innerText = response[0].subregion;
            capital.innerText = response[0].capital;
            flag.innerHTML = `<img src="${response[0].flags.png}"/>`;
            console.log(response[0])
        })
    })
}
const inpVal = () => {
    fetch('https://restcountries.com/v3.1/all').then((date) => {
        date.json().then(resp => {
            console.log(resp.forEach(resp.name.common))
        })
    })
}
inpVal()
// const inputVal = () =>{
//     fetch('https://restcountries.com/v3.1/all').then((date) => {
//         date.json().then(resp => {
//             if (input.value == resp.forEach(name.common)){
//                fetch(`https://restcountries.com/v3.1/name/${input.value}`).then((data) => {
//                     data.json().then(response => {
//                         name.innerText = response[0].name.official;
//                         region.innerText = response[0].region;
//                         subregion.innerText = response[0].subregion;
//                         capital.innerText = response[0].capital;
//                         flag.innerHTML = `<img src="${response[0].flags.png}"/>`;
//                         console.log(response[0])
//                     })
//                 })
//             }else{
//                 alert('404 не найденно')
//             }
//         })
//     })
// }