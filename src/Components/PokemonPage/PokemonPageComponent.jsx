import { useState } from "react";

import SearchBar from "../SearchBar";
import PokemonSearchResult from "../PokemonSearchResult";

const PokemonPageComponent = () => {
    const [pokeResult, setPokeResult] = useState(undefined);
    
    return (
        <>
            <SearchBar setPokeResult={setPokeResult}/>
            <PokemonSearchResult pokeResult={pokeResult}/>
        </>
    )
}

export default PokemonPageComponent;