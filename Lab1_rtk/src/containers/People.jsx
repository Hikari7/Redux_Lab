import React from "react";

//子コンポーネントの要素(画面レンダー部分)
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

const People = () => {
  return (
    <div>
      <AddPerson />
      <Person />
    </div>
  );
};

export default People;
