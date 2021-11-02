import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  index: number;
  onDelete: (index: number) => void;
  //   onDelete: (title: string) => void;
}

const PostInList = ({ post, onDelete, index }: Props) => {
  return (
    <li className="PostInList">
      <div>
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
      </div>
      <i className="fas fa-trash" onClick={() => onDelete(index)}></i>
      {/* <button onClick={() => onDelete(post.title)}>X</button> */}
    </li>
  );
};

export default PostInList;
