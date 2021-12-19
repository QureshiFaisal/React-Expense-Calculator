import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";
function ExpenseItem(props) {
  // const ExpenseDate = new Date(2021, 2, 28);
  // const ExpenseItem = "Car Price";
  // const ExpensePrice = "$298";
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("UPDATED!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
