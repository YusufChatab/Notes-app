import React from "react";
import Card from "./Card";
import notes from "../notes";



function createCard(item){
   return( 
   <Card 
        key = {item.key}
        title={item.title}
        content={item.content}
    />
   )
}


export default function Note(props){
    return (
        <div>{notes.map(createCard)}</div>

    )
}

