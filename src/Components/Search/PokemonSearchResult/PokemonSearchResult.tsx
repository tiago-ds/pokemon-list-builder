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
        <div>
            {pokemons?.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.name} />
            ))}
        </div>
    );
}
