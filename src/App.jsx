import "./App.css";
import NotesList from "./components/NotesList";
import Home from "./pages/Home";
import CreateNote from "./components/Modal/CreateNote";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubNotes from "./pages/SubNotes";

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
      <NotesList createNotes={() => setModal(true)}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/subnotes" element={<SubNotes/>} />
        </Routes>
      </Router>
      {modal && <CreateNote setModal={setModal}/>}
    </div>
  );
};

export default App;
