

import { useRouter } from 'next/router';
import React from 'react';
import AddComment from '../../component/AddComment';
import Categories from '../../component/Categories';
import Comments from '../../component/Comments';
import PostAuthor from '../../component/PostAuthor';
import PostDetails from '../../component/PostDetails';
import PostWidget from '../../component/PostWidget';
import { getPost, getPosts } from '../../service/mainQuery';
import Loadere from '../../www/ui/Loader/Loadere';

function SinglePost({post}) {
   const router = useRouter()

   if(router.isFallback) {
      return <Loadere />
   }

   return (
      <div className='single-post'>
         <div className=' post-details-cona'>
            <PostDetails post={post} />
            <PostAuthor author={post.author} />
            <Comments slug={post.slug}/>
            <AddComment slug={post.slug} />
         </div>
         <div className='sp-related'>
            <PostWidget slug={post.slug} categories={post.categories.map(catg => catg.slug)} />
            <Categories />
         </div>
      </div>
   );
}

export default SinglePost;

export async function getStaticProps({params}) {
   const data = await getPost(params.slug)
   return {
      props: {
         post: data
      }
   }
}

export async function getStaticPaths() {
   const posts = await getPosts()
   return {
      paths: posts.map(({node: {slug}}) => ({params: {slug}})),
      fallback: true
   }
}