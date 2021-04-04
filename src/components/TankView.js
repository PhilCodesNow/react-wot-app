import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
console.log(currentTank)
    return (
        <div>
            {currentTank.name}ls
            <img src={currentTank.images.small_icon}/>
            <img src={currentTank.images.contour_icon}/>
            <img src={currentTank.images.big_icon}/>

            <div>
                <Link to="/tankopedia">Back</Link>
            </div>
        </div>
    )
}

export default TankView
