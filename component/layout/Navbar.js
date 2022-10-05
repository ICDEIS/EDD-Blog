

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../../service/mainQuery';

function Navbar(props) {
   const [categories, setCategories] = useState([])

   useEffect(() => {
      getCategories().then(result => setCategories(result))
   }, [])

   return (
      <nav className='navbar'>
         <div className='brand-cona'>
            <Link href='/'>
               <h3 className='nav-brand'>EDDESS</h3>
            </Link>
         </div>
         <ul className='nav-ul-list'>
            {categories.map(category => (
               <Link href={`/category/${category.slug}`} key={category.slug}>
                  <h6 className='navlink'>{category.name}</h6>
               </Link>
            ))}
         </ul>
         <span className='e-line w-100 mt-3'></span>
      </nav>
   );
}

export default Navbar;