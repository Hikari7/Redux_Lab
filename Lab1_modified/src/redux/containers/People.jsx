import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

//子コンポーネントの要素(画面レンダー部分)
import Person from "../../components/Person/Person";
import AddPerson from "../../components/AddPerson/AddPerson";

//このpeopleがsnackInventoryのファイルにあたる
//ここでuseSelector, useDispatchを呼ぶ

const People = () => {
  //const dispatch = useDispatch();
  // const jhonData = useSelector((state) => state);

  // const [people, setPeople] = useState([]);

  // const personAddedHandler = () => {
  // const newPerson = {
  //   id: Math.random(), // not really unique but good enough here!
  //   name: "John",
  //   age: Math.floor(Math.random() * 40),
  // };

  // setPeople((prevState) => {
  //   return [...prevState, newPerson];
  // });
  // };

  // const personDeletedHandler = (personId) => {
  //   setPeople((prevState) => {
  //     return prevState.filter((person) => person.id !== personId);
  //   });
  // };

  // useEffect(() => {
  //   dispatch(jhonData);
  // }, []);

  return (
    <div>
      <AddPerson />
      <Person />
    </div>
  );
};

export default People;

{
  /* <AddPerson personAdded={personAddedHandler} />
      {people.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => personDeletedHandler(person.id)}
        />
      ))} */
}
