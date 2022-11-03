import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { itemState, productListState } from "../state/State";

interface data {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const productList = useRecoilValue(productListState);
  const setDetailItemData = useSetRecoilState(itemState);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue !== "") {
      let dataList: any = productList.filter((item) =>
        item.title.includes(searchValue)
      );
      setFilterData(dataList);
    }
  }, [searchValue]);

  const linkto = (id: number) => {
    let data: Array<data> = productList.filter((item) => item.id === id);
    setDetailItemData(data[0]);
    navigate("/product/" + id);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"
        onClick={() => setSearchToggle(!searchToggle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-gray-700 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        type="text"
        placeholder="검색"
        className={
          searchToggle
            ? "fixed left-0 top-4 -z-10 opacity-100 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput translate-y-full"
            : "fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
        }
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600">
        {filterData.map((item: data) => (
          <li>
            <button
              className="text-left js-searchedItem"
              onClick={() => linkto(item.id)}>
              <span className="text-gray-600 dark:text-white line-clamp-2">
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

// fixed left-0 top-4 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput -z-10
// fixed left-0 top-4 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput translate-y-full !opacity-100
