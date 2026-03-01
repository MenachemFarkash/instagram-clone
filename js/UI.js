function toggleFullCaption(id) {
    const captionContent = document.querySelector(`.caption-${id}`)
    const moreButton = document.querySelector(`.more-${id}`)
    const lessButton = document.querySelector(`.less-${id}`)
    moreButton.classList.toggle("hidden")
    lessButton.classList.toggle("hidden")
    captionContent.classList.toggle("cropped-caption")
}
