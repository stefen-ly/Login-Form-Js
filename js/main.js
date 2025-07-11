document.addEventListener("DOMContentLoaded", () => {
  const successMsg = document.getElementById("successMsg");
  const successText = document.getElementById("successText");
  const userInfo = document.getElementById("userInfo");

  // Handle sign up 
  const signupForm = document.getElementById("signupForm");
  const signupError = document.getElementById("signupError");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!name || !email || !password || !confirmPassword) {
        signupError.textContent = "Please fill in all fields.";
        signupError.classList.remove("hidden");
        successMsg.classList.add("hidden");
        return;
      }

      if (password !== confirmPassword) {
        signupError.textContent = "Passwords do not match.";
        signupError.classList.remove("hidden");
        successMsg.classList.add("hidden");
        return;
      }

      // Success
      signupError.classList.add("hidden");
      successText.textContent = "Welcome!";
      if (userInfo) {
        userInfo.textContent = `Signed up as: ${name} (${email})`;
        userInfo.classList.remove("hidden");
      }
      successMsg.classList.remove("hidden");

      signupForm.reset();
    });
  }

  // Handle login
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      if (!email || !password) {
        loginError.textContent = "Please enter both email and password.";
        loginError.classList.remove("hidden");
        successMsg.classList.add("hidden");
        return;
      }

      // Success
      loginError.classList.add("hidden");
      successText.textContent = "Welcome back!";
      if (userInfo) {
        userInfo.textContent = `Logged in as: ${email}`;
        userInfo.classList.remove("hidden");
      }
      successMsg.classList.remove("hidden");

      loginForm.reset();
    });
  }
});
