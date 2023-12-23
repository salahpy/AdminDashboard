import React from "react"
import { Link, NavLink } from "react-router-dom"
import { SiShopware } from "react-icons/si"
import { MdOutlineCancel } from "react-icons/md"
import { links } from "../../data/dummy"

const sidebar = () => {
  return (
    <div>
      <div>
        <SiShopware />
        <span>{links[0].title}</span>
      </div>
    </div>
  )
}

export default sidebar
