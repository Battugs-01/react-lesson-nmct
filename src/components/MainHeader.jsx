import React from "react";
import { MdMessage, MdPostAdd } from "react-icons/md";

function MainHeader({ createPost }) {
  return (
    <header className="flex justify-between items-center py-4 px-10 my-8 border-b-2 border-[#ece1fa] text-center">
      <h1 className="text-2xl flex items-center gap-6 text-[#ece1fa]">
        <MdMessage />
        React Poster
      </h1>
      <button
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#a990fb] text-[#2a2630] rounded shadow-md font-bold hover:bg-[#8c6cf7]"
        onClick={createPost}
      >
        <MdPostAdd size={18} />
        New Post
      </button>
    </header>
  );
}

export default MainHeader;
