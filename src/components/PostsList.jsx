import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post.";

function PostList() {
  const [modalVisible, setModalVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState([]);
  const [author, setAuthor] = useState([]);

  function hideModalHandler() {
    setModalVisible(false);
  }
  function bodyChnageHandler(event) {
    setEnteredBody(event.target.value);
  }

  let modalContent;
  if (modalVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={bodyChnageHandler}
          onAuthorChange={(event) => setAuthor(event.target.value)}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChnageHandler}
            onAuthorChange={(event) => setAuthor(event.target.value)}
          />
        </Modal>
      )}
      {/* {modalContent} */}
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
