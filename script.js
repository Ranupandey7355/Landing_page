function validateForm(event) {
    event.preventDefault();
  
    // Validate CAPTCHA
    var captchaInput = document.getElementById('captchaInput').value;
    var captchaImage = document.getElementById('captchaImage').getAttribute('src').split('=')[1];
    
    if (captchaInput === captchaImage) {
      // CAPTCHA is valid
      submitForm();
    } else {
      // CAPTCHA is invalid
      alert('Invalid CAPTCHA. Please try again.');
      refreshCaptcha();
    }
  }
  
  function submitForm() {
    // Implement your logic to submit the form data
    // Here, you can use AJAX or fetch to send the form data to a server-side script
    
    // Example using fetch:
    var contactForm = document.getElementById('contactForm');
    var formData = new FormData(contactForm);
    
    fetch('submit.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Handle the response from the server
      alert(data);
      contactForm.reset();
      refreshCaptcha();
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  function refreshCaptcha() {
    var captcha
  }