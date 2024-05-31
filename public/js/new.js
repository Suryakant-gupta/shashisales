document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('founderVideo');
    const videoContainer = document.querySelector('.video-container');
    const customPointer = document.createElement('div');
    customPointer.classList.add('custom-pointer');
    document.body.appendChild(customPointer);
  
    let isFullWidth = false;
  
    videoContainer.addEventListener('click', toggleVideoSize);
    videoContainer.addEventListener('mouseenter', showPointer);
    videoContainer.addEventListener('mouseleave', hidePointer);
    window.addEventListener('mousemove', movePointer);
  
    function toggleVideoSize() {
      if (!isFullWidth) {
        video.classList.add('video-full-width');
        video.muted = false;
        document.body.style.cursor = 'none';
        customPointer.textContent = 'Close Reel';
        customPointer.classList.add('show-pointer');
        isFullWidth = true;
      } else {
        video.classList.remove('video-full-width');
        video.muted = true;
        document.body.style.cursor = 'auto';
        customPointer.classList.remove('show-pointer');
        isFullWidth = false;
      }
    }
  
    function showPointer() {
      if (!isFullWidth) {
        customPointer.textContent = 'Show Reel';
        customPointer.classList.add('show-pointer');
      }
    }
  
    function hidePointer() {
      if (!isFullWidth) {
        customPointer.classList.remove('show-pointer');
      }
    }
  
    function movePointer(e) {
      customPointer.style.left = `${e.clientX - 35}px`;
      customPointer.style.top = `${e.clientY - 35}px`;
    }
  });




// -----------------------------------------------------------------------------------------------------------
// Design Page

document.addEventListener('DOMContentLoaded', function() {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle visibility check
  function checkVisibility() {
      const rocSec = document.getElementById('roc-sec');
      if (isInViewport(rocSec)) {
          rocSec.classList.add('active');
          setTimeout(function() {
              rocSec.classList.add('reset');
          }, 1300);
      } else {
          rocSec.classList.remove('active');
          rocSec.classList.remove('reset');
      }
  }

  // Initial check in case the element is already in view on page load
  checkVisibility();

  // Event listeners for scroll and resize
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Variables and event listeners for mobile-specific behavior
  let isHovered = false;
  const forMob = document.querySelector('.for-mob');
  const forMobSection = document.querySelector('.design-section-two');
  const tblElements = document.querySelectorAll('.tbl');

  function handleMobileScroll() {
      if (window.innerWidth <= 768 && !isHovered) {
          if (window.scrollY > 0) {
              forMobSection.style.backgroundColor = '#000';
          } else {
              forMobSection.style.backgroundColor = 'transparent';
          }
      }
  }

  function handleMobileTblScroll() {
      if (window.innerWidth <= 768) {
          if (window.scrollY > 0) {
              forMobSection.style.backgroundColor = '#000';
              tblElements.forEach(function(tblElement) {
                  tblElement.classList.add('white-text');
              });
          } else {
              forMobSection.style.backgroundColor = 'transparent';
              tblElements.forEach(function(tblElement) {
                  tblElement.classList.remove('white-text');
              });
          }
      }
  }

  // Event listeners for scroll and hover effects
  window.addEventListener('scroll', handleMobileScroll);
  window.addEventListener('scroll', handleMobileTblScroll);

  forMob.addEventListener('mouseenter', function() {
      isHovered = true;
      forMob.style.backgroundColor = '#000';
  });

  forMob.addEventListener('mouseleave', function() {
      isHovered = false;
      if (window.scrollY === 0) {
          forMob.style.backgroundColor = 'transparent';
      }
  });

  // Rocket animation specific behavior for mobile
  if (window.innerWidth <= 600) {
      var rocket = document.getElementById("rocket");
      var rocketImage = rocket.querySelector("img");

      rocket.addEventListener("animationstart", function() {
          rocketImage.src = "/assets/images/rocket.png";
      });

      rocket.addEventListener("animationiteration", function() {
          rocketImage.src = "/assets/images/rocket.png";
      });

      rocket.addEventListener("animationstart", function(e) {
          var duration = e.target.getAnimations()[0].effect.getTiming().duration;

          setTimeout(function() {
              rocketImage.src = "/assets/images/rocket2.png";
          }, 0.1220 * duration);

          setTimeout(function() {
              rocketImage.src = "/assets/images/rocket.png";
          }, 0.3333 * duration);

          setTimeout(function() {
              rocketImage.src = "/assets/images/rocket2.png";
          }, 0.6667 * duration);

          setTimeout(function() {
              rocketImage.src = "/assets/images/rocket.png";
          }, duration);
      });
  }

  // Hover effect for images
  function addHoverEffect(elementId, originalSrc, hoverSrc) {
      const element = document.getElementById(elementId).querySelector('img');
      element.addEventListener('mouseenter', function() {
          element.src = hoverSrc;
      });
      element.addEventListener('mouseleave', function() {
          element.src = originalSrc;
      });
  }

  addHoverEffect('ar1', '/assets/images/ar1.png', '/assets/images/ar11.jpeg');
  addHoverEffect('ar2', '/assets/images/ar2.png', '/assets/images/ar22.jpeg');
  addHoverEffect('ar3', '/assets/images/ar3.png', '/assets/images/ar33.jpeg');
  addHoverEffect('ar4', '/assets/images/ar4.png', '/assets/images/ar44.jpeg');

  // Scroll and hover effect for animated elements
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  function handleScroll() {
      animatedElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

          if (isInViewport) {
              element.classList.add('scrolled');
          } else {
              element.classList.remove('scrolled');
          }
      });
  }

  // Event listeners for scroll and load
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);

  // Hover effect for animated elements
  animatedElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
          element.classList.add('scrolled');
      });

      element.addEventListener('mouseleave', () => {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

          if (!isInViewport) {
              element.classList.remove('scrolled');
          }
      });
  });
});




