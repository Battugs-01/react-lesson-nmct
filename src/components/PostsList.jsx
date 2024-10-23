import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post.";

function PostList() {
  const [enteredBody, setEnteredBody] = useState([]);
  const [author, setAuthor] = useState([]);

  function bodyChnageHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChnageHandler}
          onAuthorChange={(event) => setAuthor(event.target.value)}
        />
      </Modal>

      <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid grid-cols-3 gap-4 justify-center ">
        {/* <Post author="John Doe" body="Hello World" />
        <Post author="This is Battugs" body="Battugs is God" /> */}
        <Post author={author} body={enteredBody} />
        <Post author="This is Battugs" body="Battugs is God" />
      </ul>
    </>
  );
}
export default PostList;
