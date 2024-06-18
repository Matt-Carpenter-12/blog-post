document.addEventListener("DOMContentLoaded", () => {
    const blogForm = document.getElementById("blogForm");
    const errorMessage = document.getElementById("errorMessage");
    const postsContainer = document.getElementById("postsContainer");
    const toggleModeButton = document.getElementById("toggleMode");
    const backButton = document.getElementById("backButton");

    if (blogForm) {
        blogForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const title = document.getElementById("title").value.trim();
            const content = document.getElementById("content").value.trim();

            if (!username || !title || !content) {
                errorMessage.textContent = "Please complete the form.";
            } else {
                const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
                blogPosts.push({ username, title, content });
                localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
                window.location.href = "post.html";
            }
        });
    }

    if (postsContainer) {
        const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
        blogPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><strong>Author:</strong> ${post.username}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    if (toggleModeButton) {
        toggleModeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
