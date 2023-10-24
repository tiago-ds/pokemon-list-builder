import './search-bar.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



import { useState } from 'react';
import { getPokemonProps } from '../../Services/PokeApiService';


export default function SearchBar( {setPokeResult} ) {    
    const [search, setSearch] = useState('');

    const onTextChange = (evt) => setSearch(evt?.target?.value);

    const searchPokemon = async () => {
        const pokemon = await getPokemonProps(search);
        setPokeResult(pokemon);
    }

    return(
        <div className='container'>
            <TextField id="filled-basic" label="Search Pokemon" variant="filled" onChange={()=>onTextChange(event)} value={search}/>
            <Button variant="contained"  onClick={() => searchPokemon()}>Search</Button>
        </ div>
    );
}