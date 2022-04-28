import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1650993059291-70a1edae6913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea
        debitis voluptatum alias qui hic, dolorem dolorum. Necessitatibus
        expedita unde officia alias aperiam, illo voluptatem non placeat ipsam
        sed perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Quod, necessitatibus. Voluptas laboriosam culpa id, at similique
        explicabo alias veniam enim, deleniti autem iusto possimus aperiam
        labore harum, quibusdam ad sunt. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Nemo recusandae assumenda non esse praesentium
        inventore omnis, mollitia blanditiis nisi molestiae nobis exercitationem
        quis odit voluptate dolore, atque aspernatur libero reprehenderit.
      </p>
    </div>
  );
}
