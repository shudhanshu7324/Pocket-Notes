import "./App.css";
import NotesList from "./components/NotesList";
import Home from "./pages/Home";
import CreateNote from "./components/Modal/CreateNote";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubNotes from "./pages/SubNotes";
import { useDispatch } from "react-redux";
import { loadNotes } from "./slices/notesslice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNotes()); // Load notes from local storage on app start
  }, [dispatch]);


  const [modal, setModal] = useState(false);

  const closeModal = (e) => {
    if (e.target.className === "overlay") {
      setModal(false);
    }
  };

  return (
    <div onClick={closeModal} className="background">
      {modal && <div className="overlay"></div>}
      <Router>
      <NotesList createNotes={() => setModal(true)}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/subnotes/:id" element={<SubNotes/>} />
        </Routes>
      </Router>
      {modal && <CreateNote setModal={setModal}/>}
    </div>
  );
};

export default App;
