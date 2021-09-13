// define the constants used in the JS
// document.querySelector will target the chosen class in the html
// the variable name doesn't need to be the same as the html class but should be sensible, descriptive and useful
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
// slideRight is used instead of document because we only want to target the div elements inside slideRight as defined above
// querySelectorAll targets all the div elements and puts them in an array
// the .length property means only the lenght of the div is returned
// it returns how many divs there are  - in this case 4
const slidesLength = slideRight.querySelectorAll("div").length;

// the activeSlideIndex is initially set to 0 - it is let so it can be redefined below
let activeSlideIndex = 0;
// this targets the css top property of the slideLeft (left-slide in html). It takes the number of the divs in slidesLength (0-3) and then subtracts 1 - this is because the slidesLength is 1-4 but the array index is 0-3 so 4-1 will target the 4th div (#3 in the array)
// slidesLength above targets the right-slide but we are moving the left-slide UP (-y axis)
//this moves divs 2 3 and 4 up by 100, 200 and 300 vh but leaves div 1 at top:0
// you can manually add the -300vh for 4 divs but this way you can change the number of divs and it will automatically change the vh
// this also means that the h1 text and the image now correspond
// i'm not sure what the $ is for yet???
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

//add event listeners to the up and down arrow to run the changeSlide function with parameters of up or down
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// define function with parameter of direction

const changeSlide = (direction) => {
  // define the sliderHeight as the active height of the window (sliderContainer) - this will vary!
  const sliderHeight = sliderContainer.clientHeight;
  //   if direction is up (up arrow with parameter of up)
  if (direction === "up") {
    //   then add 1 to the activeSlideIndex - defined above
    activeSlideIndex++;
    // if the activeSlideIndex is then greater than the slidesLength (remember 1-4 so using -1 to give index) then set activeSlideIndex to 0
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
    //  if direction is down (down arrow with parameter of down)
  } else if (direction === "down") {
    //   then subract 1 from activeSlideIndex
    activeSlideIndex--;
    // if the activeSlideIndex is then less than 0 then subtract 1 form the slidesLength
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  //   the changeSlide function changes the slidesLength by 1 (either plus 1 or -1) this then changes the top: css property - so, for example, instead of moving 2 * vh it will move 3 0r 1 changing the div that is visible in the window

  //

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
