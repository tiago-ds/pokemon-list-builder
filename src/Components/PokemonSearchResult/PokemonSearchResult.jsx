import './pokemon-search-result.scss';

export default function PokemonSearchResult({pokeResult}) {
    return (
        <div className="pkm-container">
            <img src={pokeResult?.spriteUrl} alt={pokeResult?.name} />
            <p>{pokeResult?.name.toUpperCase()}</p>
            <p>{pokeResult?.description}</p>
            <p>{pokeResult?.types[0]} {pokeResult?.types[1] ? "|" : ""} {pokeResult?.types[1]}</p>
        </div>
    )
}