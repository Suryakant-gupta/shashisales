window.addEventListener('DOMContentLoaded', function() {
  const heroVideo = document.getElementById('heroVideo');
  const videoContainer = document.querySelector('.middle-vedio');
  const customPointer = document.createElement('div');
  customPointer.classList.add('custom-cursor');
  document.body.appendChild(customPointer);
  let isFullWidth = false;

  videoContainer.addEventListener('click', toggleVideoSize);
  videoContainer.addEventListener('mouseenter', showPointer);
  videoContainer.addEventListener('mouseleave', hidePointer);
  window.addEventListener('mousemove', movePointer);

  function toggleVideoSize() {
    if (!isFullWidth) {
      heroVideo.classList.add('video-full-width');
      heroVideo.muted = false;
      document.body.style.cursor = 'none';
      customPointer.textContent = 'Close Video';
      customPointer.classList.add('show-pointer');
      isFullWidth = true;
    } else {
      heroVideo.classList.remove('video-full-width');
      heroVideo.muted = true;
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



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const faqAnswers = document.querySelectorAll('.faq-answer');

// searchBtn.addEventListener('click', () => {
//     const searchTerm = searchInput.value.toLowerCase();

//     faqAnswers.forEach(answer => {
//         const answerText = answer.textContent.toLowerCase();
//         if (answerText.includes(searchTerm)) {
//             answer.parentElement.classList.add('active');
//         } else {
//             answer.parentElement.classList.remove('active');
//         }
//     });
// });






// Contact Form
document.addEventListener("DOMContentLoaded", function(event) {

  const phones = document.querySelectorAll("[id*=phone]");
  
  phones.forEach(function(phone) {
      const iti = window.intlTelInput(phone, {
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
          initialCountry: "in",
      });
      const countryCode = iti.getSelectedCountryData().dialCode;
      phone.value = "+" + countryCode;
  });


  

  
});





// menu options



const popupTriggers = document.querySelectorAll('.b');
const popups = document.querySelectorAll('.a');

popupTriggers.forEach((trigger, index) => {
  const popup = popups[index];
  let hideMenuTimer;

  trigger.addEventListener('mouseenter', () => {
    popup.style.display = 'block';
    clearTimeout(hideMenuTimer);
  });

  trigger.addEventListener('mouseleave', () => {
    hideMenuTimer = setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  });

  popup.addEventListener('mouseenter', () => {
    clearTimeout(hideMenuTimer);
  });

  popup.addEventListener('mouseleave', () => {
    hideMenuTimer = setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  });
});



