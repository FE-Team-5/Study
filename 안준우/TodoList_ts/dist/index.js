"use strict";
{
    const $todoList = document.getElementById("to-do-list");
    let list = [];
    function render() {
        list.forEach((item) => {
            $todoList.innerHTML += makeListItem(item);
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
    function makeListItem(item) {
        return `
    <li>
          <span>${item.text}</span>
          <button id="delete-btn">Del</button>
    </li>
    `;
    }
    getListFromLocalStorage();
}
