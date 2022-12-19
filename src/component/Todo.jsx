import { useState, useEffect } from "react";
import Addtodo from "./Addtodo";
import Displaytodo from "./Displaytodo";
export const fetchData = async (count) => {
  try {
    let res = await fetch(
      `https://morning-charm-curiosity.glitch.me/todolist?_page=${count}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    alert(error);
  }
};
export const fetchLen = async () => {
  try {
    let res = await fetch(`https://morning-charm-curiosity.glitch.me/todolist`);
    let data = await res.json();

    return data.length;
  } catch (error) {
    alert(error);
  }
};
export default function Todo() {
  let [todo, settodo] = useState([]);
  let [len, setlen] = useState(0);
  let [count, setcount] = useState(1);

  useEffect(() => {
    fetchData(count).then((todo) => settodo([...todo]));
    fetchLen().then((len) => setlen(len));
  }, [count]);
  console.log(len);

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
