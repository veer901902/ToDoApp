import { useState } from "react";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  const [list, setList] = useState([]);


  return (
    <>
      <h1 style={{margin:'auto', width:'20%'}}>Todo List</h1>
      <Input  list={list} setList={setList}></Input>
      <List list={list} setList={setList}></List>
    </>
  );
}

export default App;
