let balls = document.querySelectorAll('img[class*="ball"]');
console.log(balls);

balls.forEach(element => {
  console.log(element);
  element.addEventListener("touchstart", () => {
    console.log("event start")
    element.remove();
    console.log("event start done", startx,starty);
  });
});
