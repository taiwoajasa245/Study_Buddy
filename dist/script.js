const footer = document.getElementById("foot"); 
const fullScreenLogo = document.getElementById("full-screen"); 

console.log(footer);
console.log(fullScreenLogo);

const showHidden = () => { 
    fullScreenLogo.style.display = 'flex'; 
    
}; 

footer.addEventListener("mouseover", showHidden());