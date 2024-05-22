import { useState } from "react";

export default function NameForm(params) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`입력한 이름 : ${value}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="이름을 입력하세요"
      />
      <button type="submit">제출</button>
    </form>
  );
}
