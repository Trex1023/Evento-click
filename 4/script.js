const boton = document.createElement('button');
boton.innerText = 'agregar'
    
boton.addEventListener('click', ()=>{
    const text = document.createElement('p')
    text.innerText = 'texto agregado'
    document.body.appendChild(text);
});

document.body.appendChild(boton);