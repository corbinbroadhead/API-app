import { useEffect, useState } from "react";

export default function useStarWarsShipData(shipUrl) {
    const [data, setData] = useState(null);

    if(shipUrl == null) {
        const fetchStarWarsAllShipData = async () => {
            const response = await fetch(`https://swapi.dev/api/starships`);
            const json = await response.json();
            await new Promise(resolve => setTimeout(resolve, 1000));
            setData(json);
        };

        useEffect(()=> {
            fetchStarWarsAllShipData();
        }, []);
    } else {
        const fetchStarWarsShipData = async () => {
            const response = await fetch(shipUrl);
            const json = await response.json();
            await new Promise(resolve => setTimeout(resolve, 500));
            setData(json);
        };

        useEffect(()=> {
            fetchStarWarsShipData();
        }, []);
    } 

  return {data};
}