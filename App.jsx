import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMesage";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItems from "./Components/AddItems";
import { useState } from "react";

function App() {
  // const initialAddItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this Video",
  //     dueDate: "right Now",
  //   },
  // ];

  const [addItems, setAddItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...addItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setAddItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = addItems.filter(item => item.name !== todoItemName)
    setAddItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {addItems.length ===0 && <WelcomeMessage></WelcomeMessage>}
      <AddItems addItems={addItems} onDeleteClick = {handleDeleteItem}></AddItems>
    </center>
  );
}

export default App;
