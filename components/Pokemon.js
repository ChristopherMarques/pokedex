import React from 'react';
import useFetchPokemon from '../useRequest';
import Heart from '../components/Heart';

export default function Pokemon({ pokemon }) {
  const { name } = pokemon
  const { result, error } = useFetchPokemon(name)

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  return (
    <div className="flex items-center my-5 w-full justify-center">
    
    <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
        <span class="badge mb-3 ml-2 bg-indigo-200 rounded-r-xl rounded-l-xl px-5 opacity- py-1 text-center object-right-top text-indigo font-bold text-sm mr-1"><a className="text-indigo-600">#{result.id}</a></span>
            <div className="photo-wrapper p-2">
               <img className="w-32 h-32 rounded-full mx-auto" src={result.sprites.front_default} alt={name}/>
            </div>
            <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>{result.types.map((poke) => poke.type.name).join(', ')}</p>
                </div>
            </div>
        </div>
    </div>
    
    {/* </div>
    <div className='Card'>
      <span className='Card--id'>#{result.id}</span>
      <img
        className='Card--image'
        src={result.sprites.front_default}
        alt={name}
      />
      <h1 className='Card--name'>{name}</h1>
      <span className='Card--details'>
        {result.types.map((poke) => poke.type.name).join(', ')}
      </span> */}
    </div>
  )
}