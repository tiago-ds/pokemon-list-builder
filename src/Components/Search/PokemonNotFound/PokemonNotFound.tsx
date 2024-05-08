import "./pokemon-not-found.scss";
import assets from "../../../../assets/assets.ts";

interface IPokemonNotFound {
    pokemonName: string;
}

export default function SearchBar({ pokemonName }: IPokemonNotFound) {
    return (
        <div className='not-found'>
            <h1>Missigno!</h1>
            <img src={assets.missigno} alt='missingno' />
            <h4>"{pokemonName}" was not found</h4>
        </div>
    );
}
