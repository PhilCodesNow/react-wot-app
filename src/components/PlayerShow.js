import React from 'react'
import PlayerLookup from './PlayerLookup'

function PlayerShow(props) {
const {
    apiPlayerName,
    noPlayerNamedSearch
} = props

console.log('here')
console.log(noPlayerNamedSearch)


if(apiPlayerName !== null){
    return(
        <div>
            {apiPlayerName.nickname}
        </div>
    )
} else if(apiPlayerName === null){
    return(
        <div>
            No one has the nickname "{noPlayerNamedSearch}"
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
