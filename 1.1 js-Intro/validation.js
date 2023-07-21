function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("Email cannot be empty");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Email invalid");
    return false;
  }

  if (password === "") {
    alert("Password cannot be empty");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  alert("Login success");
  return true;
}
