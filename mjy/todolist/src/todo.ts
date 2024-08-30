{
  function getElement<T extends HTMLElement>(id: string): T | null {
    return document.querySelector(id);
  }

  const $todoInput = getElement<HTMLInputElement>("#todoInput");
  const $todoBtn = getElement<HTMLButtonElement>("#todoBtn");
  const $todoList = getElement<HTMLUListElement>(".todoList");
  const $deleteBtn = getElement<HTMLElement>(".fa-circle-xmark");

  let index = 0;

  const addItem = (): void => {
    if ($todoInput) {
      if ($todoInput.value != "") {
        const li = <HTMLElement>document.createElement("li");
        li.classList.add("todoItem");
        li.dataset.index = (index++).toString();
        li.innerHTML = `
          <p>${$todoInput?.value}</p>
          <i class="fa-solid fa-circle-xmark"></i>`;

        li.addEventListener("click", () => {
          li.classList.toggle("done");
        });

        $todoList?.append(li);
        $todoInput.value = "";
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem();
    }
  };

  const deletItem = () => {
    console.log("test");
  };

  $todoBtn?.addEventListener("click", addItem);
  $todoInput?.addEventListener("keyup", handleKeyDown);
  $deleteBtn?.addEventListener("click", deletItem);
}
