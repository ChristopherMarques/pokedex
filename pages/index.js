import React from 'react';
import useFetchPokemon from '../useRequest';
import Pokemon from '../components/Pokemon';
import Image from 'next/image';



export default function Home(props) {
  const { result, error } = useFetchPokemon()
  
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  return (
    <main>
      <div className="flex justify-center mt-3">Built with <p title="Love">❤</p> by <a href="https://github.com/ChristopherMarques" target="_blank" className="text-indigo-600">Christopher Corrêa</a></div>
      <div class="max-w-screen-lg bg-indigo-300 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
            Welcome to the Most Beautiful Pokedex 😜
        </h2>
        <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md bg-gray-200 hover:bg-gray-100 shadow">
                <a href="https://github.com/ChristopherMarques" target="_blank" class="text-gray-700 font-bold py-2 px-6">
                  <i className="fab fa-github"/> Source Code Here
                </a>
            </div>
        </div>
    </div>
      <div className="grid grid-cols-8 auto-cols-max">
        {result.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  ) 
}
