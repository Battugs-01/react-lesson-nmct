import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostsList";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function hideModalHandler() {
    setModalVisible(false);
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  return (
    <>
      <MainHeader createPost={showModalHandler} />
      <main className="">
        <PostList isPosting={modalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
