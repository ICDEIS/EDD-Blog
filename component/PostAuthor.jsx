

import Image from 'next/image';
import React from 'react';

function PostAuthor({author}) {
   return (
      <div className='single-post-author'>
         <div className='spa-img'>
            <Image unoptimized src={author.photo.url} alt={author.name} width='100px' height='100px' />
         </div>
         <div className='spa-content'>
            <h3>{author.name}</h3>
            <h6>{author.bio}</h6>
         </div>
      </div>
   );
}

export default PostAuthor;