import { SET_PEOPLE, ADD_PERSON,  DELETE_PEOPLE } from "../constants/actionTypes";

export const addPerson = (id) => {
  type: ADD_PERSON;
  payload: id;
};

export const setPeople = (people) => {
  type: SET_PEOPLE;
  payload: people;
};

// export const deletePeople = (id) => {
//   type: DELETE_PEOPLE;
//   payload: id;
// };
