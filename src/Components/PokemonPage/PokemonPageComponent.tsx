import { useState } from "react";

import SearchBar from "../SearchBar";
import PokemonSearchResult from "../PokemonSearchResult";

const PokemonPageComponent = () => {
    const [pokeResult, setPokeResult] = useState([]);
    
    return (
        <>
            <SearchBar setPokeResult={setPokeResult}/>
            <PokemonSearchResult pokemons={pokeResult}/>
        </>
    )
}

export default PokemonPageComponent;