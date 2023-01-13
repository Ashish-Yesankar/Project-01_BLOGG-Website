const createBlogCard = (title, date, intro) => {
  return `
        <div class="card col" style="font-size: 12px; border: none; "> 
            <p class="text-sm" style="color: rgb(128, 128, 128);">${date.toGMTString()}</p>
            <h3 id="tit" style="font-size: 16px;">${title}</h3>
            <p>${intro}</p>
            <a id="show-post" class="text-primary" href="/Project-01_BLOGG-Website/view.html" onclick="return getTitle('${title}'); return false;" style="text-decoration: none;">Read Full Story</a>
        </div>
    `;
};

const posts = JSON.parse(localStorage.getItem("posts"));

posts.forEach((post) => {
  const postHtml = createBlogCard(post.title, new Date(), post.intro);
  const postsContainer = document.getElementById("blog-tile-container");
  const postDiv = document.createElement("div");
  postDiv.innerHTML = postHtml;

  postsContainer.appendChild(postDiv);
});

function getTitle(title) {
  localStorage.setItem("title", JSON.stringify(title));
}

function deletePost(titleToValidate){
  posts.forEach((post) => {
    if (post.title==titleToValidate){
      console.log(post.title);
      posts.pop();
    }  
  });
}

// function popitup(url) {
// 	newwindow=window.open(url,'name','top=200, bottom=100,height=650,width=2000');
// 	if (window.focus) {newwindow.focus()}
// 	return false;
// }

