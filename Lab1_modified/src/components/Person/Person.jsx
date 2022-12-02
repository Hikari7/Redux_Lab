import personCSS from "./Person.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deletePeople } from "../../redux/actions/peopleAction";

const Person = () => {
  //今持ってるStoreの情報をゲットできる
  const peopleData = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(peopleData);
  // console.log({peopleData.id});

  return (
    <>
      {peopleData.length > 0 && (
        <>
          {peopleData.map((person) => (
            <div className={personCSS.Person}>
              <h1>{person.name}</h1>
              <p>Age: {person.age}</p>
              <button onClick={() => dispatch(deletePeople(person.id))}>
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
