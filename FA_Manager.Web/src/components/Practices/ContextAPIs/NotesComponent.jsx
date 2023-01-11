import React ,{useState}from 'react'
import { NoteContext}  from './MyAllContext/NoteContext';

const NotesComponent = (props) => {

    const InitState = {
        Content:'',
        Code:'',
        WrittenOn:new Date()
    }
    const saveNotes=(payload)=>{

    }
    const fetchNotes=()=>{
        
    }
    const [NoteState, setNoteState] = useState(InitState);
  return (
    <div>
        <h3>
            Global reuseable Note Component
        </h3>
        
        <NoteContext.Provider value={{InitState,saveNotes,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>

    </div>
  )
}

export default NotesComponent