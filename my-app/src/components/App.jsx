import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=useState([]);

  function addNote(newNote){
    setNotes(prevNotes=> {
       return [...prevNotes, newNote];
    }
    );
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
        {notes.map((nodeItem,index)=>{
          return <Note 
            id={index}
            key={index}
            title={nodeItem.title}
            content={nodeItem.content}
            onDelete={deleteNote}
          />;
        })}
      <Footer />
    </div>
  );
}

export default App;
