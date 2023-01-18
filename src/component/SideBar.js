import React from "react";

const SideBar = ({ cartItem, removeFromCart }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{cartItem.title}</div>$ {cartItem.money[1]}
      </div>
      <button
        onClick={() => removeFromCart(cartItem)}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </li>
  );
};

export default SideBar;
