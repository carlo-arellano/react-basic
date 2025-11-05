import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";

const items = ["Apple", "Banana", "Cherry", "Strawberry", "Orange"];

function App() {
  const handleSelectItem = (item: string) => {
    console.error(`Selected item: ${item}`);
  };

  return (
    <>
      <div>
        <h1>Components</h1>
        <br />
        {/* <ListGroup
          items={items}
          heading="Fruits"
          onSelectItem={handleSelectItem}
        ></ListGroup> */}
        <Alert>
          Hello <b>World</b>!
        </Alert>
        <Button
          color="primary"
          size="lg"
          onClick={() => console.error("Button clicked!")}
        >
          I am cool!
        </Button>
      </div>
    </>
  );
}

export default App;
