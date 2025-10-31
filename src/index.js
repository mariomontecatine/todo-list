import "./style.css";
import { createTodo } from "./todo";

console.log("¡Hola desde Webpack y el proyecto Todo List!");

const todoTest = createTodo("Comprar Leche", "Supermercado", "10-05", "alta");
console.log(todoTest);
