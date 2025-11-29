// ---- On Page Load ----
window.addEventListener("DOMContentLoaded", () => {
    let savedCount = localStorage.getItem("clickCount");

    if (savedCount !== null) {
        document.getElementById("counterValue").textContent = savedCount;
    } else {
        document.getElementById("counterValue").textContent = "0";
    }
});


// ---- Increment Function ----
let incraseCount = () => {
    let countText = document.getElementById("counterValue").textContent;

    let count = parseInt(countText); // convert to number
    let newCount = count + 1;

    // update UI
    document.getElementById("counterValue").textContent = newCount;

    // update local storage
    localStorage.setItem("clickCount", newCount);
};


// ---- Add Event Listener ----
let btn = document.getElementById("incrementBtn");
btn.addEventListener("click", incraseCount);