import { useState } from "react";
import "./styles.css";

const initialTodos = [
  {
    text: "Go shopping",
    completed: false,
  },
  {
    text: "Work out",
    completed: false,
  },
  {
    text: "See the doctor",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);

  console.log("State: ", todos, showCompletedTodos);

  return (
    <div className="App">
      <main>
        <section>
          <h2 className="title">OPTIONS</h2>
          <label>
            Show completed
            <input
              className="show-completed"
              onChange={
                (e) => {}
                // setShowCompletedTodos(e.target.checked)
              }
              type="checkbox"
              checked={
                true
                //showCompletedTodos
              }
            />
          </label>
        </section>
        <section>
          <h2 className="title">ADD ITEM</h2>
          <form
            className="add-item"
            onSubmit={() => {}}
            // handleSubmit
          >
            <input
              className="text-input"
              type="text"
              name="text"
              required
              minlength="3"
              onChange={
                () => {}
                // handleChange
              }
              value=""
              // {todoInput}
            />
            <button type="submit">Add</button>
          </form>
        </section>
        <section className="todo-list-section">
          <h2 className="title">TODO</h2>
          <ul className="todo-list">
            {
              // incompleteTodos
              todos.map((todo) => (
                <li className="todo">
                  <div className="completed-section">
                    <input
                      className="completed-checkbox"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={
                        () => {}
                        // toggleTodoCompletion(todo)
                      }
                    />
                  </div>
                  <div className="text-section">
                    <p className="text">{todo.text}</p>
                  </div>
                  <div className="button-section">
                    <button
                      className="delete"
                      onClick={
                        () => {}
                        // removeTodo(todo)
                      }
                    >
                      🗑
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
        ( {/* {showCompletedTodos ? ( */}
        <section className="completed-list-section">
          <h2 className="title">COMPLETED</h2>
          <ul className="completed-list">
            {
              // completedTodos
              todos.map((todo) => (
                <li className="todo">
                  <div className="completed-section">
                    <input
                      className="completed-checkbox"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={
                        () => {}
                        // toggleTodoCompletion(todo)
                      }
                    />
                  </div>
                  <div className="text-section">
                    <p className="text completed">{todo.text}</p>
                  </div>
                  <div className="button-section">
                    <button
                      className="delete"
                      onClick={
                        () => {}
                        //removeTodo(todo)
                      }
                    >
                      🗑
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
        {/* ) : null} */})
      </main>
    </div>
  );
}

export default App;
