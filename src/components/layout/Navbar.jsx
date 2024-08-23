import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  return (
    <nav className="bg-gray-200 border-gray-200 mt-4 ml-4 mr-4 border rounded-full">
      <div className="flex flex-wrap items-center justify-between p-4">
        {/* <img
          src="flight.png"
          className="hidden lg:block object-contain h-14 w-24 lg:flex-[0.7]  "
          alt="Flights Logo"
        /> */}
        <p className="text-red-600 text-3xl font-bold ml-6 shadow-xl">
          TEST AIRWAYS
        </p>

        {/* <div
          className="items-center justify-between hidden w-full lg:flex lg:justify-center lg:w-auto lg:order-1 lg:flex-[5]"
          id="navbar-user"
        >
          <ul className="flex font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                // onClick={() => handleLinkClick("/homepage")}
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeLink === "/homepage"
                    ? "text-blue-800"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                aria-current={activeLink === "/homepage" ? "page" : undefined}
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                // onClick={() => handleLinkClick("/explore")}
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeLink === "/explore"
                    ? "text-blue-800"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                aria-current={activeLink === "/explore" ? "page" : undefined}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/requests"
                // onClick={() => handleLinkClick("/requests")}
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeLink === "/requests"
                    ? "text-blue-800"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                aria-current={activeLink === "/requests" ? "page" : undefined}
              >
                Requests
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy"
                // onClick={() => handleLinkClick("/privacypolicy")}
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  activeLink === "/privacypolicy"
                    ? "text-blue-800"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`}
                aria-current={
                  activeLink === "/privacypolicy" ? "page" : undefined
                }
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="flex items-center w-full justify-end md:order-2 space-x-3 md:space-x-5 gap-1 mr-8 lg:flex-1">
          <div className="relative">
            {/* <IoMdNotificationsOutline
              className="w-8 h-8 cursor-pointer"
              onClick={toggleNotification}
            /> */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-custom-blue rounded-full"></span>
          </div>

          <div className="relative">
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0"
              id="user-menu-button"
              //   aria-expanded={dropdownOpen}
              //   onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>

              <img
                className="w-12 h-12 rounded-full"
                src={"image.avif"}
                // src={profilePicture}
                alt="user photo"
              />
            </button>

            {/* {dropdownOpen && (
              <div
                // ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-white dark:divide-gray-600 z-20"
                id="user-dropdown"
              >
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      //   onClick={() => {
                      //     setDropdownOpen(false);
                      //   }}
                      to="/setting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-custom-black dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      //   onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-custom-black dark:hover:text-white w-full text-left"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )} */}
          </div>
        </div>
      </div>
      {/* 
      {showNotification && (
        <div
          ref={notificationRef}
          className="absolute right-10 top-24 z-50 bg-white h-[85%] overflow-auto hide-scrollbar"
        >
          <Notification />
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
