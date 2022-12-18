import { useState, useEffect } from "react";
export default function Addtodo(props) {
  const [state, setstate] = useState();

  function addTodo() {
    let todo = document.getElementById("todobox").value;
    let task = {
      task: todo,
      status: false,
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      headers: myHeaders,
      method: "POST",
      redirect: "follow",
      body: JSON.stringify(task),
    };

    fetch("http://localhost:3000/todolist", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <h3> Add Todo Section</h3>
      <input type="text" id="todobox" />
      <button
        id="addbtn"
        onClick={() => {
          addTodo();
          window.location.href = "/";
        }}
      >
        Add Todo
      </button>
      <h3>{state}</h3>
    </div>
  );
}
