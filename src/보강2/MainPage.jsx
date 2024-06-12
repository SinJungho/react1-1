import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  background: grey;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const Button = styled.button`
  color: ${(props) => (props.dark ? "white" : "dark")};
  background: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid black;
`;

const RoundButton = styled(Button)`
  border-radius: 16px;
`;

const blockItem = [
  { label: "1", padding: "1rem", background: "red" },
  { label: "2", padding: "1rem", background: "blue" },
  { label: "3", padding: "1rem", background: "orange" },
];
export default function MainPage(props) {
  return (
    <Wrapper>
      <Title>안녕하세요</Title>
      <Button>Nomal</Button>
      <Button dark>Dark</Button>
      <RoundButton>Round Button</RoundButton>
      <br />
      {blockItem.map((blockItem) => {
        <block
          padding={blockItem.padding}
          backgroundColor={blockItem.background}
        >
          {blockItem.label}
        </block>;
      })}
    </Wrapper>
  );
}
