

import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import FeaturedPostCard from '../component/FeaturedPostCard';
import { getFeaturedPost } from '../service/mainQuery';
import "react-multi-carousel/lib/styles.css";

const responsive = {
   large: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4
   },
   desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3
   },
   tablet: {
      breakpoint: { max: 900, min: 640 },
      items: 2
   },
   mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
   }
}

function FeaturedPosts(props) {
   const [featuredPosts, setFeaturedPosts] = useState([])
   const [dataLoaded, setDataLoaded] = useState(false)

   useEffect(() => {
      getFeaturedPost()
         .then(result => {
            setFeaturedPosts(result)
            setDataLoaded(true)
         })
   }, [])

   return (
      <div className='featured-posts'>
         <Carousel showDots={true} autoPlay={true} autoPlaySpeed='5000' infinite itemClass='px-2' 
         responsive={responsive} customTransition='all .9s ease-in-out' containerClass="carousel-container">
            {dataLoaded && featuredPosts.map((post, idx) => (
               <FeaturedPostCard post={post} key={idx} />
            ))}
         </Carousel>
      </div>
   );
}

export default FeaturedPosts;