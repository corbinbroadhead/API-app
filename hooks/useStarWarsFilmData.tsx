import { useEffect, useState } from "react";

export default function useStarWarsFilmData(movieId) {
    const [data, setData] = useState(null);

    const fetchStarWarsFilmData = async () => {
        const response = await fetch(`https://swapi.dev/api/films/${movieId}/`);
        const json = await response.json();
        await new Promise(resolve => setTimeout(resolve, 1500));
        setData(json);
    };

    useEffect(()=> {
        fetchStarWarsFilmData();
    }, []);

  return {data};
}