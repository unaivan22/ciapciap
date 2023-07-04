import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';

const CiapDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/ciap.json');
        const data = await response.json();
        const selectedItem = data.find((item) => item.id === parseInt(id));
        setItem(selectedItem);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) {
    return <div className='grid h-screen place-items-center'>Loading...</div>;
  }

  return (
    <div className='container my-8'>
      <Link to='/' className="w-14 mb-12 h-auto rounded-full hover:cursor-pointer  bg-zinc-200 hover:bg-zinc-800 text-white text-center inline-flex items-center px-3 py-3  mr-2 mb-2">
          <IoMdArrowRoundBack size={32} />
      </Link>
      <div key={item.id} className='flex xl:p-12 xs:p-6 aspect-video h-auto w-full items-center justify-center rounded-2xl space-y-4' style={{backgroundColor: item.background}}>
          <p className='xl:text-6xl xs:text-2xl font-semibold leading-tight' style={{color: item.fontbackground}}>
            "{item.ciap}"
          </p>
      </div>

      <div className='my-8 flex justify-between items-center'>
        <Link className='flex items-center gap-x-2'>
          <img className='aspect-square h-12 rounded-full object-cover' src={item.photouser} />
          <p className='text-md font-bold'>{item.user}</p>
        </Link>
        <div>
         <p className='text-sm text-zinc-400'>{item.date}</p>
        </div>
      </div>


    </div>
  );
};

export default CiapDetail;
