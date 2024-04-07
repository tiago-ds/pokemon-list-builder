import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Pokemon } from "../../Types/Pokemon";
import "./pokemon-card.scss";
import { useState } from "react";

interface IPokemonCardProps {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: IPokemonCardProps) {
    const [isFavorite, setIsFavorite] = useState(
        sessionStorage.getItem(pokemon.name) || false
    );

    function toggleFavorite(): void {
        if (isFavorite) {
            sessionStorage.removeItem(pokemon.name);
            setIsFavorite(false);
            return;
        }

        if (sessionStorage.length === 6) {
            alert("You can only have 6 favorite pokemons");
            return;
        }

        sessionStorage.setItem(pokemon.name, JSON.stringify(pokemon));
        setIsFavorite(true);
    }

    function capitalize(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div className='pokemon-card'>
            <div>
                <img src={pokemon.spriteUrl} alt={pokemon.name} />
            </div>
            <div>
                <div className='inline'>
                    <p className='pokemon-name'>{capitalize(pokemon.name)}</p>
                    <div className='types'>
                        <p>{capitalize(pokemon.types[0])}</p>
                        {pokemon.types[1] ? (
                            <p>• {capitalize(pokemon.types[1])}</p>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className='inline'>
                    <p className='description'>{pokemon.description}</p>
                    <span onClick={() => toggleFavorite()}>
                        {isFavorite ? (
                            <FavoriteIcon className='icon' />
                        ) : (
                            <FavoriteBorderIcon className='icon' />
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}
