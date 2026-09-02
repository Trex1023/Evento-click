const text = document.createElement('p')
text.innerText = 'texto a eliminar'
const boton = document.createElement('button');
boton.innerText = 'eliminar'
    
boton.addEventListener('click', ()=>{
    document.body.removeChild(text)
});

document.body.appendChild(boton);
document.body.appendChild(text);
