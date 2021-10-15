import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import AddNote from './components/AddNote/AddNote';
import Notes from './components/Notes/Notes';
import './App.css';
import { useLocalStorage } from './useLocalStorage';

function App() {

  const [note, setNote] = useLocalStorage("note", [
   {
     id: Math.random().toString(36).substr(2,9),
     text:'first note',
     italics: false
   }
 ])

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  return (
    <div className="App">
      <Header />
      <AddNote note={note} setNote={setNote} />
      <Notes note={note} setNote={setNote} />
    </div>
  );
}

export default App;
