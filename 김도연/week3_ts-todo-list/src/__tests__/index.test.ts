import { fireEvent } from "@testing-library/dom";

describe("Input field", () => {
  let $todoInput: HTMLInputElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="todo-input" placeholder="할 일 목록을 추가하세요." />
    `;

    $todoInput = document.getElementById("todo-input") as HTMLInputElement;
  });

  test("update value", () => {
    const testValue = "Hello, world!";
    fireEvent.input($todoInput, { target: { value: testValue } });
    expect($todoInput.value).toBe(testValue);
  });
});
