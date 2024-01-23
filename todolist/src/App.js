import './App.css';
import {AddToDo, Header, ToDoList} from "./components";
import {useState} from "react";
import {Container} from "./components/Container/Container";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: true
    }
  ])

  return (
    <>
      <Header/>
      <Container>
        <AddToDo todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
      </Container>
    </>
  );
}

export default App;
