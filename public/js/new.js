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

document.addEventListener("DOMContentLoaded", function() {
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
});



document.addEventListener("DOMContentLoaded", function() {
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

  // Apply scroll effect
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);

  // Apply hover effect
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