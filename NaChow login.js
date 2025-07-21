// ==== SIGNUP FUNCTIONALITY ====
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newsignupUsername = document.getElementById("signupUsername").value.trim();
    const newsignupPassword = document.getElementById("signupPassword").value.trim();

    // Save to localStorage
    localStorage.setItem("nachowUser", newsignupUsername);
    localStorage.setItem("nachowPass", newsignupPassword);

    // Redirect to login
    window.location.href = "NaChow 2.html";
  });

// ==== LOGIN FUNCTIONALITY ====

  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const savedUser = localStorage.getItem("nachowUser");
    const savedPass = localStorage.getItem("nachowPass");

    if (username === "" || password === "") {
      errorMsg.textContent = "⚠️ Please login to continue!";
    } else if (username !== savedUser) {
      errorMsg.textContent = "❌ Username not found!";
    } else if (password !== savedPass) {
      errorMsg.textContent = "❌ The password is incorrect!";
    } else {
      window.location.href = "food-library.html";
    }
  });