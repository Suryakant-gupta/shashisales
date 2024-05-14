





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


  const forms = document.querySelectorAll("form");

  forms.forEach(function(form) {
      form.addEventListener("submit", function(event) {
          event.preventDefault();
          
          alert("Your message has been sent successfully!");
  
          form.reset();
      });
  });
});
