import personCSS from "./Person.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deletePerson } from "../../redux/store/index";
// import { v4 as uuidv4 } from "uuid";

const Person = () => {
  const dispatch = useDispatch();
  //今持ってるStoreの情報をゲットできる
  const peopleData = useSelector((state) => state.person);
  console.log(peopleData);

  return (
    <>
      {peopleData.length > 0 && (
        <>
          {peopleData.map((person) => (
            <div key={person.id} className={personCSS.Person}>
              <h1>{person.name}</h1>
              <p>Age: {person.age}</p>
              <button onClick={() => dispatch(deletePerson(person.id))}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Person;
