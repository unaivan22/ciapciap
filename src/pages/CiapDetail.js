import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Web from './frame/Web'
import NavbarHome from './utils/NavbarHome'
import { MdFavoriteBorder } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';


function CiapDetail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/ciap.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.people));
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      {data.map((person) => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <img src={person.photouser} alt={person.name} />
          {person.posts.map((post) => (
            <div key={post.id} style={{ backgroundColor: post.background, color: post.fontbackground }}>
              <p>{post.date}</p>
              <p>{post.ciap}</p>
              <p>Favorites: {post.fav}</p>
              <p>{post.loved ? 'Loved' : 'Not Loved'}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CiapDetail;
