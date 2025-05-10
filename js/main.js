let balls = document.querySelectorAll('img[class*="ball"]');
console.log(balls);
alert('Hei, Geo, sparge toate baloanele și conectează sunetul!');
function getRandomInt(min, max) {
  //return Math.floor(Math.random() * max);
 return Math.floor(min + Math.random() * (max - min));
}
function music() {
  let video = document.getElementById("audio");
 video.play();
 }
 music();
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
      body.innerHTML = '<div class="text"><p class="text-content">GEO, </br>LA MULȚI ANI!</p></div> <div class="words"><p class="words-content">inspirație</p><p class="words-content">oportunități</p><p class="words-content">armonie</p><p class="words-content">prosperitate</p><p class="words-content">curaj</p><p class="words-content">energie</p><p class="words-content">satisfacție</p><p class="words-content">perseverență</p></div><audio id="audio" src="audio/pesenka_krokodila_geny.mp3"></audio><script src="js/main.js"></script> ';
             }
           
  });

 
});



