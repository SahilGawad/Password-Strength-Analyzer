function checkPassword() {

  let password = document.getElementById("password").value;

  let strengthBar = document.getElementById("strengthBar");
  let message = document.getElementById("message");
  let suggestions = document.getElementById("suggestions");
  let suggestBox = document.getElementById("suggestBox");

  let score = 0;
  let tips = [];

  // Length Check
  if(password.length >= 8){
    score++;
  } else {
    tips.push("Use at least 8 characters");
  }

  // Uppercase Check
  if(/[A-Z]/.test(password)){
    score++;
  } else {
    tips.push("Add uppercase letters");
  }

  // Lowercase Check
  if(/[a-z]/.test(password)){
    score++;
  } else {
    tips.push("Add lowercase letters");
  }

  // Number Check
  if(/[0-9]/.test(password)){
    score++;
  } else {
    tips.push("Add numbers");
  }

  // Special Character Check
  if(/[!@#$%^&*]/.test(password)){
    score++;
  } else {
    tips.push("Add special characters");
  }

  // Suggestions List
  suggestions.innerHTML = "";

  tips.forEach(tip => {
    suggestions.innerHTML += `<li>${tip}</li>`;
  });

  // Password Strength
  if(score <= 2){

    strengthBar.style.width = "33%";
    strengthBar.style.background = "red";

    message.innerHTML = "Weak Password";
    message.style.color = "red";

    suggestBox.style.display = "block";
  }

 else if(score <= 4){

  strengthBar.style.width = "66%";
  strengthBar.style.background = "orange";

  message.innerHTML = "Medium Password";
  message.style.color = "orange";
}

else{

  strengthBar.style.width = "100%";
  strengthBar.style.background = "lime";

  message.innerHTML = "Strong Password";
  message.style.color = "lime";
}
}

// Generate Password
function generatePassword(){

  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*";

  let allChars = uppercase + lowercase + numbers + symbols;

  let password = "";

  // Ensure strong password rules
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // Remaining characters
  for(let i = 4; i < 12; i++){

    let randomIndex = Math.floor(Math.random() * allChars.length);

    password += allChars[randomIndex];
  }

  // Shuffle password
  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  let passwordInput = document.getElementById("password");

  // Add generated password
  passwordInput.value = password;

  // Show generated password
  passwordInput.type = "text";

  // Check strength
  checkPassword();
}
// Hide Suggestion Box
function hideSuggestion(){

  // Clear password input
  document.getElementById("password").value = "";

  // Reset strength bar
  document.getElementById("strengthBar").style.width = "0%";

  // Clear message
  document.getElementById("message").innerHTML = "";

  // Clear suggestions
  document.getElementById("suggestions").innerHTML = "";

  // Hide suggestion box
  document.getElementById("suggestBox").style.display = "none";

  // Reset input type
  document.getElementById("password").type = "password";
}
function hidePassword(){

  let passwordInput = document.getElementById("password");

  // Hide password while typing
  passwordInput.type = "password";

  // Run checker
  checkPassword();
}