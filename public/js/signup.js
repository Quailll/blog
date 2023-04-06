const signupForm = async  (event)=>{
  event.preventDefault();

  const usernameEl = document.getElementById("username-input-signup");
  const passwordEl = document.getElementById("password-input-signup");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

document
  .getElementById("signup-form")
  .addEventListener("submit", signupForm);
