/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createCalEvent = /* GraphQL */ `
  mutation CreateCalEvent(
    $input: CreateCalEventInput!
    $condition: ModelcalEventConditionInput
  ) {
    createCalEvent(input: $input, condition: $condition) {
      id
      name
      details
      start
      end
      color
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCalEvent = /* GraphQL */ `
  mutation UpdateCalEvent(
    $input: UpdateCalEventInput!
    $condition: ModelcalEventConditionInput
  ) {
    updateCalEvent(input: $input, condition: $condition) {
      id
      name
      details
      start
      end
      color
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCalEvent = /* GraphQL */ `
  mutation DeleteCalEvent(
    $input: DeleteCalEventInput!
    $condition: ModelcalEventConditionInput
  ) {
    deleteCalEvent(input: $input, condition: $condition) {
      id
      name
      details
      start
      end
      color
      createdAt
      updatedAt
      owner
    }
  }
`;
