export const HeroSection = () => {
  return (
    <div className="max-w-screen-lg bg-indigo-300 shadow-2xl rounded-lg mx-auto text-center py-12 px-12 mt-4">
      <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
        Welcome to the Most Beautiful Pokedex 😜
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md bg-gray-200 hover:bg-gray-100 shadow">
          <a
            href="https://github.com/ChristopherMarques/pokedex"
            target="_blank"
            className="text-gray-700 font-bold py-2 px-6"
          >
            Source Code Here
          </a>
        </div>
      </div>
    </div>
  );
};
