const div = document.createElement('div');
let dezpl = 0
div.style.width = '20vw'
div.style.height = '20vh'
div.style.backgroundColor = 'red'
div.addEventListener('dblclick', ()=>{
    dezpl = dezpl + 5
    div.style.marginLeft = `${dezpl}vw`
});
document.body.appendChild(div);
