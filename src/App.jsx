import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with frontend simplified step by step."
        />
        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview question in the nest 6 weeks.."
        />
        <Todo title="Land a $100k Job" paragraph="Apply to 100 jobs." />
      </div>
      <Modal question="Are you sure?" />
    </div>
  );
}

export default App;
