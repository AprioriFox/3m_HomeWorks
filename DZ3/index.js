const input = document.querySelector(`input`)
const name = document.getElementById(`name`)
const region = document.getElementById(`region`)
const subregion = document.getElementById(`subregion`)
const capital = document.getElementById(`capital`)
const flag = document.getElementById(`flag`)
const inputVal = (e) =>{
    if (input.value.length > 0) {
        fetch(`https://restcountries.com/v2/name/${input.value}`).then((data) => {
            data.json().then(response => {
                name.innerText = response[0].name;
                region.innerText = response[0].region;
                subregion.innerText = response[0].subregion;
                capital.innerText = response[0].capital;
                const flagIcon = document.createElement(`img`)
                flagIcon.setAttribute(`src`, response[0].flags.png)
                flag.append(flagIcon)
                console.log(input.value.length)
            })
        })
    }else{
        alert(`404 страна не найдена`)
        console.log(input.value.length)
    }
}

