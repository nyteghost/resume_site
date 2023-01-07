import React, { useState, useEffect } from 'react';

const [pokemon, setPokemon] = useState(); // input value
const [singlePokemon, setSinglePokemon] = useState([]); // pokemon array
const [type, setType] = useState();
const [moves, setMoves] = useState();
const [img, setImg] = useState();
const [loading, setLoading] = useState(true);

<input
    type="text"
    placeholder="Enter name of Pokemon"
    value={pokemon}
    onChange={enterName}
    className="col-2 py-1 my-3"
/>

