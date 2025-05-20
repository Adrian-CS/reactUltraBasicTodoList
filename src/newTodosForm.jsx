import { useState } from "react"
export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if(newItem == "") return;
        onSubmit(newItem);
      }
      return<form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
        <label htmlFor="item">New item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
    </div>
    <button className="btn">Add</button>
    </form>
}