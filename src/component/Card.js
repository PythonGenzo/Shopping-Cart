import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ cartItems, data, handleAddToCart }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {data.isSale === true ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          ""
        )}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.title}</h5>
            {data.star === true ? (
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : (
              ""
            )}
            {data.isHighFun === true
              ? `$ ${data.money[0]}- $ ${data.money[1]}`
              : ""}
            {data.isUnderStrike === true ? (
              <span>
                <s>$ {data.money[0]}</s> $ {data.money[1]}
              </span>
            ) : (
              ""
            )}
            {data.value === true ? `$ ${data.money[1]}` : ""}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              disabled={cartItems.some((obj) => obj.title === data.title)}
              onClick={() => {
                handleAddToCart(data);
              }}
              className={`btn btn-outline-dark mt-auto `}
            >
              {data.but}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
