import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onAdd: (post: Post) => void;
  setShowForm: (boolean: boolean) => void;
}

const PostForm = ({ onAdd, setShowForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const addPostHandler = (event: FormEvent): void => {
    event.preventDefault();
    onAdd({ title, thought });
    setShowForm(false);
  };

  return (
    <form className="PostForm" onSubmit={addPostHandler}>
      <div className="popup">
        <button className="close" onClick={() => setShowForm(false)}>
          X
        </button>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="thought">Thought</label>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>

        <button>Add Post</button>
      </div>
    </form>
  );
};

export default PostForm;
