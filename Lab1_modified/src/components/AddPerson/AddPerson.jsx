import React from "react";
import addPersonCss from "./AddPerson.module.css";
import { useDispatch } from "react-redux";
import { addPerson } from "../../redux/actions/peopleAction";

//dispatchの引数にアクションを書くとそのReducerを呼び出すことができる

function AddPerson() {
  const dispatch = useDispatch();

  return (
    <div className={addPersonCss.AddPerson}>
      <button onClick={() => dispatch(addPerson())}>Add Person</button>
    </div>
  );
}

export default AddPerson;

