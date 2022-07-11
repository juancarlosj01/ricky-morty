import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Residents = ({link}) => {

const [character,setCharacter] = useState ({})

useEffect (() => {

    axios.get (link)
    .then (res => setCharacter  (res.data) ) ;

},[])

console.log (character)



    return (

        



        <div className="container">


            <div className="card">


         <h1> <b>Nombre : </b> {character.name}</h1>
         <img src={character.image} alt="" />
         <p> <b>Status : </b>{character.status} </p>
         <p> <b>Origen : </b>{character.origin?.name} </p>
         <p> <b>Episode : </b>{character.episode} </p>
        
            </div>
        
        </div>

        
    );
};

export default Residents;