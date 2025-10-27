const Header = () => {
  return (
    <header className="mb-3 flex justify-between items-center ">
      <h2 className="text-3xl tracking-[.5em] text-gray-50 text-left">TODO</h2>
      <img
        alt="theme-icon"
        src="../images/icon-moon.svg"
        className="cursor-pointer"
      />
    </header>
  );
};

export default Header;
