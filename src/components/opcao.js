import React from "react"

function Opcao() {
    return (
        <div className="opcao">
            <div className="titleOpcao">
                <h5>Opcao</h5>
            </div>
            <div className="numberOpcao">
                <h1>0</h1>
            </div>
            <div className="botoesOpcao">
                <button className="botao">-</button>
                <h5 className="numeroEntreBotoes">4</h5>
                <button className="botao">+</button>
            </div>
        </div>
    )
}

export default Opcao