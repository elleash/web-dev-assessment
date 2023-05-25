// setting up a function that will be called
window.addEventListener('scroll', reveal);
//preforming the reveal selector in css
function reveal(){
    // declaring a variable
    //returns the reveal selector
    var reveals = document.querySelectorAll ('.reveal');
    // loops the dark mode
    for(var i = 0; i < reveals.length; i++){
        // reveals the contents
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        // reveals the content on a certain height
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('show');
        }
        // unreveals the content on a certain height
        else{
            reveals[i].classList.remove('show');
        }
    }
}
