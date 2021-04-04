import React from 'react'

function TankViewCrew(props) {
    const {
        currentTank
    } = props
    return (
    <div>
    {
        currentTank.crew.map(crewMember =>{                 
        return(
        <div>
            {Object.values(crewMember.roles)[0]}    
        </div>)
        })
    }
    </div>
    )
}

export default TankViewCrew
