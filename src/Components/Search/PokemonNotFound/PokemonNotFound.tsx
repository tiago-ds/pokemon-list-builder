import "./pokemon-not-found.scss";


interface IPokemonNotFound {
    pokemonName: string;
}

export default function SearchBar( {pokemonName}: IPokemonNotFound ) {    
    return (
        <div className="not-found">
            <h1>Missigno!</h1>
            <img src="/src/Images/Missingno.png" alt="missingno" />
            <h4>"{pokemonName}" was not found</h4>
        </div>
    );
}