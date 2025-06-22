const postListContainer = document.getElementById("post-list");
const postDetailsContainer = document.getElementById("post-details")

function openPostDetails(postId) {
    fetch(`http://localhost:3000/posts/${postId}`)
        .then(res => res.json())
        .then(post => {
            const postCard = `
            <div class="border-2 border-black bg-white max-w-2xl h-fit rounded-2xl">
              <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">${post.title}</h2>
                <p class="text-sm text-neutral-700 mb-1">by ${post.author}</p>
                <p class="text-xs text-neutral-500 mb-6">${post.timestamp}</p>
                <p class="text-base text-neutral-900 leading-relaxed whitespace-pre-line">
                  ${post.content}
                </p>
              </div>
            </div>
            `
            postDetailsContainer.innerHTML = postCard
        })
}

function displayPosts() {
    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = `
                <li onclick="openPostDetails(${post.id})" class="text-left w-full p-2 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                <h2 class="block text-md font-semibold">${post.title}</h2>
                <p className="text-xs text-neutral-700">${post.timestamp}</p>
                </li>
                `
                postListContainer.innerHTML += postCard
            });
        });
}

displayPosts();