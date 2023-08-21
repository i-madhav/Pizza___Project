
import React, { StrictMode } from "react";
import  ReactDOM  from "react-dom/client";
import './index.css'

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
  

function App(){
    return(
        <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
        </div> 
    )
}

const Header = ()=>{ 
    const stylez = {}
    return(
        <header className="header">
             <h1 style={stylez} >Fast React Pizza.Co</h1>
        </header>
       
    )
}

const Menu = ()=>{

    const pizzas = pizzaData;
    const numPizas = pizzas.length
    return(
        <main className="menu">
            <h2>Our Menu</h2>
    
          {
            numPizas > 0 ? (
                <ul className="pizzas">
                    {pizzas.map((pizza)=>{
                       return <Pizza  pizzaObj ={pizza} key={pizza.name}/>
                    })}
                </ul>
            ):<p>We're still working on our website . Please come later</p>
          }
            {/* <Pizza 
            name="Pizza Spinaci" 
            ingredients="Tomato, mozarella, spinach, and ricotta cheese" 
            photoName="pizzas/spinaci.jpg" 
            price={10}
            />

            <Pizza 
             name= "Pizza Funghi"
             ingredients= "Tomato, mozarella, mushrooms, and onion"
             price = {12}
             photoName= "pizzas/funghi.jpg"
             />

            <Pizza 
             name= "Pizza Salamino"
             ingredients= "Tomato, mozarella, and pepperoni"
             price = {15}
             photoName= "pizzas/salamino.jpg"
             />

            <Pizza 
             name= "Pizza Prosciutto"
             ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
             price = {18}
             photoName= "pizzas/prosciutto.jpg"
             />

            <Pizza 
             name= "Focaccia"
             ingredients= "Bread with italian olive oil and rosemary"
             price = {6}
             photoName= "pizzas/focaccia.jpg"
             />

            <Pizza 
             name= "Pizza Margherita"
             ingredients= "Tomato and mozarella"
             price = {10}
             photoName= "pizzas/margherita.jpg"
             /> */}
        </main>
    )
}

function Pizza({pizzaObj}){
console.log(pizzaObj)
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" :"" }`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
            <h1>{pizzaObj.name}</h1>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "Sold-Out" : pizzaObj.price}</span>
            </div>
        </li>
    )
}

const Footer = ()=>{
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour>=openHour && hour<closeHour;
    console.log(isOpen)
    // if(hour>=openHour && hour<closeHour){
    //     alert("We're Opened")
    // }else{
    //     alert("We're Closed Dumbo")
    // }
    return(
        <footer className="footer ">
            {isOpen ? ( <Order closeHour = {closeHour}/>
            ):<p>We,re currently closed. Please come back later</p>} 
            </footer>
    )
}

const Order = ({closeHour})=>{
    return(
        <div className="order">
        <p>
        We're Open until {closeHour}:00 . Come Visit Us Or Order Online !
        </p>

        <button className="btn">Order Now </button>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<StrictMode><App /></StrictMode> )