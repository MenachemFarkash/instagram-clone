function toggleFullCaption() {
    const moreButton = document.querySelector(".caption-show-more-button")
    const lessButton = document.querySelector(".caption-show-less-button")
    const captionContent = document.querySelector(".caption-content")
    moreButton.classList.toggle("hidden")
    lessButton.classList.toggle("hidden")
    captionContent.classList.toggle("cropped-caption")
}
