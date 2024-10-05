import { useState } from "react";
import "../components/Css/SubNotes.css";
import { IoSend } from "react-icons/io5";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSubNote } from "../slices/notesslice";

const SubNotes = ({}) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (text.trim().length === 0) return;
    dispatch(addSubNote({ id: Number(id), subNote: text }));
    console.log("Text submitted:", text);
    setText("");
  };

  const { id } = useParams();
  const note = useSelector((state) =>
    state.notes.notes.find((noteItem) => noteItem.id === Number(id))
  );
  const dispatch = useDispatch();

  return (
    <div className="subnotes">
      <div className="header" style={{ color: "white" }}>
        <div className="header-child">
          <Title title={note.title} color={note.color} />
        </div>
      </div>
      <div className="notes-content">
        {note?.subNotes?.map((subNote, index) => (
          <div key={index} className="note-item">
            {subNote}
          </div>
        ))}
      </div>
      <div className="textarea-foot">
        <textarea
          placeholder="Enter your text here..........."
          name="text"
          id="text"
          value={text}
          onChange={handleText}
          onKeyDown={handleKeyPress}
        ></textarea>
      </div>
      <button
        className={`send ${text.length > 0 ? "enabled" : "disabled"}`}
        onClick={handleSubmit}
        disabled={text.length === 0}
      >
        <IoSend />
      </button>
    </div>
  );
};

export default SubNotes;
