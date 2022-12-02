import { ADD_PERSON, DELETE_PEOPLE } from "../constants/actionTypes";

const initialState = [];

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON: {
      //addPersonの処理
      let array;
      array = [...state];
      array.push({
        id: Math.random(), // not really unique but good enough here!
        name: "John",
        age: Math.floor(Math.random() * 40),
      });
      return array;
    }

    case DELETE_PEOPLE: {
      let array;
      array = [...state];
      //filter=合っていないものを残す

      //なんかreturnの後に直接filterの処理書いたらいけたw
      return array.filter((state) => state.id !== action.payload);
      // return array;
    }

    default:
      let array;
      return (array = [...state]);
  }
};
