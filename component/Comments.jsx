

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { getComments } from '../service/mainQuery';

function Comments({ slug }) {
   const [comments, setComments] = useState([])

   useEffect(() => {
      getComments(slug)
         .then(result => setComments(result))
   }, [])

   return (
      <div className='comments'>
         <h5 className='mb-2'>{comments.length} Comments</h5>
         <span className='e-line w-100 opacity-50 my-2'></span>
         {!comments.length && <h5 className='text-center pt-3'>No comment yet</h5>}
         {comments.map(item => (
            <div className='c-content' key={item.createdAt}>
               <div className='cc-name-date'>
                  <h6>{item.name}</h6>
                  <small>{moment(item.createdAt).format(('MMM DD, YYYY'))}</small>
               </div>
               <p className='c-comment'>{item.comment}</p>
               <span className='e-line w-100 opacity-25'></span>
            </div>
         ))}
      </div>
   );
}

export default Comments;