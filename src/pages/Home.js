import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Web from './frame/Web'
import NavbarHome from './utils/NavbarHome'
import { MdFavoriteBorder } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';


const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/ciap.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <Web>
      <NavbarHome />
      <section className='container'>
        <div className='xl:columns-3 xs:columns-1 my-12 space-y-4'>
          {items.map(item => (
            <div key={item.id} className='flex p-4 rounded-xl space-y-4' style={{backgroundColor: item.background}}>
              <Link to={`/ciap/${item.id}`}>
                {/* <img className='rounded-xl h-52 w-full object-cover' src={ciap.thumbnail} /> */}
                <p className='text-md font-semibold ciap' style={{color: item.fontbackground}}>
                  "{item.ciap}"
                </p>
                <div className='flex justify-between pt-6 pb-2'>
                  <div className='flex items-center gap-x-2'>
                    <img className='h-8 rounded-full aspect-square object-cover' src={item.photouser} />
                    <p className='text-sm nama' style={{color: item.fontbackground}}>{item.user}</p>
                  </div>
                  <div className='flex gap-x-2'>
                    <div className='rounded-lg aspect-square w-6 flex flex-col justify-center items-center'>
                      <MdFavoriteBorder style={{color: item.fontbackground}} />
                      <p className='text-xs text-zinc-800' style={{color: item.fontbackground}}>{item.fav}</p>
                    </div>
                    <div className='rounded-lg aspect-square w-6 flex flex-col justify-center items-center backdrop-blur'>
                      <FiMoreHorizontal style={{color: item.fontbackground}} />
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
};

export default Home;