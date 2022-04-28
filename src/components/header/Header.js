import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MERN Tech Stack</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://media.istockphoto.com/photos/aerial-view-of-misty-mountains-at-sunrise-picture-id1195458582?b=1&k=20&m=1195458582&s=170667a&w=0&h=xRLz0blXsL07hGUSmxCPMu4KT_ZgleIaKr6hje8Ejh0="
        alt=""
      />
    </div>
  );
}
