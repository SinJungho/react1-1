export default function Card(props) {
  const { title, backgroundColor, childeren } = props;
  return (
    <div style={{ backgroundColor: backgroundColor || "white" }}>
      {title && <h1>{title}</h1>}
      {childeren}
    </div>
  );
}
