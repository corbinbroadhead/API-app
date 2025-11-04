import { useEffect, useState } from "react";

export default function useStarWarsCharacterData(url) {
    const [data, setData] = useState(null);

    if(url == null) {
        const fetchStarWarsAllCharacterData = async () => {
            const response = await fetch(`https://swapi.dev/api/people`);
            const json = await response.json();
            await new Promise(resolve => setTimeout(resolve, 1000));
            setData(json);
        };

        useEffect(()=> {
            fetchStarWarsAllCharacterData();
        }, []);
    } else {
        const fetchStarWarsCharacterData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            await new Promise(resolve => setTimeout(resolve, 500));
            setData(json);
        };

        useEffect(()=> {
            fetchStarWarsCharacterData();
        }, []);
    } 

  return {data};
}