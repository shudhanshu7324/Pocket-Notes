import { useSelector } from 'react-redux'
import './Css/NotesList.css'


const NotesList = ({createNotes}) => {
  const notes = useSelector((state) => state.notes.notes)
  return (
    <div className='left-side'>
        <div className="left-heading">
          <p>Pocket Notes</p>
        </div>
        <div className="notes">
          {
            notes.map((note,index) => (
              <h2 key={index}>{note.title}</h2>
            ))
          }
        </div>
        <button onClick={createNotes} className='add-btn'><img src="/add.png" alt="add-img" /></button>
        
    </div>
  )
}

export default NotesList
