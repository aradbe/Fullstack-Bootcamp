// Exercise 1
async function getUserById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();

    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

// tests
getUserById(1);
getUserById(999);

// Exercise 2
async function getUserWithPosts(userId) {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    if (!userResponse.ok) {
      throw new Error("User not found, cannot fetch posts");
    }

    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );

    if (!postsResponse.ok) {
      throw new Error("Could not fetch user's posts");
    }

    const posts = await postsResponse.json();

    return {
      user,
      posts,
    };
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// tests
getUserWithPosts(1).then(console.log);
getUserWithPosts(999).then(console.log);

// Exercise 3
async function getDashboardData() {
  try {
    const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    if (!usersResponse.ok) throw new Error("Failed to fetch users");
    if (!postsResponse.ok) throw new Error("Failed to fetch posts");
    if (!commentsResponse.ok) throw new Error("Failed to fetch comments");

    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();

    const topUsers = users
      .map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);

        const userPostIds = userPosts.map((post) => post.id);

        const userComments = comments.filter((comment) =>
          userPostIds.includes(comment.postId),
        );

        return {
          name: user.name,
          postCount: userPosts.length,
          commentCount: userComments.length,
        };
      })
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    const recentPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5);

    return {
      summary: {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: posts.length / users.length,
        avgCommentsPerPost: comments.length / posts.length,
      },
      topUsers,
      recentPosts,
    };
  } catch (error) {
    console.error("Dashboard error:", error.message);
    return null;
  }
}

getDashboardData().then(console.log);
