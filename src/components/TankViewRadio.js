import React from 'react'

function TankViewRadio(props) {
    const {
        currentTank
    } = props
    return (
        <div>
            {
                Object.values(currentTank.modules_tree).map(module =>{
                    if(module.type === "vehicleRadio"){
                        return(
                            <div>
                                {module.name}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default TankViewRadio
