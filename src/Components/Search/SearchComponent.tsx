import { useState } from "react";

import SearchBar from "./SearchBar/SearchBar";
import PokemonSearchResult from "./PokemonSearchResult/PokemonSearchResult";

const SearchComponent = () => {
    const [pokeResult, setPokeResult] = useState([]);
    
    return (
        <>
            <SearchBar setPokeResult={setPokeResult}/>
            <PokemonSearchResult pokemons={pokeResult}/>
        </>
    )
}

export default SearchComponent;