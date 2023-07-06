import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Web from './frame/Web';
import NavbarHome from './utils/NavbarHome';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/ciap.json')
      .then((response) => response.json())
      .then((jsonData) => {
        const allPosts = jsonData.people.flatMap((person) =>
          person.posts.map((post) => ({
            ...post,
            personName: person.name,
            photouser: person.photouser,
          }))
        );
        const sortedPosts = sortPostsByDate(allPosts);
        setData(sortedPosts);
      });
  }, []);

  const sortPostsByDate = (posts) => {
    return posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  };

  return (
    <Web>
      <NavbarHome />
      <section className='container'>
        <div className='xl:masonry-3-col xs:columns-1 my-12 space-y-4'>
          {data.map(post => (
            <div key={post.id} className={`rounded-xl space-y-4 p-4 break-inside rounded-xl bg-zinc-50`} style={{backgroundColor: post.background}}>
              <Link to={`/ciap/${post.id}/${post.id}`}>
                {/* <img className='rounded-xl h-52 w-full object-cover' src={ciap.thumbnail} /> */}
                <p className='text-xl font-semibold ciap' style={{color: post.fontbackground}}>
                  "{post.ciap}"
                </p>
                <div className='flex justify-between pt-6 pb-2'>
                  <div className='flex items-center gap-x-2'>
                    <img className='h-8 rounded-full aspect-square object-cover' src={post.photouser} />
                    <p className='text-sm nama' style={{color: post.fontbackground}}>{post.personName}</p>
                  </div>
                  <div className='flex gap-x-2'>
                    <div className='rounded-lg aspect-square w-6 flex flex-col justify-center items-center'>
                      <MdFavoriteBorder style={{color: post.fontbackground}} />
                      <p className='text-xs text-zinc-800' style={{color: post.fontbackground}}>{post.fav}</p>
                    </div>
                    <div className='rounded-lg aspect-square w-6 flex flex-col justify-center items-center backdrop-blur'>
                      <FiMoreHorizontal style={{color: post.fontbackground}} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Web>
  );
}

export default Home;
