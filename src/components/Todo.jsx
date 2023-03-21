import React, { useState } from "react";

const Todo = () => {
  const [val, setVal] = useState({
    task: "",
    description: "",
    date: "",
    done: false,
  });

  const [todo, setTodo] = useState([]);
  const [isEditMode, setEditMode] = useState(false);
  const [popdata, setPopdata] = useState({});

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

  const handleDelete = (ele) => {
    let filteredArr = todo.filter((el) => el.task != ele.task);
    setTodo([...filteredArr]);

    setVal({
      task: "",
      description: "",
      date: "",
    });
  };

  const handlePoPup = (ele) => {
    setVal({
      task: ele.task,
      description: ele.description,
      date: ele.date,
      done: false,
    });

    setEditMode(!isEditMode);
    setPopdata(ele);
  };

  const handleEdit = () => {
    console.log(val);
    let filteredArr = todo.filter((el) => el.task != popdata.task);
    setTodo([...filteredArr, val]);

    setEditMode(!isEditMode);

    setVal({
      task: "",
      description: "",
      date: "",
    });
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

        {isEditMode ? (
          <button className="btn btn-primary mt-2" onClick={handleEdit}>
            Edit Todo
          </button>
        ) : (
          <button className="btn btn-primary mt-2" onClick={handleAdd}>
            Add Todo
          </button>
        )}
      </div>

      <div className="row">
        {todo.map((ele) => (
          <div
            key={ele.task}
            className="text-center mt-3 task mx-auto col-4"
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
            <i
              className="bi bi-trash-fill text-info fs-3"
              onClick={() => handleDelete(ele)}
            ></i>

            <i
              className="bi bi-pencil-square text-info ms-5 fs-3"
              onClick={() => handlePoPup(ele)}
            ></i>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
