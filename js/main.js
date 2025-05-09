let balls = document.querySelectorAll('img[class*="ball"]');
console.log(balls);

function getRandomInt(min, max) {
  //return Math.floor(Math.random() * max);
 return Math.floor(min + Math.random() * (max - min));
}
let index = 0;
balls.forEach(element => {
  //console.log(element);
  let positionBottom = getRandomInt(-150, 0);
  let positionLeft = getRandomInt(-10, 100);
  let randomSize = getRandomInt(20, 40);
  //element.setAttribute('width', `${getRandomInt(70, 110)}vw`);
  //element.setAttribute('position', 'absolute');
   let classNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  element.setAttribute('class', 'ball-' + classNumber[index]);
 element.setAttribute('style', 'width:' + randomSize + 'vw ;position: absolute;');
    //element.setAttribute('style', 'width:' + randomSize + 'vw ;position: absolute; bottom:' + positionBottom + 'vw; left:' + positionLeft + 'vw; ');
    //animation: ball-fall' + animationNumber[index] + ' 15s ease forwards
 index += 1;
    
      
 
  //element.setAttribute('top', `${getRandomInt(-110, 100)}vw`);
  //element.setAttribute('right', `${getRandomInt(-40, 100)}vw`);
  //element.setAttribute('left', `${getRandomInt(-40, 100)}vw`);
  element.addEventListener("touchstart", () => {
    //element.classList.remove('ball-one-animation');kk
    //element.classList.add('ball-change');
    console.log(element);
    element.remove();
  });
});
