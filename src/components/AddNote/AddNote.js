import { useState } from 'react';
import { useLocalStorage } from '../../useLocalStorage';

function AddNote({note, setNote}) {

  const [value, setValue] = useState("")

  function saveNote() {
    setNote([...note, {
      id: Math.random().toString(36).substr(2,9),
      text: value,
      italics: false
    }])
    setValue('')
  }

  return (
    <div className = 'add-note'>
      <button onClick = {saveNote}>Добавить</button>
      <input placeholder='Новая заметка...' value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default AddNote;
