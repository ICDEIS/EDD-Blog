

import moment from 'moment';
import Link from 'next/link';
import React from 'react';

function PostCard({ post }) {
   return (
      <div className='post-card text-center'>
         <div className='pc-title'>
            <Link href={`/post/${post.slug}`}>
               <h2 className='e-link'>{post.title}</h2>
            </Link>
            <div className='pc-img'>
               <img src={post.featuredImage.url} alt="" />
            </div>
            <div className='author_date p-3'>
               <span className='post-author'><img src={post.author.photo.url} alt="" /> <rt>{post.author.name}</rt></span>
               <span> <i className='bi bi-calendar-day'></i> {moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
         </div>
         <p className='pc-text'>{post.excerpt}</p>
         <div className='pc-link'>
            <Link href={`/post/${post.slug}`} className='e-link'><span className='e-btn'>Read more</span></Link>
         </div>
      </div>
   );
}

export default PostCard;