

import { gql, GraphQLClient } from "graphql-request";

const hygraphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
const hygraphToken = process.env.HYGRAPH_TOKEN

async function postComment(req, res) {
	const graphQLClient = new GraphQLClient(hygraphAPI, {
		headers: {
			authorization: `Bearer ${hygraphToken}`
		}
	})
	const query = gql`
		mutation CreateComment($comment: String!, $name: String!, $email: String!, $slug: String!) {
			createComment(data: {comment: $comment, name: $name, email: $email, post: {connect: {slug: $slug}}}){id}
		}
	`
	try {
		const result = await graphQLClient.request(query, req.body)
		return res.status(200).send(result)
	} catch(error) {console.log(error);}
}

export default postComment 