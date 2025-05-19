document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Getting input values
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  // Name validation
  if (name.length < 5) {
    document.getElementById("nameError").textContent = "Name must be at least 5 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (phone === "123456789" || !phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
    valid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Password validation
  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
    document.getElementById("passwordError").textContent = "Password is too weak.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "Passwords do not match.";
    valid = false;
  } else {
    document.getElementById("confirmError").textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    // You can also reset the form here
    document.getElementById("registrationForm").reset();
  }
});
