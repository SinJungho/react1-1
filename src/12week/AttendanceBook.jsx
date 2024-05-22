export default function AttendanceBook(props) {
  const students = [
    { id: 1, name: "홍길동1" },
    { id: 2, name: "홍길동2" },
    { id: 3, name: "홍길동3" },
    { id: 4, name: "홍길동4" },
    { id: 5, name: "홍길동5" },
  ];

  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}
