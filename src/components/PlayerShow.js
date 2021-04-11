import React from 'react'
import PlayerLookup from './PlayerLookup'

function PlayerShow(props) {
const {
    apiPlayerName,
    noPlayerNamedSearch
} = props



if(apiPlayerName === null){
    console.log(apiPlayerName)
    return(
        <div>
            No one has the nickname "{noPlayerNamedSearch}"
        </div>
    )
} else if(apiPlayerName.nickname){
    console.log(apiPlayerName)
    return(
        <div>
            {apiPlayerName.nickname}
            {apiPlayerName.global_rating}
            {apiPlayerName.statistics.all.battles}
        </div>
    )
} else{
    return(
        <div>
            no one searched
        </div>
    )
}
}

export default PlayerShow
