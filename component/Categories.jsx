

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../service/mainQuery';

function Categories(props) {
   const [categories, setCategories] = useState([])

   useEffect(() => {
      console.log('Subhanalloh')
      getCategories().then(result => setCategories(result))
   }, [])

   return (
      <div className='categories'>
         <h5 className='c-title'>Categories</h5>
         <div className='category-list'>
            {categories.map(category => (
               <Link href={`/category/${category.slug}`} key={category.slug}>
                  <h6 className='c-name e-link'>{category.name}</h6>
               </Link>
            ))}
         </div>
      </div>
   );
}

export default Categories;