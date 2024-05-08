export default function MyButton(props) {
  const handleDelete = (id, e) => {
    console.log(id, e.target);
  };

  return <button onClick={(e) => handleDelete(1, e)}>삭제</button>;
}
