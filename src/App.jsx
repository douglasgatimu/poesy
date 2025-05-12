import { useState } from 'react'
import './App.css'
import Poems from "./Poems";
import NewPoem from "./NewPoem";

const App = () => {
  const createdPoems = [
    {
      title: "The Lord Is My Shepherd",
      author: "King David, Psalmist",
      poemContent:
        "The Lord is my shepherd; I shall not want.\nHe makes me lie down in green pastures.\nHe leads me beside still waters.\nHe restores my soul.\nHe leads me in paths of righteousness for his name's sake.",
      id: 2001,
      read: false,
    },
    {
      title: "Love Is Patient",
      author: "Saint Paul the Apostle",
      poemContent:
        "Love is patient and kind; love does not envy or boast;\nit is not arrogant or rude.\nIt does not insist on its own way;\nit is not irritable or resentful;\nit does not rejoice at wrongdoing, but rejoices with the truth.",
      id: 2002,
      read: false,
    },
    {
      title: "The Beatitudes",
      author: "Jesus Christ",
      poemContent:
        "Blessed are the poor in spirit, for theirs is the kingdom of heaven.\nBlessed are those who mourn, for they shall be comforted.\nBlessed are the meek, for they shall inherit the earth...\nBlessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.",
      id: 2003,
      read: false,
    },
  ];
  
  
  const [poems, setPoemsList] = useState(createdPoems);

  const addPoem = (newPoem) => {
    setPoemsList([...poems, { ...newPoem, id: Date.now(), read: false }]);
  };

  const toggleRead = (id) => {
    const updated = poems.map((poem) =>
      poem.id === id ? { ...poem, read: !poem.read } : poem
    );

    setPoemsList(updated);
  };

  const [showNewPoemForm, setShowNewPoemForm] = useState(false);

  const toggleNewPoemForm = () => {
    setShowNewPoemForm((prev) => !prev);
  };

  return (
    <>
      <div className="new-poem w-1/3 bg-cyan-50 p-2">
        <button
          onClick={toggleNewPoemForm}
          className="cursor-pointer bg-cyan-500 font-bold text-black border border-gray-400 shadow-sm rounded-none text-center w-full"
        >
          Show/hide new poem form
        </button>
        {showNewPoemForm && <NewPoem onAddPoem={addPoem} />}
      </div>
      <Poems poemsList={poems} onToggleRead={toggleRead} />
    </>
  );
};

export default App
