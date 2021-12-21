const input = document.querySelector(`input`)
const name = document.getElementById(`name`)
const region = document.getElementById(`region`)
const subregion = document.getElementById(`subregion`)
const capital = document.getElementById(`capital`)
const flag = document.getElementById(`flag`)
const inputVal = () =>{
    if (input.value.length > 0) {
        fetch(`https://restcountries.com/v2/name/${input.value}`).then((data) => {
            data.json().then(response => {
                name.innerText = response[0].name;
                region.innerText = response[0].region;
                subregion.innerText = response[0].subregion;
                capital.innerText = response[0].capital;
                flag.innerHTML = `<img src="${response[0].flags.png}"/>`;
                console.log(response[0].status)
            })
        })
    }
}

