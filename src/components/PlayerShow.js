import React from 'react'
import PlayerLookup from './PlayerLookup'

import './playershow.css';

function PlayerShow(props) {
const {
    apiPlayerName,
    noPlayerNamedSearch
} = props

let newAcc = []
let newWR = []


// sets player accuracy from api data
if(apiPlayerName !== null){
    if(apiPlayerName.nickname){
        let acc = (apiPlayerName.statistics.all.hits/apiPlayerName.statistics.all.shots)
        acc = acc*100
        acc = `${acc}`
        acc = acc.split('')
        for(let i = 0; i < 5; i++){
            newAcc.push(acc[i])
        }
        
        newAcc = newAcc.join('')
        } 
}

// set player win percentage
if(apiPlayerName !== null){
    if(apiPlayerName.nickname){
    let wr = (apiPlayerName.statistics.all.wins/apiPlayerName.statistics.all.battles)
    wr = wr*100
    wr = `${wr}`
    wr = wr.split('')
    for(let i = 0; i < 5; i++){
        newWR.push(wr[i])
    }
    }
}



if(apiPlayerName === null){
    return(
        <div className="noplayeravail">
            No one has the nickname "{noPlayerNamedSearch}"
        </div>
    )
} else if(apiPlayerName.nickname){
    console.log(apiPlayerName)
    return(
        <div className="playershow">
            <div className="playershow__header">
                <h2>{apiPlayerName.nickname}</h2>
            </div>
            <div className="playershow__stats">
                <div className="playershow__stats__flex">
                    <div className="playershow__stats__div">
                        <h3>{apiPlayerName.statistics.all.battles}</h3>
                        <p>Battles</p>
                    </div>
                    <div className="playershow__stats__div">
                        <h3>{apiPlayerName.statistics.all.battle_avg_xp}</h3>
                        <p>Average Experience Per Battle</p>
                    </div>
                    <div className="playershow__stats__div">
                        <h3>                        
                        {
                            parseInt(apiPlayerName.statistics.all.damage_dealt/apiPlayerName.statistics.all.battles)
                        }
                        </h3>
                        Average Damage
                    </div>
                </div>
                <div className="playershow__stats__flex">
                    <div className="playershow__stats__pr">
                        <h3>{apiPlayerName.global_rating}</h3>
                        <p>Personal Rating</p>
                    </div>
                </div>
                <div className="playershow__stats__flex">
                    <div className="playershow__stats__div">
                        <h3>{apiPlayerName.statistics.all.max_frags}</h3>
                        <p>Most Vehicles Destroyed In A Battle</p>
                    </div>
                    <div className="playershow__stats__div">
                        <h3> {newAcc}%</h3>
                       <p>Accuracy</p>
                    </div>
                    <div className="playershow__stats__div">
                        <h3>{newWR}%</h3>
                        <p>Victories</p>
                    </div>
                </div>

            </div>
        </div>
    )
} else{
    return(
        <div className="noplayershow">
            no one searched
        </div>
    )
}
}

export default PlayerShow
