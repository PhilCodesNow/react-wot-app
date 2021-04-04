import React from 'react';
import { useParams, Link } from 'react-router-dom';

import './tankview.css';


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
        <div className="tank-view">
            <div className="tank-view__nav">
                <div>
                    {currentTank.name}
                </div>
                <div className="tank-view__exit-link">
                    <Link to="/tankopedia">&#x2718;</Link>
                </div>
            </div>
            <div className="tank-view__description">
                <img src={currentTank.images.big_icon}/>
                <p>{currentTank.description}</p>
            </div>
            <div className="tank-view__stats">
                <div className="tank-view__stats__crew">
                    <h3>Crew</h3>
                    {
                        currentTank.crew.map(crewMember =>{
                            
                            return(<div>
                                {Object.values(crewMember.roles)[0]}    
                                </div>)
                        })
                    }
                </div>
                <div className="tank-view__stats__modules">
                    <div className="tank-view__stats__guns">
                        <h3>Guns</h3>
                        {
                            Object.values(currentTank.modules_tree).map(module =>{
                                if(module.type === "vehicleGun"){
                                    return(<div>
                                        {module.name}
                                        </div>)
                                }
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TankView
