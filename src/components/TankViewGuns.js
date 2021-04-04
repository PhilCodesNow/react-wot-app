import React from 'react'

function TankViewGuns(props) {
    const {
        currentTank
    } = props
    return (
        <div>
        {
        Object.values(currentTank.modules_tree).map(module =>{
            if(module.type === "vehicleGun"){
            return(
                <div>
                    {module.name}
                </div>)
            }
        })
        }
        </div>
    )
}

export default TankViewGuns
