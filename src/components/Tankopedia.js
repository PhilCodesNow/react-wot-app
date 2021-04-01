import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Tankopedia(props) {
    const  {
        tanksList,
    } = props


const [tankFilter, setTankFilter] = useState([
    {
        nations: {'usa': false, 'germany': false, 'ussr': false, 'uk': false, 'france': false, 'japan': false, 'czech': false, 'china': false, 'poland': false},
        tiers: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false},
        types: {'lightTank': false, 'mediumTank': false, 'heavyTank': false, 'AT-SPG': false, 'SPG': false},
        is_premium: {'true': false, 'false': false},
    }
    ])

    let searchedTanksArray = []

let handleNationClick = (nation) =>{
    let stateArray = [...tankFilter]
    if(stateArray[0].nations[nation] === true){
        stateArray[0].nations[nation] = false
    } else {
        stateArray[0].nations[nation] = true
    }
    setTankFilter([...stateArray])
}
let handleTierClick = (tier) =>{
    let stateArray = [...tankFilter]
    if(stateArray[0].tiers[tier] === true){
        stateArray[0].tiers[tier] = false
    } else {
        stateArray[0].tiers[tier] = true
    }
    setTankFilter([...stateArray])
}
let handleTypeClick = (type) =>{
    let stateArray = [...tankFilter]
    if(stateArray[0].types[type] === true){
        stateArray[0].types[type] = false
    } else {
        stateArray[0].types[type] = true
    }
    setTankFilter([...stateArray])
}
let handleSearchTanks = () =>{
    let workingArray = [tanksList]
    workingArray = workingArray[0]
    workingArray = Object.values(workingArray)


    let nationsFilterOn = false
    let tiersFilterOn = false
    let typesFilterOn = false
    

    let checkNationsFilter = () => {
        Object.values(tankFilter[0].nations).map(index =>{
        if(index === true){
            return nationsFilterOn = true
        } else {
            return
        }

    })
}
    let checkTiersFilter = () =>{
        Object.values(tankFilter[0].tiers).map(index =>{
            if(index === true){
                return tiersFilterOn = true
            } else {
                return
            }
        })
    }
    let checkTypesFilter = () =>{
        Object.values(tankFilter[0].types).map(index =>{
            if(index === true){
                return typesFilterOn = true
            } else{
                return
            }
        })
    }
    

    checkNationsFilter()
    checkTiersFilter()
    checkTypesFilter()

    workingArray.map(tank =>{
        if(nationsFilterOn === true && typesFilterOn === false && tiersFilterOn === false){
            if(tankFilter[0].nations[tank.nation] === true){
                searchedTanksArray.push(tank)
            }
        } else if(nationsFilterOn === true && typesFilterOn === true && tiersFilterOn === false){
            if(tankFilter[0].nations[tank.nation] === true &&
                tankFilter[0].types[tank.type] === true){
                    searchedTanksArray.push(tank)
                }
        } else if(nationsFilterOn === true && typesFilterOn === false && tiersFilterOn === true){
            if(tankFilter[0].nations[tank.nation] === true && 
                tankFilter[0].tiers[tank.tier] === true){
                searchedTanksArray.push(tank)
            }
        } else if(nationsFilterOn === false && typesFilterOn === true && tiersFilterOn === false){
            if(tankFilter[0].types[tank.type] === true){
                searchedTanksArray.push(tank)
            }
        } else if(nationsFilterOn === false && typesFilterOn === true && tiersFilterOn === true){
            if(tankFilter[0].types[tank.type] === true && 
                tankFilter[0].tiers[tank.tier] === true){
                searchedTanksArray.push(tank)
            }
        } else if(nationsFilterOn === false && typesFilterOn === false && tiersFilterOn === true){
            if(tankFilter[0].tiers[tank.tier] === true){
                searchedTanksArray.push(tank)
            }
        } else if(nationsFilterOn === true && typesFilterOn === true && tiersFilterOn === true){
            if(tankFilter[0].nations[tank.nation] === true &&
                tankFilter[0].types[tank.type] === true &&
                tankFilter[0].tiers[tank.tier] === true){
                    searchedTanksArray.push(tank)
                }
        }
    })
}
handleSearchTanks()

    return (
        <div className="tank">
            Tankopedia
            <div className="tank-options">
                <ul>
                    <li><button onClick={() => handleNationClick('usa')}>U.S.A.</button></li>
                    <li><button onClick={() => handleNationClick('germany')}>Germany</button></li>
                    <li><button onClick={() => handleNationClick('ussr')}>U.S.S.R</button></li>
                    <li><button onClick={() => handleNationClick('uk')}>U.K.</button></li>
                    <li><button onClick={() => handleNationClick('france')}>France</button></li>
                    <li><button onClick={() => handleNationClick('japan')}>Japan</button></li>
                    <li><button onClick={() => handleNationClick('czech')}>Czech</button></li>
                    <li><button onClick={() => handleNationClick('china')}>China</button></li>
                    <li><button onClick={() => handleNationClick('poland')}>Poland</button></li>
                </ul>
                <ul>
                    <li><button onClick={() => handleTierClick(1)}>&#x2160;</button></li>
                    <li><button onClick={() => handleTierClick(2)}>&#x2161;</button></li>
                    <li><button onClick={() => handleTierClick(3)}>&#x2162;</button></li>
                    <li><button onClick={() => handleTierClick(4)}>&#x2163;</button></li>
                    <li><button onClick={() => handleTierClick(5)}>&#x2164;</button></li>
                    <li><button onClick={() => handleTierClick(6)}>&#x2165;</button></li>
                    <li><button onClick={() => handleTierClick(7)}>&#x2166;</button></li>
                    <li><button onClick={() => handleTierClick(8)}>&#x2167;</button></li>
                    <li><button onClick={() => handleTierClick(9)}>&#x2168;</button></li>
                    <li><button onClick={() => handleTierClick(10)}>&#x2169;</button></li>
                </ul>
                <ul>
                    <li><button onClick={() => handleTypeClick('heavyTank')}>Heavy</button></li>
                    <li><button onClick={() => handleTypeClick('mediumTank')}>Medium</button></li>
                    <li><button onClick={() => handleTypeClick('lightTank')}>Light</button></li>
                    <li><button onClick={() => handleTypeClick('SPG-AT')}>Tank Destroyer</button></li>
                    <li><button onClick={() => handleTypeClick('SPG')}>Artillery</button></li>
                </ul>
 
            </div>
            {
                searchedTanksArray.map(tank =>{

                    return(
                        <div key={uuidv4()}>
                            {tank.name}
                            <img src={tank.images.big_icon} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tankopedia
