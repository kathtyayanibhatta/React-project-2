import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment key="random">
          <p>
            Authentic Italian cusine. 6 creative dishes to choose from. All from
            our stone oven,all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza PizzaObject={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
function Pizza({ PizzaObject }) {
  // if (PizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${PizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={PizzaObject.photoName} alt={PizzaObject.name}></img>
      <div>
        <h3>{PizzaObject.name}</h3>
        <p>{PizzaObject.ingredients}</p>
        <span>{PizzaObject.soldOut ? "SOLD OUT" : PizzaObject.price}</span>
      </div>
    </li>
  );
}

function Order({ closeHr }) {
  return (
    <div className="order">
      <p>We're open until {closeHr}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHr = 12;
  const closeHr = 22;
  const isOpen = hour >= openHr && hour <= closeHr;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHr={closeHr}></Order>
      ) : (
        <p>
          We're happy to welcome you between {openHr}:00 and {closeHr}:00
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
