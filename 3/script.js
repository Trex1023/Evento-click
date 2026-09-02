const text = document.createElement('p')
text.innerText = 'texto sin cambiar'
const boton = document.createElement('button');
boton.innerText = 'cambiar'
    
boton.addEventListener('click', ()=>{
    text.innerText = 'texto cambiado'
});

document.body.appendChild(boton);
document.body.appendChild(text);