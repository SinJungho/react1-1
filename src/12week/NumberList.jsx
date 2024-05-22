import React from "react";

export default function NumberList(props) {
  const numbers = [1, 2, 3, 4, 5];
  const todoList = [
    { id: 1, todo: "할일" },
    { id: 2, todo: "할일" },
    { id: 3, todo: "할일" },
    { id: 4, todo: "할일" },
    { id: 5, todo: "할일" },
  ];

  const listItems = numbers.map((number, index) => (
    <li key={index}>{number}</li>
  ));

  const listItems2 = todoList.map((todoList) => (
    <li key={todoList.id}>{todoList.todo}</li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <ol>{listItems2}</ol>
    </>
  );
}
