import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const bottomNavItem = [
  {
    id: 1,
    title: "Home",
    is_selected: true,
    iconFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM7 14.9997V16.9997H17V14.9997H7Z" fill="rgba(167,170,196,1)"></path></svg>`,
    iconUnFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM7 14.9997V16.9997H17V14.9997H7Z" fill="rgba(63,65,81,1)"></path></svg>`,
    slug: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    is_selected: false,
    iconFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 21.5 6.5V17.5L13 22.4211V11.4234L3.49793 5.92225 12 1ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555Z" fill="rgba(167,170,196,1)"></path></svg>`,
    iconUnFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 21.5 6.5V17.5L13 22.4211V11.4234L3.49793 5.92225 12 1ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555Z" fill="rgba(63,65,81,1)"></path></svg>`,
    slug: "/dashboard",
  },
  {
    id: 3,
    title: "Crypto",
    is_selected: false,
    iconFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.0049 7H2.00488V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V7ZM22.0049 9V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V9H22.0049ZM11.0049 14V11.5L6.50488 16H17.0049V14H11.0049Z" fill="rgba(167,170,196,1)"></path></svg>`,
    iconUnFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.0049 7H2.00488V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V7ZM22.0049 9V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V9H22.0049ZM11.0049 14V11.5L6.50488 16H17.0049V14H11.0049Z" fill="rgba(63,65,81,1)"></path></svg>`,
    slug: "/crypto",
  },
  {
    id: 4,
    title: "News",
    is_selected: false,
    iconFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 1V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 9.72064 4.75393 6.85093 7.37488 5.27777L14 1.453V4.223L21 1ZM12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8Z" fill="rgba(167,170,196,1)"></path></svg>`,
    iconUnFill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 1V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 9.72064 4.75393 6.85093 7.37488 5.27777L14 1.453V4.223L21 1ZM12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8Z" fill="rgba(63,65,81,1)"></path></svg>`,
    slug: "/news",
  },
];

const BottomNavbar = () => {
  const [navItems, setNavItems] = useState(bottomNavItem);
  let location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    const updatedNavItems = navItems.map((item) => {
      if (path === item.slug) item.is_selected = true;
      else item.is_selected = false;
      return item;
    });
    setNavItems(updatedNavItems);
  }, [location]);

  const toggleNavItem = (id) => {
    const updateNavItems = navItems.map((nav) => {
      return {
        ...nav,
        is_selected: nav.id === id,
      };
    });
    setNavItems(updateNavItems);
  };

  return (
    <div className="z-40 flex items-center justify-around fixed bottom-0 left-0 right-0 h-[55px] lg:hidden shadow-sm bottom-nav-container">
      {navItems.map((item) => (
        <Link to={item.slug} key={item.id}>
          <div
            onClick={() => toggleNavItem(item.id)}
            className="flex flex-col items-center justify-center"
          >
            {" "}
            {item.is_selected ? (
              <div
                className="w-5 h-5"
                dangerouslySetInnerHTML={{ __html: item.iconFill }}
              ></div>
            ) : (
              <div
                className="w-5 h-5"
                dangerouslySetInnerHTML={{ __html: item.iconUnFill }}
              ></div>
            )}
            <p
              className={
                item.is_selected ? "btm-nav-text-selected" : "btm-nav-text"
              }
            >
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavbar;
