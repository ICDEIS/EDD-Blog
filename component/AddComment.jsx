

import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { submitComment } from '../service/mainQuery';

function AddComment({slug}) {
   const [error, setError] = useState(false)
   const [successMessage, setSuccessMessage] = useState(false)
   const [storeData, setStoreDate] = useState(null)
   const commentEl = useRef()
   const nameEl = useRef()
   const emailEl = useRef()
   const storeDataEl = useRef() 

   function submitCommentObj() {
      setError(false)
      
      const {value: comment} = commentEl.current
      const {value: name} = nameEl.current
      const {value: email} = emailEl.current
      const {checked: storeData} = storeDataEl.current

      if(!comment || !name || !email) {
         setError(true)
         return
      }
      const commentObj = {comment, name, email, slug}
      if(storeData) {
         window.localStorage.setItem('postedUserName', name)
         window.localStorage.setItem('postedUserEmail', email)
      } else {
         window.localStorage.removeItem('postedUserName' )
         window.localStorage.removeItem('postedUserEmail')
      }
      function clearForm() {
         if(!storeDataEl.current.checked) {
            nameEl.current.value = ''
            emailEl.current.value = ''
         }
         commentEl.current.value = ''
      }

      submitComment(commentObj)
         .then(result => {
            setSuccessMessage(true)
            clearForm()
            setTimeout(() => {
               setSuccessMessage(false)
            }, 2500)
         })
      
   }

   return (
      <div className='add-comment'>
         <h5 className=' mb-2 pb-2'>Add a comment</h5>
         <div className='ac-fields'>
            <textarea ref={commentEl} className='ad-textarea' name="comment" rows="4" placeholder='comment'></textarea>
            <input ref={nameEl} type="text" name='name' placeholder='name' />
            <input ref={emailEl} type="email" name='email' placeholder='email' />
            <label htmlFor='storeData'>
               <input ref={storeDataEl} type="checkbox" name='storeData' value={true} id='storeData' />
               Remember me
            </label> <br />
            {error && <p className='ac-error'>You have to fill all fields</p>}
            {successMessage && <p className='ac-success'>Your comment submitted for review</p>}
            <button onClick={submitCommentObj} className='e-btn'>Add comment</button>
         </div>
      </div>
   );
}

export default AddComment;