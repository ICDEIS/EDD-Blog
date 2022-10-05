

import { useRouter } from 'next/router';
import React from 'react';
import Categories from '../../component/Categories';
import PostCard from '../../component/PostCard';
import PostWidget from '../../component/PostWidget';
import { getCategories, getCategoryPosts, getPosts } from '../../service/mainQuery';
import Loadere from '../../www/ui/Loader/Loadere';

function SingleCategory({posts}) {
   const router = useRouter()
   
   if(router.isFallback) {
      return <Loadere />
   }

   return (
      <div className='single-category'>
         {!posts.length && <h3 className='text-center pb-5 text-white'>No post by category</h3> }
         <div className='post-details-cona'>
            {posts.map(post => (
               <PostCard post={post.node} key={post.node.slug} />
            ))}
         </div>
         <div className='sp-related'>
            <PostWidget />
            <Categories />
         </div>
      </div>
   );
}

export default SingleCategory;

export async function getStaticProps({params}) {
   const posts = await getCategoryPosts(params.slug)
   return {
      props: {posts}
   }
}
export async function  getStaticPaths() {
   const categories = await getCategories()
   return {
      paths: categories.map(({slug}) => ({params: {slug}})),
      fallback: true
   }
}