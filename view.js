const showBlogCard = (title, date, description,image,intro) => {
    return `
          <div class="card col" style="font-size: 12px; border: none;">
                <div >
                    <h1 style="font-size: 28px;">Welcome to Blog: ${title}</h1>
                    <p class="text-sm" style="color: rgb(128, 128, 128);">${date.toGMTString()}</p>
                    <h3>Introduction</h3>
                    <p>${intro}</p>
                    <p>${description}</p>
                </div>
                <div>
                    <img src="${image}"  class="rounded float-end" alt="">
                </div>
                
          </div>
      `;
  };
  
const posts = JSON.parse(localStorage.getItem("posts"));
let titleToValidate = JSON.parse(localStorage.getItem("title"));

posts.forEach((post) => {
    if (post.title==titleToValidate){
        const postHtml = showBlogCard(post.title, new Date(), post.description, post.imageLink, post.intro);
        const postsContainer = document.getElementById("blog-tile-container");
        const postDiv = document.createElement("div");
        postDiv.innerHTML = postHtml;
      
        postsContainer.appendChild(postDiv);
    }  
  });