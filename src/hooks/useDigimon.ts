import { useState, useEffect } from "react";


export interface DigimonApiData {
    id: number,
    name: string,
    level: string,
    img: string,
}

const useDigimon = () => {
    const [digimon, setDigimon] = useState<DigimonApiData[]>([]);

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
    

    return {
        digimon,
    }
}

export default useDigimon