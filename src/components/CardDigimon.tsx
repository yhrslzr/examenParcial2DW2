import type {
    propsCardDigimon
} from "../IT/Interfaces";

import "./CardDigimon.css"

export const CardDigimon = ({ nombreDigimon, nivelDigimon, imgDigimon }: propsCardDigimon) => {
    return (
        <div className={`card ${nivelDigimon === "In Training" ? "in-training" : nivelDigimon === "Rookie" ? "rookie" : nivelDigimon === "Champion" ? "champion" : nivelDigimon === "Ultimate" ? "ultimate" : nivelDigimon === "Mega" ? "mega" : ""}`}>
            <img src={imgDigimon} alt={nombreDigimon} />
            <h2>{nombreDigimon}</h2>
            <p>Nivel: {nivelDigimon}</p>
        </div>

        /* Niveles: In Training, Rookie, Champion, Ultimate, Mega. Colores y bordes distintos */
    )
}

export default CardDigimon;