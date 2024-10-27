import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState([]);
  const [author, setAuthor] = useState([]);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function onAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function sumbitHandler(event) {
    event.preventDefault();
    const data = {
      body: enteredBody,
      author: author,
    };
    onAddPost(data);
    onCancel();
  }

  return (
    <form
      className="bg-purple-700 p-4 w-80  mx-auto rounded-md shadow-md"
      onSubmit={sumbitHandler}
    >
      <p>
        <label htmlFor="body" className="block mb-1 text-purple-100 font-bold">
          Text
        </label>
        <textarea
          id="body"
          required
          rows={3}
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={bodyChangeHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name" className="block mb-1 text-purple-100 font-bold">
          Your name
        </label>
        <input
          type="text"
          id="name"
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={onAuthorChange}
        ></input>
      </p>
      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 rounded bg-transparent text-[#e5d5f7] hover:text-[#d1bee6] cursor-pointer"
        >
          Cancel
        </button>
        <button className="px-6 py-2 rounded bg-[#34036c] text-[#e5d5f7] hover:bg-[#23014a] cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
}
export default NewPost;
