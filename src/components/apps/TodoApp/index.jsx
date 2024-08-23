import React from "react";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { getID } from "../../../utilities/lib";

function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState('all');

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        id: getID(),
        title,
        isCompleted: false,
      },
    ]);
  }

  function toggleTodoStatus(todo) {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  }

  function handleDeleteButton(todo) {
    if (!todo) {
      setTodos([]);
    }
    else {
      const filtered = todos.filter(item => item.id !== todo.id);
      setTodos(filtered);
    }
  }
  function conditionalDeleteButton(filter) {
    let filteredTodos;
    
    if (filter === 'pending') {
      filteredTodos = todos.filter(todo => todo.isCompleted);
    } else if (filter === 'completed') {
      filteredTodos = todos.filter(todo => !todo.isCompleted);
    } 

    setTodos(filteredTodos);
  }
  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  let filteredTodos = todos.filter(todo => {
    if (filter === 'pending') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <div>
      <AddTodo
        onEnter={addTodo}
        onFilterChange={handleFilterChange}
        conditionalDelete={conditionalDeleteButton}
      />
      <TodoList todos={filteredTodos} onStatusChange={toggleTodoStatus} onDeletechanges={handleDeleteButton} />
    </div>
  );
}

export { TodoApp };
