import useSWR, { SWRResponse } from "swr";

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: Poke;
  }[];
}

export interface Poke {
  name: string;
}

export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const PAGE_LIMIT = 100;

const fetcher = async (url: string): Promise<Pokemon> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

const pokemonsFetcher = async (url: string): Promise<PokemonList> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

export const usePokemons = (): SWRResponse<PokemonList, Error> => {
  const uri = `${API_URL}?limit=${PAGE_LIMIT}`;
  const { data, error, mutate, isValidating, isLoading } = useSWR<
    PokemonList,
    Error
  >(uri, pokemonsFetcher);

  if (error) {
    console.error("Error fetching Pokemons data:", error);
    throw new Error("Failed to fetch Pokemons data");
  }

  if (!data && !isLoading) {
    console.warn("Data is undefined");
  }

  return { data, error, mutate, isValidating, isLoading };
};

export const usePokemon = (name: string): SWRResponse<Pokemon, Error> => {
  const uri = `${API_URL}/${name}`;
  const { data, error, mutate, isValidating, isLoading } = useSWR<
    Pokemon,
    Error
  >(uri, fetcher);

  if (error) {
    console.error("Error fetching Pokemon data:", error);
    throw new Error("Failed to fetch Pokemon data");
  }

  if (!data && !isLoading) {
    console.warn("Data is undefined");
  }

  return { data, error, mutate, isValidating, isLoading };
};
