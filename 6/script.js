const div = document.createElement('div');
div.style.width = '50vw'
div.style.height = '50vh'
div.style.backgroundColor = 'red'
div.addEventListener('mouseover', ()=>{
    div.style.backgroundColor = 'blue'
});
document.body.appendChild(div);
