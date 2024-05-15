const heroVideo = document.getElementById('heroVideo');
const videoContainer = document.querySelector('.middle-vedio');
const fullWidthVideo = document.createElement('div');
fullWidthVideo.classList.add('full-width-video');
const body = document.querySelector('body');
let isVideoFullWidth = false;
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
cursor.textContent = 'Show Reel';
body.appendChild(cursor);

videoContainer.addEventListener('click', toggleVideoSize);
document.addEventListener('click', closeFullWidthVideo);

function toggleVideoSize() {
  if (!isVideoFullWidth) {
    isVideoFullWidth = true;
    heroVideo.muted = false;
    fullWidthVideo.appendChild(heroVideo);
    body.appendChild(fullWidthVideo);
    cursor.textContent = 'Close Video';
  } else {
    closeFullWidthVideo();
  }
}

function closeFullWidthVideo(event) {
  if (!event || event.target === fullWidthVideo) {
    isVideoFullWidth = false;
    heroVideo.muted = true;
    videoContainer.appendChild(heroVideo);
    body.removeChild(fullWidthVideo);
    cursor.textContent = 'Show Reel';
  }
}

videoContainer.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
});

videoContainer.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
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



