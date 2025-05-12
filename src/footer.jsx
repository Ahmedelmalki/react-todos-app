import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer({itemsLeft, clearCompleted}){
    const navigate = useNavigate();
    return (
        <footer>
        <span>{itemsLeft} items left</span>
        <button onClick={() => navigate("/")}>All</button>
        <button onClick={() => navigate("/active")}>Active</button>
        <button onClick={() => navigate("/completed")}>Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </footer>
    )
}