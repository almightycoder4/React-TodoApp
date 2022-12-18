export default function Displaytodo(props) {
  function changeTodo(status, id) {
    if (status) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        headers: myHeaders,
        method: "PATCH",
        redirect: "follow",
        body: JSON.stringify({ status: false }),
      };

      fetch(`http://localhost:3000/todolist/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        headers: myHeaders,
        method: "PATCH",
        redirect: "follow",
        body: JSON.stringify({ status: true }),
      };

      fetch(`http://localhost:3000/todolist/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
    window.location.href = "/";
  }

  function deltask(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      headers: myHeaders,
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:3000/todolist/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    window.location.href = "/";
  }

  let length = props.todo.length;
  if (length > 0) {
    return (
      <div id="todolist" style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ border: "2px solid red" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          {props.todo.map((el) => {
            return (
              <tbody>
                <tr>
                  <td>{el.id}</td>
                  <td>{el.task}</td>
                  <td id="status">{el.status ? "Complete" : "Incomplete"}</td>

                  <td>
                    <button
                      onClick={() => {
                        changeTodo(el.status, el.id);
                      }}
                    >
                      Change
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        deltask(el.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
