const footer = document.getElementById("foot"); 
const fullScreenLogo = document.getElementById("full-screen"); 
const reload = document.getElementById('reload'); 
const timer = document.getElementById('timer'); 


const showHidden = () => { fullScreenLogo.style.display = 'block';}; 
function hideEle() { fullScreenLogo.style.display = "none" }; 



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
    
        }, 1000);
    
        if (minl == 0 && secl == 0) { clearInterval(interval_01) }; 
    }
}

function countDown() { 
    reload.classList.remove('animate-spin'); 

    // reduce minute 
    if (timerType === 'pomodoro') { 
        minl = 25;
    }else if ( timerType === 'shortbreak' ) { 
        minl= `0${5}`; 
        secl = 60; 
    }else if ( timerType === 'longbreak') { 
        minl = 10; 
        secl = 60; 
    }

    minl -= 1;
    min.textContent = minl;  
    // reduce second every 1 second
    secl = 60; 
    startInterval();
   
    
}; 

timer.addEventListener('click', () => { 
    clearInterval(interval_01) 
    reload.classList.remove('animate-spin');  
}); 

function reloadMe() { 

    if (timerType === 'pomodoro') { 
        minl = 25;
        secl = `0${0}`
    }else if ( timerType === 'shortbreak' ) { 
        minl= `0${5}`; 
        min.textContent = minl;
        console.log('hello world');
        secl = `0${0}`; 
    }else if ( timerType === 'longbreak') { 
        minl = 10; 
        secl = `0${0}`; 
        min.textContent = minl;
    
    }

    isPaused = false; 
    reload.classList.add('animate-spin'); 
    clearInterval(interval_01)
    startBtn.style.display = "block"; 
    resumeMeBtn.style.display = "none"; 
    pauseMeBtn.style.display = "none"; 
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


shortBreak.addEventListener('click', () => { 
    longBreak.style.backgroundColor = 'transparent'; 
    longBreak.style.color = 'white'; 
    shortBreak.style.backgroundColor = 'white'; 
    shortBreak.style.color = 'black'; 
    pomodoroTimer.style.backgroundColor = 'transparent'; 
    pomodoroTimer.style.color = 'white';
    
    mystart(); 
    pauseTimer()
    
    minl = `0${5}`;
    min.textContent = minl;  
    secl =`0${0}`; 
    sec.textContent = secl; 

    timerType = 'shortbreak';
    console.log(timerType);


})

pomodoroTimer.addEventListener('click', () => { 
    longBreak.style.backgroundColor = 'transparent'; 
    longBreak.style.color = 'white'; 
    shortBreak.style.backgroundColor = 'transparent'; 
    shortBreak.style.color = 'white'; 
    pomodoroTimer.style.backgroundColor = 'white'; 
    pomodoroTimer.style.color = 'black';
    
    mystart(); 

    pauseTimer(); 
    minl = 25;
    min.textContent = minl;  
    timerType = 'pomodoro';

})


longBreak.addEventListener('click', () => { 
    longBreak.style.backgroundColor = 'white'; 
    longBreak.style.color = 'black'; 
    shortBreak.style.backgroundColor = 'transparent'; 
    shortBreak.style.color = 'white'; 
    pomodoroTimer.style.backgroundColor = 'transparent'; 
    pomodoroTimer.style.color = 'white';

    mystart(); 
    
    pauseTimer()
    minl = 10;
    secl = 0 + "0"; 
    sec.textContent = secl; 
    min.textContent = minl;  
    timerType = 'longbreak';

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



/////// settting up the f**k modal

const mainModal = document.querySelector("#modal-Grand_parent"); 
const closeModal = document.querySelectorAll("#close-modal");
const openModalButton = document.querySelector('#open_modal')

openModalButton.addEventListener('click', () => {
  mainModal.style.display = "flex"; 
 
});


closeModal.forEach(e => {
    e.addEventListener('click', () => {
        mainModal.style.display = "none"; 
    });
});

////// modal nav bar 

const navGeneral = document.querySelector('#nav-general'); 
const navTimer = document.querySelector('#nav-timer');
const navSound = document.querySelector('#nav-sounds');
const navAccount = document.querySelector('#nav-account');
let n = 'none'; 
let b = 'block'; 

/// for the nav General 

function generalNav() {

    navRed( b, n, n, n);
    
}; 

navGeneral.addEventListener('click', () => { generalNav() } ); 



/// for the nav navTimer 

function timerNav() {

    navRed( n, b, n, n);
}; 

navTimer.addEventListener('click', () => { timerNav() } )


/// for the nav sounds  

function soundsNav() {

    
    navRed( n, n, b, n);
}

navSound.addEventListener('click', () => { soundsNav() })


/// for the nav account

function accountNav() {
    
    navRed( n, n, n, b); 
}

navAccount.addEventListener('click', () => {accountNav()}); 

/// The modal red div in nav function 

function navRed(g, t, s, a) { 
    const navRedGeneral = document.querySelector('#nav-red-gen'); 
    const navRedTimer = document.querySelector('#nav-red-time');
    const navRedSound = document.querySelector('#nav-red-sound');
    const navRedAccount = document.querySelector('#nav-red-acc');
    
    navRedGeneral.style.display = g;    
    navRedTimer.style.display = t;    
    navRedSound.style.display = s;    
    navRedAccount.style.display = a;    
}; 
