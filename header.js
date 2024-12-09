document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById('header-placeholder');

    if (!placeholder) {
        console.error('Error: #header-placeholder not found in the DOM.');
        return;
    }

    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load header.html: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            placeholder.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the header:', error);
        });
});
