import { useState, useEffect } from "react";


export interface DigimonApiData {
    id: number,
    name: string,
    level: string,
    img: string,
}

const useDigimon = () => {
    const [digimon, setDigimon] = useState<DigimonApiData[]>([]);

    // barra búsqueda
    const [filtradigimon, setFiltradigimon] = useState("");

    useEffect(() => {
        const obtenerDigimon = async () => {
            try {
                const response = await fetch("https://digimon-api.vercel.app/api/digimon");
                const data: DigimonApiData[] = await response.json();
                setDigimon(data);
            } catch (error) {
                console.error("Tuvimos DigiError :(", error);
            }
        };

        obtenerDigimon();
    }, []);

    const FiltrarDigimon = digimon.filter((digimon) =>
        digimon.name.toLowerCase().includes(filtradigimon.toLowerCase())
    );
    

    return {
        digimon: FiltrarDigimon,
        setFiltradigimon
    }
}

export default useDigimon