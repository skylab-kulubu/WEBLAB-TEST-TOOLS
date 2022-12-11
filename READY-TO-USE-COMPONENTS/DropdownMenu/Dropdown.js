import { useState } from "react";
import { Link } from "react-router-dom";

import * as FiIcons from "react-icons/fi";

function Dropdown(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const openedMenuClass =
    "bg-white shadow-xl rounded-md transition-all duration-200 border-[1.4px] border-gray-200 w-64 absolute top-12";
  const closedMenuClass =
    "bg-white shadow-xl opacity-0 pointer-events-none transition-all -translate-y-10 duration-200 rounded-md border-[1.4px] border-gray-200 w-64 absolute top-12";

  return (
    <div className="relative flex select-none w-[7.6rem] justify-end">
      <div
        id="options"
        onClick={() => setOpenMenu(!openMenu)}
        className="flex justify-between cursor-pointer items-center hover:bg-gray-50 bg-white rounded-md text-gray-600 w-[7.6rem] px-4 py-[0.4rem] border-[1.4px] border-gray-300"
      >
        Options
        {openMenu ? (
          <FiIcons.FiChevronDown className="text-xl mt-[0.2rem]" />
        ) : (
          <FiIcons.FiChevronRight className="text-xl" />
        )}
      </div>
      <div className={openMenu ? openedMenuClass : closedMenuClass}>
        {props.list.map((item, index) => {
          return (
            <>
              <Link
                onClick={item.onClick ? item.onClick : null}
                to={item.path ? item.path : null}
                key={index}
                className="w-full h-12 flex cursor-pointer rounded-t-md hover:bg-gray-100 text-gray-500 items-center"
              >
                <div className="text-gray-400 ml-4 mr-3 text-xl">
                  {item.icon}
                </div>
                {item.title}
              </Link>
              {index % 2 == 0 ? null : item.length - 1 == index ? null : (
                <hr className="border-gray-100" />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
