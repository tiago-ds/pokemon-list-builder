export type Pokemon = {
    name: string,
    spriteUrl: string,
    types: Array<PokemonType>,
    description: string
}

export type PokemonType = {
    name: string,
    url: string
}