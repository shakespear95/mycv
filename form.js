function validateForm() {
    var nameInput = document.querySelector('.name');
    var emailInput = document.querySelector('.email');

    if (nameInput.value === '') {
      alert('Please enter your name.');
      return false;
    }

    if (emailInput.value === '') {
      alert('Please enter your email.');
      return false;
    }

    if (!validateEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }