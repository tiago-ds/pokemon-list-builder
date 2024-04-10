import { useEffect, useState } from "react";

import "./favorites-component.scss";	

import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../Types/Pokemon";

const FavoritesComponent = () => {
    const [pokemons, setPokemons] = useState([] as Pokemon[]);

    useEffect(() => {
        const favoritePokemons = Object.keys(sessionStorage).map(
            (key) =>
                JSON.parse(sessionStorage.getItem(key) as string) as Pokemon
        );
        setPokemons(favoritePokemons);
    }, []);
    return (
        <>
            <div className="favorites-container">
                <span className="selected-text">YOUR SELECTED POKEMONS</span>
                <div className="grid-container">
                    {pokemons.map((pokemon) => (
                        <div className="grid-item">
                            <PokemonCard pokemon={pokemon} key={pokemon.name as string} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FavoritesComponent;
