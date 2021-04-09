import React, { useState, useEffect } from 'react';
import PlayerShow from './PlayerShow';



function PlayerLookup() {

    const [playerSearchForm, setPlayerSearchForm] = useState()
    // const [apiPlayerList, setApiPlayerList] = useState([])
    const [playerId, setPlayerId] = useState([])
    const [apiPlayerName, setApiPlayerName] = useState([])


    const API_KEY = process.env.REACT_APP_API_KEY

    const doit = () =>{
        if(apiPlayerName.nickname){
            console.log(apiPlayerName.nickname)
        } else{
            console.log('no')
        }
    }

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
            .then(doit)
        }
    

        


    const checkPlayerId = (data) =>{
        console.log('there')
        console.log(data)
        let playerIdd = 0
        // let apiReturn = [...apiPlayerList]
        data.map(index =>{
            if(index.nickname === playerSearchForm[0]){
                console.log(index)
                playerIdd = index.account_id
            }
        })
        searchPlayerId(playerIdd)
        // console.log(apiPlayerName)

    }



    const handleInputChange = (e) =>{
        let newInput = e.target.value
        setPlayerSearchForm([newInput])
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log('form submitted /////////////////////////////////////')
        console.log(playerSearchForm)
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
            />                
            </div>
        </div>
    )
}

export default PlayerLookup
