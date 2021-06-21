import React from 'react';
import { useState, useEffect } from 'react';
import NoteItems from './NoteItems';
import {nanoid} from 'nanoid';
import Search from './Search';
import Toggle from './Toggle';
//styles
import '../styles/TypeNote.css';
const TypeNote = () => {

  const [ notes, setNotes ] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
      },
      {
        id: nanoid(),
        text: "This is my first note!",
        date: "15/04/2021",
        },
    
]);
//create search function to make it easy for user to search for note
const [search, setSearch] = useState('');

//create dark mode 
const [darkMode, setDarkMode] = useState(false);
//saving the note to localstorage
useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);

//create a function to update the note 
          const addNote = (text) => {
            const date = new Date();
            const newNote = {
              id: nanoid(),
              text: text,
              date: date.toLocaleDateString()
            }
            const newNotes = [...notes, newNote];
            setNotes(newNotes);
          };

          //create a function to delete note
          const deleteNote =(id) => {
            const newNotes = notes.filter((note) => notes.id !== id);
            setNotes(newNotes);
          }
          
  return (
  <div className={`${darkMode && 'dark-mode'}`}>  
    <div className="container">
      <Toggle handleToggleDarkMode={setDarkMode}/>
      <search  handleSearchNote={setSearch}/>
      <NoteItems  
      notes={notes.filter((note) => 
        note.text.toLowerCase().includes(search))} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  </div>
  );
}

export default TypeNote;


