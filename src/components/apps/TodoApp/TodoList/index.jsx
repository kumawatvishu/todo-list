export function TodoList({ todos = [], onStatusChange, onDeletechanges }) {
  if (!todos.length) {
    return null;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted}   onClick={() => onStatusChange(todo)} />
            {todo.title} - [{todo.isCompleted ? "COMPLETED" : "PENDING"}]
            <button onClick={() => onDeletechanges(todo)}>Delete</button>
          </li>
        );
      })}
      <button onClick={() => onDeletechanges()}>All Delete</button>

    </ul>
  );
}
