import React from "react"

import CronometroDisplay from './cronometro-display'
import CronometroControllers from './cronometro-controllers'

function Cronometro() {
    return (
        <div className="cronometro">
            <CronometroDisplay />
            <CronometroControllers />
        </div>
    )
}

export default Cronometro