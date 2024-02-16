import { useEffect, useState } from "react";
import { getPokemons } from "../../Services/PokeApiService";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../Types/Pokemon";

const FavoritesComponent = () => {
    const [pokemons, setPokemons] = useState([] as Pokemon[]);
    useEffect(() => {
        const pokemonNames = Object.keys(sessionStorage);
        let poke: Pokemon[] = [];
        for (const name of pokemonNames) {
            getPokemons(name).then(pokemon => {
                poke.push(pokemon[0]);
            });
        }

        setPokemons(poke);

    }, []);
        return (
            <>
                <button onClick={() => console.log(pokemons)}>clicaaa</button>
                {pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.name as string}/>)}
            </>
        )
}

export default FavoritesComponent;