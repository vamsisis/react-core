import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {
  //now using Props for re-useablity from other component

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div clasName="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
