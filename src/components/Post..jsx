function Post(props) {
  return (
    <div className="my-4 p-4 bg-purple-400 rounded-lg shadow-md animate-fadeIn ">
      <h1 className="text-xs font-bold text-purple-800 uppercase m-0 text-center">
        {props.author}
      </h1>
      <p className="whitespace-pre-wrap text-xl my-1 text-purple-900 italic text-center">
        {props.body}
      </p>
    </div>
  );
}
export default Post;
