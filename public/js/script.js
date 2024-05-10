





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
    const input = document.querySelector("#phone");
    const iti = window.intlTelInput(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
        initialCountry: "in",
    });
    const countryCode = iti.getSelectedCountryData().dialCode;
    input.value = "+" + countryCode;

            const form = document.querySelector("form");
        
            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent the default form submission behavior
                
                // Display success message
                alert("Your message has been sent successfully!");
        
                // Reset the form
                form.reset();
            });
        });


// menu options
// const serviceDiv = document.querySelector('.service');
// const serviceMenu = document.querySelector('.service-menu');
// let hideMenuTimer;

// serviceDiv.addEventListener('mouseenter', () => {
//   serviceMenu.style.display = 'block';
//   clearTimeout(hideMenuTimer); // Clear the timer if the mouse re-enters
// });

// serviceDiv.addEventListener('mouseleave', () => {
//   hideMenuTimer = setTimeout(() => {
//     serviceMenu.style.display = 'none';
//   }, 500); // Delay hiding the menu for 500 milliseconds (0.5 seconds)
// });

// serviceMenu.addEventListener('mouseenter', () => {
//   clearTimeout(hideMenuTimer); // Clear the timer if the mouse enters the menu
// });

// serviceMenu.addEventListener('mouseleave', () => {
//   hideMenuTimer = setTimeout(() => {
//     serviceMenu.style.display = 'none';
//   }, 500); // Delay hiding the menu for 500 milliseconds (0.5 seconds)
// });



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

      



