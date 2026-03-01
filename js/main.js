"use strict"

function onInit() {
    uploadToLocalStorage(gAppData)
    renderPosts(allPosts)
}

function renderPosts() {
    const { users, posts, likes } = getFromLocalStorage()
    let allPostsHTML = ""
    posts.map((post) => {
        const image = post.photoLink
        const profilePicture = findUserById(users, post.userId).profilePicture
        const userName = findUserById(users, post.userId).userName
        allPostsHTML += `
        <div class="post-container">
                <div class="profile-more-bar">
                    <div class="profile-img-container">
                        <img src=${profilePicture} alt="" />
                    </div>
                    <div class="profile-user-name">${userName}</div>
                    <div class="post-more-actions">
                        <img src="images/icons/more-icon.png" alt="" />
                    </div>
                </div>
                <div class="post-content">
                    <img src=${image} alt="post image" />
                </div>
                <div class="post-actions-bar">
                    <div class="post-like-button" onclick="likePost(${post.id})">
                        ${checkIfUserLikedPost(likes, post.id) ? `<img src="images/icons/user-like-icon.png" alt="like-icon" />` : `<img src="images/icons/like-icon.png" alt="like-icon" />`}    
                        <p>${getPostLikesById(post.id)}</p>
                    </div>
                    <div class="post-comment-button">
                        <img src="images/icons/comment-icon.png" alt="like-icon" />
                        <p>0</p>
                    </div>

                    <div class="post-share-button">
                        <img src="images/icons/share-icon.png" alt="like-icon" />
                    </div>
                    <div class="post-save-button">
                        <img src="images/icons/save-icon.png" alt="like-icon" />
                    </div>
                </div>
                <div class="profile-and-caption">
                    <p class="caption-content caption-${post.id} cropped-caption">
                        <span class="caption-user-name">${userName}</span
                        ><span>
                            ${post.caption}</span
                        >
                        <button class="caption-show-less-button less-${post.id} hidden" onclick="toggleFullCaption(${post.id})">Less</button>
                    </p>
                    <button class="caption-show-more-button  more-${post.id}" onclick="toggleFullCaption(${post.id})">More</button>
                </div>
            </div>
        `
    })

    document.querySelector(".main").innerHTML = allPostsHTML
}
