import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";

const items = ["Apple", "Banana", "Cherry", "Strawberry", "Orange"];

function App() {
  const handleSelectItem = (item: string) => {
    console.error(`Selected item: ${item}`);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        <h1>Components</h1>
        <br />
        <ListGroup
          items={items}
          heading="Fruits"
          onSelectItem={handleSelectItem}
        ></ListGroup>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <b>Warning!</b> There is an incoming alert box.
          </Alert>
        )}

        <Button
          color="primary"
          size="lg"
          onClick={() => setAlertVisibility(true)}
        >
          Show Alert
        </Button>
      </div>
    </>
  );
}

export default App;
