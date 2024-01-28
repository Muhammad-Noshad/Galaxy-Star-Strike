import { pxToNum } from "../utils/convert-px-to-number.js";

export function renderBackground() {  
  // Height of body
  let height = getComputedStyle(document.body).getPropertyValue('height');

  height = pxToNum(height);

  // Converting it so that it is divisible by 10
  height = Number((height/10).toFixed(0) + '0');

  // Scrolling to bottom
  setTimeout(() => { scrollTo(0, height) }, 50);

  let counter = height;

  function scrollBackground(){
    scrollBy(0,-5);
    
    counter-=10;    // Go half-way and reset

    if(counter === 0){
      counter = height;
      scrollTo(0, height);
    }
  }

  setInterval(() => { scrollBackground(); }, 10);
}