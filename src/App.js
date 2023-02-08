import React, { useState } from "react";

import "./App.css";

function App() {
  const [courseGoals, setCorseGoals] = useState([
    { text: "Do All Exercise!", id: "g1" },
    { text: "DO the Practice!", id: "g2" },
  ]);

  const addGoalHandler =enteredText => {
   setCorseGoals( prevGoals => {
     const updatedGoals =[...prevGoals];
     updatedGoals.unshift({text:enteredText,id:Math.random().toString()});
     return updatedGoals;
   })

  }
  let content = <p style={{ textAlign: "center" }}>No Goals Found ,Vijay!</p>;
  return (
    <div>
      <section>
        <header
          style={{
            textAlign: "center",
            color: "red",
            fontWeight: "bolder",
            fontSize: 35,
          }}
        >
          This Is My To-Do List !{" "}
        </header>
      </section>
      <section id="goal-form"></section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
