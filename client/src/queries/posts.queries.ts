import { gql } from '@apollo/client'

const getPosts = (parentId: string | null) => gql`
query GetPosts {
  getPosts(parentId: ${parentId}) {
    id
   content
   user {
     id
     name
   }
 }
}
`

export { getPosts }
