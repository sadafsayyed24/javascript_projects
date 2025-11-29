let reviewsContainer = document.createElement("div");
reviewsContainer.setAttribute("id", "reviewsContainer");

let movieReviewsContainer = document.getElementById("movieReviewsContainer");
movieReviewsContainer.appendChild(reviewsContainer);

let display = () => {
    let movieName = document.getElementById("titleInput").value;
    let movieReview = document.getElementById("reviewTextarea").value;

    let h3 = "Movie Title: ".concat(movieName);
    let movieHeading = document.createElement("h3");
    movieHeading.textContent = h3;

    let rP = "Movie Reviews: ".concat(movieReview);
    let moviePara = document.createElement("p");
    moviePara.textContent = rP;

    reviewsContainer.appendChild(movieHeading);
    reviewsContainer.appendChild(moviePara);
};

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", display);