import { useState } from "react";
const NewPoem = ({ onAddPoem }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [poemContent, setPoemContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !poemContent) return;

    onAddPoem({ title, author, poemContent });
    setTitle("");
    setAuthor("");
    setPoemContent("");
  };

  return (
    <div className="new-poem-form border border-gray-400 shadow-sm rounded-none p-2">
      <form onSubmit={handleSubmit} className="the-form flex flex-col gap-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          value={title}
          placeholder="Title"
          className="w-full p-1 bg-white border border-gray-300 shadow-sm rounded-none"
        />

        <input
          onChange={(e) => setAuthor(e.target.value)}
          id="author"
          value={author}
          placeholder="Author"
          className="w-full p-1 bg-white border border-gray-300 shadow-sm rounded-none"
        />
        <textarea
          onChange={(e) => setPoemContent(e.target.value)}
          id="poem-content"
          value={poemContent}
          placeholder="Write your masterpiece here..."
          className="w-full pt-4 px-3 pb-3 bg-white border border-gray-300 shadow-sm rounded-none h-40 resize-none whitespace-pre-wrap overflow-hidden"
        />

        <button
          disabled={!title || !author || !poemContent}
          className="cursor-pointer bg-cyan-500 font-bold text-black border border-gray-400 shadow-sm rounded-none text-center w-full
"
        >
          Share your Masterpiece
        </button>
      </form>
    </div>
  );
};

export default NewPoem;
