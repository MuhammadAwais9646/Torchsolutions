document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (footerPlaceholder) {
        fetch("footer.html") // Adjust the path if needed
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load footer.html: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error("Error loading the footer:", error);
            });
    } else {
        console.error("Footer placeholder (#footer-placeholder) not found.");
    }
});
