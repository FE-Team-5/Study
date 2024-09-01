"use strict";
{
    const $input = document.getElementById("input");
    const $todoList = document.getElementById("to-do-list");
    const $addBtn = document.getElementById("input-add-btn");
    let list = [];
    function init() {
        $addBtn.addEventListener("click", onClickAdd);
    }
    function render() {
        $todoList.innerHTML = "";
        list.forEach((item, index) => {
            $todoList.innerHTML += makeListItem(item, index);
        });
    }
    function getListFromLocalStorage() {
        const str = localStorage.getItem("todos");
        $todoList.innerHTML = "";
        if (str) {
            list = JSON.parse(str);
            render();
        }
    }
    function onClickAdd() {
        const temp = {
            text: $input.value,
            done: false,
        };
        list.push(temp);
        localStorage.setItem("todos", JSON.stringify(list));
        render();
    }
    $todoList.addEventListener("click", (event) => {
        const target = event.target;
        if (target.id === "delete-btn") {
            const li = target.closest("li");
            const index = Number(li.getAttribute("data-index"));
            if (index !== null) {
                list.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(list));
                render();
            }
        }
    });
    function makeListItem(item, index) {
        return `
    <li data-index=${index}>
          <span>${item.text}</span>
          <button id="delete-btn">Del</button>
    </li>
    `;
    }
    init();
    getListFromLocalStorage();
}
