document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/") 
        .then(response => response.json())
        .then(data => {
            document.getElementById("api-result").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error fetching API data:", error);
            document.getElementById("api-result").textContent = "Failed to load API data.";
        });
});
