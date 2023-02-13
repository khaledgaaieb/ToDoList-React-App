import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form">
        <input type="text" placeholder="Add Todo Item" />
        <button type="submit">Add</button>
      </form>
      <hr className="horLine" />
      <div className="todo-listItems">
        <div className="todo-item">
          <li className="item-content">First to do ! </li>
          <div className="todo-btns">
            <button className="update-item">Update</button>
            <button className="delete-item">Delete</button>
          </div>
        </div>

        <div className="todo-item">
          <li className="item-content">Second to do ! </li>
          <div className="todo-btns">
            <button className="update-item">Update</button>
            <button className="delete-item">Delete</button>
          </div>
        </div>

        <div className="todo-item">
          <li className="item-content">Third to do ! </li>
          <div className="todo-btns">
            <button className="update-item">Update</button>
            <button className="delete-item">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
