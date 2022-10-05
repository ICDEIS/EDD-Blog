

import moment from 'moment';
import React from 'react';

function PostDetails({ post }) {
   const getTextContent = (index, child, obj, type) => {
      let dynamicText = child
      if (obj) {
         if (obj.bold) {
            dynamicText = (<b key={index}>{child}</b>)
         } if (obj.italic) {
            dynamicText = (<i key={index}>{child}</i>)
         } if (obj.underline) {
            dynamicText = (<u key={index}>{child}</u>)
         }
      }
      switch (type) {
         case 'heading-one':
            return <h1 key={index}>{dynamicText.map((item, idx) => <React.Fragment key={idx}>{item}</React.Fragment>)}</h1>
         case 'heading-two':
            return <h2 key={index}>{dynamicText.map((item, idx) => <React.Fragment key={idx}>{item}</React.Fragment>)}</h2>
         case 'heading-three':
            return <h3 key={index}>{dynamicText.map((item, idx) => <React.Fragment key={idx}>{item}</React.Fragment>)}</h3>
         case 'heading-four':
            return <h4 key={index}>{dynamicText.map((item, idx) => <React.Fragment key={idx}>{item}</React.Fragment>)}</h4>
         case 'heading-five':
            return <h5 key={index}>{dynamicText.map((item, idx) => <React.Fragment key={idx}>{item}</React.Fragment>)}</h5>
         case 'heading-six':
            return <h6 key={index}>{dynamicText.map((item, idx) => <React.Fragment key={idx}>{item}</React.Fragment>)}</h6>
         case 'paragraph':
            return <p key={index}>{dynamicText.map((item, idx) => <React.Fragment key={idx}>{item}</React.Fragment>)}</p>
         case 'image':
            return <img src={pbj.src} alt={obj.title} width={obj.width} height={obj.height} key={index} />
         default:
            return dynamicText
      }
   }
   return (
      <div className='post-details p-5 bg-white'>
         <div className='pd-img'>
            <img src={post.featuredImage.url} alt="" />
         </div>
         <div className='author_date py-3'>
            <span className='post-author'><img src={post.author.photo.url} alt="" /> <rt>{post.author.name}</rt></span>
            <span> <i className='bi bi-calendar-day'></i> {moment(post.createdAt).format('MMM DD, YYYY')}</span>
         </div>
         <div className='text-content'>
            <h2 className='pd-title'>{post.title}</h2>
            {post.content.raw.children.map((itemText, index) => {
               const child = itemText.children.map((item, idx) => getTextContent(idx, item.text, item))
               return getTextContent(index, child, itemText, itemText.type)
            })}
         </div>
      </div>
   );
}

export default PostDetails;