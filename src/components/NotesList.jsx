import { useSelector } from "react-redux";
import "./Css/NotesList.css";
import { Link } from "react-router-dom";
import Title from "./Title";
import { useState } from "react";

const NotesList = ({ createNotes }) => {
  const notes = useSelector((state) => state.notes.notes);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const showHighlight = (noteId) => {
    setSelectedNoteId(noteId);
  };

  const resetHighlight = () => {
    setSelectedNoteId(null);
  };

  return (
    <div className="left-side">
      <div className="left-heading">
        <Link to="/" onClick={resetHighlight}>
          <p>Pocket Notes</p>
        </Link>
      </div>
      <div className="notes">
        {notes.map((note) => (
          <Link
            key={note.id}
            style={{ textDecoration: "none", color: "black" }}
            to={`/subnotes/${note.id}`}
          >
            <div
              onClick={() => showHighlight(note.id)}
              className={selectedNoteId === note.id ? "selected" : ""}
              style={{paddingLeft:"30px"}}
            >
              <Title title={note.title} color={note.color} />
            </div>
          </Link>
        ))}
      </div>
      <img src="/add.png" alt="add-img" className="add-btn" onClick={createNotes} />
    </div>
  );
};

export default NotesList;
