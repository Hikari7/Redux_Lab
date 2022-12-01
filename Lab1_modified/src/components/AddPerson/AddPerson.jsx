import React from "react";
import addPersonCSS from "./AddPerson.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPerson } from "../../redux/actions/peopleAction";

function Addperson() {
  const dispatch = useDispatch();
  <div className={addPersonCSS.AddPerson}>
    <button onClick={() => dispatch(addPerson(person.payload))}>
      Add Person
    </button>
  </div>;
}

export default Addperson;
