import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [updating, setUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");

  //add new item
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/AddItem", {
        item: itemText,
      });
      console.log(res);
      setListItems((prev) => [...prev, res.data]);
      setItemText(""); //reset the input after submitting
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/getItems");
        console.log("render");
        setListItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItemsList();
  }, []);

  const renderUpdateForm = () => (
    <form className="update-form" onSubmit={(e)=>updateItem(e)}>
      <input className="update-new-input" type="text" placeholder = "New item " onChange={(e)=>{setUpdateItemText(e.target.value)}
    } value={updateItemText} />
      <button className="update-new-btn" type="submit">Update</button>
    </form>
  );

  const updateItem = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:8080/api/updateItem/${updating}`,{item: updateItemText});
      const updatedItemIndex = listItems.findIndex(item => item._id === updating)
      const updatedItem = listItems[updatedItemIndex].item = updateItemText
      setUpdateItemText('')
      setUpdating('')
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/deleteItem/${id}`
      );
      console.log(res.data);
      const newList = listItems.filter((item) => item._id !== id);
      setListItems(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form" onSubmit={(e) => addItem(e)}>
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          value={itemText}
        />
        <button type="submit">Add</button>
      </form>
      <hr className="horLine" />
      <div className="todo-listItems">
        {listItems.map((item,index) => (
          <div className="todo-item" key={index}>
            {updating === item._id ? (
              renderUpdateForm()
            ) : (
              <>
                <div className="item-content">{item.item} </div>
                <div className="todo-btns">
                  <button
                    className="update-item"
                    onClick={() => {
                      setUpdating(item._id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="delete-item"
                    onClick={() => {
                      deleteItem(item._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
