<script>
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      // Form submission code (replace this with your desired logic)
      alert("Form submitted successfully!");
      // You can also use AJAX to send the form data to a server-side script
      // for further processing or store it in a database.
    }
  });

  function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const selectedOption = document.getElementById("tipe-liburan");

    // Check if the name and email fields are not empty
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name.");
      return false;
    }

    if (emailInput.value.trim() === "") {
      showError(emailInput, "Please enter your email address.");
      return false;
    }

    // Check if the email format is valid using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address.");
      return false;
    }

    return true;
  }

  function showError(inputElement, errorMessage) {
    // Display the error message next to the input element
    const errorElement = document.createElement("div");
    errorElement.className = "text-red-500 text-sm mt-1";
    errorElement.innerText = errorMessage;
    
    const parentElement = inputElement.parentElement;
    parentElement.appendChild(errorElement);

    // Set focus to the input element with the error
    inputElement.focus();

    // Remove the error message after 5 seconds
    setTimeout(function() {
      parentElement.removeChild(errorElement);
    }, 5000);
  }
</script>
