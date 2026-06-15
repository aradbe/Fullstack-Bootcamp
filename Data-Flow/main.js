const posts = [
    { name: "Bob", text: "Hello everyone" },
    { name: "Ted", text: "Nice weather today" }
]

const render = function () {

    const postsDiv = document.getElementById("posts")

    // FIXES DUPLICATION
    postsDiv.innerHTML = ""

    for (let post of posts) {

        const postDiv = document.createElement("div")

        postDiv.innerHTML =
            `<strong>${post.name}</strong>: ${post.text}`

        postsDiv.appendChild(postDiv)
    }
}

document.getElementById("submit-btn").onclick = function () {

    const name = document.getElementById("name-input").value
    const text = document.getElementById("text-input").value

    posts.push({
        name: name,
        text: text
    })

    render()
}

render()