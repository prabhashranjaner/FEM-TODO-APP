import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleTheme } from "../slices/themeSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.Theme.isDark);
  const imgSrc = isDark ? "../images/icon-sun.svg" : "../images/icon-moon.svg";

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="mb-3 flex justify-between items-center ">
      <h2 className="text-3xl tracking-[.5em] text-gray-50 text-left font-bold">
        TODO
      </h2>
      <img
        alt="theme-icon"
        src={imgSrc}
        className="cursor-pointer"
        onClick={() => dispatch(toggleTheme())}
      />
    </header>
  );
};

export default Header;
