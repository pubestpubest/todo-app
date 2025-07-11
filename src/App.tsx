import todoLogo from "./assets/target-svgrepo-com.svg";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <img src={todoLogo} alt="ToDo App" style={{ width: "200px" }} />
        </div>
        <div>
          <h1>Hello World</h1>
          <h2>ToDo App</h2>
          <h3>Implement me</h3>
        </div>
      </div>
    </>
  );
}

export default App;
