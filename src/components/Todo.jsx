import React, { useState } from "react";

const Todo = () => {
  const [val, setVal] = useState({
    task: "",
    description: "",
    date: "",
    done: false,
  });

  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setTodo([...todo, val]);

    setVal({
      task: "",
      description: "",
      date: "",
    });
  };

  const handleDone = (ele) => {
    ele.done = true;
    setTodo([...todo]);
  };

  return (
    <>
      <h4 className="text-center text-info">Todo App</h4>
      <div className="d-flex flex-column mx-auto todo">
        <input
          type={"text"}
          placeholder={"task"}
          name={"task"}
          onChange={handleChange}
          value={val.task}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="description"
          name={"description"}
          onChange={handleChange}
          value={val.description}
        />
        <input
          type={"date"}
          name={"date"}
          onChange={handleChange}
          value={val.date}
        />

        <button className="btn btn-primary mt-2" onClick={handleAdd}>
          Add Todo
        </button>
      </div>

      {todo.map((ele) => (
        <div
          key={ele.task}
          className="text-center mt-3 task"
          style={
            ele.done
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          <strong>{ele.task}</strong>
          <input
            type={"checkbox"}
            className="ms-4"
            onClick={() => handleDone(ele)}
          />
          <p>{ele.description}</p>
          <p className="text-warning">{ele.date}</p>
        </div>
      ))}
    </>
  );
};

export default Todo;
