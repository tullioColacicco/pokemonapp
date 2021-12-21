/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPokemon = /* GraphQL */ `
  query GetPokemon($id: ID!) {
    getPokemon(id: $id) {
      id
      name
      src
      createdAt
      updatedAt
      capturedCapturedId
    }
  }
`;
export const listPokemon = /* GraphQL */ `
  query ListPokemon(
    $filter: ModelPokemonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPokemon(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        src
        createdAt
        updatedAt
        capturedCapturedId
      }
      nextToken
    }
  }
`;
export const getCaptured = /* GraphQL */ `
  query GetCaptured($id: ID!) {
    getCaptured(id: $id) {
      id
      title
      captured {
        items {
          id
          name
          src
          createdAt
          updatedAt
          capturedCapturedId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCaptureds = /* GraphQL */ `
  query ListCaptureds(
    $filter: ModelCapturedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaptureds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        captured {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
