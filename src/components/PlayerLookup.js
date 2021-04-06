import React, { useState } from 'react';

function PlayerLookup() {

    const [playerSearchForm, setPlayerSearchForm] = useState()
    const [playerId, setPlayerId] = useState([])

    // useEffect(() =>{
    //     let callAPI = async () =>{
    //       await fetch(`https://api.worldoftanks.com/wot/account/list/?application_id=${API_KEY}&search=trollu`)
    //         .then(response => response.json())
    //         .then(data => setPlayer(data))
    //     }
    
    
    //   })
    
    //   console.log(player)
    const handleInputChange = (e) =>{
        let newInput = e.target.value
        setPlayerSearchForm([newInput])
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log('form submitted' + playerSearchForm)
        setPlayerSearchForm('')
        e.target.reset()
    }
    return (
        <div className="playerlookup">
            Player Lookup 
            <div className="playerlookup-searchform">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" onChange={handleInputChange}></input>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
            <div className="playerlookup-results">
                <p>results here</p>
            </div>
        </div>
    )
}

export default PlayerLookup
