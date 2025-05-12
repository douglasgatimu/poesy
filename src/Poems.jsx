import Poem from "./Poem";

function Poems({ poemsList, onToggleRead }) {
  return (
    <div className="poems w-2/3 flex flex-col gap-2 items-end divide-y-2 divide-gray-300">
      {!poemsList.length ? (
        <h1>No Created Poems</h1>
      ) : (
        poemsList.map((poem) => (
          <Poem
            title={poem.title}
            author={poem.author}
            poemContent={poem.poemContent}
            id={poem.id}
            key={poem.id}
            read={poem.read}
            onToggleRead={onToggleRead}
          />
        ))
      )}
    </div>
  );
}

export default Poems;
