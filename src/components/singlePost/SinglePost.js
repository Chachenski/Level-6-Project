import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Xi-Ping</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          accusantium voluptate. Voluptatibus veritatis nam accusantium suscipit
          voluptates, ut debitis fuga non voluptas accusamus modi in, illo
          quaerat quas inventore sit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid non laborum dolore voluptas doloremque quam,
          dolorem qui eos pariatur illo a soluta beatae, recusandae, repellendus
          ipsa voluptatum aliquam quibusdam! Deserunt. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Debitis iste, animi cum nam fuga
          harum, ea quos cumque quod, provident id dolores esse. Magnam, dolore
          libero ad facere veniam alias. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium delectus repudiandae voluptas adipisci.
          Nulla, quaerat reiciendis! Est, laboriosam, harum fugit distinctio
          quam explicabo molestias tempore, illo saepe porro natus sint? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Cumque placeat
          vitae accusantium fuga iusto nam perferendis, voluptate quia ipsam
          ipsa, eaque esse similique iure deserunt! Debitis facere quas quod
          minima.
        </p>
      </div>
    </div>
  );
}
