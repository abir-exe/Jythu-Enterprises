import { IoArrowForwardOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const navItems = (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Home</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <details>
            <summary>Pages</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Service</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>News & Event</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
    </>
  );

  const navItemsMenu = (
    <>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <details>
            <summary>Home</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <details>
            <summary>Pages</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Service</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>News & Event</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-[#d2f3df]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {navItemsMenu}
        </div>
        <img
          className="w-1/4"
          src="https://i.ibb.co/8PF0tXx/PNG-1.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">{navItems}</div>
      <div className="navbar-end gap-3">
        <MdOutlineShoppingBag />
        <IoMdSearch />
        <a className="btn rounded-full bg-[#38EF7D]">
          Get Quote <IoArrowForwardOutline />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
