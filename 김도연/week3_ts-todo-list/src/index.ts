interface ElementRefs {
  $todoInput: HTMLInputElement;
  $addBtn: HTMLButtonElement;
  $todos: HTMLUListElement;
}

const getElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with ID ${id} is missing in the DOM`);
  }
  return element as T;
};

// 초기화 null 체크
const initElements = (): ElementRefs => ({
  $todoInput: getElement<HTMLInputElement>("todo-input"),
  $addBtn: getElement<HTMLButtonElement>("add-btn"),
  $todos: getElement<HTMLUListElement>("todos"),
});

const refs = initElements();

const addTodo = () => {
  const { $todoInput, $todos } = refs;
  const inputValue = $todoInput.value.trim();
  if (!inputValue) return;

  const li = document.createElement("li");
  li.classList.add("todoItem");
  li.innerHTML = `<input type="checkbox" id="checkbox" />
                  <span class="checkmark"></span>
                  <span class="content">${inputValue}</span>
                  <button class="delete-btn">
                    <i class="fa-solid fa-trash"></i>
                  </button>`;
  $todos.appendChild(li);
  $todoInput.value = "";
};

const enterTodo = (e: KeyboardEvent) => {
  if (e.key === "Enter") addTodo();
};

const toggleCheckItem = (e: Event) => {
  const target = e.target as HTMLElement;
  const todo = target.closest("li") as HTMLLIElement;

  if (!todo) return;

  if (target.classList.contains("content")) {
    const checkbox = todo.querySelector(
      "input[type='checkbox']",
    ) as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
  }

  if (
    target.classList.contains("delete-btn") ||
    target.classList.contains("fa-trash")
  ) {
    todo.remove();
  }
};

refs.$addBtn.addEventListener("click", addTodo);
refs.$todoInput.addEventListener("keyup", enterTodo);
refs.$todos.addEventListener("click", toggleCheckItem);
