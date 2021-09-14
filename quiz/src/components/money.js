import { moneyListData } from "../data.js";
import { useState } from "react";

export function Money({questionNumber}) {
  
  return (
    <>
      <div className="side_container">
        <ul className="money-list">
          {moneyListData.map((item) => (
            <li
              className={
                questionNumber === item.id
                  ? "money-list-item active"
                  : "money-list-item"
              }
            >
              <span className="money-list-item-number">{item.id}</span>
              <span className="money-list-item-amount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
