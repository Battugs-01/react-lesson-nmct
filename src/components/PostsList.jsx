import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post.";

function PostList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState([]);
  const [author, setAuthor] = useState([]);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={(event) => setAuthor(event.target.value)}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid grid-cols-3 gap-4 justify-center ">
        <Post author={author} body={enteredBody} />
        <Post author="This is Battugs" body="Battugs is God" />
      </ul>
    </>
  );
}
export default PostList;
