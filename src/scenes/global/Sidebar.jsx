import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { links } from "../../data/dummy"
import { useStateContext } from "../../context/Context"

const Sidebar = () => {
  const activeMenu = useStateContext

  return (
    <div className=" bg-white pl-5  ">
      {activeMenu && (
        <div>
          {links.map((item) => (
            <div key={item.title}>
              <p className="m-3 mt-6 uppercase text-gray-500">{item.title}</p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  className={({ isActive }) =>
                    isActive
                      ? "flex m-4 items-center text-white pr-0 py-1.5 pl-4 bg-bg-sb hover:rounded-xl rounded-xl"
                      : "flex m-4 items-center text-gray-800 pr-0 py-1.5 pl-4 hover:bg-gray-200 hover:rounded-xl"
                  }
                >
                  <div className="flex items-center">
                    {link.icon}
                    <span className=" capitalize ml-3">{link.name}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sidebar
