import { PokemonResult, usePokemon } from "@/hooks";
import Image from "next/image";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonResult }) => {
  const { name } = pokemon;
  const { data } = usePokemon(name);

  return (
    <div className="flex items-center my-5 w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <span className="badge mb-3 ml-2 bg-indigo-200 rounded-r-xl rounded-l-xl px-5 opacity- py-1 text-center object-right-top text-indigo font-bold text-sm mr-1">
            <a className="text-indigo-600">#{data?.id}</a>
          </span>
          <div className="photo-wrapper p-2">
            <Image
              width={32}
              height={32}
              quality={100}
              className="w-32 h-32 rounded-full mx-auto"
              src={data?.sprites.front_default ?? ""}
              alt={name}
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {name}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>{data?.types.map(({ type }) => type.name).join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
