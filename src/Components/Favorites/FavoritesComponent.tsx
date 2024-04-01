import { useEffect, useState } from "react";

import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../Types/Pokemon";

const FavoritesComponent = () => {
    const [pokemons, setPokemons] = useState([] as Pokemon[]);

    useEffect(() => {
        const favoritePokemons = Object.keys(sessionStorage).map((key) => JSON.parse(sessionStorage.getItem(key) as string) as Pokemon);
        setPokemons(favoritePokemons);
    }, [])
    return (
        <>
            {pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.name as string}/>)}
        </>
    )
}

export default FavoritesComponent;