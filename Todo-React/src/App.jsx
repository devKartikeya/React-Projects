import React, { useState, useEffect } from 'react';

const App = () => {
  // Load from localStorage
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add or Update Todo
  const handleSubmit = () => {
    if (todo.trim() === "") return;

    if (editId !== null) {
      // Update existing todo
      const updated = todos.map(item =>
        item.id === editId ? { ...item, text: todo } : item
      );
      setTodos(updated);
      setEditId(null);
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now(),
        text: todo,
        completed: false
      };
      setTodos([...todos, newTodo]);
    }

    setTodo("");
  };

  // Delete
  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  // Edit
  const handleEdit = (id) => {
    const found = todos.find(item => item.id === id);
    setTodo(found.text);
    setEditId(id);
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    const updated = todos.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updated);
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-2/3 h-4/5 flex items-center flex-col rounded-2xl justify-around'>

        <h1 className='font-bold text-2xl text-purple-600'>
          Your Todos are Here!
        </h1>

        {/* Input Section */}
        <div className='w-full h-10 my-4 flex justify-around'>
          <input
            type="text"
            placeholder='Type your Todo'
            className='w-3/4 pl-5 border-2 border-gray-700 h-8'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button
            className='bg-green-500 h-8 w-1/5 text-white font-bold'
            onClick={handleSubmit}
          >
            {editId !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* Todo List */}
        <div className='w-6/7 h-3/4 bg-amber-200 border-2 border-gray-700 overflow-auto'>
          <ul className='w-full h-full flex flex-col gap-2.5 p-2'>

            {todos.length === 0 ? (
              <p className='text-center'>No todos yet 😴</p>
            ) : (
              todos.map((item) => (
                <li
                  key={item.id}
                  className='w-full h-10 border-2 border-white px-2 flex items-center justify-between'
                >
                  <span
                    onClick={() => toggleComplete(item.id)}
                    className={`cursor-pointer ${
                      item.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {item.text}
                  </span>

                  <div className='flex gap-2'>
                    <button
                      className='bg-red-500 px-2 text-white'
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>

                    <button
                      className='bg-blue-500 px-2 text-white'
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))
            )}

          </ul>
        </div>

      </div>
    </div>
  );
};

export default App;