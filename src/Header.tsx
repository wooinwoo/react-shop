import DarkModeToggleButton from "./components/DarkModeToggleButton";
import SearchBar from "./components/SearchBar";

const categoryLink: Array<Array<string>> = [
  ["패션", "/fation"],
  ["악세서리", "/accessory"],
  ["디지털", "/digital"],
];
const Header = () => {
  return (
    <>
      <header className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
        <div className="flex w-full xl:container xl:m-auto">
          <h1 className="shrink-0 flex md:flex flex-1 mx-1 sm:mx-2">
            <a
              href="/"
              className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">
              React Shop
            </a>
            <div className="flex-none md:flex md:flex-1 ml-2">
              {categoryLink.map((data, idx) => (
                <a
                  key={idx}
                  href={data[1]}
                  className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
                  {data[0]}
                </a>
              ))}
            </div>
          </h1>
          <DarkModeToggleButton />
          <SearchBar />
        </div>
      </header>
    </>
  );
};

export default Header;
