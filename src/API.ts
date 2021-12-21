/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DeleteCapturedInput = {
  id: string,
};

export type ModelCapturedConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelCapturedConditionInput | null > | null,
  or?: Array< ModelCapturedConditionInput | null > | null,
  not?: ModelCapturedConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Captured = {
  __typename: "Captured",
  id: string,
  title: string,
  captured?: ModelPokemonConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPokemonConnection = {
  __typename: "ModelPokemonConnection",
  items:  Array<Pokemon >,
  nextToken?: string | null,
};

export type Pokemon = {
  __typename: "Pokemon",
  id: string,
  name: string,
  src: string,
  createdAt: string,
  updatedAt: string,
  capturedCapturedId?: string | null,
};

export type CreatePokemonInput = {
  id?: string | null,
  name: string,
  src: string,
  capturedCapturedId?: string | null,
};

export type ModelPokemonConditionInput = {
  name?: ModelStringInput | null,
  src?: ModelStringInput | null,
  and?: Array< ModelPokemonConditionInput | null > | null,
  or?: Array< ModelPokemonConditionInput | null > | null,
  not?: ModelPokemonConditionInput | null,
  capturedCapturedId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePokemonInput = {
  id: string,
  name?: string | null,
  src?: string | null,
  capturedCapturedId?: string | null,
};

export type DeletePokemonInput = {
  id: string,
};

export type CreateCapturedInput = {
  id?: string | null,
  title: string,
};

export type UpdateCapturedInput = {
  id: string,
  title?: string | null,
};

export type ModelPokemonFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  src?: ModelStringInput | null,
  and?: Array< ModelPokemonFilterInput | null > | null,
  or?: Array< ModelPokemonFilterInput | null > | null,
  not?: ModelPokemonFilterInput | null,
  capturedCapturedId?: ModelIDInput | null,
};

export type ModelCapturedFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelCapturedFilterInput | null > | null,
  or?: Array< ModelCapturedFilterInput | null > | null,
  not?: ModelCapturedFilterInput | null,
};

export type ModelCapturedConnection = {
  __typename: "ModelCapturedConnection",
  items:  Array<Captured >,
  nextToken?: string | null,
};

export type DeleteCapturedMutationVariables = {
  input: DeleteCapturedInput,
  condition?: ModelCapturedConditionInput | null,
};

export type DeleteCapturedMutation = {
  deleteCaptured?:  {
    __typename: "Captured",
    id: string,
    title: string,
    captured?:  {
      __typename: "ModelPokemonConnection",
      items:  Array< {
        __typename: "Pokemon",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        capturedCapturedId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePokemonMutationVariables = {
  input: CreatePokemonInput,
  condition?: ModelPokemonConditionInput | null,
};

export type CreatePokemonMutation = {
  createPokemon?:  {
    __typename: "Pokemon",
    id: string,
    name: string,
    src: string,
    createdAt: string,
    updatedAt: string,
    capturedCapturedId?: string | null,
  } | null,
};

export type UpdatePokemonMutationVariables = {
  input: UpdatePokemonInput,
  condition?: ModelPokemonConditionInput | null,
};

export type UpdatePokemonMutation = {
  updatePokemon?:  {
    __typename: "Pokemon",
    id: string,
    name: string,
    src: string,
    createdAt: string,
    updatedAt: string,
    capturedCapturedId?: string | null,
  } | null,
};

export type DeletePokemonMutationVariables = {
  input: DeletePokemonInput,
  condition?: ModelPokemonConditionInput | null,
};

export type DeletePokemonMutation = {
  deletePokemon?:  {
    __typename: "Pokemon",
    id: string,
    name: string,
    src: string,
    createdAt: string,
    updatedAt: string,
    capturedCapturedId?: string | null,
  } | null,
};

export type CreateCapturedMutationVariables = {
  input: CreateCapturedInput,
  condition?: ModelCapturedConditionInput | null,
};

export type CreateCapturedMutation = {
  createCaptured?:  {
    __typename: "Captured",
    id: string,
    title: string,
    captured?:  {
      __typename: "ModelPokemonConnection",
      items:  Array< {
        __typename: "Pokemon",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        capturedCapturedId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCapturedMutationVariables = {
  input: UpdateCapturedInput,
  condition?: ModelCapturedConditionInput | null,
};

export type UpdateCapturedMutation = {
  updateCaptured?:  {
    __typename: "Captured",
    id: string,
    title: string,
    captured?:  {
      __typename: "ModelPokemonConnection",
      items:  Array< {
        __typename: "Pokemon",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        capturedCapturedId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetPokemonQueryVariables = {
  id: string,
};

export type GetPokemonQuery = {
  getPokemon?:  {
    __typename: "Pokemon",
    id: string,
    name: string,
    src: string,
    createdAt: string,
    updatedAt: string,
    capturedCapturedId?: string | null,
  } | null,
};

export type ListPokemonQueryVariables = {
  filter?: ModelPokemonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPokemonQuery = {
  listPokemon?:  {
    __typename: "ModelPokemonConnection",
    items:  Array< {
      __typename: "Pokemon",
      id: string,
      name: string,
      src: string,
      createdAt: string,
      updatedAt: string,
      capturedCapturedId?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCapturedQueryVariables = {
  id: string,
};

export type GetCapturedQuery = {
  getCaptured?:  {
    __typename: "Captured",
    id: string,
    title: string,
    captured?:  {
      __typename: "ModelPokemonConnection",
      items:  Array< {
        __typename: "Pokemon",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        capturedCapturedId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCapturedsQueryVariables = {
  filter?: ModelCapturedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCapturedsQuery = {
  listCaptureds?:  {
    __typename: "ModelCapturedConnection",
    items:  Array< {
      __typename: "Captured",
      id: string,
      title: string,
      captured?:  {
        __typename: "ModelPokemonConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePokemonSubscription = {
  onCreatePokemon?:  {
    __typename: "Pokemon",
    id: string,
    name: string,
    src: string,
    createdAt: string,
    updatedAt: string,
    capturedCapturedId?: string | null,
  } | null,
};

export type OnUpdatePokemonSubscription = {
  onUpdatePokemon?:  {
    __typename: "Pokemon",
    id: string,
    name: string,
    src: string,
    createdAt: string,
    updatedAt: string,
    capturedCapturedId?: string | null,
  } | null,
};

export type OnDeletePokemonSubscription = {
  onDeletePokemon?:  {
    __typename: "Pokemon",
    id: string,
    name: string,
    src: string,
    createdAt: string,
    updatedAt: string,
    capturedCapturedId?: string | null,
  } | null,
};

export type OnCreateCapturedSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCapturedSubscription = {
  onCreateCaptured?:  {
    __typename: "Captured",
    id: string,
    title: string,
    captured?:  {
      __typename: "ModelPokemonConnection",
      items:  Array< {
        __typename: "Pokemon",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        capturedCapturedId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCapturedSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCapturedSubscription = {
  onUpdateCaptured?:  {
    __typename: "Captured",
    id: string,
    title: string,
    captured?:  {
      __typename: "ModelPokemonConnection",
      items:  Array< {
        __typename: "Pokemon",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        capturedCapturedId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCapturedSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCapturedSubscription = {
  onDeleteCaptured?:  {
    __typename: "Captured",
    id: string,
    title: string,
    captured?:  {
      __typename: "ModelPokemonConnection",
      items:  Array< {
        __typename: "Pokemon",
        id: string,
        name: string,
        src: string,
        createdAt: string,
        updatedAt: string,
        capturedCapturedId?: string | null,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
