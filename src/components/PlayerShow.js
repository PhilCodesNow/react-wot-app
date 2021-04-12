import React from 'react'
import PlayerLookup from './PlayerLookup'

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
        <div className="playershow">
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
                        <h3>Battles</h3>
                        {apiPlayerName.statistics.all.battles}
                    </div>
                    <div className="playershow__stats__div">
                        <h3>Average Experience Per Battle</h3>
                        {apiPlayerName.statistics.all.battle_avg_xp}
                    </div>
                    <div className="playershow__stats__div">
                        <h3>Average Damage</h3>
                        {
                            parseInt(apiPlayerName.statistics.all.damage_dealt/apiPlayerName.statistics.all.battles)
                        }
                    </div>
                </div>
                <div className="playershow__stats__flex">
                    <div className="playershow__stats__pr">
                        <h3>Personal Rating</h3>
                        {apiPlayerName.global_rating}
                    </div>
                </div>
                <div className="playershow__stats__flex">
                    <div className="playershow__stats__div">
                        <h3>Most Vehicles Destroyed In A Battle</h3>
                        {apiPlayerName.statistics.all.max_frags}
                    </div>
                    <div className="playershow__stats__div">
                        <h3>Accuracy</h3>
                        {newAcc}%
                    </div>
                    <div className="playershow__stats__div">
                        <h3>Victories</h3>
                        {newWR}%
                    </div>
                </div>

            </div>
        </div>
    )
} else{
    return(
        <div className="playershow">
            no one searched
        </div>
    )
}
}

export default PlayerShow
