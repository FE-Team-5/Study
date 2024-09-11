https://github.com/chorom-ham/vanilla-js-todo-1886px

해당 과제 ts로 구현.

###

```jsx
  const $todoList = document.getElementById("to-do-list")! as HTMLInputElement;
  let list: Item[] = [];

  // 아래 2개의 차이는 뭘까??
  //   type Item = {
  //     text: string;
  //     done: boolean;
  //   };
  interface Item {
    text: string;
    done: boolean;
  }

    function getListFromLocalStorage(): void {
    const str = localStorage.getItem("todos");
    $todoList.innerHTML = "";
    if (str) {
      list = JSON.parse(str) as Item[];
      render();
    }
  }
```

**Type과 Interface의 공통점 2가지**

1. **둘 다 객체 타입을 정의하는데 사용할 수 있다.**
   → 즉, 위의 경우에서는 둘 다 사용하는데 아무 문제가 없다.
2. **둘 다 확장 가능하다.**
   → interface는 상속을 통해 확장할 수 있고, type은 ‘&’를 통해 확장할 수 있다.

```jsx
// Interface 상속
interface Item {
  text: string;
  done: boolean;
}

interface UrgentItem extends Item {
  priority: "high" | "low";
}

// Type의 인터섹션
type Item = {
  text: string,
  done: boolean,
};

type UrgentItem = Item & {
  priority: "high" | "low",
};
```

\*\*Type과 Interface의 차이점 2가지

1.  Interface는 선언적 확장(Declaration Merging)이 가능하지만 type은 불가능하다.\*\*
    (선언적 확장 : 같은 이름의 interface를 선언하면, 자동으로 확장되는 것)

Interface

```jsx
interface Item {
  text: string;
  done: boolean;
}

interface Item {
  // 선언적 확장
  title: string;
}

const item: Item = {
  text: "테스트",
  done: true,
  title: "제목",
};
```

type

```jsx
type Item = {
  text: string,
  done: boolean,
};
// ❗️Error: Duplicate identifier 'Item'.
type Item = {
  title: string,
};
```

1. **Interface는 computed value의 사용이 불가능하지만 type은 사용이 가능하다.**
   (computed value란? 계산된 속성의 줄임말로서 아래 예시를 통해 이해)

```jsx
type Subjects = 'math' | 'science' | 'sociology';

interface Grades {
  // ❗️Error: A mapped type may not declare properties or methods.
  [key in Subjects]: string;
}

type Grades = {
  [key in Subjects]: string;
}
```

type은 모든 타입, interface는 객체에 대한 타입을 선언할 때 사용할 수 있다.

단순 원시값, 튜플, 유니언 타입을 생성할 때는 type을 사용하는 것이 좋다.

```jsx
type Name = string; // primitive
type Age = number;
type Person = [string, number, boolean]; // tuple
type NumberString = string | number; // union
```

객체 타입을 정희할 때는 인터페이스를 사용하는 것이 좋다.
