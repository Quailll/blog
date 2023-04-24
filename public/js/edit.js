const postId = document.getElementById("post-id").value;

const editForm = async (e) => {
  event.preventDefault();

  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;

  await fetch(`/api/post/${postId}`, {
    method: "PUT",
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

const deleteClick = async () => {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  document.location.replace("/dashboard");
};

document.getElementById("edit-post-form").addEventListener("submit", editForm);
document.getElementById("delete-btn").addEventListener("click", deleteClick);
