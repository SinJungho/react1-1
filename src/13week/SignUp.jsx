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
