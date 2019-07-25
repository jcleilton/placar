import React from "react"

import Atleta from './atleta'
import AtletaControllers from './atleta-controllers'

function Competidor() {
    return (
        <div className="competidor">
            <Atleta />
            <AtletaControllers />
        </div>
    )
}

export default Competidor