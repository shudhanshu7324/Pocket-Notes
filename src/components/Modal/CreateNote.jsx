import { useRef } from "react";
import "../Css/CreateNote.css";

const CreateNote = ({modal,setModal}) => {
//   const modalRef = useRef();

//   const closeModal = (e) => {
//     if(modalRef.current === e.target){
//         setModal(true)
//     }
//   }


  return (
    <div className="create-notes modal">
      <h1>Create New group</h1>
      <div className="grp-name">
        <h2>Group Name</h2>
        <input type="text" placeholder="Enter group name" />
      </div>
      <div className="color-choose">
        <h2>Choose color</h2>
        <div className="color">
          <div style={{ backgroundColor: "#B38BFA" }}></div>
          <div style={{ backgroundColor: "#FF79F2" }}></div>
          <div style={{ backgroundColor: "#43E6FC" }}></div>
          <div style={{ backgroundColor: "#F19576" }}></div>
          <div style={{ backgroundColor: "#0047FF" }}></div>
          <div style={{ backgroundColor: "#6691FF" }}></div>
        </div>
      </div>
      <button className="create-btn">Create</button>
    </div>
  );
};

export default CreateNote;
