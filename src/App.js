import React from "react";
import { v4 as uuidv4 } from "uuid";
import List from './List';
import AddItem from "./AddItem";
const initialList = [
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Dennis",
  },
];

const App = () => {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    // track input field's state
    setName(event.target.value);
  }

  function handleAdd() {
    // add item
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);
    setName("");
  }
  return (
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      <List list={list} />
    
    </div>
  );
};


  /*const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>); */

/*
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>

   
);*/
export default App;
