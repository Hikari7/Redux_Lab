import {
  SET_PEOPLE,
  ADD_PERSON,
  DELETE_PEOPLE,
} from "../constants/actionTypes";

const initialState = {
  id: Math.random(), // not really unique but good enough here!
  name: "John",
  age: Math.floor(Math.random() * 40),
};

export const personReducer = (state = initialState, action) => {
  let array;
  switch (action.type) {
    case SET_PEOPLE:
      return action.payload;

    case ADD_PERSON:
      //addPersonの処理
      array = [...state];
      array.push(action.payload);
      return array;

    // case DELETE_PEOPLE:
    //   array = [...state];
    //   array.filter(action);
    //   return array;

    default:
      return state;
  }
};
