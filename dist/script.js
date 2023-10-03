import backChange from "./app.js";

const footer = document.getElementById("foot"); 
const fullScreenLogo = document.getElementById("full-screen"); 
const reload = document.getElementById('reload'); 
const timer = document.getElementById('timer'); 


const showHidden = () => { fullScreenLogo.style.display = 'block'}; 
function hideEle() { fullScreenLogo.style.display = "none" }; 
footer.addEventListener('mouseover', () => { showHidden() }); 
footer.addEventListener('mouseout', () => { hideEle() }); 




// Function to toggle fullscreen
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Add a click event listener to the button
fullScreenLogo.addEventListener("click", toggleFullScreen);


let min = document.getElementById('min'); 
let sec = document.getElementById('sec');
let interval_01; 
let isPaused = false;
let minl;  
let secl;
let timerType = "pomodoro"; 


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

            if (minl <= 0 && secl <= 0) { 
                clearInterval(interval_01)
                mystart();  
            }; 
      
        }, 1000);
        
    }
}

function countDown() { 
    reload.classList.remove('animate-spin'); 
    
    
    // reduce minute 

    if (timerType === 'pomodoro') { 
        minl = 25;
        secl = `0${0}`
    }else if ( timerType === 'shortbreak' ) { 
        minl= `0${5}`; 
        min.textContent = minl;
        // secl = `0${0}`; 
        secl = 60; 

      
    }else if ( timerType === 'longbreak') { 
        minl = 10; 
        min.textContent = minl;
        secl = `0${0}`; 
    }

    minl -= 1;
    min.textContent = minl;  
    // reduce second every 1 second
    secl = 60; 
    startInterval();
   
    
}; 


// timer.addEventListener('click', () => { 
//     clearInterval(interval_01) 
//     reload.classList.remove('animate-spin');
// }); 

reload.addEventListener('click', () => { 

    function reloadMe() { 
    
        if (timerType === 'pomodoro') { 
            minl = 25;
            secl = `0${0}`; 
            
        }else if ( timerType === 'shortbreak' ) { 
            minl= `0${5}`; 
            secl = `0${0}`; 
            min.textContent = minl;
            sec.textContent = secl;
            
        }else if ( timerType === 'longbreak') { 
            minl = 10; 
            secl = `0${0}`; 
            min.textContent = minl;
            
        }
    
        isPaused = false; 
        clearInterval(interval_01)
        reload.classList.add('animate-spin'); 
        startBtn.style.display = "block"; 
        resumeMeBtn.style.display = "none"; 
        pauseMeBtn.style.display = "none"; 
    
        min.textContent = minl; 
        sec.textContent = secl; 
    };
    reloadMe()
})


function pauseTimer() { 
    if (interval_01) {
        reload.classList.remove('animate-spin');
        clearInterval(interval_01);
        isPaused = true;
    }
}

// Function to resume the interval

function resumeTimer() {
    if (isPaused) {
        reload.classList.remove('animate-spin');
        isPaused = false;
        startInterval(); 
    }
}


const pomodoroTimer = document.getElementById('pomodoro'); 
const shortBreak = document.getElementById('short_break'); 
const longBreak = document.getElementById('long_break'); 

function mystart(){
    startBtn.style.display = 'block'; 
    pauseMeBtn.style.display = 'none'; 
    resumeMeBtn.style.display = 'none'; 
}
const t = 'transparent'; 
const w = 'white'; 
const bl = 'black';

function topBtn(lt, lw, sw, sb, pb, pw) { 
    longBreak.style.backgroundColor = lt; 
    longBreak.style.color =  lw; 
    shortBreak.style.backgroundColor = sw; 
    shortBreak.style.color = sb; 
    pomodoroTimer.style.backgroundColor =  pb; 
    pomodoroTimer.style.color = pw;
}; 

shortBreak.addEventListener('click', () => { 

    topBtn(t, w, w, bl, t, w); 
    mystart(); 
    pauseTimer()
    isPaused = false; 
    clearInterval(interval_01)
    
    minl = `0${5}`;
    min.textContent = minl;  
    secl =`0${0}`; 
    sec.textContent = secl; 


    timerType = 'shortbreak'; 
}); 

pomodoroTimer.addEventListener('click', () => { 

    topBtn(t, w, t, w, w, bl); 
    mystart(); 
    // pauseTimer(); 
    minl = 25;
    min.textContent = minl;  
    timerType = 'pomodoro';

}); 


longBreak.addEventListener('click', () => { 

    pauseTimer()
    isPaused = false; 
    clearInterval(interval_01)

    minl = 10;
    secl = 0 + "0"; 
    sec.textContent = secl; 
    min.textContent = minl;  
    timerType = 'longbreak';

    topBtn(w, bl, t, w, t, w)
    mystart(); 

}); 


/// seeting up the sart, pause  and resume button 
const startBtn = document.getElementById("let's-go"); 
const pauseMeBtn = document.getElementById('pause-me'); 
const resumeMeBtn = document.getElementById('resume-me'); 

startBtn.addEventListener('click', () =>  {
    pauseMeBtn.style.display = "block"; 
    startBtn.style.display = "none"; 
    countDown(); 
}); 

pauseMeBtn.addEventListener('click', () =>  {
    pauseMeBtn.style.display = "none";
    resumeMeBtn.style.display = "block"; 
    pauseTimer(); 
}); 
resumeMeBtn.addEventListener('click', () =>  {
    pauseMeBtn.style.display = "block"; 
    resumeMeBtn.style.display = "none";
    resumeTimer();  
}); 


// settings navigation timer 

const pomodoroInputTimer = document.getElementById('pomodoro-input-timer'); 
const shortBreakInputTimer = document.getElementById('shortbreak-input-timer'); 
const longBreakInputTimer = document.getElementById('longbreak-input-timer'); 
const saveChangesButton = document.getElementById('save-changes-btn'); 


saveChangesButton.addEventListener('click', () => { 

    const pomodoroValue = pomodoroInputTimer.value; 
    const longBreakValue = longBreakInputTimer.value; 
    const shortbreakValue = shortBreakInputTimer.value; 
    const mainModal = document.querySelector("#modal-Grand_parent"); 
    

    console.log('hola');
    
    if (timerType === 'pomodoro') { 
        minl = Number(pomodoroValue);
        secl = `0${0}`; 
        
    }else if ( timerType === 'shortbreak' ) { 
        minl= Number(shortbreakValue); 
        secl = `0${0}`; 
        min.textContent = minl;
        sec.textContent = secl;
        
    }else if ( timerType === 'longbreak') { 
        minl = Number(longBreakValue); 
        secl = `0${0}`; 
        min.textContent = minl; 
    }

    sec.textContent = secl; 
    min.textContent = minl; 
    mainModal.style.display = "none"; 
})



