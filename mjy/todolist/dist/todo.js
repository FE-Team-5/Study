"use strict";
{
    function getElement(id) {
        return document.querySelector(id);
    }
    const $todoInput = getElement("#todoInput");
    const $todoBtn = getElement("#todoBtn");
    const $todoList = getElement(".todoList");
    const $deleteBtn = getElement(".fa-circle-xmark");
    let index = 0;
    const addItem = () => {
        if ($todoInput) {
            if ($todoInput.value != "") {
                const li = document.createElement("li");
                li.classList.add("todoItem");
                li.dataset.index = (index++).toString();
                li.innerHTML = `
          <p>${$todoInput === null || $todoInput === void 0 ? void 0 : $todoInput.value}</p>
          <i class="fa-solid fa-circle-xmark"></i>`;
                li.addEventListener("click", () => {
                    li.classList.toggle("done");
                });
                $todoList === null || $todoList === void 0 ? void 0 : $todoList.append(li);
                $todoInput.value = "";
            }
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addItem();
        }
    };
    const deletItem = () => {
        console.log("test");
    };
    $todoBtn === null || $todoBtn === void 0 ? void 0 : $todoBtn.addEventListener("click", addItem);
    $todoInput === null || $todoInput === void 0 ? void 0 : $todoInput.addEventListener("keyup", handleKeyDown);
    $deleteBtn === null || $deleteBtn === void 0 ? void 0 : $deleteBtn.addEventListener("click", deletItem);
}
