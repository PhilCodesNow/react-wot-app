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

            ///////
            // check which tank filter objects have trues
            // run filter function with whichever filter objects have trues
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
                    <li><button>U.S.A.</button></li>
                    <li><button>Germany</button></li>
                    <li><button>U.S.S.R</button></li>
                    <li><button>U.K.</button></li>
                    <li><button>France</button></li>
                    <li><button>Japan</button></li>
                    <li><button>Czech</button></li>
                    <li><button>China</button></li>
                    <li><button>Poland</button></li>
                </ul>
                <ul>
                    <li><button>&#x2160;</button></li>
                    <li><button>&#x2161;</button></li>
                    <li><button>&#x2162;</button></li>
                    <li><button>&#x2163;</button></li>
                    <li><button>&#x2164;</button></li>
                    <li><button>&#x2165;</button></li>
                    <li><button>&#x2166;</button></li>
                    <li><button>&#x2167;</button></li>
                    <li><button>&#x2168;</button></li>
                    <li><button>&#x2169;</button></li>
                </ul>
                <ul>
                    <li><button>Heavy</button></li>
                    <li><button>Medium</button></li>
                    <li><button>Light</button></li>
                    <li><button>Tank Destroyer</button></li>
                    <li><button>Artillery</button></li>
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
