import React, {useState, useEffect} from 'react';
import DataTable from './tables/boardgame_table.jsx';

function Boardgame() {
    const [boardgames, setBoardgames] = useState(false);
    const [data, setData] = useState('');
    useEffect(() => {
        getBoardgames();
    }, []);
    function getBoardgames() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBoardgames(data);
            });
    }
    ;
    const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
    }
    function createBoardgame() {
        let title = prompt('Enter board game title');
        let genre = prompt('Enter board game genre');
        let played = prompt('Enter board game title');
        let rating = prompt('Enter board game genre');
        let campaign = prompt('Enter board game genre');
        fetch('http://localhost:3001/boardgames', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, genre, played, rating, campaign}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getBoardgames();
            });
    }
    function deleteMerchant() {
        let id = prompt('Enter merchant id');
        fetch(`http://localhost:3001/boardgames/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getBoardgames();
            });
    }
    return (
            <>
                <div>
                    <DataTable data={boardgames} />
                    <br />
                    <button onClick={createBoardgame}>Add boardgames</button>
                    <br />
                    <button onClick={deleteMerchant}>Delete boardgames</button>
                </div>

            </>
    );
}
export default Boardgame;