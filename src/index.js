const postListContainer = document.getElementById("post-list");
const postDetailsContainer = document.getElementById("post-details");

function openPostDetails(postId) {
    fetch(`http://localhost:3000/posts/${postId}`)
        .then(res => res.json())
        .then(post => {
            const postCard = `
            <div class="border-2 border-black bg-white max-w-3xl h-full rounded-2xl overflow-y-scroll">
              <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">${post.title}</h2>
                <p class="text-sm text-neutral-700 mb-1">by ${post.author}</p>
                <p class="text-xs text-neutral-500 mb-6">${post.timestamp}</p>
                ${post.content.split("\n").map(paragraph => `<p class="text-base text-neutral-900 leading-relaxed whitespace-pre-line">
                  ${paragraph}
                </p>`).join("")}
              </div>
            </div>
            `;
            postDetailsContainer.innerHTML = postCard;
            for (const listItem of postListContainer.children) {
                // Clear selected state from all items
                listItem.classList.remove("bg-black", "text-white");
                listItem.classList.add("bg-white", "text-black");
                        
                // Set selected state on the clicked item
                if (listItem.id == postId) {
                    listItem.classList.remove("bg-white", "text-black");
                    listItem.classList.add("bg-black", "text-white");
                }
            }
        });
};

function displayPosts() {
    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = `
                <li onclick="openPostDetails(${post.id})" id="${post.id}"class="text-left w-full p-2 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                <h2 class="block text-md font-semibold">${post.title}</h2>
                <p className="text-xs text-neutral-700">${post.timestamp}</p>
                </li>
                `
                postListContainer.innerHTML += postCard
            });
        });
}

displayPosts();