import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool",
    },
    {
      title: "React",
      thought: "React gives me power!",
    },
    {
      title: "Beatrice",
      thought: "My friend Beatrice has mad skills. I'm so proud of her!",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const addPost = (post: Post): void => {
    setPosts((prev) => {
      return [...prev, post];
    });
  };

  //   const deletePost = (title: string): void => {
  //     setPosts((prev) => {
  //       const index: number = prev.findIndex((item) => item.title === title);
  //       return [...prev.slice(0, index), ...prev.slice(index + 1)];
  //     });
  //   };

  const deletePost = (index: number) => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <div className="SocialPosts">
      <button className="new-thought" onClick={() => setShowForm(true)}>
        New Thought
      </button>
      {showForm && <PostForm onAdd={addPost} setShowForm={setShowForm} />}
      <ul className="post-container">
        {posts.map((post: Post, i) => (
          <PostInList
            key={`${post.title}${i}`}
            post={post}
            onDelete={deletePost}
            index={i}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
