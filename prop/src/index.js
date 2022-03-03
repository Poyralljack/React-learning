import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
function Card(props){
    return (
    <div>
        <h2>{props.name}</h2>
        <img src={props.img}
        alt="avatar_img"
         />
        <p>{props.tel}</p>
        <p>{props.email}</p>
    </div>
    );
}
ReactDOM.render(
    <div>
        <h1>My Contacts</h1>
        <Card name="Beyonce" img="https://www.24bursa.com/wp-content/uploads/2021/09/beyonce271-1100x630.jpg" tel="+90555" email="beyonce@gmail.com"/>
        <Card name="Justin" img="https://www.24bursa.com/wp-content/uploads/2021/09/beyonce271-1100x630.jpg" tel="+90554" email="justin@gmail.com"/>
        <Card name="Rock" img="https://www.24bursa.com/wp-content/uploads/2021/09/beyonce271-1100x630.jpg" tel="+90553" email="rock@gmail.com"/>
        
</div>
, document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
