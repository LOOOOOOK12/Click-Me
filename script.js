const box = document.getElementById('container');

let counter = 0;
let nice = 0;


function moveContainer() {
  
  let randomX = Math.random() * window.innerWidth;
  let randomY = Math.random() * window.innerHeight;

  counter +=1;
  document.getElementById('count').innerHTML = counter;
  
  if (randomX.toString().includes('69') || randomY.toString().includes('69')) {
    document.body.style.transition = 'all 0.5s ease-in-out';
    document.body.style.backgroundColor = '#fbb1bd'; 
   
    box.style.transition = 'all 0.5s ease-in-out';
    box.style.backgroundColor = '#ff5c8a'; 
    document.getElementById('button').innerHTML = "Nice!";
    document.getElementById('label').innerHTML = "Nice!";
    nice +=1;
    document.getElementById('niceCount').innerHTML = nice;
  } else {
    document.body.style.backgroundColor = ''; 
    box.style.backgroundColor = ''; 
    document.getElementById('label').innerHTML = "Press the Button!";
    document.getElementById('button').innerHTML = "Press Me";
  }
  
  
  box.style.left = randomX + 'px';
  box.style.top = randomY + 'px';
  box.style.transition = 'left 0.5s ease-in-out, top 0.5s ease-in-out';
}

document.getElementById('button').onclick = moveContainer;

