import "./App.css";
import SplitPane from "./14week/SplitPane";
import Contact from "./14week/Contact";
import Chat from "./14week/Chat";

function App() {
  return (
    <div>
      <SplitPane left={<Contact />} right={<Chat />} />
    </div>
  );
}

export default App;
