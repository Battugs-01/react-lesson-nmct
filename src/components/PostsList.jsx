import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post.";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // setPosts([postData, ...posts]);
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid grid-cols-3 gap-4 justify-center ">
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <>
          <p className="text-center text-2xl text-[#a990fb]">No posts yet</p>
          <p className="text-center text-2xl text-[#a990fb]">
            Start adding some !!
          </p>
        </>
      )}
    </>
  );
}
export default PostList;
