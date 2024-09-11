"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
    const form = document.querySelector(".form");
    console.log(addButton);
    const addTodo = (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText === "") {
            alert("할 일을 입력하세요.");
            return;
        }
        const newTodo = document.createElement("li");
        newTodo.innerHTML = todoText;
        newTodo.addEventListener("click", () => {
            if (newTodo.style.textDecoration === "line-through") {
                newTodo.style.textDecoration = "none";
            }
            else {
                newTodo.style.textDecoration = "line-through";
            }
        });
        todoList.appendChild(newTodo);
        todoInput.value = "";
    };
    form.addEventListener("submit", addTodo);
});
