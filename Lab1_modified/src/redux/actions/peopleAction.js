import { ADD_PERSON, DELETE_PEOPLE } from "../constants/actionTypes";

//()=>　の後に()で囲まないと"Actions must be plain objects."ってエラー吐かれる
export const addPerson = () => ({
  type: ADD_PERSON,
});

export const deletePeople = (id) => ({
  type: DELETE_PEOPLE,
  payload: id,
});
