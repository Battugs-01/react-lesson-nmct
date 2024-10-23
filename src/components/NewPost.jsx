function NewPost(props) {
  // this is vanilla js
  // document.querySelector('textarea').addEventListener('change' , function() {
  //     console.log(this.value)
  // })

  // state in react
  //   let enteredBody = "";

  //   const [enteredBody, setEnteredBody] = useState("");

  //   const changeBodyHandler = (event) => {
  //     console.log(event.target.value);
  //     // enteredBody = event.target.value;
  //     setEnteredBody(event.target.value);
  //   };

  return (
    <form className="bg-purple-700 p-4 w-80 my-8 mx-auto rounded-md shadow-md">
      <p>
        <label htmlFor="body" className="block mb-1 text-purple-100 font-bold">
          Text
        </label>
        <textarea
          id="body"
          required
          rows={3}
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={props.onBodyChange}
        ></textarea>
      </p>
      <p className="text-lg text-[#fff]">{props.enteredBody}</p>
      <p>
        <label htmlFor="name" className="block mb-1 text-purple-100 font-bold">
          Your name
        </label>
        <input
          type="text"
          id="name"
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={props.onAuthorChange}
        ></input>
      </p>
    </form>
  );
}
export default NewPost;
