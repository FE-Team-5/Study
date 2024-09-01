{
  //const $input = document.getElementById("input")! as HTMLInputElement;
  const $todoList = document.getElementById("to-do-list")! as HTMLInputElement;
  let list: Item[] = [];
  type Item = {
    text: string;
    done: boolean;
  };
  function render(): void {
    list.forEach((item: Item) => {
      $todoList.innerHTML += makeListItem(item);
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

  function makeListItem(item: Item): string {
    return `
    <li>
          <span>${item.text}</span>
          <button id="delete-btn">Del</button>
    </li>
    `;
  }

  getListFromLocalStorage();
}
