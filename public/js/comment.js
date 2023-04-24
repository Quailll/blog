const commentForm = async (e) => {
  event.preventDefault();

  const postId = document.getElementById("post-id").value;
  const body = document.getElementById("comment-body").value;

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postID,
        body,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .getElementById("new-comment-form")
  .addEventListener("submit", commentForm);

