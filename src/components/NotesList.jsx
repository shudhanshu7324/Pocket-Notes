import { useSelector } from 'react-redux'
import './Css/NotesList.css'
import { Link } from 'react-router-dom'
import Title from './Title'


const NotesList = ({createNotes}) => {
  const notes = useSelector((state) => state.notes.notes)
  return (
    <div className='left-side'>
        <div className="left-heading">
          <Link to='/'><p>Pocket Notes</p></Link>
        </div>
        <div className="notes">
          {
            notes.map((note,index) => (
              <Title key={index} title={note.title} color={note.color}/>
            ))
          }  
        </div>
        <button onClick={createNotes} className='add-btn'><img src="/add.png" alt="add-img" /></button>
        
    </div>
  )
}

export default NotesList
