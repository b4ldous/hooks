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
  const [listData, setListData] = React.useState({
    list: initialList,
    isShowList: true,
  });
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = listData.list.concat({
      name,
      id: uuidv4(),
    });

    setListData({ ...listData, list: newList });

    setName('');
  }
  return (
    <div>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      {listData.isShowList && <List list={listData.list} />}
    
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
