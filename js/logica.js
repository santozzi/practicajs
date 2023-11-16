document.addEventListener('DOMContentLoaded', inicio);
let estadoNegrita = false;
let estadoCursiva = false;


function inicio() {
    const texto = document.querySelector('#texto');
    const color = document.querySelector('#color');
    const negrita = document.querySelector('#negrita');
    const cursiva = document.querySelector('#cursiva');
    const subrayado = document.querySelector('#subrayado');
    const salida = document.querySelector('#salida');
    const fontSize = document.querySelector('#fontSize');
    const enviar = document.querySelector('#enviar');
    
    function cambiarColor() {
        salida.style.color = color.value;
    }
    
    function cambiarNegrita(e) {
        e.preventDefault();
        negrita.classList.toggle('botonActivo')
        salida.classList.toggle('negrita');
    }

    function cambiarCursiva(e) {
        e.preventDefault();
        cursiva.classList.toggle('botonActivo')
        salida.classList.toggle('cursiva');
    }
    
    function subrayar(){
        const tipo = subrayado.value;
        salida.style.textDecorationLine = tipo;
        console.log(tipo);

    }
    
    function tamanioDeFuente(){
        salida.style.fontSize = fontSize.value + 'px';
    }

    console.log(enviar);

    texto.addEventListener('input', () => {
        salida.innerHTML = texto.value;
    })
    color.addEventListener('input', cambiarColor);
   
    negrita.addEventListener('click', cambiarNegrita);
    cursiva.addEventListener('click', cambiarCursiva);
    subrayado.addEventListener('change', subrayar);
    fontSize.addEventListener('input', tamanioDeFuente);
}