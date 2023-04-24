const signupForm = async (e) => {
  e.preventDefault();

  const userNameEl = document.getElementById("username-input-signup");
  const passwordEl = document.getElementById("password-input-signup");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: userNameEl.value,
      password: passwordEl.value, 
    }),
    headers: {
      "Content-type": "application/json"
    },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document.getElementById("signup-form").addEventListener("submit", signupForm);