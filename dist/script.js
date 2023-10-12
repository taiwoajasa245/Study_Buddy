import backChange from "./app.js";

const footer = document.getElementById("foot"); 
const fullScreenLogo = document.getElementById("full-screen"); 
const reload = document.getElementById('reload'); 
const imageLogo = document.getElementById('image-logo'); 





const showHidden = () => { fullScreenLogo.style.display = 'block'}; 
function hideEle() { fullScreenLogo.style.display = "none" }; 
footer.addEventListener('mouseover', () => { showHidden() }); 
footer.addEventListener('mouseout', () => { hideEle() }); 




// Function to toggle fullscreen
function toggleFullScreen() {

  if (!document.fullscreenElement) {
    footer.style.marginTop = '10rem';
    imageLogo.style.width = '25rem';
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    footer.style.marginTop = '3.5rem';
    imageLogo.style.width = '20rem';
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}; 

// Add a click event listener to the button
fullScreenLogo.addEventListener("click", toggleFullScreen);

// timer variable

let min = document.getElementById('min'); 
let sec = document.getElementById('sec');
let interval_01; 
let isPaused = false;
let minl;  
let secl;
let staticTimer; 
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
                playAudio();  
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
        staticTimer = 'pomo'; 
    }else if ( timerType === 'shortbreak' ) { 
        minl= `0${5}`; 
        min.textContent = minl;
        // secl = `0${0}`; 
        secl = 60; 

        staticTimer = 'short'

      
    }else if ( timerType === 'longbreak') { 
        minl = 10; 
        min.textContent = minl;
        secl = `0${0}`; 
        staticTimer = 'long'
    }

    minl -= 1;
    min.textContent = minl;  
    // reduce second every 1 second
    secl = 60; 
    startInterval();

   
    
}; 



reload.addEventListener('click', () => { 

    function reloadMe() { 
    
        if (timerType === 'pomodoro') { 
            minl = 25;
            secl = `0${0}`; 
            staticTimer = 'pomo'

        }else if ( timerType === 'shortbreak' ) { 
            minl= `0${5}`; 
            secl = `0${0}`; 
            min.textContent = minl;
            sec.textContent = secl;
            staticTimer = 'short'
            
        }else if ( timerType === 'longbreak') { 
            minl = 10; 
            secl = `0${0}`; 
            min.textContent = minl;
            staticTimer = 'long'
            
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
    reloadMe(); 
    stopAudio(); 
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

pomodoroTimer.addEventListener('click', () => { pomodoroFunc(25) }); 
function pomodoroFunc(e) { 

    topBtn(t, w, t, w, w, bl); 

    mystart(); 
    pauseTimer()
    isPaused = false; 
    clearInterval(interval_01)
    
    minl = 25;
    min.textContent = minl;  
    secl =`0${0}`; 
    sec.textContent = secl; 

    timerType = 'pomodoro';
}


shortBreak.addEventListener('click', () => { shortbreakFunc(5) }); 
function shortbreakFunc(e) { 
    
    topBtn(t, w, w, bl, t, w); 
    mystart(); 
    pauseTimer()
    isPaused = false; 
    clearInterval(interval_01)
    
    minl = `0${e}`;
    min.textContent = minl;  
    secl =`0${0}`; 
    sec.textContent = secl; 

    timerType = 'shortbreak'; 

}



longBreak.addEventListener('click', () => { longbreak(10) });
function longbreak(e) { 
    pauseTimer()
    isPaused = false; 
    clearInterval(interval_01)

    minl = e;
    secl = 0 + "0"; 
    sec.textContent = secl; 
    min.textContent = minl;  
    timerType = 'longbreak';

    topBtn(w, bl, t, w, t, w)
    mystart(); 
} 


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


// audio 

// const audios = document.getElementById('audios'); 

const alarmAudio  = {

    secondsAlarm: "'/dist/alarm/031974_30-seconds-alarm-72117.mp3'",
    alarmBeepClock: "'/dist/alarm/alarm_beep-clock-165474.mp3'",
    shortClockAlarm: "'/dist/alarm/alarm-clock-short-6402.mp3'",
    clockAlarm: "'/dist/alarm/clock-alarm-8761.mp3'",
    darkSitar: "'/dist/alarm/dark-sitar-7546.mp3'",
    simpleClock: "'/dist/alarm/oversimplified-alarm-clock-113180.mp3'",
    rigtone: "'/dist/alarm/ringtone-126505.mp3'",
    clockStrickes: "'/dist/alarm/the-clock-strickes-twelve-o-clock-nature-sounds-7806.mp3'",
}; 

var audio = new Audio('/dist/alarm/031974_30-seconds-alarm-72117.mp3'); 
var volumeRange = document.querySelector('#volume-range')

function playAudio() {
    audio.play();
    console.log('audioed play');
    // Set a timer to stop the audio after 10 seconds
    var stopTimer = setTimeout(function() {
        stopAudio() // Reset the audio to the beginning
    }, 5000); // 10000 milliseconds = 10 seconds

}



function stopAudio() {
    console.log('stop audio');
    audio.pause();
    audio.currentTime = 0;
    clearTimeout(stopTimer);
}

volumeRange.addEventListener('input', function () {
    audio.volume = volumeRange.value;
    // console.log('Volume set to ' + volumeRange.value);
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
    


    // if (timerType === 'pomodoro') { 
    //     if ( staticTimer === 'pomo') { 
    //         console.log('hey Pomo');
    //         minl = Number(pomodoroValue);
    //     }

    //     secl = `0${0}`; 
    // }else if ( timerType === 'shortbreak' ) { 
    //     if ( staticTimer === 'short') { 
    //         console.log('hey Shoteee');
         
    //     }
    //     minl= Number(shortbreakValue); 
    //     secl = `0${0}`; 
    //     min.textContent = minl;
    //     sec.textContent = secl;
    //     taticTimer === 'long') { 
    //         co
    // }else if ( timerType === 'longbreak') {
    //     if ( snsole.log('hey longeee');
    //     } 
    //     minl = Number(longBreakValue); 
    //     secl = `0${0}`; 
    //     min.textContent = minl; 
        
    // }

    // sec.textContent = secl; 
    // min.textContent = minl; 
    mainModal.style.display = "none"; 
   
     
})


// function Hide(ele, ele2 ) { 

//     // Add an event listener for the "change" event
//     ele.addEventListener("change", function() {
//     // This function will run when the checkbox is toggled
//         if (ele.checked) {
//             // Checkbox is checked
//             yourFunctionWhenChecked();
//             } else {
//             // Checkbox is unchecked
//             yourFunctionWhenUnchecked();
//         }
//     });

//     function yourFunctionWhenChecked() {
//         let spotifyPlaylist = document.getElementById('spotifyPlaylist')
//         spotifyPlaylist.style.display = 'none'; 
//         console.log(spotifyPlaylist);
//         // console.log("Checkbox is checked");
//     }
    
//     function yourFunctionWhenUnchecked() {
//         console.log("Checkbox is unchecked");
//         let spotifyPlaylist = document.getElementById('spotifyPlaylist')
//         spotifyPlaylist.style.display = 'block'; 
//     }
    
// }


        // Get all checkboxes with the class "custom-checkbox"
        const checkboxes = document.querySelectorAll('.custom-checkbox');

        // Add a single event listener to handle all checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const action = this.getAttribute('data-action');
                if (this.checked) {
                    alert(`${action} is checked`);
                } else {
                    alert(`${action} is unchecked`);
                }
            });
        });


// var checkbox_2 = document.getElementById("checkbox2");
// var checkbox4 = document.getElementById("checkBox4");







