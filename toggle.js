// executes the myFunction() code
function myFunction() {
  // declaring a variable and getting the dark selector on localstorage
  const wasdark = localStorage.getItem('dark') === 'true';
  // accessing the selector and variable
  localStorage.setItem('dark', !wasdark);
  // declaring a variable for the body content
  const element = document.body;
  //  returns the css class of an element.
  element.classList.toggle('dark', !wasdark);
}
// executes the dark theme on the body of the page immediately
function onload(){ document.body.classList.toggle('dark', localStorage.getItem('dark') === 'true');}

