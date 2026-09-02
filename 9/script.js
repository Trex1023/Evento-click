const div = document.createElement('div');
let tamaño = 20
div.style.width = `${tamaño}vw`
div.style.height = `${tamaño}vh`
div.style.backgroundColor = 'red'
div.addEventListener('click', ()=>{
    tamaño = tamaño + 5
    div.style.width = `${tamaño}vw`
    div.style.height = `${tamaño}vh`
});

div.addEventListener('dblclick', ()=>{
    tamaño = 20
    div.style.width = `${tamaño}vw`
    div.style.height = `${tamaño}vh`
});
document.body.appendChild(div);
