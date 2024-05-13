const tiles = document.querySelectorAll('.tile');
const mainView = document.querySelector('.main-view');

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const tileImage = tile.querySelector('img').src;
        const tileHeading = tile.querySelector('h2').textContent;
        const tileDescription = tile.querySelector('p').textContent;

        mainView.innerHTML = `
           
            <img src="${tileImage}" alt="${tileHeading}">
            <div class="text">
            <h2>${tileHeading}</h2>
            <p>${tileDescription}</p>
            <button>READ MORE</button>
            </div>
        `;
    });
});







const testimonialLeft = document.querySelector(".testimonial.left");
const testimonialCenter = document.querySelector(".testimonial.center");
const testimonialRight = document.querySelector(".testimonial.right");

const showName = (testimonial) => {
  const name = testimonial.querySelector(".name");
  if (name) {
    name.style.display = "block";
  }
};

const hideName = (testimonial) => {
  const name = testimonial.querySelector(".name");
  if (name) {
    name.style.display = "none";
  }
};

testimonialLeft.addEventListener("click", () => {
  const centerContent = testimonialCenter.innerHTML;
  testimonialCenter.innerHTML = testimonialLeft.innerHTML;
  testimonialLeft.innerHTML = testimonialRight.innerHTML;
  testimonialRight.innerHTML = centerContent;

  showName(testimonialCenter);
  hideName(testimonialLeft);
  hideName(testimonialRight);
});

testimonialRight.addEventListener("click", () => {
  const centerContent = testimonialCenter.innerHTML;
  testimonialCenter.innerHTML = testimonialRight.innerHTML;
  testimonialRight.innerHTML = testimonialLeft.innerHTML;
  testimonialLeft.innerHTML = centerContent;

  showName(testimonialCenter);
  hideName(testimonialLeft);
  hideName(testimonialRight);
});

// Show the name for the initial center testimonial
showName(testimonialCenter);








// wheel animation


const wheels = document.querySelectorAll('.wheel');
let currentWheelIndex = 0;
const wheelAnimation = document.querySelector('.wheel-animation');

function showWheel(index, direction) {
  wheels.forEach((wheel, i) => {
    if (i === index) {
      wheel.classList.add('active');
    } else {
      wheel.classList.remove('active');
    }
  });
}

// Show the first wheel initially
showWheel(currentWheelIndex, 'forward');

// Add event listener for scroll
wheelAnimation.addEventListener('wheel', (event) => {
  const delta = event.deltaY;
  const maxIndex = wheels.length - 1;

  if (delta > 0) {
    // Scroll down
    if (currentWheelIndex < maxIndex) {
      currentWheelIndex++;
      showWheel(currentWheelIndex, 'forward');
    }
  } else {
    // Scroll up
    if (currentWheelIndex > 0) {
      currentWheelIndex--;
      showWheel(currentWheelIndex, 'reverse');
    }
  }
}, { passive: true });


