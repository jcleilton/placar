import React from "react"

import Placar from './placer'
import Cronometro from './cronometro'

function Display() {
    return (
        <div className="display">
            <Placar />
            <Cronometro />
            <Placar />
        </div>
    )
}

export default Display