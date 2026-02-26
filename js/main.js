"use strict"

renderPosts(allPosts)

async function renderPosts() {
    const posts = await loadPosts()
    const users = await loadUsers()
    let allPostsHTML = ""
    console.log(users)
    posts.map((post) => {
        const image = post.photoLink
        const profilePicture = findUserById(users, post.userId).profilePicture
        allPostsHTML += `
        <div class="post-container">
                <div class="profile-more-bar">
                    <div class="profile-img-container">
                        <img src=${profilePicture} alt="" />
                    </div>
                    <div class="post-more-actions">
                        <img src="images/icons/more-icon.png" alt="" />
                    </div>
                </div>
                <div class="post-content">
                    <img src=${image} alt="post image" />
                </div>
                <div class="post-actions-bar">
                    <div class="post-like-button">
                        <img src="images/icons/like-icon.png" alt="like-icon" />
                    </div>
                    <div class="post-comment-button">
                        <img src="images/icons/comment-icon.png" alt="like-icon" />
                    </div>
                    <div class="post-share-button">
                        <img src="images/icons/share-icon.png" alt="like-icon" />
                    </div>
                    <div class="post-save-button">
                        <img src="images/icons/save-icon.png" alt="like-icon" />
                    </div>
                </div>
                <div class="post-likes-counter">
                    <p>${post.likes} Likes</p>
                </div>
            </div>
        `
    })

    document.querySelector(".main").innerHTML = allPostsHTML
}
