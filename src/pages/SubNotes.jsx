import { useState } from "react";
import "../components/Css/SubNotes.css";
import { IoSend } from "react-icons/io5";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSubNote } from "../slices/notesslice";
import Card from "../components/Card";
import useDateTime from "../hooks/useDateTime";

const SubNotes = ({}) => {
  const [text, setText] = useState("");
  const { date, time } = useDateTime();

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
    const newSubNote = {
        text: text,
        date: date,
        time: time,
      };
  
      // Dispatch the action to add the new subnote
      dispatch(addSubNote({ id: Number(id), subNote: newSubNote }));
  
      console.log("SubNote created:", newSubNote);
      setText(""); // Clear the text input
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
            {subNote.text}
            <div className="date-time">
              {subNote.date} <div className="bullet"></div> {subNote.time} {/* Display attached date and time */}
            </div>
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
