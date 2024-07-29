document.addEventListener("DOMContentLoaded", function () {
    let currentStep = 0;
    const steps = document.querySelectorAll(".step");
    const registrationNext = document.getElementById("registration-next");
    const uploadButton = document.getElementById("upload-button");
    const postUploadNext = document.getElementById("post-upload-next");
    const compareButton = document.getElementById("compare-button");
    const closeSiteButton = document.getElementById("close-site");
    const comparisonStep = document.getElementById("comparison");

    registrationNext.addEventListener("click", function () {
        steps[currentStep].style.display = "none";
        currentStep++;
        steps[currentStep].style.display = "block";
    });

    uploadButton.addEventListener("click", function () {
        // Handle file upload logic
        // You can display the uploaded file if needed
    });

    postUploadNext.addEventListener("click", function () {
        steps[currentStep].style.display = "none";
        currentStep++;
        steps[currentStep].style.display = "block";
    }); 

    compareButton.addEventListener("click", function () {
        // Handle comparison logic here
        steps[currentStep].style.display = "none";
        currentStep++;
        steps[currentStep].style.display = "block";

        // Perform sentiment analysis here
        const goodComments = [
            "The product is great!",
            "I love this product.",
            "very worth the price.",
            "Excellent product!",
            "Such a nice product",
            "Beatiful product",
            "loved this one"
        ];

        const badComments = [
            "Terrible quality.",
            "Worst purchase ever.",
            "Don't buy this product.",
            "Wasted my money on this."
        ];

        const goodCommentsCount = goodComments.length;
        const badCommentsCount = badComments.length;

        document.getElementById("good-comments-count").textContent = goodCommentsCount;
        document.getElementById("bad-comments-count").textContent = badCommentsCount;

        const sentimentEmoji = goodCommentsCount > badCommentsCount ? "😄" : "😞";
        const emojiReaction = document.createElement("p");
        emojiReaction.textContent = `Sentiment analysis result for the Post Uploaded After Classifying The Comments : ${sentimentEmoji}`;
        comparisonStep.appendChild(emojiReaction);
    });

    closeSiteButton.addEventListener("click", function () {
        const confirmClose = confirm("Are you sure you want to close this site? Click OK to continue.");
        if (confirmClose) {
            window.close(); // Close the website
        }
    });

    // Show the first step initially
    steps[currentStep].style.display = "block";
});
