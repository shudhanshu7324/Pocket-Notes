import "./App.css";
import NotesList from "./components/NotesList";
import Home from "./components/Home";
import CreateNote from "./components/Modal/CreateNote";
import { useRef, useState } from "react";

const App = () => {
  const [modal, setModal] = useState(false);

  const closeModal = (e) => {
    if (e.target.className === "overlay") {
      setModal(false);
    }
  };

  return (
    <div onClick={closeModal} className="background">
      {modal && <div className="overlay"></div>}
      <NotesList createNotes={() => setModal(true)} modal={modal} />
      <Home modal={modal} />
      {modal && <CreateNote modal={modal} setModal={setModal} />}
    </div>
  );
};

export default App;
