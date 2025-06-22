const postListContainer = document.getElementById("post-list");

function displayPosts() {
    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = `
                <li data="${post.id}" class="text-left w-full p-2 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                <h2 class="block text-md font-semibold">${post.title}</h2>
                <p className="text-xs text-neutral-700">${post.timestamp}</p>
                </li>
                `
                postListContainer.innerHTML += postCard
            });
        });
}

displayPosts();