export const SearchBar = () => {
  const handleSearch = () => {
    return;
  };
  return (
    <div className="flex flex-row gap-2 items-center w-full justify-center my-10">
      <input
        className="py-2 px-2 w-[16rem] focus:outline-indigo-400 rounded-md text-black text-lg shadow-sm"
        placeholder="Insert pokemon type or name..."
      />
      <button
        onClick={() => handleSearch}
        className="py-2 px-2 bg-indigo-500 hover:bg-indigo-400 text-lg rounded-md shadow-sm"
      >
        Search Pokemon
      </button>
    </div>
  );
};
