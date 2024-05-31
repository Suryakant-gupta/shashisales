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
    // Function to handle visibility check
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            const rocSec = entry.target;
            if (entry.isIntersecting) {
                rocSec.classList.add('active');
                setTimeout(function() {
                    rocSec.classList.add('reset');
                }, 1300);
            } else {
                rocSec.classList.remove('active');
                rocSec.classList.remove('reset');
            }
        });
    }

    // Set up Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: [0.7] // Trigger when at least 80% of the element is in view
    });

    const rocSec = document.getElementById('roc-sec');
    observer.observe(rocSec);

    // Throttle function to limit the rate of calls to a function
    function throttle(fn, wait) {
        let time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    }

    // For Mobile - Design-section-two
    const forMobSection = document.querySelector('.design-section-two');
    const tblElements = document.querySelectorAll('.tbl');

    function isElementInCenter(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const elementCenter = rect.top + rect.height / 2;
        return elementCenter >= windowHeight / 3 && elementCenter <= (2 * windowHeight) / 3;
    }

    function handleScrollEffect() {
        if (window.innerWidth <= 768) {
            if (isElementInCenter(forMobSection)) {
                forMobSection.style.backgroundColor = 'white';
                tblElements.forEach(function(tblElement) {
                    tblElement.classList.remove('white-text');
                });
            } else {
                forMobSection.style.backgroundColor = 'black';
                tblElements.forEach(function(tblElement) {
                    tblElement.classList.add('white-text');
                });
            }
        }
    }

    window.addEventListener('scroll', handleScrollEffect);
    window.addEventListener('resize', handleScrollEffect);


    handleScrollEffect();

    // Rocket animation for mobile
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

    window.addEventListener('scroll', throttle(handleScroll, 100));
    window.addEventListener('load', handleScroll);


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





