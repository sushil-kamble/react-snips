import { useEffect, useState } from "react";
function UseEffectInAction() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetchPosts();
    }, 3000);
  }, []);
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    setPosts(posts);
  };
  return (
    <div>
      <h1>Use Effect</h1>
      <hr />
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id}>
            <span>{post.body}</span>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default UseEffectInAction;
