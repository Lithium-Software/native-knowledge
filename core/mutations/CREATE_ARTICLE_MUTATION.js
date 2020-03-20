import gql from "graphql-tag";

export default gql`
  mutation CreateArticle($title: String!, $parentId: ID) {
    createArticle(articleInput: { title: $title, parentId: $parentId }) {
      id
      title
    }
  }
`;
