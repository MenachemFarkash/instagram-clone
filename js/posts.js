let allPosts = loadPosts()

async function loadPosts() {
    const response = await fetch("Data/posts.json")
    const data = await response.json()
    return data.posts
}

async function findPostById(postId) {
    await loadPosts()

    return posts.find((post) => post.id === postId)
}

async function findUserPostsByUserId(id) {
    await loadPosts()
    const userPosts = []
    posts.forEach((post) => {
        if (post.userId === id) userPosts.push(post)
    })

    return userPosts
}
