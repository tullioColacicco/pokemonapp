/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCaptured = /* GraphQL */ `
  mutation DeleteCaptured(
    $input: DeleteCapturedInput!
    $condition: ModelCapturedConditionInput
  ) {
    deleteCaptured(input: $input, condition: $condition) {
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
export const createPokemon = /* GraphQL */ `
  mutation CreatePokemon(
    $input: CreatePokemonInput!
    $condition: ModelPokemonConditionInput
  ) {
    createPokemon(input: $input, condition: $condition) {
      id
      name
      src
      createdAt
      updatedAt
      capturedCapturedId
    }
  }
`;
export const updatePokemon = /* GraphQL */ `
  mutation UpdatePokemon(
    $input: UpdatePokemonInput!
    $condition: ModelPokemonConditionInput
  ) {
    updatePokemon(input: $input, condition: $condition) {
      id
      name
      src
      createdAt
      updatedAt
      capturedCapturedId
    }
  }
`;
export const deletePokemon = /* GraphQL */ `
  mutation DeletePokemon(
    $input: DeletePokemonInput!
    $condition: ModelPokemonConditionInput
  ) {
    deletePokemon(input: $input, condition: $condition) {
      id
      name
      src
      createdAt
      updatedAt
      capturedCapturedId
    }
  }
`;
export const createCaptured = /* GraphQL */ `
  mutation CreateCaptured(
    $input: CreateCapturedInput!
    $condition: ModelCapturedConditionInput
  ) {
    createCaptured(input: $input, condition: $condition) {
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
export const updateCaptured = /* GraphQL */ `
  mutation UpdateCaptured(
    $input: UpdateCapturedInput!
    $condition: ModelCapturedConditionInput
  ) {
    updateCaptured(input: $input, condition: $condition) {
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
