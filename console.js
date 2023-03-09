let h1 = document.querySelector("h1");
let form = document.querySelector('#form')
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let btn = document.querySelector('button')
let pResultado = document.querySelector('#resultado')


//Para que funcione el formulario//
//form.addEventListener('submit' , sumarInputs);

// function sumarInputs(event){
//         event.preventDefault(); no permite que se reincie con el sudmit
//         const suma = +input1.value + +input2.value;
//         pResultado.innerHTML = "el resultado es: " + suma; 
// }

form.addEventListener("click", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("virus")
}