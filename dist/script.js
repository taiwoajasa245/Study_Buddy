const footer = document.getElementById("foot"); 
const fullScreenLogo = document.getElementById("full-screen"); 
const reload = document.getElementById('reload'); 
const timer = document.getElementById('timer'); 


const showHidden = () => { 
    fullScreenLogo.style.display = 'block'; 
    
}; 

function hideEle() { 
    fullScreenLogo.style.display = "none"; 
}; 

function rotateMe() { 
    reload.classList.add('animate-spin'); 
   
};

// reload.addEventListener('click', rotateMe(), {once: true})