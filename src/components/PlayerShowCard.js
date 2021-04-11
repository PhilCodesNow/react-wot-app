import React, { useState, useEffect } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

function PlayerShowCard(props) {
    const {
        apiPlayerName
    } = props

    const [playerStats, setPlayerStats] = useState()

    useEffect(() => {
        setPlayerStats([apiPlayerName])
        console.log(playerStats)
    }, [])


    if(playerStats !== null){
        console.log('yes')
        console.log(playerStats)
        return(
            <div>
               {/* {playerStats[0].statistics.all.battles} */}
            </div>
        )
    } else{
        return(
            <div>

            </div>
        )
    }
}

export default PlayerShowCard
