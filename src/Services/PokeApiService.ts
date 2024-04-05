import axios from 'axios';
import { Pokemon } from '../Types/Pokemon';

const baseUrl: string = "https://pokeapi.co/api/v2/";

async function getPokemon(pokemonName: string)  {
    return axios.get(`${baseUrl}pokemon/${pokemonName.toLowerCase().trim()}`);
}

async function getPokemonDescription(pokemonName: string) {
    return await axios.get(`${baseUrl}pokemon-species/${pokemonName.toLowerCase().trim()}`);
}

export async function getPokemonProps(pokemonName: string): Promise<Pokemon> {
    const pokemonData = (await getPokemon(pokemonName)).data;
    const pokemonDescription = (await getPokemonDescription(pokemonName)).data;

    const poke: Pokemon = {
        name: pokemonData.name,
        spriteUrl: pokemonData.sprites.front_default,
        description: pokemonDescription.flavor_text_entries[0].flavor_text,
        types: [pokemonData.types[0].type.name, pokemonData.types[1]?.type?.name]
    }
    return poke;
}

export async function getPokemons(pokemonName: string): Promise<Pokemon[]> {
    const pokemonData = (await getPokemon(pokemonName)).data;
    const pokemonDescription = (await getPokemonDescription(pokemonName)).data;

    const poke: Pokemon = {
        name: pokemonData.name,
        spriteUrl: pokemonData.sprites.front_default,
        description: parseDescription(pokemonDescription.flavor_text_entries[0].flavor_text, pokemonData.name),
        types: [pokemonData.types[0].type.name, pokemonData.types[1]?.type?.name]
    }
    return [poke];
}

function parseDescription(description: string, pokemonName: string): string {
    return description.replace("POKéMON", "pokemon").replace("", " ")
        .replace(pokemonName.toUpperCase(), pokemonName.toLowerCase()
        .replace("TRAINER", "trainer")
        .replace(pokemonName.charAt(0), pokemonName.charAt(0).toUpperCase()));
}