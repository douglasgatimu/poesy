const Poem = ({ title, poemContent, author, read, id, onToggleRead }) => {
    return (
      <div className="poem w-2/3 bg-white-100 p-1 flex flex-col gap-2">
        <h3 className="font-bold text-xm">{title}</h3>
        <p className="text-xm">{poemContent}</p>
        <h3 className="font-bold">- {author}</h3>
        <button
          onClick={() => {
            onToggleRead(id);
          }}
          className="cursor-pointer p-1 bg-cyan-500 font-bold text-black border border-gray-400 shadow-sm rounded-none text-center w-1/3"
          >
          {read ? "Mark as unread" : "Mark as read"}
        </button>
      </div>
    );
  };
  
  export default Poem;
  