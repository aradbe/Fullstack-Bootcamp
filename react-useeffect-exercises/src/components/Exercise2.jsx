import { useState, useEffect } from "react"
import Post from "./Post"

function Exercise2() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 10))
      })
  }, [])

  return (
    <div>
      <h1>Top Posts</h1>

      <div className="posts-container">
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  )
}

export default Exercise2