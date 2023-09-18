import { type APIPokemonResponse} from '../types/APIPokemonResponse'

export const getGlobalPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = (await res.json()) as APIPokemonResponse
  return data
}

