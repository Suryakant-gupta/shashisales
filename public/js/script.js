





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
