

import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getRecentPosts, getSimilarPosts } from '../service/mainQuery';

function PostWidget({ slug, categories }) {
   const [relatedPosts, setRelatedPosts] = useState([])

   useEffect(() => {
      if (slug) {
         getSimilarPosts(categories, slug)
            .then(result => setRelatedPosts(result))
      } else {
         getRecentPosts()
            .then(result => setRelatedPosts(result))
      }
   }, [slug])

   return (
      <div className='post-widget' >
         <h5 className='pw-title'>
            {slug ? 'Related Posts' : 'Recent Posts'}
         </h5>
         {relatedPosts.map(post => (
            <div className='pw-content' key={post.slug}>
               <div className='pw-img'>
                  <img src={post.featuredImage.url} alt={post.slug} />
               </div>
               <div className='pw-title_date'>
                  <Link href={`/post/${post.slug}`}>
                     <h6 className='e-link'>{post.title}</h6>
                  </Link> <br />
                  <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
               </div>
            </div>
         ))}
      </div>
   );
}

export default PostWidget;