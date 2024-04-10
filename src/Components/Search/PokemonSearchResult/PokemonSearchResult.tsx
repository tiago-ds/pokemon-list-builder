import { Pokemon } from "../../../Types/Pokemon";
import PokemonCard from "../../PokemonCard/PokemonCard";

import "./pokemon-search-result.scss";

interface IPokemonSearchResultProps {
    pokemons?: Pokemon[];
}

export default function PokemonSearchResult({
    pokemons,
}: IPokemonSearchResultProps) {
    return (
        <div className="results-container">
            <div className="results">
                {pokemons?.map((pokemon) => (
                    <PokemonCard pokemon={pokemon} key={pokemon.name} />
                ))}
            </div>
            {pokemons && pokemons.length > 0 ? <span className="result-display"> FOUND </span>: "" }
        </div>
    );
}
