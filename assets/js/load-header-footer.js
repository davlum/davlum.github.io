// Load header.html and inject into the placeholder

// Detect how deep we are in the directory
const depth = window.location.pathname.split("/").length - 2;

// Build correct relative path (works for nested pages)
const basePath = depth > 0 ? "../".repeat(depth) : "./";

// Load header
fetch(basePath + "partials/header.html")
    .then(r => r.text())
    .then(html => (document.getElementById("header-placeholder").innerHTML = html))
    .catch(err => console.error("Header load failed:", err));

// Load footer
fetch(basePath + "partials/footer.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("footer-placeholder").innerHTML = html;
        let button = document.getElementById('button');
        let count = document.getElementById('count');
        let text_arr = [
            "0", "1", "2", "3", "What are you doing", "Why are you still clicking this", "Stop", "No really",
            "Stop", "...", "Go enjoy your life", "Become the best version of you", "Alright, suit yourself"
        ];
        let c = 0;
        count.innerText = `The button was clicked ${c} times!`;
        button.addEventListener('click', () => {
            c++;
            if (c < 4) {
                count.innerText = `The button was clicked ${c} times!`;
            } else if (c === 15) {
                c = 0
                count.innerText = `The button was clicked ${c} times!`;
            } else {
                count.innerText = text_arr[c]
            }

        })
    })
    .catch(err => console.error("Footer load failed:", err));