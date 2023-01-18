import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Display from "./component/Display";
import Card from "./component/Card";
import SideBar from "./component/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  const data = [
    {
      title: "Fancy Product",
      money: [40.0, 80.0],
      but: "View options",
      isHighFun: true,
    },
    {
      title: "Special Item",
      money: [20.0, 18.0],
      but: "Add to cart",
      isSale: true,
      star: true,
      isUnderStrike: true,
    },
    {
      title: "Sale Item",
      money: [50.0, 25.0],
      but: "Add to cart",
      isSale: true,
      isUnderStrike: true,
    },
    {
      title: "Popular Item",
      money: [0, 40.0],
      but: "Add to cart",
      star: true,
      value: true,
    },
    {
      title: "Sale Item",
      money: [50.0, 25.0],
      but: "Add to cart",
      isSale: true,
      isUnderStrike: true,
    },
    {
      title: "Fancy Product",
      money: [120.0, 280.0],
      but: "View options",
      isHighFun: true,
    },
    {
      title: "Special Item",
      money: [20.0, 18.0],
      but: "Add to cart",
      isSale: true,
      star: true,
      isUnderStrike: true,
    },
    {
      title: "Popular Item",
      money: [0, 40.0],
      but: "Add to cart",
      star: true,
      value: true,
    },
  ];

  let removeFromCart = (item) => {
    let index = active.findIndex((el) => el.title == item.title);
    active.splice(index, 1);
    setActive([...active]);
    setTotal(total - item.money[1]);
  };
  let addToCart = (item) => {
    setActive([...active, item]);
    setTotal(total + item.money[1]);
  };
  const [active, setActive] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Navbar />
      <Display />
      <section className="py-5 row">
        <div className="col-lg-9">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {data.map((el) => {
                return (
                  <Card
                    data={el}
                    cartItems={active}
                    handleAddToCart={addToCart}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-2 mx-5 pt-5 side">
          <form className="d-flex mb-5">
            <button className="btn btn-outline-dark" type="submit">
              <FontAwesomeIcon icon={faCartShopping} /> Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {active.length}
              </span>
            </button>
            <b className="mx-2 total">{`Total : $${total}`}</b>
          </form>
          {active.length === 0 ? (
            <div> No item in Cart</div>
          ) : (
            <ol className="list-group list-group-numbered">
              {active.map((el) => {
                return (
                  <SideBar removeFromCart={removeFromCart} cartItem={el} />
                );
              })}
            </ol>
          )}
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
