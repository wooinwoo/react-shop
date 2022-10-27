import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { drawerState } from "../state/State";

const SideDrawer = () => {
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const categoryLink: Array<Array<string>> = [
    ["패션", "/fashion"],
    ["악세서리", "/accessory"],
    ["디지털", "/digital"],
  ];
  return (
    <>
      <div
        className={
          drawer
            ? "fixed top-0 right-[100vw] z-50 translate-x-[70vw] duration-300 md:hidden"
            : "fixed top-0 right-[100vw] z-50 translate-x-[0vw] duration-300 md:hidden"
        }>
        <ul className="menu w-[70vw] h-[100vh]  p-4 overflow-y-auto bg-white dark:bg-base-100">
          {categoryLink.map((data, idx) => (
            <li key={idx}>
              <Link
                className="!text-gray-700 active:!text-white dark:!text-white"
                to={data[1]}
                onClick={() => setDrawer(!drawer)}>
                {data[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          drawer
            ? "fixed top-0 z-40 right-0 w-[100vw] h-[100vh] bg-black opacity-50 md:hidden"
            : ""
        }
        onClick={() => setDrawer(!drawer)}></div>
    </>
  );
};

export default SideDrawer;
