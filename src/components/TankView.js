import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TankViewTurret from './TankViewTurret';
import TankViewRadio from './TankViewRadio';
import TankViewGuns from './TankViewGuns';
import './tankview.css';
import TankViewCrew from './TankViewCrew';
import TankViewMisc from './TankViewMisc';


function TankView(props) {
const {
    tanksList
} = props

const { id } = useParams()
let currentTank


const createTank = () =>{
    let workingArray = Object.values(tanksList)
    workingArray.map(tank => {
        if(tank.tag === id){
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
                    <h1>{currentTank.name}</h1>
                </div>
                <div className="tank-view__exit-link">
                    <h2><Link to="/tankopedia">&#x2718;</Link></h2>
                </div>
            </div>
            <div className="tank-view__description">
                <img src={currentTank.images.big_icon}/>
                <p>{currentTank.description}</p>
            </div>
            <div className="tank-view__miscinfo">
                <TankViewMisc
                currentTank={currentTank}
                />
            </div>
            <div className="tank-view__stats">
                <div className="tank-view__stats__crew tank-view__stats__div">
                    <h3>Crew</h3>
                    <TankViewCrew
                    currentTank={currentTank}
                    />
                </div>
                    <div className="tank-view__stats__guns tank-view__stats__div">
                        <h3>Guns</h3>
                        <TankViewGuns
                        currentTank={currentTank}
                        />
                    </div>
                    <div className="tank-view__stats__turrets tank-view__stats__div">
                        <h3>Turrets</h3>
                        <TankViewTurret 
                        currentTank={currentTank}/>
                    </div>
                    <div className="tank-view__stats__radios tank-view__stats__div">
                        <h3>Radios</h3>
                        <TankViewRadio 
                        currentTank={currentTank}
                        />
                    </div>

            </div>


        </div>
    )
}

export default TankView
