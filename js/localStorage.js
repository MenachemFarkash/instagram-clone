// Post should look like this:
// {"id": 1, "userId": 101, "likes": 50, "photoLink": "images/posts/post-2.jpg"}

// User should look like this:
// {"id": 101, "userName": "Michael", "followers": 250, "profilePicture": "images/profile-pictures/asian-lady.jpg"}

// Likes should look like this:
// {"userId": 101,"postId":1}

// Comments should look like this:
// {"id": 001, "userId": 101,"postId":1, "content": "Love this picture :)"}

// Stories should look like this:
// {"id": 900001, "userId": 101, "imageLink": "default/picture.png", "uploadDate": "Some Date String"}

const gAppData = {
    posts: [
        {
            id: 1,
            userId: 1,
            likes: 50,
            photoLink: "images/posts/post-2.jpg",
            caption: "this is some random caption but a bit longer than the others",
        },
        {
            id: 2,
            userId: 1,
            likes: 40,
            photoLink: "images/posts/leaves.png",
            caption: "this is some random caption and also a bit long",
        },
        {
            id: 3,
            userId: 1,
            likes: 45,
            photoLink: "images/posts/post-3.jpg",
            caption: "this is some random caption this one is avarge size",
        },
        {
            id: 4,
            userId: 2,
            likes: 34,
            photoLink: "images/posts/post-4.jpg",
            caption: "this is some random caption",
        },
        {
            id: 5,
            userId: 2,
            likes: 14,
            photoLink: "images/posts/post-5.jpg",
            caption: "this is some random caption",
        },
        {
            id: 6,
            userId: 3,
            likes: 342,
            photoLink: "images/posts/post-6.jpg",
            caption: "this is some random caption",
        },
        {
            id: 7,
            userId: 3,
            likes: 334,
            photoLink: "images/posts/post-7.jpg",
            caption: "this is some random caption",
        },
        {
            id: 8,
            userId: 3,
            likes: 543,
            photoLink: "images/posts/post-8.jpg",
            caption: "this is some random caption",
        },
        {
            id: 9,
            userId: 1,
            likes: 26,
            photoLink: "images/posts/post-9.jpg",
            caption: "this is some random caption",
        },
        {
            id: 10,
            userId: 2,
            likes: 74,
            photoLink: "images/posts/post-10.jpg",
            caption: "this is some random caption",
        },
        {
            id: 11,
            userId: 3,
            likes: 94,
            photoLink: "images/posts/post-11.jpg",
            caption: "this is some random caption",
        },
    ],
    users: [
        {
            id: 1,
            userName: "Michael",
            followers: 250,
            profilePicture: "images/profile-pictures/asian-lady.jpg",
        },
        {
            id: 2,
            userName: "Misha",
            followers: 350,
            profilePicture: "images/profile-pictures/motorcycle-guy.jpg",
        },
        {
            id: 3,
            userName: "Minerva",
            followers: 450,
            profilePicture: "images/profile-pictures/red-lady.png",
        },
    ],
    likes: [
        {
            postId: 1,
            userId: 1,
        },
        {
            postId: 2,
            userId: 1,
        },
        {
            postId: 3,
            userId: 2,
        },
        {
            postId: 3,
            userId: 1,
        },
        {
            postId: 3,
            userId: 3,
        },
    ],
    comments: [
        { id: 1, userId: 1, postId: 1, content: "Love this picture :)" },
        { id: 2, userId: 1, postId: 2, content: "This picture is amazing :)" },
        { id: 3, userId: 2, postId: 2, content: "You have looked better tho :)" },
        { id: 4, userId: 3, postId: 3, content: "Thats it, im unfollowing :)" },
    ],
}

function uploadToLocalStorage(data) {
    if (!data) data = []
    localStorage.setItem("appData", JSON.stringify(data))
}

function getFromLocalStorage() {
    const data = localStorage.getItem("appData")
    if (!data) return false

    return JSON.parse(data)
}

function uploadPost(photoURL = "") {
    const appData = getFromLocalStorage()
    if (!appData) return

    const newPost = {
        id: appData.posts.length + 1,
        userId: gConnectedUserId,
        photoLink: photoURL,
    }

    appData.posts.push(newPost)

    uploadToLocalStorage(appData)
    renderPosts()

    return newPost
}

function postComment(postId, content = "") {
    const appData = getFromLocalStorage()
    if (!appData) return

    const newComment = {
        id: appData.comments.length + 1,
        postId,
        userId: gConnectedUserId,
        content,
    }

    appData.comments.push(newComment)

    uploadToLocalStorage(appData)

    return newComment
}

function likePost(postId) {
    const appData = getFromLocalStorage()
    if (!appData) return

    if (appData.likes.some((like) => postId === like.postId)) {
        console.log("cannot like a post twice :|")
        return
    }

    const newLike = {
        postId,
        userId: gConnectedUserId,
    }

    appData.likes.push(newLike)

    uploadToLocalStorage(appData)

    renderPosts()
    return newLike
}

function getPostLikesById(postId) {
    let likesCount = 0
    const appData = getFromLocalStorage()
    if (!appData) return

    appData.likes.forEach((like) => {
        if (postId === like.postId) likesCount++
    })

    return likesCount
}

function checkIfUserLikedPost(data, id) {
    return data.some((like) => like.userId === gConnectedUserId && like.postId === id)
}
