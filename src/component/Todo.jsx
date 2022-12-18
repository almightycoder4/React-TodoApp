import { useState, useEffect } from "react";
import Addtodo from "./Addtodo";
import Displaytodo from "./Displaytodo";
export default function Todo() {
  let [todo, settodo] = useState(null);
  let [len, setlen] = useState();
  let [count, setcount] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/todolist?_page=${count}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        settodo(data);
      });
    fetch(`http://localhost:3000/todolist`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setlen(data.length);
      });
  }, [count]);
  //console.log(len);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Todo Server</h1>
      <Addtodo />
      {todo && <Displaytodo todo={todo} />}
      <button
        onClick={() => {
          setcount(1);
        }}
      >
        First Page
      </button>
      <input
        type="button"
        value={"-"}
        onClick={() => {
          if (count > 1) setcount(count - 1);
        }}
      />
      <input
        type="number"
        value={count}
        style={{ width: "40px", textAlign: "center" }}
      />
      <input
        type="button"
        onClick={() => {
          if (count < len / 10) {
            setcount(count + 1);
          }
        }}
        value={"+"}
      />
      <button
        onClick={() => {
          setcount(len / 10);
        }}
      >
        Last Page
      </button>
    </div>
  );
}
