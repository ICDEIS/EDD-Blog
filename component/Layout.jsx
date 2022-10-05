

import React from 'react';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function Layout({children}) {
   return (
      <div className='layout'>
         <Navbar />
         {children}
         <Footer />
      </div>
   );
}

export default Layout;