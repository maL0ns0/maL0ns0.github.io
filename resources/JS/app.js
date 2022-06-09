let sections = document.querySelectorAll('.section');
let controlsSec = document.querySelectorAll('.controls');
let controls = document.querySelectorAll('.control');
let mainContent = document.querySelector('.main-content');


function displaySection(id){
    let currentSection = document.querySelector('.active-sect');
    currentSection.classList.remove('active-sect');
    let actvSection = document.getElementById(id)
    actvSection.classList.add('active-sect')
}

function pageTransition(){
    for(let control of controls){
        control.addEventListener('click', event => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            event.target.classList.add('active-btn');
            let id = event.target.dataset.id
            displaySection(id)
        })
    }
}

//cambio de tema
function themeChanger(){
    let themeBtn = document.querySelector('.themeBtn')
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('lighTheme')
    })
}


pageTransition()
themeChanger()