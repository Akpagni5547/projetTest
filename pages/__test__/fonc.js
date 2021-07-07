import React, { useState } from "react"



export default function somme() {
    const [compteurValeur, SetCompteurValeur] = useState(0)
    const [inputValeur, SetinputValeur] = useState(1)
    const comptage = () => {
        SetCompteurValeur(compteurValeur + inputValeur)
    }

    const decomptage = () => {
        SetCompteurValeur(compteurValeur - inputValeur)
    }

    return (
        <div>
            <h1 testId="header">Mon compteur</h1>
            {compteurValeur >= 100 ? <h2 testId="compteur">{compteurValeur}</h2> :
                compteurValeur <= -100 ? <h2 testId="compteur">{compteurValeur}</h2> :
                    <h2 testId="compteur">{compteurValeur}</h2>}
            <button testId="DeCompteur-btn" onClick={decomptage}>-</button>
            <input type="number" testId="input" value={inputValeur}
                onChange={(e) => {
                    SetinputValeur(parseInt(e.target.value))
                }} />
            <button testId="Compteur-btn" onClick={comptage}>+</button>
        </div>
    )
}