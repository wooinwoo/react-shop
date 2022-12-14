import { Link } from "react-router-dom";
import DrawerToggle from "./components/DrawerToggleButton";
import DarkModeToggleButton from "./components/DarkModeToggleButton";
import SearchBar from "./components/SearchBar";
import CartButton from "./components/CartButton";

const categoryLink: Array<Array<string>> = [
  ["패션", "/fashion"],
  ["악세서리", "/accessory"],
  ["디지털", "/digital"],
];
const Header = () => {
  return (
    <>
      <header className="fixed z-40 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
        <div className="flex w-full xl:container xl:m-auto">
          <h1 className="shrink-0 items-center flex md:flex flex-1 mx-1 sm:mx-2">
            <DrawerToggle />
            <Link
              to="/"
              className="ml-2 text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">
              React Shop
            </Link>
            <div className="hidden md:flex md:flex-1 ml-2">
              {categoryLink.map((data, idx) => (
                <Link
                  key={idx}
                  to={data[1]}
                  className=" opacity-0 md:opacity-100 btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
                  {data[0]}
                </Link>
              ))}
            </div>
          </h1>
          <div className="flex items-center px-2">
            <DarkModeToggleButton />
            <SearchBar />
            <CartButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
