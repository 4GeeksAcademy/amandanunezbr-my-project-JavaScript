/* eslint-disable */
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generador() {
    const initialPhrase = who[Math.floor(Math.random() * who.length)];
    const actionsPhrase = action[Math.floor(Math.random() * action.length)];
    const whatsPhrase = what[Math.floor(Math.random() * what.length)];
    const whensPhrase = when[Math.floor(Math.random() * when.length)];

    const finalResult = `${initialPhrase} ${actionsPhrase} ${whatsPhrase} ${whensPhrase}`;

    document.getElementById("respuesta").innerText = finalResult;
  }

  document.getElementById("generador").addEventListener("click", () => {
    console.log("excusa!");
    generador();
  });
};
