

import request, { gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

const getPosts = async () => {
   const query = gql`
      query MyQuery {
         postsConnection {
            edges {
               node {
               author {
                  bio
                  name
                  id
                  photo {
                     url
                  }
               }
               categories {
                  name
                  slug
               }
               createdAt
               slug
               title
               excerpt
               featuredImage {
                  url
               }
               }
            }
         }
      }
   `
   const result = await request(graphqlAPI, query)
   return result.postsConnection.edges
}

const getPost = async (slug) => {
   const query = gql`
      query GetPost($slug: String!) {
         post(where: {slug: $slug}) {
            author {
               name
               bio
               photo {
                  url
               }
            }
            title
            slug
            excerpt
            createdAt
            featuredImage {
               url
            }
            categories {
               name
               slug
            }
            content {
               raw
            }
         }
      }
   `
   const result = await request(graphqlAPI, query, { slug })
   return result.post
}

const getRecentPosts = async () => {
   const query = gql`
      query GetRecentPost() {
         posts(orderBy: createdAt_ASC, last: 3) {
            title
            featuredImage {
               url
            }
            slug
            createdAt
         }
      }
   `
   const result = await request(graphqlAPI, query)
   return result.posts
}

const getSimilarPosts = async (categories, slug) => {
   const query = gql`
      query GetSimilarPost($slug: String!, $categories: [String!]) {
         posts(
            where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
            last: 3
         ){
            title
            featuredImage {
               url
            }
            slug
            createdAt
         }
      }
   `
   const result = await request(graphqlAPI, query, { categories, slug })
   return result.posts
}

const getCategories = async () => {
   const query = gql`
      query getCategories {
         categories {
            name
            slug
         }
      }
   `
   const result = await request(graphqlAPI, query)
   return result.categories
}

const submitComment = async (obj) => {
   const result = await fetch('/api/comments', {
      method: 'POST',
      headers: {
         "Content-Type": 'application/json'
      },
      body: JSON.stringify(obj)
   })
   return result.json()
}

const getComments = async (slug) => {
   const query = gql`
      query GetComments($slug: String!) {
         comments(where: {post: {slug: $slug}}) {
            name
            createdAt
            comment
         }
      }
   `
   const result = await request(graphqlAPI, query, { slug })
   return result.comments
}

const getCategoryPosts = async (slug) => {
   const query = gql`
      query GetCategoryPosts($slug: String!) {
         postsConnection(where: {categories_some: {slug: $slug}}) {
            edges {
               node {
               author {
                  bio
                  name
                  id
                  photo {
                     url
                  }
               }
               categories {
                  name
                  slug
               }
               createdAt
               slug
               title
               excerpt
               featuredImage {
                  url
               }
               }
            }
         }
      }
   `
   const result = await request(graphqlAPI, query, { slug })
   return result.postsConnection.edges
}

const getFeaturedPost = async () => {
   const query = gql`
      query GetFeaturedPosts() {
         posts(where: {featuredPost: true}, last: 7) {
            author {
            name
            photo {
               url
            }
         }
         title
         createdAt
         slug
         featuredImage {
            url
         }
         }
      }
   `
   const result = await request(graphqlAPI, query)
   return result.posts
}

export {
   getPosts, getPost, getRecentPosts, getSimilarPosts, getCategories,
   submitComment, getComments, getCategoryPosts, getFeaturedPost
}