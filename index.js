document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const main = document.getElementById("main-content");
    const title = loader.querySelector("h1");

    const holdDuration = 3000; // 3 seconds

    // Wait for title fade-in to finish
    title.addEventListener("animationend", () => {

        // Keep title visible for 3 seconds
        setTimeout(() => {

            // Fade out background AND title
            loader.classList.add("fade-out");

        }, holdDuration);

    }, { once: true });

    // Reveal website after fade-out
    loader.addEventListener("transitionend", (event) => {

        if (event.propertyName === "opacity") {
            loader.remove();
            main.hidden = false;
        }

    });

});

document.querySelectorAll(".project-details").forEach(details => {
  const inner = document.createElement("div");
  inner.className = "details-inner";

  while (details.firstChild) {
    inner.appendChild(details.firstChild);
  }

  details.appendChild(inner);
});