
import { useState } from 'react';
//styles
import "../styles/AddNote.css";
 const AddNote =({handleAddNote}) =>{
    const [noteText, setNotetext] = useState("");
    const characterLimit = 200;
    //prevent user for typing more than 200 characters
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >=0){
            setNotetext(event.target.value);
        } 
        
    };
    const handleSaveClick = () => {
        //prevent users for saving blank note
        if (noteText.trim().length > 0){
            handleAddNote(noteText);
            setNotetext("");
        }
        };
       
    return (
        <div className="note new">
            <textarea 
            name="Text" 
            id="" 
            cols="30" 
            rows="10"
            placeholder="Add a new note"
            value={noteText}
            onChange={handleChange}></textarea>
            
            <div className="note-footer">
                <small>{characterLimit - noteText.length}Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};


export default AddNote;
