document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    const invalidPasswordMessage = document.getElementById("invalid-password");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        if (username === "user" && password === "password") {
            window.location.href = "login_success.html";
        } else {
            invalidPasswordMessage.classList.remove("hidden");
        }
    });

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;

        window.location.href = "index.html";
    });

    forgotPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const forgotUsername = document.getElementById("forgot-username").value;

        alert("Password reset email sent.");
    });
});
