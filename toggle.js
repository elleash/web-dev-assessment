function myFunction() {

  const wasdark = localStorage.getItem('dark') === 'true';
  localStorage.setItem('dark', !wasdark);
  const element = document.body;
  element.classList.toggle('dark', !wasdark);
}

function onload(){ document.body.classList.toggle('dark', localStorage.getItem('dark') === 'true');}

