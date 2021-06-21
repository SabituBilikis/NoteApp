
import Note from './Note';
import AddNote from './AddNote';
/* create a functional componet that return notelist using arrow function  */

//styles 
import '../styles/NoteItems.css';
//passing in props to make the dummy text dynamics 
const NoteItems = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className="note-item">
            {notes.map((note) => (
                <Note 
                id={note.id} 
                text = {note.text} 
                date={note.date}
                handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}
export default NoteItems;
