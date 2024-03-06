import { HeroSection } from "@/components/HeroSection";
import { PokemonCard } from "@/components/PokemonCard";
import { SearchBar } from "@/components/SearchBar";
import { usePokemons } from "@/hooks";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { data, error } = usePokemons();

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <main>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mt-3 gap-1 text-indigo-600">
          <p>Built with ❤ by</p>
          <a href="https://github.com/ChristopherMarques" target="_blank">
            Christopher Corrêa
          </a>
        </div>
        <HeroSection />
        <SearchBar />
        <div className="grid grid-cols-3 xl:grid-cols-6 md:grid-cols-4 auto-cols-max">
          {data.results.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
