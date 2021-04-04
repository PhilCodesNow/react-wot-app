import React from 'react'

function TankView(props) {
const {
    tank
} = props


if(tank){
    return(
        <div>
            TankView
            <h2>{tank.name}</h2>
        </div>
    )
} else {
    return (
        <div>
            No Tank Selected
        </div>
    )
    }
}

export default TankView
