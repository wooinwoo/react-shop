import { Link } from "react-router-dom";

const SideDrawer = () => {
  return (
    <div className="drawer-side">
      {/* <label for="side-menu" classNamelass="drawer-overlay"></label> */}
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        <li>
          <Link
            className="!text-gray-700 active:!text-white dark:!text-white"
            to="/fashion">
            패션
          </Link>
        </li>
        <li>
          <Link
            className="!text-gray-700 active:!text-white dark:!text-white"
            to="/accessory">
            액세서리
          </Link>
        </li>
        <li>
          <Link
            className="!text-gray-700 active:!text-white dark:!text-white"
            to="/digital">
            디지털
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
