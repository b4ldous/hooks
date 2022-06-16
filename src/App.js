import React, {useState} from "react";
const initialList = [
  {
    id: "a",
    firstname: "Robin",
    lastname: "Wieruch",
    year: 1988,
  },
  {
    id: "b",
    firstname: "Dave",
    lastname: "Davidds",
    year: 1990,
  },
];

const App = () => {

  const [list, setList]= useState(initialList);
  function handleRemove(id) {
    console.log(id);
    // remove item
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.firstname}</span>
            <span>{item.lastname}</span>
            <span>{item.year}</span>
            <button type="button" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
