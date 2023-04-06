const commentForm = async (event) => {
  event.preventDefault();

  const postId = document.getElementById('post-id').value;
  const body = document.getElementById('comment-body').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.reload();
  }
};
  
document.getElementById('new-comment-form').addEventListener('submit', commentForm);