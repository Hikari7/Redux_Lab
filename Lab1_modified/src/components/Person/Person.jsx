import React, { useEffect } from "react";
import personCSS from "./Person.module.css";
import { useSelector, useDispatch } from "react-redux";

import { setPeople } from "../../redux/actions/peopleAction";

const Person = () => {
  // const dispatch = useDispatch();
  const peopleData = useSelector((state) => state);

  console.log(peopleData);

  //画面にレンダーさせたい
  return (
    <div
      className={personCSS.Person}
      //   onClick={props.clicked}
    >
      {peopleData.state}
      {/* {peopleData&&
        peopleData.map(person) => (
      <h1>{person.name}</h1>
      <p>Age: {person.age}</p>
         )}  */}
    </div>
  );
};

export default Person;

/* <AddPerson personAdded={personAddedHandler} />
      {people.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => personDeletedHandler(person.id)}
        />
      ))} */
