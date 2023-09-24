const footer = document.getElementById("foot"); 
const fullScreenLogo = document.getElementById("full-screen"); 
const reload = document.getElementById('reload'); 
const timer = document.getElementById('timer'); 
const startBtn = document.getElementById('start_btn'); 

const showHidden = () => { fullScreenLogo.style.display = 'block';}; 
function hideEle() { fullScreenLogo.style.display = "none" }; 



let min = document.getElementById('min'); 
let sec = document.getElementById('sec');
let interval_01; 
let minl;  
let secl;
function countDown() { 
    reload.classList.remove('animate-spin'); 

    // reduce minute 
    minl = 25;
    minl -= 1;
    min.textContent = minl;

    
  

    // reduce second every 1 second
    secl = 60; 
    interval_01 = setInterval(() => { 
        // decrement second 
        secl -= 1; 
        sec.textContent = secl;

        if (secl < 10 ) { sec.textContent = `0${secl}` }; 
        
        if (secl < 0) { 
            secl = 60 - 1;
            sec.textContent = secl; 

            minl -= 1; 
            min.textContent = minl; 
        }; 

        if (minl < 10 ) { min.textContent = `0${minl}` }

    }, 1000);

    if (minl == 0 && secl == 0) { clearInterval(interval_01) }; 
    
}; 

timer.addEventListener('click', () => { 
    clearInterval(interval_01) 
    reload.classList.remove('animate-spin'); 
 
}); 

function reloadMe() { 
    reload.classList.add('animate-spin'); 
    clearInterval(interval_01)
    minl = 25;  
    secl = `0`+ 0;
    min.textContent = minl; 
    sec.textContent = secl; 
};

function pauseTimer() { 
    
}