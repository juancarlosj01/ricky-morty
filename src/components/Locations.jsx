import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Residents from './Residents';

const Locations = () => {

const [locations, setLocations ] = useState ({}) 
const [searchValue, setSearchValue] = useState ("")
let residents= locations.residents



useEffect (() => {

const random = Math.floor (Math.random() * 126 ) + 1

    axios.get (`https://rickandmortyapi.com/api/location/${random}`)
         .then (res => setLocations  (res.data) ) ;
         
        },[])        
        
        const findLocation = () => {
            
            axios.get (`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then (res => setLocations  (res.data) ) ;
            
        }           
            console.log (locations)


           
            return (



                
                <div className='imgC'>

            <input placeholder="Type a location ID" type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <button onClick={findLocation}>Find </button>
            <h1 className=''> {locations.name} </h1>
            <h2>{locations.type}</h2>
            <h2>{locations.dimension}</h2>
            <h2 className=''>{locations.residents?.length}</h2>
            


            { residents?.map( e  => (
                    <Residents link={e} key ={e}/>
                ))

            }

        </div>
    );
};

export default Locations;