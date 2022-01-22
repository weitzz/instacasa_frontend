import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="bg-[#fcc700] relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
          <div className="w-18">
            <p>Teste Instacasa</p>
          </div>

          <div
            onClick={onClick}
            className={`
    md:hidden uppercase cursor-pointer font-bold text-[#212121]
  `}
          >
            Menu
          </div>

          <nav
            className={`
    ${!active && "hidden"}
    absolute flex flex-col bg-[#fcc700]  top-full w-full left-0 z-20 p-2
    md:static md:w-auto md:flex
  `}
          >
            <ul className="md:flex-row md:flex">
              <li className="list-none md:mr-2">
                <Link
                  to="/"
                  className="flex w-full text-[#212121]  hover:text-red-600 cursor-pointer
          pt-2.5 px-2.5
        "
                >
                  Home
                </Link>
              </li>

              <li className="list-none md:mr-2">
                <Link
                  to="/users"
                  className="flex w-full text-[#212121]  hover:text-red-600 cursor-pointer
          pt-2.5 px-2.5
        "
                >
                  Usuários
                </Link>
              </li>

              <li className="list-none md:mr-2">
                <Link
                  to="https://blog.instacasa.com.br" target="_blank"
                  className="flex w-full text-[#212121]  hover:text-red-600 cursor-pointer
          pt-2.5 px-2.5
        "
                >
                  Blog
                </Link>
              </li>
              <li className="list-none md:mr-2">
              <Link
                  to="https://instacasa.com.br" target="_blank"
                  className="flex w-full text-[#212121]  hover:text-red-600 cursor-pointer
          pt-2.5 px-2.5
        "
                >
                  Sair
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
