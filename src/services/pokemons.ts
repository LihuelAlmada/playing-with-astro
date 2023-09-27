import { type APIPokemonResponse} from '../types/APIPokemonResponse'
import { type pokemonResponse} from '../types/pokemonResponse'

export const getGlobalPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = (await res.json()) as APIPokemonResponse

  return data
}

export const getPokemonByUrl = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = (await res.json()) as pokemonResponse
  return data
}
export const getPokemonById = async (id: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  
  
  const data = (await res.json()) as pokemonResponse
  console.log(data);
  return data
}

