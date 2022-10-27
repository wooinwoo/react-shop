const DrawerToggle = () => {
  return (
    <label
      for="side-menu"
      className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
  );
};

export default DrawerToggle;
