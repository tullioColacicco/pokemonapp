/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePokemon = /* GraphQL */ `
  subscription OnCreatePokemon {
    onCreatePokemon {
      id
      name
      src
      createdAt
      updatedAt
      capturedCapturedId
    }
  }
`;
export const onUpdatePokemon = /* GraphQL */ `
  subscription OnUpdatePokemon {
    onUpdatePokemon {
      id
      name
      src
      createdAt
      updatedAt
      capturedCapturedId
    }
  }
`;
export const onDeletePokemon = /* GraphQL */ `
  subscription OnDeletePokemon {
    onDeletePokemon {
      id
      name
      src
      createdAt
      updatedAt
      capturedCapturedId
    }
  }
`;
export const onCreateCaptured = /* GraphQL */ `
  subscription OnCreateCaptured($owner: String) {
    onCreateCaptured(owner: $owner) {
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
export const onUpdateCaptured = /* GraphQL */ `
  subscription OnUpdateCaptured($owner: String) {
    onUpdateCaptured(owner: $owner) {
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
export const onDeleteCaptured = /* GraphQL */ `
  subscription OnDeleteCaptured($owner: String) {
    onDeleteCaptured(owner: $owner) {
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
