import React, { useEffect, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';


function PostDetails({ match }) {
    const { postId } = match.params;
    const [post, setPost] = useState(null);
    const [person, setPerson] = useState(null);
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/unaivan22/openJson/main/ciap.json')
        .then((response) => response.json())
        .then((jsonData) => {
          const allPosts = jsonData.people.flatMap((person) => person.posts);
          const foundPost = allPosts.find((post) => post.id == postId);
          setPost(foundPost);
  
          const foundPerson = jsonData.people.find((person) =>
            person.posts.some((post) => post.id == postId)
          );
          setPerson(foundPerson);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }, [postId]);
  
    if (!post || !person) {
      return <div>Loading post...</div>;
    }

  return (
    // <Web>
    //   {/* <h2>{post.ciap}</h2>
    //   <p>Date: {post.date}</p>
    //   <p>Favorites: {post.fav}</p>
    //   <p>{post.loved ? 'Loved' : 'Not Loved'}</p>
    // </Web> */}

    <div className='container my-8'>
        <Link to='/' className="w-14 mb-12 h-auto rounded-full hover:cursor-pointer  bg-zinc-200 hover:bg-zinc-800 text-white text-center inline-flex items-center px-3 py-3  mr-2 mb-2">
            <IoMdArrowRoundBack size={32} />
        </Link>
        <div key={post.id} className='flex mt-8 xl:p-12 xs:p-6 aspect-video h-auto w-full items-center justify-center rounded-2xl space-y-4' style={{backgroundColor: post.background}}>
            <p className='xl:text-6xl xs:text-2xl font-semibold leading-snug' style={{color: post.fontbackground}}>
            "{post.ciap}"
            </p>
        </div>

        <div className='my-8 flex justify-between items-center'>
        <Link className='flex items-center gap-x-2'>
            <img className='aspect-square h-12 rounded-full object-cover' src={person.photouser} />
            <p className='text-md font-bold'>{person.name}</p>
        </Link>
        <div>
        <p className='text-sm text-zinc-400'>{post.date}</p>
        </div>
        </div>


    </div>
  );
}

export default PostDetails;
