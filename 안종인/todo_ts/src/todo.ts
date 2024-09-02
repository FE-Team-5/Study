document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input") as HTMLInputElement;
  const addButton = document.getElementById("add-button") as HTMLButtonElement;
  const todoList = document.getElementById("todo-list") as HTMLUListElement;
  const form = document.querySelector(".form") as HTMLFormElement;

  console.log(addButton);

  const addTodo = (e: Event) => {
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
      } else {
        newTodo.style.textDecoration = "line-through";
      }
    });

    todoList.appendChild(newTodo);

    todoInput.value = "";
  };

  form.addEventListener("submit", addTodo);
});
