

import React from 'react';
import { ToastContainer } from 'react-toastify';


function Section({children}) {
   return (
      <div className='section'>
         {children}
      </div>
   );
}

export default Section;