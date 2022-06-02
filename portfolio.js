const sidebar = document.querySelector('.sidebar');//= 
const hambg = document.querySelector('.ham');//=
const cross = document.querySelector('.cross');//x

hambg.style.display = 'none';

cross.addEventListener('click', ()=>{    
    hambg.style.display = 'initial';
    cross.style.display = 'none';
    sidebar.classList.add('sidebarGo');
})

hambg.addEventListener('click', ()=>{
    hambg.style.display = 'none';
    cross.style.display = 'initial';
    sidebar.classList.remove('sidebarGo');
})


