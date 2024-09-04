import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_dark.svg";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function Navbar() {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Jobs", href: "/jobs", current: false },
    { name: "Add Job", href: "/add-job", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-indigo-700">
      {({ open }) => (
        <>
          <div className="container mx-auto  sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* شعار الشركة */}
              <Link to="/">
                <div className="flex items-center">
                  <img
                    alt="Your Company"
                    src={logo}
                    className="h-8 w-auto mx-3"
                  />
                  <span className="text-white font-bold text-2xl">
                    React Jobs
                  </span>
                </div>
              </Link>

              {/* قائمة الروابط في سطح المكتب */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-black text-white"
                          : "text-white hover:bg-gray-700 hover:text-white ease-in-out duration-300",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* زر القائمة في الجوال */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* قائمة الجوال */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-black text-white"
                        : "text-white hover:bg-gray-700 hover:text-white ease-in-out duration-300",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
