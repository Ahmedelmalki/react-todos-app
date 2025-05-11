 import { useState } from "react";

// todo : set also the routes

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");

    const addTodo = () => {
        if (!input.trim()) return;
        setTodos([...todos, { text: input.trim(), completed: false }])
        setInput("")
    }

    const toggleTodo = (i) => {
        const upateTodos = [...todos];
        upateTodos[i].completed = !upateTodos[i].completed;
        setTodos(upateTodos)
    }

    const itemsLeft = todos.filter(todo => !todo.completed).length; 
    
    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const filterTodos = todos.filter(todo =>{
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true; // all
    })

  return (
    <>
      <h1>Todos</h1>
      <section className="enterTodos">
        <input type="text" placeholder="enter a todo" value={input} onChange={(e) => setInput(e.target.value)} 
            onKeyDown={e => {
                if (e.key === 'Enter'){
                    addTodo()
                }
            }}
        />
        <button onClick={addTodo}>add</button>
      </section>
      <section className="todos">
        {/*here will be displaying todos*/}
        <ul>
        {filterTodos.map((todo, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)}/>
              <span style={{ marginLeft: "0.5rem", textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <span>{itemsLeft} items left</span>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </footer>
    </>
  );
}


export default App;
