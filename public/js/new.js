const newForm = async (e) => {
  event.preventDefault();

  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;

  await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};
document.getElementById("new-post-form").addEventListener("submit", newForm);
