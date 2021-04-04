import React from 'react'

function TankViewTurret(props) {
    const {
        currentTank
    } = props

    let vehicleTurreted = false
    Object.values(currentTank.modules_tree).map(module =>{
        if(module.type === "vehicleTurret"){
            vehicleTurreted = true
        }
    })

    
if(vehicleTurreted === false){
    return(<div>
        <p>Vehicle is not turreted</p>
    </div>)
} else{
    return (
        <div>
            {Object.values(currentTank.modules_tree).map(module =>{
                if(module.type === "vehicleTurret"){
                    return(
                        <div>
                            {module.name}
                        </div>
                    )
                }
            })}
        </div>
    )
}
  
}

export default TankViewTurret
