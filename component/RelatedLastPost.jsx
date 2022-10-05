

import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getRelatedLastPost } from '../service/mainQuery';

function RelatedLastPost({ slug, categories }) {
   const [lastPost, setLastPost] = useState([])
   console.log(lastPost);

   useEffect(() => {
      getRelatedLastPost(slug, categories)
         .then(result => setLastPost(result))
   }, [slug])

   return (
      <div className='related-last-post'>
         {lastPost.map(post => (
            <div className='rlp-item' key={post.slug}>
               <div className='rlp-img'>
                  <img src={post.featuredImage.url} alt={post.slug} />
               </div>
               <div className='rlp-content'>
                  <h4 className='rlp-title'>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <Link href={`/post/${post.slug}`}>
                     <span className='e-btn'>Read more</span>
                  </Link>
               </div>
            </div>
         ))}
         <h3>

         </h3>
      </div>
   );
}

export default RelatedLastPost;