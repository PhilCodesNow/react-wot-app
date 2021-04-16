import React, { useState, useEffect } from 'react';
import PlayerShow from './PlayerShow';


import './playerlookup.css';


function PlayerLookup() {

    const [playerSearchForm, setPlayerSearchForm] = useState()
    // const [apiPlayerList, setApiPlayerList] = useState([])
    const [playerId, setPlayerId] = useState([])
    const [apiPlayerName, setApiPlayerName] = useState([])
    const [noPlayerNamedSearch, setNoPlayerNamedSearch] = useState([])
    


        let callAPI = async () =>{
        await fetch(`https://api.worldoftanks.com/wot/account/list/?application_id=${REACT_APP_API_KEY}&search=${playerSearchForm[0]}`)
            .then(response => response.json())
            .then(data => checkPlayerId(data.data))
        }
       
        let searchPlayerId = (playerIdd) =>{
        fetch(`https://api.worldoftanks.com/wot/account/info/?application_id=${REACT_APP_API_KEY}&account_id=${playerIdd}
        `)
            .then(response => response.json())
            .then(data => setApiPlayerName(data.data[playerIdd]))
        }
    

        


    const checkPlayerId = (data) =>{
        let playerIdd = 0
        // let apiReturn = [...apiPlayerList]
        data.map(index =>{
            if(index.nickname === playerSearchForm[0]){
                playerIdd = index.account_id
            }
        })
        searchPlayerId(playerIdd)
        console.log(apiPlayerName)

    }



    const handleInputChange = (e) =>{
        let newInput = e.target.value
        setPlayerSearchForm([newInput])
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        if(playerSearchForm){
            let checkSearchLength = playerSearchForm[0]
            let numberOfString = checkSearchLength.split('')
            if(numberOfString.length >= 3){
                setNoPlayerNamedSearch(...playerSearchForm)
                callAPI()
                setPlayerSearchForm('')
                e.target.reset()
            }
        }
    }
    return (
        <div className="playerlookup">
            <h1>Player Lookup</h1>
            <div className="playerlookup__searchform">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" onChange={handleInputChange} placeholder="minimum 3 letters"></input>
                    <input type="submit" value="&#x260C;"></input>
                </form>
            </div>
            <div className="playerlookup-results">

            <PlayerShow
            apiPlayerName={apiPlayerName}
            noPlayerNamedSearch={noPlayerNamedSearch}
            />                
            </div>
        </div>
    )
}

export default PlayerLookup
