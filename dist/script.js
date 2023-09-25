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
let isPaused = false;
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
    function startInterval() {
        if (!isPaused) {
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
        }
    }
    startInterval();
   
    
}; 

timer.addEventListener('click', () => { 
    clearInterval(interval_01) 
    reload.classList.remove('animate-spin'); 
    
 
}); 

function reloadMe() { 
    isPaused = false; 
    reload.classList.add('animate-spin'); 
    clearInterval(interval_01)
    minl = 25;  
    secl = `0`+ 0;
    min.textContent = minl; 
    sec.textContent = secl; 
};

function pauseTimer() { 
   
    
        if (interval_01) {
            clearInterval(interval_01);
            isPaused = true;
        }
    
}

// Function to resume the interval
function resumeTimer() {
    if (isPaused) {
        console.log("hola");
        countDown(); 
        isPaused = false;
    }

} 



const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.classList.add('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});
