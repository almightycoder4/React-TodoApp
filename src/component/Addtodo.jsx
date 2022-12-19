export default function Addtodo(props) {
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

    fetch("https://morning-charm-curiosity.glitch.me/todolist", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert(`${todo} added to movies list. Goto the last Page..`);
    window.location.href = "/";
  }
  return (
    <div>
      <h3> Add Todo Section</h3>
      <input type="text" id="todobox" placeholder="Enter Movie Name" />
      <button
        id="addbtn"
        onClick={() => {
          addTodo();
        }}
      >
        Add Movie
      </button>
    </div>
  );
}
