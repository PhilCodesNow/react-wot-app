import React, { useState, useEffect } from 'react';
import PlayerShow from './PlayerShow';

import './playerlookup.css';


function PlayerLookup() {

    const [playerSearchForm, setPlayerSearchForm] = useState()
    // const [apiPlayerList, setApiPlayerList] = useState([])
    const [playerId, setPlayerId] = useState([])
    const [apiPlayerName, setApiPlayerName] = useState([])
    const [noPlayerNamedSearch, setNoPlayerNamedSearch] = useState([])
    
    const API_KEY = process.env.REACT_APP_API_KEY

        let callAPI = async () =>{
        await fetch(`https://api.worldoftanks.com/wot/account/list/?application_id=${API_KEY}&search=${playerSearchForm[0]}`)
            .then(response => response.json())
            .then(data => checkPlayerId(data.data))
        }
       
        let searchPlayerId = (playerIdd) =>{
        fetch(`https://api.worldoftanks.com/wot/account/info/?application_id=${API_KEY}&account_id=${playerIdd}
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

    }



    const handleInputChange = (e) =>{
        let newInput = e.target.value
        setPlayerSearchForm([newInput])
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        setNoPlayerNamedSearch(...playerSearchForm)
        callAPI()
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

            <PlayerShow
            apiPlayerName={apiPlayerName}
            noPlayerNamedSearch={noPlayerNamedSearch}
            />                
            </div>
        </div>
    )
}

export default PlayerLookup
