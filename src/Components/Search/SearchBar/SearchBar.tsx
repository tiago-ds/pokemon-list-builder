import './search-bar.scss';
//import Button from '@mui/material/Button';

import CircularProgress from '@mui/material/CircularProgress';



import { useState } from 'react';
import { getPokemons } from '../../../Services/PokeApiService';
import PokemonNotFound from '../PokemonNotFound/PokemonNotFound';

interface ISearchBar {
    setPokeResult: Function;
}

export default function SearchBar( {setPokeResult}: ISearchBar ) {    
    const [search, setSearch] = useState('');
    const [pokemonName, setPokemonName] = useState('');
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const onTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt?.target?.value);
    const onFocusOut = () => setSearch("");

    const searchPokemon = async () => {
        setLoading(true);
        setPokemonName(search);
        setNotFound(false);

        try {
            const pokemon = await getPokemons(search);
            setPokeResult(pokemon);
        } catch (e) {
            setLoading(false);
            setNotFound(true);
            setPokeResult([]);
            return;
        }
        
        setLoading(false);
    }

    return(
        <div className='container'>
            <div className="poke-search">
                <input type="text" 
                    className="input"
                    name="search-input" 
                    value={search} 
                    placeholder='Search Pokémon...'
                    onChange={()=>onTextChange(event)} 
                    onBlur={()=>onFocusOut()}
                    onKeyDown={ () => { if(event.key === 'Enter') searchPokemon() } }
                />
                <img src="/src/Images/pokeball.svg" alt="pokeball icon" className="icon"/>
            </div>
            { loading ? <CircularProgress className="loading-animation"/> : "" }
            { notFound ? <PokemonNotFound pokemonName={pokemonName}/> : "" }
        </div>
    );
}