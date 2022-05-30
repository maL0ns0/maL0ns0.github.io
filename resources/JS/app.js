let sections = document.querySelectorAll('.section');
let controlsSec = document.querySelectorAll('.controls');
let controls = document.querySelectorAll('.control');
let mainContent = document.querySelectorAll('.main-content');

function pageTransition(){
    for(let contol of controls){
        contol.addEventListener('click', (event) => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            event.target.classList.add('active-btn');
        })
    }
}

pageTransition()