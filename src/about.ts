const homepage = document.getElementById("content");

function writeAboutPage() {
    const storySection = document.createElement("div");
    storySection.classList.add("about-section");
    const storyTitle = document.createElement("h2");
    storyTitle.classList.add("section-title");
    storyTitle.textContent = "Our Story";
    const storyBody = document.createElement("p");
    storyBody.classList.add("description");
    storyBody.textContent = `Founded in 2026, Jimbo was fishing and caught a hammerhead. For some reason
    he decided to cook it... Now he runs a restaurant :).`
    storySection.append(storyTitle, storyBody);
    homepage?.append(storySection);
}

export default writeAboutPage