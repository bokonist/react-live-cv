import "../styles/App.css";
import EditCV from "./EditCV";
import Preview from "./Preview";

function App() {
  return (
    <div className="App">
      <div className="main-title-container"></div>
      <div className="main-body-container">
        <EditCV />
        <Preview />
      </div>
    </div>
  );
}

export default App;
