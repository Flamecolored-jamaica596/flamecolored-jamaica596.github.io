async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) return;

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Unable to load ${file}`);
        }

        element.innerHTML = await response.text();
    } catch (err) {
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Load shared components
    loadComponent("head-placeholder", "components/head.html");
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");

    // Load recent posts only if this page has the section
    loadRecentPosts();
});

async function loadRecentPosts() {
    const container = document.getElementById("recent-posts");

    // Don't do anything on pages that don't have a Recent Posts section
    if (!container) return;

    try {
        const response = await fetch("assets/data/posts.json");

        if (!response.ok) {
            throw new Error("Unable to load posts.json");
        }

        const posts = await response.json();

        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        posts.slice(0, 3).forEach(post => {
            container.innerHTML += `
                <div class="col-md-4">
                    <div class="card mb-4 h-100">
                        <div class="card-body">
                            <h5>${post.title}</h5>
                            <p>${post.description}</p>
                            <a href="${post.url}" class="btn btn-primary">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });

    } catch (err) {
        console.error(err);
    }
}
