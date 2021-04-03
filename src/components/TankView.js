import React from 'react';
import { useParams } from 'react-router-dom';

function TankView(props) {
const {
    tanksList
} = props

const { id } = useParams()
let currentTank


const createTank = () =>{
    let workingArray = Object.values(tanksList)
    workingArray.map(tank => {
        if(tank.name === id){
            currentTank = tank
        }
    })
}


createTank()

    return (
        <div>
            <h1>TANK VIEW</h1>
            <h3>tank name here</h3>
            {currentTank.name}
        </div>
    )
}

export default TankView
