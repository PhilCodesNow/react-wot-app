import React from 'react'

function Tankopedia(props) {
    const  {
        tanksList
    } = props

console.log(tanksList)
    return (
        <div>
            Tankopedia
            {
                Object.values(tanksList).map(tank =>{
                    return(
                        <div>
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
