import './Css/NotesList.css'


const NotesList = ({createNotes}) => {
  return (
    <div className='left-side'>
        <div className="left-heading">
          <p>Pocket Notes</p>
        </div>
        <div className="notes">
          
        </div>
        <button onClick={createNotes} className='add-btn'><img src="/add.png" alt="add-img" /></button>
        
    </div>
  )
}

export default NotesList
