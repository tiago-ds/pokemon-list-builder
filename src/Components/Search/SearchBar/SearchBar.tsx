import './search-bar.scss';
//import Button from '@mui/material/Button';

import CircularProgress from '@mui/material/CircularProgress';



import { useState } from 'react';
import { getPokemons } from '../../../Services/PokeApiService';

interface ISearchBar {
    setPokeResult: Function;
}

export default function SearchBar( {setPokeResult}: ISearchBar ) {    
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const onTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt?.target?.value);
    const onFocusOut = () => setSearch("");

    const searchPokemon = async () => {
        setLoading(true);
        const pokemon = await getPokemons(search);
        setPokeResult(pokemon);
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
            {/*"<Button variant='contained'  onClick={() => searchPokemon()}>Search</Button>"*/}
        </div>
    );
}