import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPen } from '@fortawesome/free-solid-svg-icons'

function Notes({note, setNote}) {

  const[edit, setEdit] = useState(null)
  const[value, setValue] = useState('')

  function removeNote(id) {
    let newNote = [...note].filter(item => item.id != id)
    setNote(newNote)
  }

  function italicsNote(id) {
    setNote([
      ...note.map((item) =>
        item.id == id ? {...item, italics: !item.italics } : {...item}
      )
    ])
  }

  function editNote(id, text) {
    setEdit(id)
    setValue(text)
  }

  function saveNote(id) {
    let newNote = [...note].map(item => {
      if(item.id == id) {
        item.text = value
      }
      return item
    })
    setNote(newNote)
    setEdit(null)
  }

  return (
    <div className='notes'>
    {
      note.map( item => (
        <div key={item.id} className={item.italics ? "note italics" : "note"}>
          {
            edit == item.id ?
            <div className='buttons'>
              <button onClick={() => saveNote(item.id)}> <FontAwesomeIcon icon={ faSave } /></button>
            </div> :
            <div className='buttons'>
              <button onClick={() => removeNote(item.id)}> X </button>
              <button onClick={() => editNote(item.id, item.text)}> <FontAwesomeIcon icon={ faPen } /></button>
              <button onClick={() => italicsNote(item.id)}><i>Курсив</i></button>
            </div>
          }
          {
            edit == item.id ?
            <div>
              <input value={value} onChange={(e)=>setValue(e.target.value)} />
            </div> :
            <div>
              {item.text}
            </div>
          }
        </div>
      ))
    }

    </div>
  )
}

export default Notes;
