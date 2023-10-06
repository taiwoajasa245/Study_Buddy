////// modal nav bar 

const navGeneral = document.querySelector('#nav-general'); 
const navTimer = document.querySelector('#nav-timer');
const navSound = document.querySelector('#nav-sounds');
const navAccount = document.querySelector('#nav-account');
let n = 'none'; 
let b = 'block'; 

function navPlain(g, t, s, a) { 
    const plainSound = document.getElementById('plain_sounds');    
    const plainTimer = document.getElementById('plain_timer'); 
    const plainGeneral = document.getElementById('plain_panel'); 
    const plainAccount = document.getElementById('plain_account'); 
    
    plainGeneral.style.display = g; 
    plainTimer.style.display = t; 
    plainSound.style.display = s; 
    plainAccount.style.display = a; 
}

/// for the nav General 
navGeneral.addEventListener('click', () => { navPlain( b, n, n, n) } ); 
/// for the nav navTimer 
navTimer.addEventListener('click', () => { navPlain( n, b, n, n)  } )

/// for the nav sounds    
navSound.addEventListener('click', () => {  navPlain( n, n, b, n)  })

/// for the nav account 
navAccount.addEventListener('click', () => { navPlain( n, n, n, b) }); 

///// settting up the f**k modal

const mainModal = document.querySelector("#modal-Grand_parent"); 
const closeModal = document.querySelectorAll("#close-modal");
const openModalButton = document.querySelector('#open_modal')

openModalButton.addEventListener('click', () => {
    mainModal.style.display = "flex"; 
    
});



closeModal.forEach(e => {
    e.addEventListener('click', () =>  {
        mainModal.style.display = "none";                   
    });
});

const backChange = para => {
    document.body.style.backgroundImage = para;  
}



/// working on the  bg image
const imageBackground  = { 
    forestView:"url('/dist/img/b4b9101e8cdbad99d7b0.jpg')", 
    londonView:"url('/dist/img/5d8df2971a0ff103dd00.jpg')", 
    streetView:"url('/dist/img/8d2f0e9db9ad4a5860cd.jpg')", 
    firePlace:"url('/dist/img/a51c12e2c3db9cc34735.jpg')", 
    blackSandView:"url('/dist/img/blackSand.jpg')", 
    cityView:"url('/dist/img/c629a813b3561cfa40dd.jpg')", 
    iceLand:"url('/dist/img/f1cb6ebed3e6941bc76a.jpg')", 
    waterDrop:"url('/dist/img/pexels-francesco-ungaro-396547.jpg')", 
}; 

const changeBackground = document.getElementById('background'); 
changeBackground.addEventListener("change", function() {
    
    // Get the selected option's value
    var selectedOption = this.value; 
    
    
    // a switch statement for the each value
    switch (selectedOption) {
        case "forestView":
            // Code to run when Option 1 is clicked
            backChange(imageBackground.forestView)
            break;
        case "londonView":
            // Code to run when Option 2 is clicked
            backChange(imageBackground.londonView)
            break;
        case "streetView":
            // Code to run when Option 3 is clicked
            backChange(imageBackground.streetView)
            break;
        case "firePlace":
            // Code to run when Option 3 is clicked
            backChange(imageBackground.firePlace)
            break;
        case "blackSandView":
            // Code to run when Option 3 is clicked
            backChange(imageBackground.blackSandView)
            break;
        case "cityView":
            // Code to run when Option 3 is clicked
            backChange(imageBackground.cityView)
            break;
        case "iceLand":
            // Code to run when Option 3 is clicked
            backChange(imageBackground.iceLand)
            break;
        case "waterDrop":
            // Code to run when Option 3 is clicked
            backChange(imageBackground.waterDrop)
            break;
        default:
            // Code to run when none of the options are matches;
            console.error('no option clicked ')
    }
});


  

export default backChange; 