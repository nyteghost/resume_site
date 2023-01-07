import axios from "axios"
import React, { useState, useEffect } from 'react';

export default function RandomUser() {
    let [data, setData] =useState('')
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setData(response.data));
    }, []);
    return(
        <>
            {data ? ( data.map((data) => {
                return (
                    <div className="data" key={data.id}>
                        <h3>{data.name}</h3>
                    </div>
                ); })) : (
                <h3>No data yet</h3>
            )}
        </>
            )
}