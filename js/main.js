let balls = document.querySelectorAll('img[class*="ball"]');
console.log(balls);

function getRandomInt(min, max) {
  //return Math.floor(Math.random() * max);
 return Math.floor(min + Math.random() * (max - min));
}

let index = 0;
balls.forEach(element => {
  let randomSize = getRandomInt(20, 40);
   let classNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  element.setAttribute('class', 'ball-' + classNumber[index]);
 element.setAttribute('style', 'width:' + randomSize + 'vw ;position: absolute;');
 index += 1;

  element.addEventListener("touchstart", () => {
    console.log(element);
    element.remove();
    balls = document.querySelectorAll('img[class*="ball"]');
    console.log(balls);

    if (balls.length == 0) {
      let body = document.querySelector('body');
      body.innerHTML = ' <div class="text"><p class="text-content">GEO, </br>LA MULȚI ANI!</p></div>';
      /*body.innerHTML = '<div class="wave-container"><h1 class="wave-text"><span>G</span><span>E</span><span>O,</span></br><span>L</span><span>A</span>&nbsp&nbsp<span>M</span><span>U</span><span>L</span><span>Ț</span><span>I</span>&nbsp&nbsp<span>A</span><span>N</span><span>I</span><span>!</span></h1></div>';*/
    }
  });
   
 
});

