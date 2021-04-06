import React from 'react'

function TankViewMisc(props) {
    const {
        currentTank
    } = props

    let typeString = ''
    let nationString = ''

    if(currentTank.type === 'lightTank'){
        typeString = 'Light Tank'
    } else if(currentTank.type === 'mediumTank'){
        typeString = 'Medium Tank'
    } else if(currentTank.type === 'heavyTank'){
        typeString = 'Heavy Tank'
    } else if(currentTank.type === 'AT-SPG'){
        typeString = 'Tank Destroyer'
    } else if(currentTank.type === 'SPG'){
        typeString = 'Self Propelled Gun'
    }


    if(currentTank.nation === 'usa'){
        nationString = 'U.S.A.'
    } else if(currentTank.nation === 'uk'){
        nationString = 'United Kingdom'
    } else if(currentTank.nation === 'germany'){
        nationString = 'Germany'
    } else if(currentTank.nation === 'france'){
        nationString = 'France'
    } else if(currentTank.nation === 'ussr'){
        nationString = 'USSR'
    } else if(currentTank.nation === 'czech'){
        nationString = 'Czechoslovakia'
    } else if(currentTank.nation === 'poland'){
        nationString = 'Poland'
    } else if(currentTank.nation === 'china'){
        nationString = 'China'
    } else if(currentTank.nation === 'japan'){
        nationString = 'Japan'
    }
    return (
        <div className="tankviewmisc">
            <div>
            <h3>Tank type: </h3><span>{typeString}</span>
            </div>
            <div>
                <h3>Tank Nation: </h3><span>{nationString}</span>
            </div>
        </div>
    )
}

export default TankViewMisc
