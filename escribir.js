const h1 = document.querySelector("h1")
console.log(h1);
h1.innerHTML= "PATITO <BR> FEO"

const input = document.querySelector("input")


// h1.setAttribute("class", "rojo")

h1.classList.add("rojo")
h1.classList.remove("rojo")

input.value= "otro mejor"

console.log(document.createElement("img")); 

const img = document.createElement("p")
console.log(img);
img.innerHTML = "hola"

h1.appendChild(img)


const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const boton = document.querySelector("button")
const resultado = document.querySelector("#resultado")

boton.addEventListener("click", calcular)



function calcular(params) {
    let suma = input1.value * input2.value
    resultado.innerHTML = suma
}

