import "./Todo.css";

function Todo({ title, paragraph, onTodoDelete }) {
  
  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
