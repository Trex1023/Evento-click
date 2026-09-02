const boton = document.createElement('button');
boton.innerText = 'cambiar color';
    
boton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "red";
});

document.body.appendChild(boton);