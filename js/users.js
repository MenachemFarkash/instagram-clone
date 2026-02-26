async function loadUsers() {
    const response = await fetch("Data/users.json")
    const data = await response.json()
    return data.users
}

function findUserById(users, userId) {
    return users.find((user) => user.id === userId)
}
