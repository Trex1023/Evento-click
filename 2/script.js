const text = document.createElement('p')
text.innerText = 'hola'
const boton = document.createElement('button');
boton.innerText = 'ocultar'
    
boton.addEventListener('click', ()=>{
    if (text.style.display == 'none') {
        text.style.display = 'flex'
        boton.innerText = 'ocultar'
        return 0
    }
    text.style.display = 'none'
    boton.innerText = 'mostrar'
});

document.body.appendChild(boton);
document.body.appendChild(text);