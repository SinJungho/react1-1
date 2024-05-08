export default function Greeting(props) {
  if (props.isLogedIn) {
    return <p>환영합니다.</p>;
  } else {
    return <p>로그인해 주세요.</p>;
  }
}
