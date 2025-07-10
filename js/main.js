const form = document.getElementById("loginForm");
      const errorMsg = document.getElementById("errorMsg");
      const successMsg = document.getElementById("successMsg");

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
          errorMsg.classList.remove("hidden");
          successMsg.classList.add("hidden");
          successMsg.textContent = "";
        } else {
          errorMsg.classList.add("hidden");
          successMsg.textContent = `✅ Logged in as: ${email}`;
          successMsg.classList.remove("hidden");
        }
      });