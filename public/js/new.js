window.addEventListener('DOMContentLoaded', function() {
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





  