import React from "react";
let filter = "all";
export function AddTodo({ onEnter, onFilterChange, conditionalDelete }) {
  function handleKeyDown(event) {
    if (event.key === "Enter" && event.target.value.trim()) {
      onEnter(event.target.value);
      event.target.value = "";
    }
  }

  function handleFilterChange(event) {
    onFilterChange(event.target.value);
    filter = event.target.value; 
  }

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Add a new todo"
      />
      <div>
        <select onChange={handleFilterChange} defaultValue="all">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {filter === 'pending' && (
        <button onClick={() => conditionalDelete(filter)} >Pending Delete</button>
      )}
      {filter === 'completed' && (
        <button onClick={() => conditionalDelete(filter)} >Completed Delete</button>

      )}
      {
        filter === 'all' && (
          <div>
            <button onClick={() => conditionalDelete('completed')} >Completed Delete</button>
            <button onClick={() => conditionalDelete('pending')} >Pending Delete</button>
          </div>
        )
      }
    </div>
  );
}
