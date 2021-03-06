import React from 'react'
import "./sidebar.css"
import selfie from "./profile.jpeg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="div-sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sideImg"
        src={selfie}
        alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam
          explicabo nostrum quisquam quod rem quos consequuntur eius quas
          recusandae, eaque quo autem iste, tenetur ullam exercitationem
          cupiditate. Aperiam, earum!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
