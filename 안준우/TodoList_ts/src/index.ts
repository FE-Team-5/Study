{
  const $input = document.getElementById("input")! as HTMLInputElement;
  const $todoList = document.getElementById("to-do-list")! as HTMLInputElement;
  const $addBtn = document.getElementById(
    "input-add-btn"
  )! as HTMLButtonElement;
  let list: Item[] = [];
  //   type Item = {
  //     text: string;
  //     done: boolean;
  //   };
  interface Item {
    text: string;
    done: boolean;
  }
  function init(): void {
    $addBtn.addEventListener("click", onClickAdd);
  }
  function render(): void {
    $todoList.innerHTML = "";
    list.forEach((item: Item, index: number) => {
      $todoList.innerHTML += makeListItem(item, index);
    });
  }
  function getListFromLocalStorage(): void {
    const str = localStorage.getItem("todos");
    $todoList.innerHTML = "";
    if (str) {
      list = JSON.parse(str) as Item[];
      render();
    }
  }

  function onClickAdd(): void {
    const temp: Item = {
      text: $input.value,
      done: false,
    };
    list.push(temp);
    localStorage.setItem("todos", JSON.stringify(list));
    render();
  }

  // 이벤트 전파 방식
  $todoList.addEventListener("click", (event: MouseEvent) => {
    const target: HTMLElement = event.target as HTMLElement;
    const li = target.closest("li"); // Find the closest <li> element
    const index = Number(li!.getAttribute("data-index")); // Get the data-index attribute
    if (target.id === "delete-btn") {
      if (index !== null) {
        list.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(list));
        render();
      }
    } else if (target.classList.contains("toggle-done")) {
      if (index !== null) {
        list[index]!.done = !list[index]!.done;
        // Update localStorage
        localStorage.setItem("todos", JSON.stringify(list));

        // Re-render the list
        render();
      }
    }
  });

  function makeListItem(item: Item, index: number): string {
    return `
    <li data-index=${index}>
          <input type="checkbox" class="toggle-done" ${
            item.done ? "checked" : ""
          }>
          <span>${item.text}</span>
          <button id="delete-btn">Del</button>
    </li>
    `;
  }
  init();
  getListFromLocalStorage();
}
