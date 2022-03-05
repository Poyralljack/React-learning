import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function createNodes(nodeItem){
  return <Note 
    title={nodeItem.title}
    content={nodeItem.content}
  />
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNodes)}
      <Footer />
    </div>
  );
}

export default App;
