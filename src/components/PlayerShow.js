import React from 'react'
import PlayerLookup from './PlayerLookup'

function PlayerShow(props) {
const {
    apiPlayerName
} = props
if(apiPlayerName.nickname){
    return(
        <div>
            {apiPlayerName.nickname}
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
