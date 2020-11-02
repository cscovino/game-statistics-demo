import { gql } from "@apollo/client"

export const GET_ALL_SCORES = gql`
  query GET_ALL_SCORES {
    stats(order_by: {created_at: desc}) {
      created_at
      id
      score
      player {
        id
        image_url
        nickname
      }
    }
  }
`;

export const GET_TOP_SCORES = gql`
  query GET_TOP_SCORES {
    stats(order_by: {score: desc}, limit: 10) {
      created_at
      id
      score
      player {
        id
        image_url
        nickname
      }
    }
  }
`;

export const GET_DATE_LAST_MATCH = gql`
  query GET_DATE_LAST_MATCH {
    stats(order_by: {created_at: desc}, limit: 1) {
      created_at
      id
      score
      player {
        id
        image_url
        nickname
      }
    }
  }
`;