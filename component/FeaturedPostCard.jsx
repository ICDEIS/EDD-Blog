

import moment from 'moment';
import Link from 'next/link';
import React from 'react';

function FeaturedPostCard({ post }) {
   return (
      <div className='featured-post-card'>
         <div style={{ backgroundImage: `url(${post.featuredImage.url})` }}>
            <div className='fpc-title'>
               <Link href={`/post/${post.slug}`}>
                  <span className='e-link'>{post.title}</span>
               </Link>
            </div>
            <div className='author_date'>
               <span className='post-author'><img src={post.author.photo.url} alt="" /> <rt>{post.author.name}</rt></span>
               <small> <i className='bi bi-calendar-day'></i> {moment(post.createdAt).format('MMM DD, YYYY')}</small>
            </div>
         </div>
      </div>
   );
}

export default FeaturedPostCard;