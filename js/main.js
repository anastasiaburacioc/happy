let balls = document.querySelectorAll('img[class*="ball"]');
console.log(balls);

balls.forEach(element => {
  console.log(element);
  element.addEventListener("touchstart", () => {
    element.remove();
  });
});
