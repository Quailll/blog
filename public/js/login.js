const loginForm = async (e) => {
  event.preventDefault();

  const title = document.getElementById("username-input-login");
  const body = document.getElementById("passowrd-input-login");

  await fetch(`/api/post/${postId}`, {
    method: "POST",
    body: JSON.stringify({
      username: userNameEl.value,
      password: passwordEl.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if(response.ok){
    document.location.replace('/dashboard')
  }else{
    alert('Failed to login');
  }
};

document.getElementById('login-form').addEventListener('submit', loginForm);
