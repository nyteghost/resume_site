import axios from "axios"
import React, { useState, useEffect } from 'react';

export default function Pokemon() {
    let [data, setData] =useState('')
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then((response) => setData(response.data.results));

    }, []);

    const entries = Object.entries(data);



       return(
           entries.map((entry) => {
               return (
                   <div className="data" key={entry[0]}>
                       <h3>{entry[1].name} {entry[1].url}</h3>

                   </div>
               );
           })
       )

}