# React

# 신정호 202030421

### 목차

- [1주차](#1주차-2024-03-06)
- [2주차](#2주차-2024-03-13)
- [3주차](#3주차-2024-03-20)
- [4주차](#4주차-2024-03-27)
- [5주차](#5주차-2024-04-03)
- [7주차](#7주차-2024-04-17)
- [9주차](#9주차-2024-05-01)
- [10주차](#10주차-2024-05-08)
- [12주차](#12주차-2024-05-22)
- [13주차](#13주차-2024-05-29)
- [14주차](#14주차-2024-06-05)

## 14주차 (2024-06-05)

### 오늘 배운 내용

- Shared State
- 합성

### Shared State

- 공유된 state를 말한다.

  - 어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용되는 경우

- Shared State 예제

```react
import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

```

- 자식 컴포넌트 state를 제거한다.
  `const [isActive, setIsActive] = useState(false);` 해당 코드 삭제 후,
  `function Panel({ title, children, isActive }) {` 함수 매개변수에 isActive 추가
- 하드 코딩된 값을 공통의 부모에게 전달한다.
  - Accordian
    - Panel
    - Panel
  - 와 같은 구조를 가지고 있다.

```react
import { useState } from 'react';

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={true}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={true}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

```

- 공통의 부모에 state를 추가하고 이벤트 핸들러와 함께 전달한다.
  - 한 번에 하나의 패널만 활성화 해야 하기 때문
  - 같은 부모 컴포넌트인 `Accordian`컴포넌트에 어떤 패널이 활성화가 된 건지 추적
  - `const [activeIndex, setActiveIndex] = useState(0);`
- 상태 끌어올리기가 적용된 모습

```react
import { useState } from 'react';


export default function Accordion() {
const [activeIndex, setActiveIndex] = useState(0);
return (
<>

<h2>Almaty, Kazakhstan</h2>
<Panel
title="About"
isActive={activeIndex === 0}
onShow={() => setActiveIndex(0)} >
With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
</Panel>
<Panel
title="Etymology"
isActive={activeIndex === 1}
onShow={() => setActiveIndex(1)} >
The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
</Panel>
</>
);
}

function Panel({
title,
children,
isActive,
onShow
}) {
return (

<section className="panel">
<h3>{title}</h3>
{isActive ? (
<p>{children}</p>
) : (
<button onClick={onShow}>
Show
</button>
)}
</section>
);
}
```

### 합성

- 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법
- children prop을 사용해 자식 엘리먼트를 출력에 그대로 전달
- 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용

```react
function FancyBorder(props){
return(
  <div className={"FancyBorder FancyBorder-" + props.color}>
    {props.children}
  </div>
)
}
```

- react에서는 props.children을 통해 컴포넌트를 하나로 모아 제공함
  - 여러 개 children 집합이 필요한 경우 별도로 props를 정의해 원하는 컴포넌트에 삽입

---

## 13주차 (2024-05-29)

### 오늘 배운 내용

- 제어 컴포넌트
- textarea 태그
- select 태그
- 실습 1
- 실습 2
- Shared State
- 하위 컴포넌트에서 State 공유

### 제어 컴포넌트

- 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트
- 리액트의 통제를 받는 입력 폼 엘리먼트를 의미함

```

function NameForm(props){
const [value, setValue] = useState('');
const handleChange = (event) => {
setValue(event.target.value);
}
const handleSubmit = (event) => {
alert('입력한 이름 : ' + value);
event.preventDefault();
}
return(

<form>
<label>이름 :
<input type="text" value={value} onChange={handleChange} />
</label>
<button type="submit">제출</button>
</form>
)
}

```

- `input` 태그의 `value={value}`
  - 리액트 컴포넌트의 `state`에서 값을 가져다 줌
- `onChange={handleChange}`
  - `handleChange` 함수에서 `setValue()` 함수를 사용해 새롭게 변경된 값을 `value`라는 이름으로 `state`에 저장
- `event.target`
  - 현재 발생한 이벤트 타겟을 의미함
- `event.target.value`
  - 타겟의 value 속성 값을 의미함

### textarea 태그

- `<textarea>` 태그는 여러 줄에 걸쳐서 나올 정도로 긴 텍스트를 입력 받기 위한 HTML 태그

```

function RequestForm(props){
const [value, setValue] = useState("요청사항을 입력하세요.");
const handleChange = (event) => {
setValue(event.target.value);
}
const handleSubmit = (event) => {
alert("입력한 요청사항: " + value);
event.preventDefault();
}
return(

<form onSubmit={handleSubmit}>
<label>
요청 사항 :
<textarea value={value} onChange={handleChange} />
</label>
<button type="submit">제출</button>
</form>
)
}

```

### select 태그

- `<select>` 태그는 드롭 다운 목록을 보여주기 위한 태그이다.

```

function FruitSelect(){
const [value, setValue] = useState('grape');
const handleChange = (event) => {
setValue(event.targe.value);
}

const handleSubmit = (event) => {
alert("선택한 과일 : " + value);
event.preventDefault();
}

return(

<form onSubmit={handleSubmit}>
<label>
과일을 선택하세요 :
<select value={value} onChange={handleChange}>
<option value="apple">사과</option>
<option value="banana">바나나</option>
<option value="grape">포도</option>
<option value="watermelon">수박</option>
</select>
</label>
<button type="submit">제출</button>
</form>
)
}

```

- `handleChange()`
  - `setValue()` 함수를 사용해 값을 업데이트한다.
- 값을 변경, 업데이트 할 때
  - `value`의 속성을 이용해 값을 변경함
  - `setValue()` 함수를 사용해 값을 업데이트함

### 실습 1

```

import { useState } from "react";

export default function SignUp(props){
const [name, setName] = useState("");

const handleChange = (event) => {
setName(event.target.value);
}

const handleSubmit = (event) => {
alert(`이름 : ${name}`);
event.preventDefault();
}

return(

<form>
<label>이름 :
<input type="text" value={name} onChange={handleChangeName} />
</label>
</form>
)
}

```

### 실습 2

```

import { useState } from "react";

export default function SignUp() {
const [name, setName] = useState();
const [gender, setGender] = useState();
const [test, setTest] = useState();

const handleChangeName = (e) => {
setName(e.target.value);
};

const handleChangeGender = (e) => {
setGender(e.target.value);
};

const handleChangeTest = (e) => {
setTest(e.target.value);
};

const handleSubmit = (e) => {
alert(`이름 : ${name} 성별 : ${gender} 입력내용 : ${test}`);
};

return (

<form onSubmit={handleSubmit}>
<label>이름 : </label>
<input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleChangeName}
      />
<br />
<label>성별 :</label>
<select value={gender} onChange={handleChangeGender}>
<option value="남자">남자</option>
<option value="여자">여자</option>
</select>
<br />
<textarea
        placeholder="텍스트를 입력하세요."
        value={test}
        onChange={handleChangeTest}
      ></textarea>
<button type="submit">클릭</button>
</form>
);
}

```

### Shared State

- 공유된 state를 뜻함
- 어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우

### 하위 컴포넌트에서 State 공유하기

```

export default function BoilingVerdict(props) {
if (props.celsius >= 100) {
return <p>물이 끓습니다.</p>;
}
return <p>물이 끓지 않습니다.</p>;
}

```

- state에 있는 온도 값은 BoilingVerdict 컴포넌트에 celsius 이름의 props로 전달됨

---

## 12주차 (2024-05-22)

### 오늘 배운 내용

- 리스트, 키
- Form

### 리스트, 키

- 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같다
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값
- map 함수를 이용해서 렌더링을 한다.

```react
const numbers = [1,2,3,4,5]
const listItems = numbers.map((number) => {<li>{number}</li>});
```

### Form

- 리액트는 모든 데이터를 state에서 관리한다.
  - HTML은 자체적으로 state를 관리한다.

---

## 10주차 (2024-05-08)

### 오늘 배운 내용

- Arguments 전달하기
- 조건부 렌더링
  - 엘리먼트 변수
  - 인라인 조건
  - 삼항연산자
  - 컴포넌트 렌더링 막기

### Arguments 전달하기

- 함수에 전달할 데이터를 Argument라고 한다.
- 클래스 컴포넌트는 bind 함수를 사용해서 전달한다.
- 함수형 컴포넌트는 arrow function을 주로 사용한다.

### 엘리먼트 변수

- 렌더링 해야 할 컴포넌트를 변수처럼 다루고 싶을 때 엘리먼트 변수를 사용한다.

- button 변수에 담아 컴포넌트를 대입한 예제 코드

```
let button;
if (isLogedIn) {
  button = <LogoutButton onClick={handleLogoutClick} />;
} else {
  button = <LoginButton onClick={handleLoginClick} />;
}
```

### 인라인 조건

- 별도로 분리된 곳에 적성하지 않고, 해당 코드가 필요한 곳 안에 직접 집어넣는다.
- 인라인 조건은 조건문을 코드 안에 집어 넣는 것이다.

```
true && expression -> expression
false && expression -> false
```

### 삼항 연산자

- 삼항연산자를 이용해서 인라인 If - Else를 사용할 수 있다.
  `<조건문> ? 참일 경우 : 거짓일 경우`

### 컴포넌트 렌더링 막기

- 컴포넌트를 렌더링 하고 싶지 않을 때는 null을 반환한다.

```
export default function WarningBanner(props) {
  if (props.warning) {
    return null;
  }
  return <div>경고!!</div>;
}
```

- false인 경우에만 null을 반환하기 때문에 컴포넌트를 출력하지 않는다.

---

## 9주차 (2024-05-01)

### 오늘 배운 내용

- Hook의 규칙
- 커스텀 훅
- 이벤트 핸들링

### Hook의 규칙

- Hook은 최상위 레벨에서만 호출해야 한다.
- 함수형 컴포넌트에서만 Hook을 호출해야 한다.

### 커스텀 훅

- React에서 기본으로 제공되는 Hook 이외에 추가적으로 필요한 기능이 있다면 커스텀 훅을 만들 수 있다.
- 반복적으로 사용되는 로직을 Hook으로 만들어 재사용성을 높일 수 있다.
- use로 시작되지 않으면 특정 함수의 내부에서 Hook을 호출하는지 알 수 없기 때문에 use를 앞에 붙여야 한다.

### 이벤트 핸들링

- 이벤트가 발생 했을 때 이벤트를 처리하는 함수
- 클래스, 함수형 컴포넌트 둘 다 사용 가능하다.
- 클래스 컴포넌트 경우 함수로 정의해 생성자에서 binding 해서 사용한다.
- 함수형 컴포넌트 경우 arrow function을 사용해서 정의 한다.

---

## 7주차 (2024-04-17)

### 오늘 배운 내용

- Hook

### Hook

- 클래스형 컴포넌트에서는 생성자에서 state를 초기화 하고, setState() 함수를 통해 state를 업데이트한다.
- state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행하도록 만들어진 함수이다.
- Hook의 이름은 use로 시작된다.

### useState

- Hook 함수 중에서 가장 기본이 되는 Hook 함수이다.
- state를 사용하기 위한 Hook 함수이다.

### useEffect

- side effect는 수행하기 위한 것이다.
- <b style = "color:red">클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공</b>한다.
- 책에 나오는 부작용은 원래의 용도 혹은 효과외에 부수적인 효과를 가지고 있는 것을 말한다.
- `userEffect(이펙트 함수, 의존성 배열)`
- 의존성 배열은 배열안에 변수 중에 하나라도 값이 변경 되었을 때 이펙트 함수가 실행된다.
- 처음 컴포넌트가 렌더링 된 후, 재 렌더링 이후에 실행된다.
- 마운트와 언마운트 될 때만 한 번씩 실행되고 싶으면 빈 배열을 넣으면 된다.
  - props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러번 실행되지 않는다.

### useMemo

- 이전 계산 값을 가지고 있기 때문에 연산량이 많은 작업의 반복을 방지할 수 있다.
- 즉, 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거해 실행 속도를 높일 수 있다.
- 렌더링이 일어나는 동안에 실행되기 때문에, 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안된다.

### useRef

- 특정 컴포넌트에 접근할 수 있는 객체를 의미한다.
- 래퍼런스 객체를 반환하는데 사용된다.
- 반환된 레퍼런스객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지된다.

---

## 5주차 (2024-04-03)

### 오늘 배운 내용

- 컴포넌트
- Props
- State

### 컴포넌트

- 리액트는 컴포넌트 구조로 이뤄져있다.
- 어떠한 속성들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성해 리턴해 주는 것이다.
- <b>항상 대문자로 시작한다.</b>
- React 안에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있다.

### 컴포넌트 종류

- 함수형 컴포넌트
  ```
  export import function Welcome(props){
    return <h1>Hello World!</h1>
  }
  ```
- 클래스 컴포넌트
  ```
  class Welcome extends React.Component(props){
   render(){
     return <h1>Hello World!</h1>
   }
  }
  ```

### Props

- property의 줄임말이다.
- 리액트에서 속성으로 사용이 된다.
- `props`는 컴포넌트에 전달할 다양한 정보들을 담고 있다.
- 불변성을 가지고 있다.
  - 읽기만 가능하며, 새 엘리먼트를 생성해 새로운 `props`를 전달해야 한다.
- JSX에서는 `key-value` 형태로 props를 사용한다.

### State

- 리액트 컴포넌트의 상태를 의미한다.
- 상태의 의미는 컴포넌트의 데이터를 의미한다.
  - 컴포넌트의 변경 가능한 데이터를 말한다.
- State는 특별한 형태가 아닌 자바스크립트의 객체이다.
- `useState()` 함수를 사용해서 관리한다.

---

## 4주차 (2024-03-27)

### 오늘 배운 내용

- JSX란?
- 엘리멘트

### JSX란?

- XML, HTML을 합친 언어이다.
- React는 컴포넌트 단위로 이뤄져 있기 때문에 사용하는 목적이 크다.
- `const element = <h1>Hello World!</h1>;`
- JS로 작성할 경우 `createElement()` 함수를 사용해야 한다.
- JSX는 모든 Javascript 문법을 사용할 수 있다.
- XML 코드를 사용하다가 중간에 자바스크립트 코드를 넣을 경우 `{ }`를 이용하면 된다.

### 엘리멘트

- 리액트 앱을 구성하는 가장 작은 요소이다.
- 리액트 엘리멘트는 VDOM 형태를 가지고 있다.
- 컴포넌트, 속성 및 내부 모든 자식들은 일반 Javascript 객체이다.
- 마음대로 변경할 수 없는 <b style="color: red">불변성</b>을 가지고 있다.
- <b style="color: red">엘리멘트를 렌더링하기 위해서는 해당 코드를 입력해야 한다.</b>
  `ReactDOM.render(element, document getElementById("root"));`
- 렌더링 할 때는 `<div>` 태그로 하나로 묶어줘야 한다.

---

## 3주차 (2024-03-20)

### 오늘 배운 내용

- React란 무엇인가?
- React의 장점
- create-react-app (React 프로젝트 생성)

### React란 무엇인가?

- 웹 및 앱 유저 인터페이스를 위한 라이브러리이다.
- SPA를 <b  style = "color: red">쉽고 빠르게</b> 만들수 있도록 도와주는 도구이다.
  - SPA : Single Page Application

### React의 장점

- VDOM을 사용하면 변경 사항만 대해서 업데이트 하기 때문에 <b>속도가 빠르다</b>.
  - 즉, VDOM은 비동기식 방법으로 렌더링한다.
    ![VDOM과 DOM의 차이](./3week/image.png)
- <b>컴포넌트 기반</b> 구조로 이뤄져 있다.

### create-react-app (React 프로젝트 생성)

- 터미널 새로 생성한 후 `npx create-react-app app-name`를 입력한다.
- 패키지 경로를 확인 후 진행할 것이냐고 물어볼 경우 y를 입력한다.
  - 물어보지 않는 경우도 있었으나, 설치가 가능했다.
- 성공적으로 프로젝트를 생성하면 아래와 같은 트리 구조가 나타나게 된다.<br />
  ![React 프로젝트 구성](./3week/test-app/react_project.png)
  - node_modules
  - public
    - 앱을 컴파일 하는데 필요하지 않는 요소들을 넣는다.
    - 정적 파일들을 담는 곳이다.
      - html, 이미지 파일이 있다.
  - src
    - 앱이 컴파일 하는데 사용하는 요소들을 넣는다.
  - .gitignore
    - node_modules 폴더와 같이 용량이 크거나, 개발 계획서등 필요하지 않는 파일들을 제외할 때 쓰인다.
  - package.json
    - npm 명령어 혹은 앱 이름,버전 등에 쓰인다.

---

## 2주차 (2024-03-13)

### 오늘 배운 내용

- Github 초기화
- HTML은 무엇인가?

---

### Github 초기화

- Git 초기화 하는 명령어
  - `git init`
- 각 디렉토리 별로 초기화 하는 명령어
  - 개인 PC 환경에서 사용할 때
    - `git config --global user.name "userName"`
  - 공용 PC 환경에서 사용할 때
    - `git config user.name "userName"`
    - ` git config user.email`
- commit 및 message 쓰기
  - 영어가 기본으로 쓰인다.
  - message는 enter key 2번 누르고 쓰면 된다.

### HTML은 무엇인가?

- 웹 사이트를 구성하는 하나의 구성 요소다.
- Tag를 이용해 하나의 큰 뼈대를 만든다.

### Javasript는 무엇인가?

- 동적으로 변경되는 콘텐츠를 만들고, 멀티 미디어를 제어하며, 이미지에 애니메이션을 적용한다.
- 브라우저에서 행하는 작업들을 제어하는 스크립트이다.

### 기본 자료형

- var
  - 재선언이 가능하며, 재할당도 가능하다.
- let
  - 재선언이 불가능하며, 재할당은 가능하다.
- const
  - 재선언, 재할당이 불가능하다.

### JSON

```javascript
let a = {
  name: "jungho",
  telnum: "010-2446-7600",
};
```

### Arrow Function

```javascript
let arrow = (a) => a + b;
```

---

## 1주차 (2024-03-06)

### 오늘 배운 내용

- Markdown 기본 사용법 및 태그
- 시멘틱 버전

---

### 제목 태그

# h1

## h2

### h3

#### h4

##### h5

###### h6

### 줄 바꿈

`<br>`을 쓰거나 스페이스 바 2번을 입력한다.
텍스트 입력<br>줄 바꿈.

### 리스트

1. 숫자형 리스트

- 글머리형 리스트

### 코드 블럭

- 백틱(``)을 사용해서 감싼다.
- 백틱 옆에 프로그래밍 언어를 적어주면 적용이 된다.

```js
let a = 12;
```

### 구분선

\*\*\* 을 쓰거나 --- 을 입력하면 된다.

### 글씨 효과

- _기울임_
- **굵게**
- **_기울이면서 굵게_**

### 링크

- [네이버](https://naver.com)
- [문서 내 링크](#제목-태그)

### 이미지

![에스파 윈터](image.png)
