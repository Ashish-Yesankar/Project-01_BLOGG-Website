const createPostButton = document.getElementById("create-post");
createPostButton.onclick = () => {
  const titleInput = document.getElementById("title");
  const introInput = document.getElementById("intro");
  const descriptionInput = document.getElementById("description");
  const imageLinkInput = document.getElementById("image-link");

  const post = {
    title: titleInput.value,
    intro: introInput.value,
    description: descriptionInput.value,
    imageLink: imageLinkInput.value,
  };

  if (title && imageLinkInput) {
    // add post to localstorage
    let posts = JSON.parse(localStorage.getItem("posts"));
    
    if (posts === null) posts = [];
    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));
  }

  // redirect to home page
  location.href = "/";
